<template>

  <Navbar></Navbar>

    <router-view />

  <Footer></Footer>

</template>



<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components : {
    'Navbar':Navbar,
    'Footer': Footer
  }
}
</script>

<style scoped>

.container{
  padding-top: 60px;
}

</style>