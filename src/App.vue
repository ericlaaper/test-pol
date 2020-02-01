<template>
    <v-app ma-0 pa-0>
        <div class="achtergrond">

            <Toolbar/>
            <v-content>
                <router-view/>
            </v-content>
        </div>
    </v-app>
</template>

<script>
    import Toolbar from './components/core/Toolbar'

    export default {
        name: 'App',
        components: {
            Toolbar,

        },
        data() {
            return {
                //
            }
        }
    }
</script>
<style scoped>


    .bb {
        padding-top: 0px;

    }

    .achtergrond {
        padding: 0;
        margin: 0;
        width: 100%;
        min-height: 100vh;
        background-color: whitesmoke;
    }

</style>
