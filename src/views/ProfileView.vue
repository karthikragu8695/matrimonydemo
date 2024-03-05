  <template>
    <div class="px-10">
     <a><span  class="text-h5 lg:ml-20">All Matches</span></a>   
      <div v-if="profile">
      <v-row dense>
        <v-col>
          <v-card color="white" class="mt-5 px-2 shadow-xl py-8" theme="dark">
            <div class="d-flex flex-wrap   justify-space-between ">
              <div class="w-full  items-center md:w-1/3 flex flex-col" >
                  <v-avatar class="  rounded-lg" size="250">
                    <v-img cover v-model:src=profile.img></v-img>
                  </v-avatar>
                  <!-- <v-file-input  v-model="photos" @click="Add" prepend-icon="mdi-camera"  variant="outlined" label="Photo Upload"></v-file-input> -->
                  <!-- <v-file-input id="fileInput" @click="Add" type="file" style="display:none" v-on:change="yourVueMethod()"/>
                  <v-btn id="fileInputButton" onclick="document.getElementById('fileInput').click()">change Image</v-btn> -->
              </div>
              <v-col class="text-left   w-full md:w-1/3 lg:w-2/3 flex flex-col">
                    <v-row><span class="mdi mdi-shield-check text-pink mt-3  ">id verified</span></v-row>
                    <v-row class="font-weight-medium text-h5 mt-4">{{ profile.name }}</v-row>
                    <v-row class="text-gray-300 mt-4">M09872334 | Last seen few hour ago</v-row>
                    <v-row class="text-left ">
                        <v-col cols="1" class="text-left mx-auto "><span class="mdi mdi-account-circle-outline mt-1  text-white p-0.5 rounded bg-pink-500"></span></v-col>
                        <v-col cols="11" class="text-left ">{{ profile.age }} , {{ profile.height }}</v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="1" class="text-left"><span class="mdi  mdi-account-box-multiple text-white p-0.5 rounded bg-pink-500"></span></v-col>
                        <v-col cols="11" class="text-left">{{ profile.Profession }}</v-col>
                    </v-row>
                    <v-row >
                        <v-col cols="1" class="text-left"><span class="mdi mdi mdi-map-marker-radius-outline text-white p-0.5 rounded bg-pink-500"></span></v-col>
                        <v-col cols="11" class="text-left">{{ profile.lives }}</v-col>
                    </v-row>
              </v-col>
              <v-col  class="text-left hidden lg:block   flex justify-space-between ">
                  <v-row >
                      <!-- <v-col cols="1.5" ><span class="mdi mdi-star-outline text-h5"></span></v-col>
                      <v-col cols="3.5" class="mt-1.5 text-gray-500">Shortlist</v-col>
                      <v-col cols="1.5"><span class="mdi mdi-phone  text-h5"></span></v-col>
                      <v-col cols="3.5" class="mt-1.5 text-gray-500">Call</v-col>
                      <v-col cols="2"><span class="mdi mdi-dots-vertical  text-h5"></span></v-col> -->
                      <span class="mdi mdi-star-outline mr-3 text-[16px]"></span>Shortlist<span class="mdi mdi-phone  mx-6"></span>Call<span class="mdi mdi-dots-vertical mx-6 "></span>
                </v-row>
              </v-col>
            </div>
          </v-card>
        </v-col>
      </v-row>

<!--------------------datails---------------------->
<v-card color="white" class="mt-5 lg:px-20 px-7 shadow-xl py-8" theme="dark">
      <h2 class="font-bold text-xl mt-3" >Her Basic Details</h2>
      <v-row no-gutters>
        <v-col lg="8" md="8" sm="12" class="flex">
          <v-col lg="1" ><span  class="mdi mdi-account text-white bg-violet-500 rounded-xl p-1 "> </span></v-col>
          <v-col cols="4" class="text-left font-weight text-[15px]" >Age</v-col>
          <v-col cols="6" class="text-left font-bold ">{{ profile.age }}  Years and 10 months</v-col>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col lg="8" md="8" sm="12" class="flex">
          <v-col lg="1" ><span  class="mdi mdi-weight-lifter text-white bg-violet-500 rounded-xl p-1 "> </span></v-col>
          <v-col cols="4" class="text-left font-weight text-[15px]" >Physique</v-col>
          <v-col cols="6" class="text-left font-bold ">{{ profile.age }},{{ profile.height }}</v-col>
        </v-col>
      </v-row>
      <!-- <v-row no-gutters>
        <v-col lg="8" md="8" sm="12" class="flex">
          <v-col lg="1" ><span  class="mdi mdi-translate-variant text-white bg-violet-500 rounded-xl p-1 "> </span></v-col>
          <v-col cols="4" class="text-left font-weight text-[15px]" >Spoken Languages</v-col>
          <v-col cols="6" class="text-left font-bold ">{{ profile.Languages }}</v-col>
        </v-col>
      </v-row> -->
      <v-row no-gutters>
        <v-col lg="8" md="8" sm="12" class="flex">
          <v-col lg="1" ><span  class="mdi mdi-set-center text-white bg-violet-500 rounded-xl p-1 "> </span></v-col>
          <v-col cols="4" class="text-left font-weight text-[15px]" >Marital Status</v-col>
          <v-col cols="6" class="text-left font-bold ">{{ profile.MaritalStatus }}</v-col>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col lg="8" md="8" sm="12" class="flex">
          <v-col lg="1" ><span  class="mdi mdi-map-marker-radius-outline text-white bg-violet-500 rounded-xl p-1 "> </span></v-col>
          <v-col cols="4" class="text-left font-weight text-[15px]" >Lives In</v-col>
          <v-col cols="6" class="text-left font-bold ">{{ profile.lives }}  </v-col>
        </v-col>
      </v-row>
     
      <h2 class="font-bold text-xl mt-3">Her Religious Details</h2>
      <v-row no-gutters>
        <v-col lg="8" md="8" sm="12" class="flex">
          <v-col lg="1" ><span  class="mdi mdi mdi-ubuntu text-white bg-blue-500 rounded-xl p-1 "> </span></v-col>
          <v-col cols="4" class="text-left font-weight text-[15px]" >Religion</v-col>
          <v-col cols="6" class="text-left font-bold ">{{ profile.Religion }}  </v-col>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col lg="8" md="8" sm="12" class="flex">
          <v-col lg="1" ><span  class="mdi mdi-book-account text-white bg-blue-500 rounded-xl p-1 "> </span></v-col>
          <v-col cols="4" class="text-left font-weight text-[15px]" >Caste</v-col>
          <v-col cols="6" class="text-left font-bold ">{{ profile.caste }}  </v-col>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col lg="8" md="8" sm="12" class="flex">
          <v-col lg="1" ><span  class="mdi mdi-apple-safari text-white bg-blue-500 rounded-xl p-1 "> </span></v-col>
          <v-col cols="4" class="text-left font-weight text-[15px]" >Gothram</v-col>
          <v-col cols="6" class="text-left font-bold ">{{ profile.Nadchathiram }}  </v-col>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col lg="8" md="8" sm="12" class="flex">
          <v-col lg="1" ><span  class="mdi mdi-card-bulleted text-white bg-blue-500 rounded-xl p-1 "> </span></v-col>
          <v-col cols="4" class="text-left font-weight text-[15px]" >Dosham</v-col>
          <v-col cols="6" class="text-left font-bold ">{{ profile.Thosam }}  </v-col>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col lg="8" md="8" sm="12" class="flex">
          <v-col lg="1" ><span  class="mdi mdi-umbraco  text-white bg-blue-500 rounded-xl p-1 "> </span></v-col>
          <v-col cols="4" class="text-left font-weight text-[15px]" >Raasi</v-col>
          <v-col cols="6" class="text-left font-bold ">{{ profile.Rashi }}  </v-col>
        </v-col>
      </v-row>
      

      <h2 class="font-bold text-xl mt-3">Her Professional  Details</h2>
      <v-row no-gutters>
        <v-col lg="8" md="8" sm="12" class="flex">
          <v-col lg="1" ><span  class="mdi mdi-book-education  text-white bg-red-500 rounded-xl p-1 "> </span></v-col>
          <v-col cols="4" class="text-left font-weight text-[15px]" >Education</v-col>
          <v-col cols="6" class="text-left font-bold ">{{ profile.Education }}  </v-col>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col lg="8" md="8" sm="12" class="flex">
          <v-col lg="1" ><span  class="mdi mdi-human-female-dance  text-white bg-red-500 rounded-xl p-1 "> </span></v-col>
          <v-col cols="4" class="text-left font-weight text-[15px]" >Employment</v-col>
          <v-col cols="6" class="text-left font-bold ">{{ profile.Profession }}  </v-col>
        </v-col>
      </v-row>
     
     
      <h2 class="font-bold text-xl mt-3">About Her Family</h2>
      <v-row no-gutters>
        <v-col lg="8" md="8" sm="12" class="flex">
          <v-col lg="1" ><span  class="mdi mdi-account-supervisor   text-white bg-violet-500 rounded-xl p-1 "> </span></v-col>
          <v-col cols="4" class="text-left font-weight text-[15px]" >FatherName</v-col>
          <v-col cols="6" class="text-left font-bold ">{{ profile.FatherName }}  </v-col>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col lg="8" md="8" sm="12" class="flex">
          <v-col lg="1" ><span  class="mdi mdi-account-supervisor  text-white bg-violet-500 rounded-xl p-1 "> </span></v-col>
          <v-col cols="4" class="text-left font-weight text-[15px]" >MotherName</v-col>
          <v-col cols="6" class="text-left font-bold ">{{ profile.MotherName }}  </v-col>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col lg="8" md="8" sm="12" class="flex">
          <v-col lg="1" ><span  class="mdi mdi-account-tie  text-white bg-violet-500 rounded-xl p-1 "> </span></v-col>
          <v-col cols="4" class="text-left font-weight text-[15px]" >Brothers</v-col>
          <v-col cols="6" class="text-left font-bold ">ElderBrothers : {{ profile.ElderBrothers }} , YoungerBrother : {{ profile.YoungerBrother }}  </v-col>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col lg="8" md="8" sm="12" class="flex">
          <v-col lg="1" ><span  class="mdi mdi-account-tie  text-white bg-violet-500 rounded-xl p-1 "> </span></v-col>
          <v-col cols="4" class="text-left font-weight text-[15px]" >Sister</v-col>
          <v-col cols="6" class="text-left font-bold ">ElderSister : {{ profile.ElderSister }}, Youngersister :{{ profile.YoungerSister }} </v-col>
        </v-col>
      </v-row>
    </v-card>

    </div>
  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '../supabase'
let profile =ref(null)
const route = useRoute()


onMounted (async()=>{
let id = route.params.id
let { data: profiles, error } = await supabase
.from('profiles')
.select('*')
.eq('id', id)
profile.value = profiles[0]
profile.value.img = `https://myizzcmzjfnzaldgrqgw.supabase.co/storage/v1/object/public/images/photos/${id}_profilephoto`
console.log(error)
})
</script>