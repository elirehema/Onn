import ProfileAccountComponent from '@/components/Profile_Account/index.vue'

export default {
  name: 'user-profile',
  components: {
    'account-profile':ProfileAccountComponent

  },
  props: [],
  data () {
    return {
      account:[
        {title: 'Account', subtitle: 'View your account',icon: 'mdi-account-box-outline'},
        {title: 'Profile', subtitle: 'Name, picture, delete account etc',icon: 'mdi-account'},
        {title: 'Settings', subtitle: 'Notifications, account, location etc',icon: 'mdi-settings'},
        {title: 'Gallery', subtitle: 'Your Profile Gallery',icon: 'mdi-camera'},
        {title: 'Help', subtitle: 'FAQ account support',icon: 'mdi-help-network'}


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
