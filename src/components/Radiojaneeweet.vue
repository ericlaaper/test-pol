<template>
    <div>
        <v-radio-group
                v-model="interface"
                :rules="[v => !!v || ' U kunt niet verder zonder eerst de vraag te hebben beantwoord']"
                required>
            <v-radio value='ja'>
                <template slot="label">
                    <div class="normaalradio">
                        ja
                    </div>
                </template>
            </v-radio>
            <v-radio value='nee'>
                <template slot="label">
                    <div class="normaalradio">
                        nee
                    </div>
                </template>
            </v-radio>
            <v-radio value='?'>
                <template slot="label">
                    <div class="normaalradio">
                        weet niet / onbekend
                    </div>
                </template>
            </v-radio>
        </v-radio-group>

    </div>
</template>

<script>
    export default {
        name: "Radiojaneeweet",
        props: {
            value: null
        },
        data() {
            return {}
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
        },
    }
</script>

<style scoped>

    .normaalradio {
        color: #607D8B;
    }

    @media (min-width: 200px) {

        p {
            font-size: 0.80em;

        }

        h1 {
            font-size: 0.9em;
            line-height: 1.5;

        }

        h2 {
            font-size: 1.6em;
            line-height: 1.5;

        }

        h3 {
            font-size: 1.4em;
            line-height: 1.5;

        }


    }

    @media (min-width: 768px) {

        p {
            font-size: 1.0em;
            line-height: 1.5;


        }

        h1 {
            font-size: 1.2em;
            line-height: 1.5;

        }


        h2 {
            font-size: 2.0em;
            line-height: 1.5;

        }

        h3 {
            font-size: 1.7em;
            line-height: 1.5;

        }

    }


    @media (min-width: 1200px) {

        p {
            font-size: 1.2em;
            line-height: 1.5;

        }

        h1 {
            font-size: 1.5em;
            line-height: 1.5;


        }

        h2 {
            font-size: 2.3em;
            line-height: 1.5;

        }

        h3 {
            font-size: 2.0em;
            line-height: 1.5;

        }

        .iframe-wrapper {
            position: relative;

            padding-bottom: 56.25%;

            overflow: hidden;
        }

        .iframe-wrapper iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

    }

</style>
