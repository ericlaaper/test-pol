<template>
    <div>
           <v-radio-group
                v-model="joppie"
                :rules="[v => !!v || ' U kunt niet verder zonder eerst de vraag te hebben beantwoord']"
                required>
               <v-radio value='ja' color="info">
                   <template v-slot:label>
                       <div class="warning--text">
                           ja
                       </div>
                   </template>
               </v-radio>
               <v-radio value='nee' color="info">
                   <template v-slot:label>
                       <div class="warning--text">
                           nee
                       </div>
                   </template>
               </v-radio>
        </v-radio-group>

    </div>
</template>

<script>
    export default {
        name: "Radiojanee",
        props: {
            value: null
        },
        data() {
            return {}
        },

        computed: {
            joppie: {
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
