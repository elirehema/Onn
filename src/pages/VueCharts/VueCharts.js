


import nv from 'nvd3';
export default {
  name: 'add-user',
  components: {},
  props: [],
  data() {
    return {
      username: "",
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

    nv.addGraph(function () {
      var chart = nv.models.discreteBarChart()
        .x(function (d) {
          return d.label;
        })
        .y(function (d) {
          return d.value;
        });

      d3.select('#chart svg')
        .datum(chartdatas)
        .call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    })




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
    }

  }
};