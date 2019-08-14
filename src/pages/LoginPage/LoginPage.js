export default {
  name: 'login-page',
  components: {},
  props: [],
  data() {
    return {
      username: "",
      password: ""

    }
  },
  computed: {},
  mounted() {
    if (localStorage.qAccessToken) {
      this.$router.push('/home')
    }
  },
  watch: {
    accessToken(newToken) {
      localStorage.qAccessToken = newToken;
    }
  },
  methods: {
    login: function () {
      let data = {
        username: this.username,
        password: this.password
      };
      this.$store.dispatch('login', data).then(response => {
        if (response != null){
          this.$router.push('/home')
        }
      }, error => {
        console.log(error.message)
      });

    }
  }
}