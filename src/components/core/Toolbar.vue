<template>
    <div>
        <v-app-bar flat app>
            <v-toolbar-title>
                <img
                        src="img/logo.png"
                        width="150"
                />
            </v-toolbar-title>
            <v-spacer/>
            <div v-if="auth" align="end">
                <v-btn text color="red" @click="logout">
                    <span>Log uit</span>
                    <v-icon right>mdi-exit-to-app</v-icon>
                </v-btn>
            </div>
        </v-app-bar>
    </div>

</template>
<script>
    import router from "../../router"

    export default {
        name: "Toolbar.vue",

        data() {
            return {

            }
        },
        computed: {
            auth() {
                return this.$store.getters.isAuthenticated
            }
        },
        methods: {
            logout() {
                let data1 = null;
                // eslint-disable-next-line
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
