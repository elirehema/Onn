export default {
  name: 'home-page',
  components: {},
  props: [],
  data() {
    return {
      items: []
    };
  },
  created: function() {
    this.fetchItems();
  },
  computed: {

  },
  mounted () {

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
}
