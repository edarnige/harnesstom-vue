<template>
  <Carousel></Carousel>
  <div class="container">
    <h1 id="harnesstom">HarnessTom</h1>
    <h2 class="mytext">Harnessing the value of tomato genetic resources for now and the future</h2>
    <h4 class="mytext">Welcome to the HarnessTom gateway, the EU-based public repository of tomato resources </h4>

    <FeaturedTools></FeaturedTools>

    <OtherTools></OtherTools>


  </div>
</template>




<script>
import Carousel from '@/components/Carousel'
import FeaturedTools from '@/components/FeaturedTools'
import OtherTools from "../components/OtherTools";

export default {
  name: 'home',
  components: {
    'FeaturedTools': FeaturedTools,
    'Carousel': Carousel,
    'OtherTools': OtherTools,

},
data: function () {
  return {
  something: null,
  somethingelse: null,
  }
},
methods: {
  },
}
</script>

<style scoped>

#harnesstom{
  color: #8F3527;
  font-weight: bold;
}

.container{
  text-align: center;
}

.row{
  padding-top: 20px;
  padding-bottom: 20px;
}

.mytext{
  color: grey;
}

</style>

