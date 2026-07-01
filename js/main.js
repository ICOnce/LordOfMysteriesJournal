const app = Vue.createApp({
    data() {
        return {
            pageName: '',
            progress: 3,
        }
    },
    methods: {
        getData(){

        },

        GoToPage() {
            const safeName = this.pageName.trim().replaceAll(" ", "_");
            this.$router.push("/page/" + safeName);
        }

    },
    computed: {
        myComputed() {
            return ''
        },
        
    },

    provide() {
        return {
            appState: this,
        }
    }
})

app.use(router);
app.mount("#app");