export default {
  name: 'top-navigation-drawer',
  components: {},
  props: [],
  data() {
    return {
      drawer: false,
      item: 0,
      accToken: '',
      items: [{
          text: 'My Files',
          icon: 'mdi-folder',
          route: 'index'
        },
        {
          text: 'Messages',
          icon: 'mdi-chat',
          route: 'chat'
        },
        {
          text: 'Shared with me',
          icon: 'mdi-account-multiple',
          route: 'index'
        },
        {
          text: 'Charts',
          icon: 'mdi-star',
          route: 'charts'
        },
        {
          text: 'Recent',
          icon: 'mdi-history',
          route: 'index'
        },
        {
          text: 'Offline',
          icon: 'mdi-check-circle',
          route: 'index'
        },
        {
          text: 'Uploads',
          icon: 'mdi-upload',
          route: 'uploads'
        },
        {
          text: 'Backups',
          icon: 'mdi-cloud-upload',
          route: 'index'
        },
      ],
      icons: [{
          icon: 'mdi-facebook',
          url: 'https://web.facebook.com/pelirehema'
        },
        {
          icon: 'mdi-twitter',
          url: 'https://twitter.com/e_paul_'
        },
        {
          icon: 'mdi-google-plus',
          url: 'www.google.com'
        },
        {
          icon: 'mdi-linkedin',
          url: 'https://linkedin.com/in/elirehema-paul-3755b4124/'
        },
        {
          icon: 'mdi-instagram',
          url: 'https://instagram.com'
        }
      ],
      color: 'primary',
      colors: [
        'primary',
        'blue',
        'success',
        'red',
        'teal',
      ],
      right: false,
      miniVariant: false,
      expandOnHover: true,
      background: false,


    };
  },
  created() {},
  computed: {},
  mounted() {
    if (localStorage.qAccessToken) {
      this.accToken = localStorage.qAccessToken;
    }
  },
  methods: {
    nativateToHere(id) {
      this.$router.push('/' + id);
    },
    logout() {
      this.$store.dispatch('logout').then().catch(err => console.log(err.message))
      localStorage.removeItem('qAccessToken');
      localStorage.removeItem('username');
      this.$router.push('/');
    },
    toggle(value) {
      if (`${value}` === 'true') {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    }

  }
}
