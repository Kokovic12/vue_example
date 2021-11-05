<template>
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
