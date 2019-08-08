<template>
    <div>
        <h1>Update Item</h1>
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2"><router-link :to="{ name: 'Home' }" class="btn btn-success">Return to Items</router-link></div>
        </div>

        <form v-on:submit.prevent="updateItem">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Username:</label>
                        <input type="text" class="form-control" v-model="user.username">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>First Name:</label>
                        <input type="text" class="form-control" v-model="user.fname">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Last Name:</label>
                        <input type="text" class="form-control col-md-6" v-model="user.lname">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Image Url:</label>
                        <input type="text" class="form-control col-md-6" v-model="user.image">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>User Phone:</label>
                        <input type="text" class="form-control col-md-6" v-model="user.phone">
                    </div>
                </div>
            </div><div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Email address:</label>
                        <input type="text" class="form-control col-md-6" v-model="user.email">
                    </div>
                </div>
            </div><br />

            <div class="form-group">
                <button class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                user:{}
            }
        },

        created: function(){
            this.getItem();
        },

        methods: {
            getItem()
            {
                let uri = 'http://localhost:8080/api/users/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.user = response.data.data;
        
                });
            },

            updateItem()
            {
                let uri = 'http://localhost:8080/api/users/' + this.$route.params.id;
                this.axios.patch(uri, this.user).then(() => {
                    this.$router.push({name: 'Home'});
                });
            }
        }
    }
</script>