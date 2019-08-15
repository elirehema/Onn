export default {
    name: 'registration-page',
    components: {},
    props: [],
    data() {
        return {
            valid: false,
            username: "",
            password: "",
            email: "",
            password_confirmation: "",
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
            passwordRules:[
                v => !!v || 'Password is required',
                v => v.length > 10 || 'Password must be not less than 10 characters',
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],


        }
    },
    computed: {},
    mounted() {

    },
    methods: {
        register: function () {
            let data = {username: this.username, password: this.password}
            this.$store.dispatch('register', data)
                .then(() => this.$router.push('/'))
                .catch(err => console.log(err.message))
        }
    }
}
