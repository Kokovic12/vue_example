<template>

<nav class="navbar navbar-expand-lg navbar-light bg-warning bg-opacity-25">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Tea<br>room</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"> About project</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tea</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tea selection</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Feedback</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contacts</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Log in to your account</a></li>
            <li><a class="dropdown-item" href="#">Create an account</a></li>
          </ul>
        </li>
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<b-card class="bg-dark bg-opacity-40">
  <b-card-group columns>
    <b-card
      title="Card title that wraps to a new line"
      img-src="https://picsum.photos/400/500/?image=95"
      img-alt="Image"
      img-top
    >
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
    </b-card>
    <b-card header="Quote">
      <blockquote class="blockquote mb-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </b-card>
    <b-card title="Title" img-src="https://picsum.photos/500/350/?image=4" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>
    <b-card bg-variant="primary" text-variant="white">
      <blockquote class="card-blockquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer>
          <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
        </footer>
      </blockquote>
    </b-card>
    <b-card>
      <b-card-title>Title</b-card-title>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>
    <b-card img-src="https://picsum.photos/400/200/?image=30" img-alt="Image" overlay></b-card>
    <b-card img-src="https://picsum.photos/400/200/?image=" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Footer Text</small>
      </template>
    </b-card>
  </b-card-group>
</b-card>


<div class="app">
  <about/>
  <tea/>
  <selection/>
  <feedback/>
  <contacts/>
  <account/>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import About from './components/About.vue'
import Tea from './components/Tea.vue'
import Selection from './components/Selection.vue'
import Feedback from './components/Feedback.vue'
import Contacts from './components/Contacts.vue'
import Account from './components/Account.vue'

export default defineComponent({
  name: 'App',
  components: {
    About, Tea, Selection, Feedback, Contacts, Account
  },
})
</script>

<style lang="scss">
</style>
