
export default {
  name: 'view-user-page',
  components: {},
  props: [],
  data () {
    return {

    };
  },
  created () {
  },
  computed: {
    user () {
      return this.$store.getters.userById(this.$route.params['id']);
    },
   

  },
  mounted () {


  },
  methods: {
    deleteThisUser(uid){
      this.$store.dispatch('deleteUser',uid);
      this.$router.push('/home');
    }

  }
};
