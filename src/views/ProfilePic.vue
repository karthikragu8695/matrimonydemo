<template>
    <div class="px-10">
      <div v-if="profile">
      <v-row dense>
        <v-col>
            <div class="d-flex flex-wrap mt-5 px-2  py-8  justify-space-between ">
              <div class="w-full  items-center mx-auto md:w-1/3 flex flex-col" >
                  <v-avatar class="rounded-2xl border border-black  " size="250">
                    <v-img cover v-model:src=profile.photos></v-img>
                  </v-avatar>
              </div>
            </div>
            <v-file-input  v-model="photos" prepend-icon="mdi-camera"  variant="outlined" label="Photo Upload"></v-file-input>
                  <v-btn @click="update">Update</v-btn>
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
const photos =ref(null)
//  function chooseFiles(){
//         document.getElementById("fileUpload").click()
//     }
onMounted (async()=>{
let id = route.params.id
let { data: profiles, error } = await supabase
.from('profiles')
.select('*')
.eq('id', id)
profile.value = profiles[0]
console.log(error)
})
// const update = async () =>{
//     const { data, error } = await supabase
//       .storage
//       .from('images')
//       .update(`photos/${photos.value}}`, photos.value, {
//         contentType: 'image/png'
//       });
//       console.log(data)
//     if(error) {console.log('error ', error)}
// }
// const update = async (event) =>{
// const images = event.target.photos.value
// const { data, error } = await supabase
//   .storage
//   .from('images')
//   .update('public/avatar1.png', images, {
//     cacheControl: '3600',
//     upsert: true
//   })
//   console.log(data);
//   console.log(error);
// }
const update = async () => {
        let profile = {  
              photos:"https://myizzcmzjfnzaldgrqgw.supabase.co/storage/v1/object/public/images/photos/"+photos.value,
        }
        
        const {data,error}= await supabase.from('profiles').update({
            photos:photos
        })  
            .eq('id', id.value)
            .select('*')
            console.log(photos)
        console.log(error)
        console.log(data);
        await supabase
          .from('profiles')
          .insert([profile])
          .select('*')
          .then((res) => {
            if(!res.error) {
              console.log("login successfull")
            }else{
              console.log('error')
            }
          })
        }
    //     async function updateItems(){
    // const { data } = await supabase
    //   .from('profiles')
    //   .update(
    //     { 
    //         photos:"https://myizzcmzjfnzaldgrqgw.supabase.co/storage/v1/object/public/images/photos/"+photos.value,
    //      })
    //   .eq('id', id.value)
    //   .select()
    //   console.log(photos)
    //   console.log(data);
    // }
</script>