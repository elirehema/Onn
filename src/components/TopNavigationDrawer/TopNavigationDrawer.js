export default {
  name: 'top-navigation-drawer',
  components: {},
  props: [],
  data() {
    return {
      drawer: false,
      item: 0,
      accToken: '',
      flat: true,
      titles:{
        title: 'Room15'
      },
      menu_items: [
        { title: 'Home', location:'index', icon: 'mdi-home'},
        { title: 'Profile', location: 'profile', icon: 'mdi-account-circle'},
        { title: 'Notification\'s', location:'#' ,icon: 'mdi-bell-ring'},
        { title: 'Setting and Privacy Policy', location: '#', icon: 'mdi-settings' },
      ],
      items: [{
          text: 'Inbox',
          icon: 'mdi-inbox',
          route: 'index',
          subtitle: 'Lorem ipsum dolor sit de amet..'
        },
        {
          text: 'Shared with me',
          icon: 'mdi-folder-account',
          route: 'index',
          subtitle: 'Lorem ipsum dolor sit de amet..'
        },
        {
          text: 'Starred',
          icon: 'mdi-star',
          route: 'chat',
          subtitle: 'Lorem ipsum dolor sit de amet ...'
        },
        {
          text: 'Trash',
          icon: 'mdi-delete',
          route: 'index',
          subtitle: 'Lorem ipsum dolor sit de amet ...'
        },
        {
          text: 'Spam',
          icon: 'mdi-alert-octagon',
          route: 'charts',
          subtitle: 'Lorem ipsum dolor sit de amet ...'
        },
        {
          text: 'Draft',
          icon: 'mdi-email-open',
          route: 'index',
          subtitle: 'Lorem ipsum dolor sit de amet ...'
        },
        {
          text: 'Offline',
          icon: 'mdi-check-circle',
          route: 'index',
          subtitle: 'Lorem ipsum dolor sit de amet ...'
        },
        {
          text: 'Uploads',
          icon: 'mdi-upload',
          route: 'uploads',
          subtitle: 'Lorem ipsum dolor sit de amet ...'
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
      folders:[
        {
          text: 'Backups',
          icon: 'mdi-cloud-upload',
          route: '#',
          subtitle: 'Lorem ipsum dolor sit de amet ...'
        },
        {
          text: 'Pine Elemetary',
          icon: 'mdi-cloud-upload',
          route: '#',
          subtitle: 'Lorem ipsum dolor sit de amet ...'
        },
        {
          text: 'Taxes',
          icon: 'mdi-cloud-upload',
          route: '#',
          subtitle: 'Lorem ipsum dolor sit de amet ...'
        },
        {
          text: 'Vacation',
          icon: 'mdi-cloud-upload',
          route: '#',
          subtitle: 'Lorem ipsum dolor sit de amet ...'
        },
        {
          text: 'Mortgage',
          icon: 'mdi-cloud-upload',
          route: '#',
          subtitle: 'Lorem ipsum dolor sit de amet ...'
        },
        {
          text: 'Freelance',
          icon: 'mdi-cloud-upload',
          route: '#',
          subtitle: 'Lorem ipsum dolor sit de amet ...'
        },
      ]


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
      this.$store.dispatch('logout').then().catch(err => console.log(err.message));
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
