<template>
    <div class="mt-3">
    <div><br><br></div>
    <v-slider
            v-model="test1"
            :color="color"
            always-dirty
            min="-100"
            max="100"
            thumb-label="always"
            @change="$emit('update:test1', test1)"
    >
        <template v-slot:append>
            <v-icon color="blue">add_circle_outline</v-icon>
        </template>
        <template v-slot:prepend>
            <v-icon color="error">remove_circle_outline</v-icon>
        </template>

    </v-slider>
        <v-layout row justify-space-between>
            <v-flex xs2>
                <div class="caption light-blue--text">
                    Ik twijfel hier sterk aan
                </div>
            </v-flex>
            <v-flex xs2>

            </v-flex>
            <v-flex xs2>
                <div class="caption light-blue--text">
                    Ik twijfel hier niet aan
                </div>
            </v-flex>
        </v-layout>

    </div>
</template>

<script>
    export default {
        name: "ta-slider",
        props: {
            test1: null
        },
        data() {
            return {

             }
        },

        computed: {
            color() {
                if (this.test1 < 0) return 'red'
                if (this.test1 > 0) return 'blue'
                return 'red'
            },
        },
    }
</script>

<style scoped>

</style>
