<template>
    <div class="px-10">
      <div v-if="profile">
      <v-row dense>
        <v-col>
            <div class="d-flex flex-wrap mt-5 px-2  py-8  justify-space-between ">
              <div class="w-full  items-center mx-auto md:w-1/3 flex flex-col" >
                  <v-avatar class="rounded-2xl border border-black"  size="250">
                    <v-img cover  v-model:src=profile.img></v-img>
                  </v-avatar>
              </div>
            </div>
            <!-- <label for="file">
              <span class="mdi mdi-abacus"></span>
              <input type="file" id="file"  style="display: none" name="image" accept="image/gif,image/jpeg,image/jpg,image/png" multiple="" data-original-title="upload photos">
            </label> -->
            <!-- <span class="mdi mdi-face-man-profile" type="file"></span> -->
              <div  class="mx-auto flex px-20" >
                <v-col cols="12" class="items-center flex mx-auto">
                  <v-file-input  v-model="photos" prepend-icon="mdi-camera"  variant="outlined"></v-file-input>
                  <v-btn @click="update">Update</v-btn>
                </v-col>
              
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
const profile =ref(null)
const route = useRoute()
const id = ref(null)
const photos =ref(null)
onMounted (async()=>{
id.value = route.params.id
let { data: profiles, error } = await supabase
.from('profiles')
.select('*')
.eq('id', id.value)
profile.value = profiles[0]
profile.value.img = `https://myizzcmzjfnzaldgrqgw.supabase.co/storage/v1/object/public/images/photos/${id.value}_profilephoto`
console.log(error)
console.log('id:',id.value)
})
const update = async () =>{
  //let file = photos.value[0].name.split('.')
const {data,error}= await supabase.storage.from('images').upload(`photos/${id.value}_profilephoto`,photos.value[0])  
console.log(data)
console.log(error)
}
// const set = async () =>{
//   const {data,error} = await supabase
//   .from('profiles')
//   .update({
//     photos:`https://myizzcmzjfnzaldgrqgw.supabase.co/storage/v1/object/public/images/photos/${id.value}_profilephoto`
//   })
//   .eq('id',id.value)
//   .select()
//   console.log(photos);
//   console.log(data);
//   console.log(error);
// }
</script>










