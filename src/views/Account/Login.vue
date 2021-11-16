<template>
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
                    <div class="col-md-12"><label class="labels">Email</label><input type="text" class="form-control" placeholder="enter you email" value=""></div>
                </div>
                <div class="row mt 4">
                    <div class="col-md-24"><label class="labels">Password</label><input type="password" class="form-control" placeholder="enter you password" value="" ></div>
                </div>
                <div class="mt-5 text-center">
                    <router-link class="btn btn-primary profile-button" type="submit" to="/cabinet">Log in Profile</router-link>
                </div>
            </div>
        </div>
    </div>
</div>
<router-view/>
</template>

<script lang='ts'>
    
</script>

<style lang="scss">
    
</style>