<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <v-toolbar color="info">
                <v-toolbar-title class="white--text">Noodsituatie</v-toolbar-title>
            </v-toolbar>
            <v-stepper v-model="stap" vertical>
                <v-stepper-step  step="1">
                    <div class="staptekts">
                    Inleiding
                    </div>
                </v-stepper-step>
                <v-stepper-content step="1">
                    <video controls
                           poster="../assets/introfilm.png"
                           class="alignVideo"
                           src="../assets/mod7.mp4"
                           type='video/mp4'>
                    </video>
                    <div class="normaal">
                    <h1>en even een test</h1>
                    </div>
                    <div class="normaal">
                        <p>
                        Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een
                        mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst
                        Een een mooie tekst Een een mooie tekst Een een mooie tekst
                        Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een
                        mooie tekst Een een mooie tekst
                        Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een
                        mooie tekst Een een mooie tekst
                        Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een
                        mooie tekst Een een mooie tekst
                    </p>
                    </div>
                    <knopverder :onClick="verderzonderval"
                    ></knopverder>
                </v-stepper-content>
<!--Stap 2-->
                <v-stepper-step step="2">
                    <div class="staptekts">
                    Uw gevoel
                    </div>
                </v-stepper-step>
                <v-stepper-content step="2">
                    <div class="normaal">
                        Voor uw medewerkers, klanten en leveranciers bent u het boegbeeld van uw onderneming. Als u
                        plotseling wegvalt, kan dit betekenen dat het vertrouwen in de toekomst van de onderneming wordt
                        aangetast.<br>Met als gevolg dat uw belangrijkste stakeholders andere keuzes maken en de
                        bedrijfscontinuïteit in korte tijd onder druk kan komen te staan.
                    </div>
                    <div><br></div>
                    <div class="vraag">
                        <h1>
                        In hoeverre kunt u zich gevoelsmatig in de volgende stelling vinden?
                        </h1>
                    </div>
                    <div class="stelling">
                        <h1>
                        Mijn onderneming blijft gewoon doordraaien als ik plotseling wegval!
                        </h1>
                    </div>
                    <ta-slider :test1.sync="vraag1"></ta-slider>
                    <p>{{vraag1}}</p>
                    <knopverder
                            :onClick="verderzonderval">
                    </knopverder>
                    <knopterug :onClick="terug">
                    </knopterug>
                </v-stepper-content>
<!--Stap 3-->
                <v-stepper-step step="3">
                    <div class="staptekts">
                    Waarnemer
                    </div>
                </v-stepper-step>
                <v-stepper-content step="3">
                    <div class="normaal">
                        In de situatie dat u plotseling niet aanwezig kunt zijn, zal iemand anders uw dagelijkse
                        werkzaamheden moeten overnemen. Binnen de onderneming zal dit ook duidelijk moeten zijn, zodat
                        er geen verwarring ontstaat over de dagelijkse leiding. Iemand die tijdelijk de dagelijkse
                        leiding overneemt, noemt men een waarnemer.
                    </div>
                    <div class="vraag">
                        <h1>
                        Hebt u een waarnemer aangesteld?
                        </h1>
                    </div>
                    <v-form v-model="valid" ref="form" lazy-validation>
                        <v-radio-group v-model="vraag2"
                                       :rules="[v => !!v || ' U kunt niet verder zonder eerst de vraag te hebben beantwoord']"
                                       required>
                            <v-radio value='ja'>
                                <template slot="label">
                                    <standtekst>
                                        ja
                                    </standtekst>
                                </template>
                            </v-radio>
                            <v-radio value='nee'>
                                <template slot="label">
                                    <standtekst>
                                        nee
                                    </standtekst>
                                </template>
                            </v-radio>
                        </v-radio-group>
                        <v-btn color="primary"
                               @click="verdermetval"
                               :disabled="!valid"
                        >Verder
                        </v-btn>
                        <knopterug :onClick="terug">
                        </knopterug>
                    </v-form>
                </v-stepper-content>
<!--Stap 4-->
                <v-stepper-step step="4">
                    <div class="staptekts">
                    Opvolger
                    </div>
                </v-stepper-step>
                <v-stepper-content step="4">
                    <div class="normaal">
                        In de situatie dat u permanent niet meer aanwezig kunt zijn, bijvoorbeeld door zware arbeidsongeschiktheid of overlijden, zal iemand uw rol moeten overnemen. Wij noemen deze persoon uw noodopvolger. Dit hoeft niet dezelfde persoon te zijn als uw waarnemer, maar dat kan natuurlijk wel.<br>Nog meer dan bij de keuze van een waarnemer, spelen de kennis, ervaring en managementvaardigheden een rol bij de keuze van een noodopvolger. Allereerst omdat de noodopvolger in staat zal moeten zijn om uw onderneming veilig door een ontstane crisis zal moeten loodsen, over een langere tijd leiding moeten geven en betrokken zal moeten zijn bij de overdracht of verkoop van uw onderneming. Dit vraagt om persoonlijke vaardigheden zoals managementvaardigheden, stressbestendigheid, persoonlijk overwicht en senioriteit.<br>Belangrijk is dat uw noodopvolger uw onderneming juridisch mag vertegenwoordigen.
                    </div>
                    <div class="vraag">
                        <h1>
                        Hebt u een noodopvolger aangesteld die u permanent kan vervangen?
                        </h1>
                    </div>
                    <v-form v-model="valid1" ref="form1" lazy-validation>
                        <v-radio-group v-model="vraag3"
                                       :rules="[v => !!v || ' U kunt niet verder zonder eerst de vraag te hebben beantwoord']"
                                       required>
                            <v-radio value='ja'>
                                <template slot="label">
                                    <standtekst>
                                        ja
                                    </standtekst>
                                </template>
                            </v-radio>
                            <v-radio value='nee'>
                                <template slot="label">
                                    <standtekst>
                                        nee
                                    </standtekst>
                                </template>
                            </v-radio>
                        </v-radio-group>
                        <v-btn color="primary"
                               @click="verdermetval1"
                               :disabled="!valid1"
                        >Verder
                        </v-btn>
                     <knopterug :onClick="terug">
                        </knopterug>
                    </v-form>
                </v-stepper-content>
<!--Stap 5-->
                <v-stepper-step step="5">
                    <div class="staptekts">
                    Uw gevoel
                    </div>
                </v-stepper-step>
                <v-stepper-content step="5">
                    <div class="normaal">
                        Voor uw medewerkers, klanten en leveranciers bent u het boegbeeld van uw onderneming. Als u
                        plotseling wegvalt, kan dit betekenen dat het vertrouwen in de toekomst van de onderneming wordt
                        aangetast.<br>Met als gevolg dat uw belangrijkste stakeholders andere keuzes maken en de
                        bedrijfscontinuïteit in korte tijd onder druk kan komen te staan.
                    </div>

                    <div><br></div>
                    <div class="vraag">
                        <h1>
                        In hoeverre kunt u zich gevoelsmatig in de volgende stelling vinden?
                        </h1>
                    </div>
                    <div class="stelling">
                        <h1>
                        Mijn nooodopvolger kan soepel mijn werkzaamheden overnemen als ik plotseling wegval!
                        </h1>
                    </div>
                    <ta-slider :test1.sync="vraag4"></ta-slider>
                    <p>{{vraag4}}</p>
                    <knopverder
                            :onClick="verderzonderval">
                    </knopverder>
                    <knopterug :onClick="terug">
                    </knopterug>
                </v-stepper-content>
<!--Stap 6-->


                <v-stepper-step step="6">
                    <div class="staptekts">
                    Verstuur
                    </div>
                </v-stepper-step>
                <v-stepper-content step="6">
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
    import Knopverder from "../components/knopverder";
    import Knopterug from "../components/knopterug";

    export default {
        name: "Module1.vue",
        components: {Knopterug, Knopverder, Stellingtekst, Vraagtekst, Standtekst, TaSlider},
        data() {
            return {
                valid: true,
                valid1: true,
                status: 0,
                stap: 1,
                bpm: 0,
                bpm1: 0,
                vraag1: 0,
                vraag2: null,
                vraag3: null,
                vraag4: 0,
                sex: null,


            };
        },
        methods: {
            verdermetval() {
                if (this.$refs.form.validate()) {
                    this.stap++;

                }
            },
            verdermetval1() {
                if (this.$refs.form1.validate()) {
                    this.stap++;

                }
            },


            verderzonderval() {
                this.stap++

            },

            terug() {
                this.stap--

            },
            stop() {
                this.stap = 0

            },

            verstuur() {
                this.stap = 0

            },

            submit() {
                if (this.$refs.form.validate()) {
                    this.stap++;
                }

            },
            consoleClick() {
                this.stap++

            }
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

    .radiotekst {
        color: red;


    }
.normaal {
    color: #607D8B;
}

.stelling {
    color: #2196F3;
    margin-top: 1em;
}

.vraag {
    color: #C62828;
    margin-top: 1em;
    }
.staptekts{
    color: #2196F3;

}

    @media (min-width:200px) {

        p{
            font-size: 0.80em;

        }
        h1{
            font-size: 0.9em;
            line-height: 1.5;

        }

        h2{
            font-size: 1.6em;
            line-height: 1.5;

        }
        h3{
            font-size: 1.4em;
            line-height: 1.5;

        }



    }

    @media (min-width:768px) {

        p{
            font-size: 1.0em;
            line-height: 1.5;


        }
        h1{
            font-size: 1.2em;
            line-height: 1.5;

        }



        h2{
            font-size: 2.0em;
            line-height: 1.5;

        }
        h3{
            font-size: 1.7em;
            line-height: 1.5;

        }

    }


    @media (min-width:1200px) {

        p{
            font-size: 1.2em;
            line-height: 1.5;

        }
        h1{
            font-size: 1.5em;
            line-height: 1.5;


        }
        h2{
            font-size: 2.3em;
            line-height: 1.5;

        }
        h3{
            font-size: 2.0em;
            line-height: 1.5;

        }



    }


</style>
