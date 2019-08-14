export default {
  name: 'login-page',
  components: {},
  props: [],
  data () {
    return {
      username: "",
      password: ""

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    login:function () {
      let data ={
        username: this.username,
        password: this.password
      };

      this.$store.dispatch('login',data)
      //.then(()=> this.$router.push('/'))
          .catch(err => console.log(err))
    }

  }
}
