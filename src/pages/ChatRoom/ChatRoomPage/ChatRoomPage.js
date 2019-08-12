export default {
  name: 'chat-room-page',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  created: function() {
    this.$store.dispatch('allUsers')

  },
  computed: {
    users(){
      return this.$store.getters.allUsers
    }

  },
  mounted () {

  },
  methods: {
    redirectMe: function(id){
      this.$router.push('/chats/'+id)
    }

  }
}
