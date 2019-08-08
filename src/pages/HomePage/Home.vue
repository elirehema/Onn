<template>
  <div>
    <h1>{{$t('welcomeMsg') }}</h1>
    <md-table v-model="items"  md-sort="name" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Users</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..."  />
        </md-field>
        <md-button class="md-raised"> <router-link :to="{ name: 'CreateUser' }" class="btn btn-primary">Create User</router-link></md-button>
      </md-table-toolbar>
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Username">{{item.username}}</md-table-cell>
        <md-table-cell md-label="FullName" md-sort-by="fullname">{{item.fullname}}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{item.email}}</md-table-cell>
        <md-table-cell md-label="Phone No." >{{item.phone}}</md-table-cell>
        <md-table-cell md-label="Created On" md-sort-by="create_date">{{item.create_date | formatDate}}</md-table-cell>
        <md-table-cell md-label="Actions">

          <md-button class="md-raised"><router-link
                  :to="{name: 'EditUser', params: { id: item._id }}"
          >Edit</router-link></md-button>
        </md-table-cell>
        <md-table-cell>
          <md-button class="md-raised md-accent" v-on:click="deleteItem(item._id)">Delete</md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>
<style lang="scss" scoped>
  small {
    display: block;
  }
</style>


<script>
  export default {
    data() {
      return {
        items: []
      };
    },

    created: function() {
      this.fetchItems();
    },

    methods: {
      fetchItems() {
        let uri = "http://localhost:8080/api/users";
        this.axios.get(uri).then(response => {
          this.items = response.data.data;
        });
      },
      deleteItem(id) {
        let uri = "http://localhost:8080/api/users/" + id;
        this.items.splice(id, 1);
        this.axios.delete(uri);
      }
    }
  };
</script>
