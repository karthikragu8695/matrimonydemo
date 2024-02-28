<template>
  <div  class="flex h-screen bg-indigo-700">
  <div class="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">   
      <header>
        <img class="w-14 mx-auto mb-3" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
      </header>   
      <form @submit.prevent="handleLogin">
      
        <div>
          <label class="block mb-2 text-indigo-500" for="Email">Email</label>
          <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border rounded outline-none focus:bg-gray-300"  v-model="email"  type="Email" name="Email">
        </div>
        <div>
          <label class="block mb-2 text-indigo-500" for="password">Password</label>
          <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border rounded outline-none focus:bg-gray-300" v-model="password" type="password" name="password">
        </div>
        <div class="flex">          
          <v-btn class="w-72 bg-green   mx-auto"
            size="large" type="submit"  :value="loading ? 'Loading' : 'Send magic link'" :disabled="loading">Sign In
          </v-btn>
        </div>       
      </form>  
      <footer class="mt-2 flex">
        <a class="text-indigo-700 mx-auto hover:text-pink-700 text-sm float-left" href="#">Forgot Password?</a>
        <a @click="dialog=true"  class="text-indigo-700  mx-auto hover:text-pink-700 ml-14 text-sm float-left" >sign up</a>
      </footer>   
    </div>
</div>
<v-dialog fullscreen v-model="dialog">
  <div class="flex h-screen bg-indigo-700">
<div class="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">   
    <header>
      <img class="w-14 mx-auto mb-3" src="https://img.icons8.com/fluent/344/year-of-tiger.png" />
    </header>   
    <form @submit.prevent="form2">
      <div>
        <label  class="block mb-2 text-indigo-500" for="username">Username</label>
        <input class="w-full p-2 mb-6 text-indigo-700 border-black rounded border focus:bg-gray-300" type="text" name="username">
      </div>
      <div>
        <label class="block mb-2 text-indigo-500" for="password">Email</label>
        <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border rounded outline-none focus:bg-gray-300" v-model="email"  type="Email" name="Email">
      </div>
      <div>
        <label  class="block mb-2 text-indigo-500" for="password">Password</label>
        <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border rounded outline-none focus:bg-gray-300" v-model="password" type="password" name="password">
      </div>
      <div class="flex">          
        <v-btn class=" mx-auto w-72 bg-green" type="submit" :value="loading ? 'Loading' : 'Send magic link'" :disabled="loading">
        Sign up
      </v-btn>
      </div>       
    </form>  
    <footer class="mt-2 flex" >
      <a class="text-indigo-700 mx-auto hover:text-pink-700 text-sm float-left" href="#">Already account used </a>
      <a @click="dialog=false" class="text-indigo-700 mx-auto hover:text-pink-700 text-sm float-left">sign in</a>
    </footer>   
  </div>
</div>
</v-dialog>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import { supabase } from '../supabase'
const email = ref('')
const password = ref('')
const dialog = ref(false)
const loading = ref(false)
          
const form2 = async () => {
  try {
    loading.value = true
    const { data,error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value
    })
    if (data)  {
      console.log(data);
      await supabase
      .from('admin')
      .insert([
        { uuid: data.user.id},
      ])
      }else{
      loading.value=false
      console.log(error)
    }
  } finally {
    loading.value = false
  }
}
const handleLogin = async () => {
  try {
    loading.value = true
    const { data,error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
    console.log(data)
    if (data )  {
      console.log(data);
      }else{
      loading.value=false
      console.log(error)
    }
  } finally {
    loading.value = false
  }
}
onMounted(async() => {
  let { data: Admin, error } = await supabase
  .from('Admin')
  .select('*')
  .eq('uuid',)
  console.log(Admin);
  console.log(error);
})
</script>
