<template>
    <div>
        <h1>List of Users</h1>
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'CreateUser' }" class="btn btn-primary">Create User</router-link>
            </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <td>User Name</td>
                <td>Item Price</td>
                <td>Phone No.</td>
                <td>Created On</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
            <tr v-for="item in items">
                <td>{{ item.fullname }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.create_date}}</td>
                <td><router-link :to="{name: 'EditUser', params: { id: item._id }}" class="btn btn-primary">Edit</router-link></td>
                <td><button class="btn btn-danger" v-on:click="deleteItem(item._id)">Delete</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                items: []
            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {
            fetchItems()
            {
                let uri = 'http://localhost:8080/api/users';
                this.axios.get(uri).then((response) => {
                    this.items = response.data.data;
                });
            },
            deleteItem(id)
            {
                let uri = 'http://localhost:8080/api/users/'+id;
                this.items.splice(id, 1);
                this.axios.delete(uri);
            }
        }
    }
</script>