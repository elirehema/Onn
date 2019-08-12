import io from 'socket.io-client';
export default {
  name: 'messages-page',
  components: {},
  props: [],
  data () {
    return {
      isConnected: false,
      socketMessage: '',
      user: 'eli',
      message: '',
      socket: io('localhost:8080')
    }
  },
  created: function() {
    this.$store.dispatch('getMessages')

  },

  computed: {
    messages(){
      return this.$store.getters.getMessage
    }


  },
  mounted () {
     this.socket.on('MESSAGE', (data) => {
      this.messages.push(data)
    });

  },
  methods: {
    sendMessage(e) {
      e.preventDefault();
      let data = {
        name: this.user,
        message: this.message
      };

      this.$store.dispatch('sendMessage', data)
          .catch(err => console.log(err.message));

      this.socket.emit('SEND_MESSAGE', data);
      this.message = ''
      this.scroll()
    },
    scroll: function() {
      document.getElementById('cont').scrollTop = document.getElementById('cont').scrollHeight;
    }

  }
}
