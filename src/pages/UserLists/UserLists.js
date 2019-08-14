export default {
  name: 'user-lists',
    components: {},
    props: [],
    data() {
      return {
        fab: false,
        hidden: false,
        tabs: null,
      };
    },
    created: function() {
      this.$store.dispatch('allUsers')

    },

    computed: {
      isLoggedIn : function () {
        return this.$store.getters.isLoggedIn
      },
      items(){
        return this.$store.getters.allUsers
      }

    },
    mounted () {

    },
    methods: {
      fetchItems() {
        let uri = "http://localhost:8080/api/users";
        this.axios.get(uri).then(response => {
          // this.items = response.data.data;
        });
      },
      deleteItem(id) {
        let uri = "http://localhost:8080/api/users/" + id;
        this.items.splice(id, 1);
        this.axios.delete(uri);
      },
      editUser(id){
        this.$router.push('/edituser/'+ id)
      },
      viewUser(id){
        this.$router.push('/user/'+ id)
      },
      new_user(){
        this.$router.push('/adduser')
      },
      logout:function () {
        this.$store.dispatch('logout')
            .then(()=>{
              this.$router.push('/login')
            })
      }
    }
  }
