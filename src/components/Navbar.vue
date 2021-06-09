<template>
<!--  <div>-->
<!--    <nav class="navbar navbar-expand-lg navbar-light bg-light">-->
<!--      <a class="navbar-brand" href="#">-->
<!--        -->
<!--      </a>-->
<!--      <router-link to="/">Home</router-link>-->
<!--    </nav>-->
<!--  </div>-->

  <nav class="navbar navbar-expand-md navbar-light fixed-top">
    <div class="container-fluid">

      <a class="navbar-brand" href="#">
        <img src="@/assets/images/harnesstom_logo.jpg" alt="" width="90">
      </a>
      <div id="description">Tomato Genetic Resources</div>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">

        <ul class="navbar-nav me-auto mb-2 mb-md-0">

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/about" tabindex="-1" aria-disabled="true">About</a>
          </li>


          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Links
            </a>
            <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>



          <li class="nav-item">
            <a class="nav-link" href="/submit">Submit</a>
          </li>
        </ul>

        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-danger" type="submit">Search</button>
        </form>

      </div>

    </div>
  </nav>

</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>

.navbar-light{
  background-color: #E8E5DD;
}

#description{
  color: #8F3527;
  margin-right: 20px;
}
.nav-item{
  margin: 10px;

}
</style>