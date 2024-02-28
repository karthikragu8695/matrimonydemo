<template>
  <v-app>
    <hello-world v-if="!login"></hello-world>
    <layout-view v-else></layout-view>
  </v-app>
</template>
<script>
import HelloWorld  from './components/HelloWorld.vue'
import LayoutView from './views/LayoutView.vue';
import { supabase } from './supabase'
export default {
  name: 'App',
  data(){
    return{
      login:false
    }
  },
  components:{
    HelloWorld,
    LayoutView
  },
  mounted(){
    supabase.auth.onAuthStateChange((event) => {
      if (event == 'SIGNED_IN' ) {
          supabase.auth.getUser()
          .then((dat) => {
            console.log(dat);
            supabase
            .from('admin')
            .select("*")
            .eq('uuid', dat.data.user.id)
            .then((d) => {
              console.log(d);
              if(d.data.length > 0) {
                this.login = true
              } else {
                this.login = false
                supabase.auth.signOut()
              }
            })
          })
      }
      if (event == 'SIGNED_OUT') {
        this.login = false
      }
    })
  },
}
</script>
