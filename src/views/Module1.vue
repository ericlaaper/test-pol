<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <v-toolbar color="info">
                <v-toolbar-title class="white--text">Noodsituatie</v-toolbar-title>
            </v-toolbar>
            <v-stepper v-model="stap" vertical>
                <v-stepper-step step="1">
                    Inleiding
                </v-stepper-step>

                <v-stepper-content step="1">
                    <video controls
                           poster="../assets/introfilm.png"
                           class="alignVideo"
                           src="../assets/mod7.mp4"
                           type='video/mp4'>
                    </video>

                    <standtekst>
                        Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een
                        mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst
                        Een een mooie tekst Een een mooie tekst Een een mooie tekst
                        Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een
                        mooie tekst Een een mooie tekst
                        Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een
                        mooie tekst Een een mooie tekst
                        Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een
                        mooie tekst Een een mooie tekst
                    </standtekst>
                    <v-btn color="primary" @click="stap = 2">Continue</v-btn>
                    <v-btn flat>Cancel</v-btn>
                </v-stepper-content>


                <v-stepper-step step="2">Stelling 1</v-stepper-step>

                <v-stepper-content step="2">
                    <standtekst>
                        Voor uw medewerkers, klanten en leveranciers bent u het boegbeeld van uw onderneming. Als u  plotseling wegvalt, kan dit betekenen dat het vertrouwen in de toekomst van de onderneming wordt
                        aangetast.<br>Met als gevolg dat uw belangrijkste stakeholders andere keuzes maken en de bedrijfscontinuïteit in korte tijd onder druk kan komen te staan.
                    </standtekst>
                   <div><br></div>
                    <vraagtekst>
                        In hoeverre kunt u zich gevoelsmatig in de volgende stelling vinden?
                    </vraagtekst>
                    <stellingtekst>
                        Mijn onderneming blijft gewoon doordraaien als ik plotseling wegval!
                    </stellingtekst>
                    <ta-slider :test1.sync="vraag1"></ta-slider>
                    <p>{{vraag1}}</p>
                    <v-btn color="primary" @click="stap = 3">Continue</v-btn>
                    <v-btn flat>Cancel</v-btn>
                </v-stepper-content>
                <v-stepper-step step="3">Stelling 2</v-stepper-step>
                <v-stepper-content step="3">
                    <Stellingtekst>
                        en nog een stelling
                    </Stellingtekst>
                    <ta-slider :test1.sync="vraag2"></ta-slider>
                    <p>{{vraag2}}</p>

                    <v-btn color="primary" @click="stap = 4">Continue</v-btn>
                    <v-btn flat>Cancel</v-btn>
                </v-stepper-content>
                <v-stepper-step step="4">Vraag</v-stepper-step>
                <v-stepper-content step="4">

                    <v-form v-model="valid" ref="form" lazy-validation>
                    <v-radio-group v-model="sex" :rules="[v => !!v || 'Item is required']" required>
                        <v-radio label="Man" value='m'></v-radio>
                        <v-radio label="Woman" value='f'></v-radio>
                    </v-radio-group>
                        <v-btn
                                @click="submit"
                                :disabled="!valid"
                        >
                            submit
                        </v-btn>
                        <v-btn @click="clear">clear</v-btn>
                    </v-form>

                </v-stepper-content>
                <v-stepper-step step="5">Verstuur</v-stepper-step>
                <v-stepper-content step="5">
                </v-stepper-content>
            </v-stepper>


        </v-card>
    </v-flex>
</template>

<script>

    import TaSlider from "../components/slider/ta-slider";
    import Standtekst from "../components/standtekst";
    import Vraagtekst from "../components/vraagtekst";
    import Stellingtekst from "../components/stellingtekst";

    export default {
        name: "Module1.vue",
        components: {Stellingtekst, Vraagtekst, Standtekst, TaSlider},
        data() {
            return {
                status: 0,
                stap: 1,
                bpm: 0,
                bpm1: 0,
                vraag1: 0,
                vraag2: 0,
                sex: null,


            };
        },
        methods: {
            submit() {
                if (this.$refs.form.validate()) {
                    this.stap = 5;
                }

            },
        }
    }
</script>

<style scoped>
    .alignVideo {
        width: 100%;
        height: auto;
    }

    .padje {

        margin-left: 0px;
        margin-right: 0px;
    }


</style>
