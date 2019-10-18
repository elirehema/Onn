export default {
  name: 'add-user',
  components: {},
  props: [],
  data() {
    return {
      username: "",
      chartdatas: [{
        key: "ExampleData",
        values: [{
            "label": "This",
            "value": 10
          },
          {
            "label": "Tutorial",
            "value": 20
          },
          {
            "label": "Worked",
            "value": 30
          },
        ]
      }]


    };

  },
  computed: {

  },
  mounted() {

  },
  methods: {
    addthisUser: function () {
      let data = {
        username: this.username,
      };
      this.$store.dispatch('addUser', data)
        .then(() => this.$router.push('/home'))
        .catch(err => console.log(err.message));
    }

  }
};