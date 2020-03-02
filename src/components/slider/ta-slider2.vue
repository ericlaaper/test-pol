<template>
    <div class="mt-3">
        <div><br><br></div>
        <v-slider
                prop="value"
                v-model="joho"
                :value="value"
                :color="color"
                always-dirty
                min="-100"
                max="100"
                thumb-label="always"

        >
            <template v-slot:append>
                <v-icon color="blue">mdi-plus-circle-outline</v-icon>
            </template>
            <template v-slot:prepend>
                <v-icon color="error">mdi-minus-circle-outline</v-icon>
            </template>

        </v-slider>
        <v-row class="mt-0 mb-2">
            <v-col :cols="4">
                <div class="caption info--text text-left">
                    Ik twijfel hier sterk aan
                </div>
            </v-col>
            <v-col :cols="4"></v-col>
            <v-col :cols="4">
                <div class="caption info--text text-right">
                    Ik twijfel hier niet aan
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "ta-slider2",
        props: {
            value: null
        },
        data() {
            return {}
        },

        computed: {
            joho: {
                get() {
                    return this.value
                },
                set(val) {
                    this.$emit('input', val)
                }
            },


            color() {
                if (this.value < 0) return 'red';
                if (this.value > 0) return 'blue';
                return 'red'
            },
        },
    }
</script>

<style scoped>

</style>
