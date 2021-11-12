<template>
<form action="#">
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
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value=""></div>
                    <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname"></div>
                    <div class="col-md-6"><label class="labels">User name</label><input type="text" class="form-control" value="" placeholder="user name"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter you phone number" value=""></div>
                    <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder="enter you address" value=""></div>
                    <div class="col-md-12"><label class="labels">Email</label><input type="text" class="form-control" placeholder="enter you email" value=""></div>
                </div>
                <div class="row mt 4">
                    <div class="col-md-24"><label class="labels">Password</label><input type="password" class="form-control" placeholder="enter you password" value="" ></div>
                </div>
                <div class="mt-5 text-center">
                    <router-link class="btn btn-primary profile-button" type="submit" to="/cabinet">Sign up</router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</form>
</template>

<style lang="scss">   
</style>