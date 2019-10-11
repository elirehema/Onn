import ProfileComponent from '@/components/pProfile/index.vue';
import AccountComponent from '@/components/pAccount/index.vue';
import SettingsComponent from '@/components/pSettings/index.vue';
import GalleryComponent from '@/components/pGallery/index.vue';
import HelpComponent from '@/components/pHelp/index.vue';

export default {
  name: 'user-profile',
  components: {
    'acc-profile':ProfileComponent,
    'acc-account':AccountComponent,
    'acc-settings':SettingsComponent,
    'acc-gallery':GalleryComponent,
    'acc-help':HelpComponent,

  },
  props: [],
  data () {
    return {
      account:[
        {title: 'Profile', subtitle: 'Name, picture, delete account etc',icon: 'mdi-account'},
        {title: 'Account', subtitle: 'View your account',icon: 'mdi-account-box-outline'},
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
