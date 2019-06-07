<template>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-toolbar color="info">
                   <v-toolbar-title class="white--text" >Uw modules</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon class="white--text">
                        <v-icon>refresh</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-list three-line>
                    <v-list-tile v-if="module1"  @click="naarmod1()" v-bind:class="{klaar: !mod1fin}" ma-0 pa-0>
                        <v-list-tile-action>
                            <v-icon color="indigo">people</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                        <v-list-tile-title>
                            Familieoverleg
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                            Een een mooie tekst   Een een mooie tekst   Een een mooie tekst   Een een mooie tekst   Een een mooie tekst   Een een mooie tekst

                        </v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>


                <v-divider></v-divider>
                    <v-list-tile  v-if="module2" @click="">
                        <v-list-tile-action>
                            <v-icon color="indigo">people</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                Familieoverleg
                            </v-list-tile-title>
                            <v-list-tile-sub-title>
                                Een een mooie tekst   Een een mooie tekst   Een een mooie tekst   Een een mooie tekst   Een een mooie tekst   Een een mooie tekst

                            </v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <v-list-tile  v-if="module2" @click="">
                        <v-list-tile-action>
                            <v-icon color="indigo">people</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                Familieoverleg
                            </v-list-tile-title>
                            <v-list-tile-sub-title>
                                Een een mooie tekst   Een een mooie tekst   Een een mooie tekst   Een een mooie tekst   Een een mooie tekst   Een een mooie tekst

                            </v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>

            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import router from "../router"

    export default {
        name: "Modules.vue",
        data(){
            return {
                module1: true,
                module2: true,
                mod1fin: false,
                mod2fin: true
            }
        },
        methods: {
            naarmod1() {
                router.push({name: "Module1"})

            }
        }
    }
</script>

<style scoped>
    .klaar {
        background-color: green;

    }
</style>
