
// in full builds helpers are exposed as Vuex.mapState
import { mapState } from 'vuex';
export default {
  name: 'profile-account',
  components: {},
  props: [],
  data() {
    return {
      id: "",

    };
  },
  created() {
    this.$store.dispatch('currentProfile', localStorage.uuid);
  },
  computed: mapState({
    profile() {
      return this.$store.getters.profileInfo;
    }

  }),
  mounted() {

  },
  methods: {
    update: function () {
      let data = {
        id: localStorage.uuid, username: this.username,
        fname: this.fname, lname: this.lname, address: this.address,
        email: this.email, phone: this.phone, country: this.country,
        image: this.image, city: this.city, postal: this.postal
      };

      this.$store.dispatch('updateprofile', data);
    }

  }
};
