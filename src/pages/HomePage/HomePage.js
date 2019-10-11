import * as d3 from 'd3';
const data = [99, 71, 78, 25, 36, 92];
export default {
  name: 'home-page',
  components: {},
  props: [],
  data() {
    return {
      fab: false,
      hidden: false,
      tabs: null,
      headers: [
           {
             sortable: false,
             text: 'Username',
             value: 'username'
           },
           {
             sortable: false,
             text: 'FullName',
             value: 'fullname'
           },
           {
             sortable: false,
             text: 'Phone',
             value: 'phone'
           },
           {
             sortable: false,
             text: 'Email',
             value: 'email'
           },
           {
             sortable: false,
             text: 'Created On',
             value: 'create_date',
             align: 'right'
           },
           {
             sortable: false,
             text: 'Actions',
             value: 'note',
             align: 'right'
           }
         ],
    };
  },
  created: function() {
      this.$store.dispatch('allUsers')

  },

  computed: {
    isLoggedIn : function () {
      return this.$store.getters.isLoggedIn;
    },
    items(){
      return this.$store.getters.allUsers;
    },
    

  },
  mounted() {
    const svg = d3.select(this.$el)
      .append('svg')
      .attr('width', 500)
      .attr('height', 270)
      .append('g')
      .attr('transform', 'translate(0, 10)');
    const x = d3.scaleLinear().range([0, 430]);
    const y = d3.scaleLinear().range([210, 0]);
    d3.axisLeft().scale(x);
    d3.axisTop().scale(y);
    x.domain(d3.extent(data, (d, i) => i));
    y.domain([0, d3.max(data, d => d)]);
    const createPath = d3.line()
      .x((d, i) => x(i))
      .y(d => y(d));
    svg.append('path').attr('d', createPath(data));
  },

  methods: {
    deleteItem(id) {
      let uri = "http://localhost:8080/api/users/" + id;
      this.items.splice(id, 1);
      this.axios.delete(uri);
    },
    editUser(id){
      this.$router.push('/edituser/'+ id)
    },
    viewUser(id){
      this.$router.push('/user/'+ id)
    },
    new_user(){
      this.$router.push('/adduser')
    },
    logout:function () {
      this.$store.dispatch('logout')
          .then(()=>{
            this.$router.push('/login')
          })
    }
  }
}
