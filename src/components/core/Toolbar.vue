<template>
    <div>
    <v-toolbar flat app>

        <v-toolbar-title class="text-uppercase grey--text">
            <span class="red--text font-weight-light">Trusted </span>
            <span class="blue--text">Accountant</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <div v-if="auth" align="end">
            <v-btn flat color="red" @click="logout">
                <span>Log uit</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </div>
    </v-toolbar>
        <!-- dropdown menu -->


    </div>

</template>
<script>
    import router from "../../router"

    export default {
        name: "Toolbar.vue",

    data() {
        return {
            drawer: false,
            links: [
                { icon: 'dashboard', text: 'Home', route: '/' },
                { icon: 'folder', text: 'QuickScan', route: '/module1' },
                { icon: 'person', text: 'Team', route: '/team' },
                { icon: 'person', text: 'Login', route: '/team' },
                { icon: 'person', text: 'Logout', route: '/team' },
            ],

        }
    },

        computed: {
            auth () {
                return this.$store.getters.isAuthenticated
            }
        },

        methods: {
            logout() {
                let data1 = null;
                console.log("logout");
                localStorage.removeItem('token');
                localStorage.removeItem('email');
                localStorage.removeItem('wachtwoord');
                this.$store.commit("change", data1);
                router.replace('login')
            }
        }
    }
</script>
