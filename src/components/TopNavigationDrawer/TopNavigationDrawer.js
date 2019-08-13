export default {
  name: 'top-navigation-drawer',
  components: {},
  props: [],
  data () {
    return {
      drawer: false,
      item: 0,
      items: [
        { text: 'My Files', icon: 'mdi-folder',route: 'home' },
        { text: 'Messages', icon: 'mdi-chat',route: 'chat' },
        { text: 'Shared with me', icon: 'mdi-account-multiple',route: 'home' },
        { text: 'Starred', icon: 'mdi-star',route: 'home' },
        { text: 'Recent', icon: 'mdi-history',route: 'home' },
        { text: 'Offline', icon: 'mdi-check-circle',route: 'home' },
        { text: 'Uploads', icon: 'mdi-upload',route: 'home' },
        { text: 'Backups', icon: 'mdi-cloud-upload',route: 'home' },
      ],
      icons: [
        {icon: 'mdi-facebook',url: 'https://web.facebook.com/pelirehema'},
        {icon: 'mdi-twitter', url: 'https://twitter.com/e_paul_'},
        {icon: 'mdi-google-plus',url: 'www.google.com'},
        {icon: 'mdi-linkedin',url: 'https://linkedin.com/in/elirehema-paul-3755b4124/'},
        {icon: 'mdi-instagram',url: 'https://instagram.com'}
      ],
      goDark: true,
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

    }
  },
  created() {
    this.$vuetify.theme.dark = '#3f51b5'
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    nativateToHere(id){
      this.$router.push('/'+ id)
    }

  }
}
