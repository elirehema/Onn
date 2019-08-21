export default {
  name: 'user-profile',
  components: {},
  props: [],
  data () {
    return {
      account:[
        {title: 'Account', subtitle: 'View your account',icon: 'mdi-account'},
        {title: 'Profile', subtitle: 'Name, picture, delete account etc',icon: 'mdi-person'},
        {title: 'Settings', subtitle: 'Notifications, account, location etc',icon: 'mdi-settings'},
        {title: 'Help', subtitle: 'FAQ account support',icon: 'mdi-help'}
      ]

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
