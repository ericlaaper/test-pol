<template>
    <div>
    <v-toolbar flat app>
        <v-toolbar-side-icon @click="drawer = !drawer" class="grey--text"></v-toolbar-side-icon>
        <v-toolbar-title class="text-uppercase grey--text">
            <span class="red--text font-weight-light">Trusted </span>
            <span class="blue--text">Accountant</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

    </v-toolbar>
        <!-- dropdown menu -->
        <v-navigation-drawer app v-model="drawer" class="secondary">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="110">
                        <img class="text-lg-center" src="img/logo.png">
                    </v-avatar>
                    <p class="red--text-center subheading mt-1">
                        <span class="red--text">Trusted </span>
                        <span class="blue--text">Accountant</span></p>
                </v-flex>

            </v-layout>
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-btn flat color="grey">
            <span>Sign Out</span>
            <v-icon right>exit_to_app</v-icon>
        </v-btn>

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

        methods: {
            naarlogin(){
                router.push('login')
            }
        }
    }
</script>
