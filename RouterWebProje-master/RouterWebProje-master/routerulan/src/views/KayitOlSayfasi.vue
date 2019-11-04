<template>
  <div class="home">
    <Header />
    <Menu/>
    <Kayıt/>
    
  </div>
</template>
<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import Kayıt from '@/components/Kayıt.vue'




export default {
  name: 'kayit-ol',
  components: {
    Header,
    Menu,
    Kayıt
  
   
  }
}
</script>
