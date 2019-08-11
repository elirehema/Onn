export default {
  name: 'registration-page',
  components: {},
  props: [],
  data () {
    return {
        username : "",
        password : "",
      email: "",
      password_confirmation: ""


    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    register: function() {
      let data = {username: this.username, password: this.password}
      this.$store.dispatch('register', data)
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err.message))
    }
  }
}
