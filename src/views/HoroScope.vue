<template>
    <div class="px-10">
      <div v-if="profile">
      <v-row dense>
        <v-col>
            <div class="d-flex flex-wrap mt-5 px-2  py-8  justify-space-between ">
              <div class="w-full  items-center mx-auto md:w-1/3 flex flex-col" >
                  <v-avatar class="border border-black"  size="250">
                    <v-img cover  v-model:src=profile.img></v-img>
                  </v-avatar>
              </div>
            </div>
            <span class="mdi mdi-face-man-profile" type="file"></span>
            <div class="flex items-center">
              <div max-width="none" class="mx-auto">
              <v-file-input  v-model="Files" prepend-icon="mdi-camera"  variant="block" ></v-file-input>
              <v-btn @click="update">Update</v-btn>
              <!-- <v-btn @click="set" class="ml-5">Ok</v-btn> -->
              </div>
            </div>
        </v-col>
      </v-row>
    </div> 
  </div>
</template> 
<script setup>
import { ref,onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '../supabase'
let profile =ref(null)
const route = useRoute()
const id = ref(null)
const Files =ref(null)
onMounted (async()=>{
id.value = route.params.id
let { data: profiles, error } = await supabase
.from('profiles')
.select('*')
.eq('id', id.value)
console.log(profiles);
profile.value = profiles[0]
profile.value.img = `https://myizzcmzjfnzaldgrqgw.supabase.co/storage/v1/object/public/Files/Files/${id.value}_horoscope`
console.log(error)
// console.log(id)
// console.log(profile.value)
})
const update = async () =>{
const {error}= await supabase.storage.from('Files').upload(`Files/${id.value}_horoscope`,Files.value[0])  
console.log(error)
}
// const set = async () =>{
//   const {data,error} = await supabase
//   .from('profiles')
//   .update({
//     Files:`https://myizzcmzjfnzaldgrqgw.supabase.co/storage/v1/object/public/Files/Files/${Files.value[0].name}`
//   })
//   .eq('id',id.value)
//   .select()
//   console.log(Files);
//   console.log(data);
//   console.log(error);
// }
</script>



























