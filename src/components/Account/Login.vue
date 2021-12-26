<template>
<form @submit.prevent="onSubmit">
    <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
            </div>
                <div class="row mt-3">
                    <div class="col-md-12">
                        <label class="labels">Username</label>
                        <input v-model="form.username" type="text" class="form-control" placeholder="enter you email" required>
                    </div>
                </div>
                <div class="row mt 4">
                    <div class="col-md-24">
                        <label class="labels">Password</label>
                        <input v-model="form.password" type="password" class="form-control" placeholder="enter you password" required>
                    </div>
                </div>
                <div class="mt-5 text-center">
                    <div class="text-danger">{{userStore.state.error}}</div>
                    <button type="submit" class="btn btn-primary profile-button">Log in Profile</button>
                </div>
            </div>
        </div>
    </div>
</div>
</form>
<router-view/>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import Products from '../Administration/Products.vue'
import userStore from '@/store/index'


export default defineComponent({
  setup() {
    const router = useRouter()
    const form = {
      username: '',
      password: ''
    }

    const onSubmit = async () => {
      const isSuccess = await userStore.dispatch('login', form)
      form.username = ''
      form.password = ''
      if (isSuccess) {
        router.push('/cabinet')
        router.addRoute(  {
          path:'/products',
          name: 'Products',
          component: Products
        },
        )
      }
    }

    return { form, userStore ,onSubmit }
  },
})
</script>

<style lang="scss">

</style>
