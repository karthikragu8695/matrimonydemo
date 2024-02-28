<template>
      <v-app-bar :elevation="10">
        <label for="menu-toggle"  class="cursor-pointer md:hidden ">
          <v-app-bar-nav-icon  @click="draw=!draw"></v-app-bar-nav-icon>
        </label>
          <v-app-bar-title> <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSyvLdlSnwfyHe7Xoz4rNZcHdYJKlKnxUUkxMM7J92wSC8PCoT8IuiVgf3Qp5ykBFrBUg&usqp=CAU" class="w-20"></v-img> </v-app-bar-title>
            <div class="text-4xl lg:mr-32  hidden lg:block">
              <!-- <v-btn value="recent" to="/" class="px-5   ">
                  <v-icon >mdi-home</v-icon>
                  <span to="/"> Home</span>
              </v-btn> -->
              <!-- <v-btn value="recent" to="/profile"  class=" text-pink active px-5 hover:text-pink-500">
                  <v-icon>mdi-home</v-icon>
                  <span to="/profile">Home</span>
              </v-btn> -->
              <!-- <v-btn value="recent"  to="/profile" class="px-5 hover:text-pink-500">
                  <v-icon>mdi-account</v-icon>
                  <span >Add Profile</span>
              </v-btn>
              <v-btn value="recent"  class="px-5  hover:text-pink-500 ">
                  <v-icon>mdi-mail</v-icon>
                  <span >Mailbox</span>
              </v-btn>
              <v-btn value="recent"  class="px-5 hover:text-pink-500">
                  <v-icon>mdi-wrench</v-icon>
                  <span>Chat</span>
              </v-btn>
              <v-btn value="recent"  class="px-5 hover:text-pink-500">
                  <span class="mdi mdi mdi-bell text-h6"></span>
                  <span>Notification</span>
              </v-btn> -->
            </div>
            <div  @click="signOut" class=" bg-pink mx-2  rounded hidden lg:block">
            <v-btn>Logout</v-btn>
            </div>
            <!-- <div class=" hidden  lg:block">
              <div class="flex">
                <div>
                  <v-img src="https://static.vecteezy.com/system/resources/previews/016/774/644/non_2x/3d-user-icon-on-transparent-background-free-png.png" class="w-10"></v-img> 
                </div>
                <div>
                <v-btn @click="signOut"><span  class="mdi mdi-chevron-down"></span></v-btn>
                </div>
              </div>
            </div> -->
         
            </v-app-bar>
    <v-navigation-drawer v-model="draw" >
      <v-divider></v-divider>
      <v-list-item link to="/Profile" title="Add Profile"></v-list-item>
      <v-list-item @click="signOut">Logout</v-list-item>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'

const draw = ref (false)
const signOut = async () => {
    await supabase.auth.signOut()
}

</script>