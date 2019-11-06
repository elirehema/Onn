export default {
  name: 'p-settings',
  components: {},
  props: [],
  data () {
    return {
      alignTop: false,
      avatar: false,
      dense: false,
      fillDot: false,
      hideDot: false,
      icon: false,
      iconColor: false,
      left: false,
      reverse: false,
      right: false,
      small: true,
      edit_icon: 'mdi-account-edit-outline',
      lorem_ipsum: " Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      experiences:[
        {icon :'mdi-laravel', title: "Laravel Developer", description: "", color: "green",year: "1960-61"},
        {icon :'mdi-language-java', title: "Java Developer", description: "",color: "green",year: "1961-63"},
        {icon :'mdi-vuejs', title: "VueJs Developer", description: "",color: "green",year: "1964-67"},
        {icon :'mdi-vuetify', title: "Vuetify Developer", description: "",color: "green",year: "1970-92"},
        {icon :'mdi-react', title: "React Developer", description: "",color: "green",year: "1994-2003"},
        {icon :'mdi-angular', title: "Angular Developer", description: "",color: "green",year: "2003-04"},
        {icon :'mdi-angularjs', title: "AngularJs Developer", description: "",color: "green",year: "2004-08"},
        {icon :'mdi-language-ruby-on-rails', title: "Ruby On Rails Developer", description: "",color: "green",year: "2008-09"},
        {icon :'mdi-language-python', title: "Python Developer", description: "",color: "green",year: "2009-Present"},
     
      ],
      


    };
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
};
