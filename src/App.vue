<template>
    <v-app ma-0 pa-0>
        <v-parallax

                src="img/wereldbol.jpg"
                height="1350"

        >

            <Toolbar/>
            <v-content>
                <router-view/>
            </v-content>
        </v-parallax>
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

</style>
