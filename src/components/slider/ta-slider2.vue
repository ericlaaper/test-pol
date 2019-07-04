<template>
    <div class="mt-3">
        <div><br><br></div>
        <v-slider
                prop="value"
                v-model="interface"
                :value="value"
                :color="color"
                always-dirty
                min="-100"
                max="100"
                thumb-label="always"

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
        name: "ta-slider2",
        props: {
            value: null
        },
        data() {
            return {

            }
        },

        computed: {
            interface: {
                get() {
                    return this.value
                },
                set(val) {
                    this.$emit('input', val)
                }
            },


            color() {
                if (this.value < 0) return 'red'
                if (this.value > 0) return 'blue'
                return 'red'
            },
        },
    }
</script>

<style scoped>

</style>
