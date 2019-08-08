// CreateUser.vue

<template>
  <div>
    <h1>Create User</h1>
    <div class="row">
      <div class="col-md-10"></div>
      <div class="col-md-2">
        <router-link :to="{ name: 'Home' }" class="btn btn-success">Return to Items</router-link>
      </div>
    </div>
    <form v-on:submit.prevent="addItem">
    <md-field>
        <label>Username</label>
        <md-input v-model="user.username"></md-input>
    </md-field>
       <md-field>
      <label>First Name</label>
      <md-input v-model="user.fname"></md-input>
      </md-field>
    <md-field>
      <label>Last Name</label>
      <md-input v-model="user.lname"></md-input>
    </md-field>

     <md-field>
      <label>Image Url</label>
      <md-input v-model="user.image"></md-input>
    </md-field>
     <md-field>
      <label>Phone Number</label>
      <md-input v-model="user.phone"></md-input>
    </md-field>
     <md-field>
      <label>Email Address</label>
      <md-input v-model="user.email"></md-input>
    </md-field>

      <div class="form-group">
        <button class="btn btn-primary">Add User</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    addItem() {
      let uri = "http://localhost:8080/api/users/";
      this.axios.post(uri, this.user).then(response => {
        console.log(response.status);
        this.$router.push({ name: "Home" });
      });
    }
  }
};
</script>