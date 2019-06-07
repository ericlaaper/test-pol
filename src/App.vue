<template>
    <v-app ma-0 pa-0>
        <v-parallax

                height="1350"
                v-image :src="require('./assets/wereldbol.jpg')"

        >

        <Toolbar></Toolbar>
        <v-content>
            <router-view></router-view>
        </v-content>
        </v-parallax>
    </v-app>
</template>

<script>
    import HelloWorld from './components/HelloWorld'
    import Toolbar from './components/core/Toolbar'

    export default {
        name: 'App',
        components: {
            Toolbar,
            HelloWorld
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
