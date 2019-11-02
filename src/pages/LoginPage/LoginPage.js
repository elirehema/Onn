export default {
  name: 'login-page',
  components: {},
  props: {
    source: String,
  },

  data() {
    return {
      valid: false,
      username: "",
      password: "",
      drawer: null,
      show1: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match'),
      },

    };
  },
  computed: {},
  mounted() {
    if (!this.$store.isAuthenticated) {
      this.$router.push('/home');
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
        email: this.username,
        password: this.password
      };
      this.$store.dispatch('login', data).then(response => {
        if (response != null){
          this.$router.push('/home');
        }
      }, error => {
        console.log(error.message);
      });

    },
    nativateToHere(id) {
      this.$router.push('/' + id);
    },
  }
}
