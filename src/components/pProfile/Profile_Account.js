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
  computed: {
    username: {
      get() {
        return this.$store.state.profile.username;
      },
      set(value)
      {
        this.$store.commit('updateUsername', value);
      }
    },
    fname: {
      get() {
        return this.$store.state.profile.fname;
      }
    },

    lname: {
      get() {
        return this.$store.state.profile.lname;
      }
    },
    phone: {
      get() {
        return this.$store.state.profile.phone;
      }
    },
    image: {
      get() {
        return this.$store.state.profile.image;
      }
    },
    email: {
      get() {
        return this.$store.state.profile.email;
      }
    },
    city: {
      get() {
        return this.$store.state.profile.city;
      }
    },
    country: {
      get() {
        return this.$store.state.profile.country;
      }
    },
    postal: {
      get() {
        return this.$store.state.profile.postal;
      }
    },
    address: {
      get() {
        return this.$store.state.profile.address;
      }
    },



    profile() {
      return this.$store.getters.profileInfo;
    }

  },
  mounted() {

  },
  methods: {
    update: function () {
      let data = {
        id: localStorage.uuid, username: this.username,
        fname: this.fname, lname: this.lname, address: this.address,
        email: this.email, phone: this.phone, country: this.country,
        image: this.image, city: this.city, postal: this.postal
      }

      this.$store.dispatch('updateprofile', data);
    }

  }
}
