<template>
<div class="featured">

    <div class="row">
      <div class="col">
        <div class="card">
          <img src="@/assets/images/Germinate.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Germinate</h5>
            <p class="card-text"> Germinate provides a fully featured open-source plant genetic resources platform. The HarnessTom instance is available here.</p>
          </div>
          <div class="card-body">
            <a href="https://ics.hutton.ac.uk/germinate-demo/#/" target="_blank">
              <button class="btn btn-outline-success">Launch</button>
            </a>
            <button class="btn btn-outline-danger"> Pub</button>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img src="@/assets/images/toolbox.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Analysis and visualization tools</h5>
            <p class="card-text">  See a list of tools below</p>
          </div>
          <div class="card-body">
            <button class="btn btn-outline-success"> Launch</button>
            <button class="btn btn-outline-danger"> Pub</button>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img src="@/assets/images/phenomeone.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">PhenomeOne</h5>
            <p class="card-text"> PhenomeOne breeding software as designed by Phenome Networks The HarnessTom instance is available here.</p>
          </div>
          <div class="card-body">
            <a href="https://harnesstom.phenome-networks.com/"  target="_blank">
              <button class="btn btn-outline-success "> Launch</button>
            </a>
            <button class="btn btn-outline-danger"> Pub</button>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
name: "FeaturedTools"
}
</script>

<style scoped>
.btn{
  margin: 5px;
}

h2,h5,p{
  color: gray;
}

.card{
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  width: 18rem;
  height: 400px;
  background-color: #E8E5DD40;


}

button{
  position:absolute;
  bottom:0;

}
button:first-child{
  left:50px;
}

img{
  height: 140px;
}

.row{
  margin-top: 75px;
  position: center;
}

</style>