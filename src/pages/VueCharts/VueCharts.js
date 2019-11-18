import i18n from '@/plugins/i18n';
export default {
  name: 'add-user',
  components: {},
  props: [],
  data() {
    return {
      username: "",
      languages: [            
        { flag: 'us', language: 'en', title: 'English' },     
             { flag: 'es', language: 'es', title: 'Español' }        ] ,
      chartdatas: [{
        key: "ExampleData",
        values: [{
            "label": "This",
            "value": 10
          },
          {
            "label": "Tutorial",
            "value": 20
          },
          {
            "label": "Worked",
            "value": 30
          },
        ]
      }]


    };

  },
  computed: {

  },
  mounted() {

  },
  methods: {
    addthisUser: function () {
      let data = {
        username: this.username,
      };
      this.$store.dispatch('addUser', data)
        .then(() => this.$router.push('/home'))
        .catch(err => console.log(err.message));
    },
     changeLocale: function(locale) {   
       console.log(locale);  
          i18n.locale = locale;  
        }

  }
};