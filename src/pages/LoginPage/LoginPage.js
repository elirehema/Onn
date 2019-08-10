export default {
  name: 'login-page',
  components: {},
  props: [],
  data () {
    return {
      username: '',
      password: ''

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      let currentObj = this;
      console.log('User clicked' + this.username)
      this.$store.actions.requestLogin('login',{username : this.username, password:this.password});
    }

  }
}
