<template>
  <hr id="topline" class="bg-danger border-2 border-top border-danger">
  <h2>Analysis tools</h2>
  <hr id="bottomline" class="bg-danger border-2 border-top border-danger">

  <div class="tools">

    <div class="container">
    <div class="row">
      <h3>some grouping of similar tools</h3>
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="@/assets/images/tools/jbrowse.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Jbrowse genome browser</p>
            <a href="">
              <button class="btn btn-outline-success launch">Launch</button>
            </a>
            <a href="">
              <button class="btn btn-outline-danger"> Pub</button>
            </a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="">
              <button  class="btn btn-outline-success launch">Launch</button>
            </a>
            <a href="">
              <button class="btn btn-outline-danger"> Pub</button>
            </a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="">
              <button class="btn btn-outline-success launch">Launch</button>
            </a>
            <a href="">
              <button class="btn btn-outline-danger"> Pub</button>
            </a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="">
              <button  class="btn btn-outline-success launch">Launch</button>
            </a>
            <a href="">
              <button class="btn btn-outline-danger"> Pub</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>


    <div class="container">
    <div class="row">
      <h3>some other grouping of similar tools</h3>
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="">
              <button  class="btn btn-outline-success launch">Launch</button>
            </a>
            <a href="">
              <button class="btn btn-outline-danger"> Pub</button>
            </a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="">
              <button  class="btn btn-outline-success launch">Launch</button>
            </a>
            <a href="">
              <button class="btn btn-outline-danger"> Pub</button>
            </a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="">
              <button  class="btn btn-outline-success launch">Launch</button>
            </a>
            <a href="">
              <button class="btn btn-outline-danger"> Pub</button>
            </a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="">
              <button  class="btn btn-outline-success launch">Launch</button>
            </a>
            <a href="">
              <button class="btn btn-outline-danger"> Pub</button>
            </a>
          </div>
        </div>
      </div>
    </div>

      <div class="row">
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="">
                <button  class="btn btn-outline-success launch">Launch</button>
              </a>
              <a href="">
                <button class="btn btn-outline-danger"> Pub</button>
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
name: "OtherTools"
}
</script>

<style scoped>


#topline{
  margin-top: 100px;
}

#bottomline{
  margin-bottom: 100px;
}

.container{
  outline-style: solid;
  outline-color: #8F352740;
  padding: 10px;
  border-radius:.25rem!important;
  margin-top: 50px;
  margin-bottom: 50px;

}
.card{
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  width: 18rem;
  height: 250px;
  background-color: #E8E5DD40;
}

.card:hover{
  transform: scale(1.1);
}

h2{
  font-weight: bold;
  color: #8F3527;
}
h3,p{
  color: gray;
  margin-bottom: 10px;
}

.row{
  padding: 10px;
}

button{
  position:absolute;
  bottom:0;
  margin-bottom: 5px;
}

.launch{
  left: 50px;
}



</style>