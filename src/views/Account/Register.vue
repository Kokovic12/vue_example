<template>
<form @submit.prevent="register">
    <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6">
                      <label for="name">Name</label>
                      <input id="name" v-model="form.name"  type="text" class="form-control" placeholder="enter Name">
                    </div>

                    <div class="col-md-6">
                      <label for="username">Username</label>
                      <input id="username" v-model="form.username" type="text" class="form-control" placeholder="enter Username">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12">
                      <label for="email">Email</label>
                      <input id="email" v-model="form.email" type="email" class="form-control" placeholder="enter you email">
                    </div>
                </div>
                <div class="row mt 4">
                    <div class="col-md-24">
                      <label for="password">Password</label>
                      <input id="password" v-model="form.password" type="password" class="form-control" placeholder="enter you password">
                    </div>
                </div>
                <div class="mt-5 text-center">
                  <button type="submit" class="btn btn-primary profile-button">Register</button>
                </div>
            </div>
        </div>
    </div>
</div>
</form>
  <router-view/>
</template>

<script>
export default  {
  data() {
    return{
      form:{
        name:'',
        username:'',
        email:'',
        password:''  
      }
    }
  },
  methods:{
    register () {
      console.log('submitting form', this.form)
    }
  },
  created () {
    this.$emit('ready')
  }
}
</script>

<style lang="scss">   
</style>