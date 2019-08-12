export default {
  name: 'add-user',
  components: {},
  props: [],
  data () {
    return {
      username: "",
      fname: "",
      lname: "",
      image: "",
      phone: "",
      email: ""

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    addthisUser: function(){
      let data ={
        username: this.username,
        fname: this.fname,
        lname: this.lname,
        phone: this.phone,
        email: this.email,
        image:this.image
      }
      this.$store.dispatch('addUser', data)
          .then(() => this.$router.push('/home'))
          .catch(err => console.log(err.message))
    }

  }
}
