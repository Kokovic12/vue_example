<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-warning bg-opacity-25">
  <div class="container-fluid">
    <router-link to='/' class="navbar-brand">Tea<br>room</router-link>    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/about" class="nav-link active" aria-current="page">About project</router-link>          
        </li>
        <li class="nav-item">  
          <router-link to="/tea" class="nav-link">Tea</router-link>         
        </li>
        <li class="nav-item">
          <router-link to="/selection" class="nav-link">Tea selection</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/feedback" class="nav-link">Feedback</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contacts" class="nav-link">Contacts</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/chat" class="nav-link">Chat</router-link>
        </li>
        <li class="nav-item dropdown">
          <a id="navbarDropdownMenuLink" class="nav-link dropdown-toggle" href="#"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <router-link to="/login" class="dropdown-item">Log in</router-link>
            </li>
            <li>
              <router-link to="/create" class="dropdown-item">Create</router-link>
            </li>
          </ul>
        </li>
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
        <!-- <button class="btn btn-outline-success" @click="$router.push('/chat')" >Search</button>  обвес событием через роутинг, альтернатива тегу  router-link-->

      </form>
    </div>
  </div>
</nav>

  <router-view/>
</template>
<style lang="scss">

</style>
