<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <v-toolbar color="info">
                <v-toolbar-title class="white--text">Noodsituatie</v-toolbar-title>
            </v-toolbar>
            <v-stepper v-model="stap" vertical>
                <v-stepper-step step="1">
                    <div class="staptekts">
                        Welkom
                    </div>

                </v-stepper-step>
                <v-stepper-content step="1">
                    <div class="vraag">
                        <h1>
                        Welkom
                        </h1>
                    </div>

                    <div class="normaal">
                        <p>
                        en nog een kort welkom
                        </p>
                    </div>

                    <knopverder :onClick="verderzonderval"
                    ></knopverder>

                </v-stepper-content>


                <v-stepper-step step="2">
                    <div class="staptekts">
                        Inleiding
                    </div>
                </v-stepper-step>
                <v-stepper-content step="2">
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

                        </p>
                    </div>
                    <knopverder :onClick="verderzonderval"
                    ></knopverder>
                </v-stepper-content>
                <!--Stap 2-->
                <v-stepper-step step="3">
                    <div class="staptekts">
                        Uw gevoel
                    </div>
                </v-stepper-step>
                <v-stepper-content step="3">
                    <div class="normaal">
                        <p>
                        Voor uw medewerkers, klanten en leveranciers bent u het boegbeeld van uw onderneming. Als u
                        plotseling wegvalt, kan dit betekenen dat het vertrouwen in de toekomst van de onderneming wordt
                        aangetast.<br>Met als gevolg dat uw belangrijkste stakeholders andere keuzes maken en de
                        bedrijfscontinuïteit in korte tijd onder druk kan komen te staan.
                        </p>
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

                    <knopverder
                            :onClick="verderzonderval">
                    </knopverder>
                    <knopterug :onClick="terug">
                    </knopterug>
                </v-stepper-content>
                <!--Stap 3-->
                <v-stepper-step step="4">
                    <div class="staptekts">
                        Waarnemer
                    </div>
                </v-stepper-step>
                <v-stepper-content step="4">
                    <div class="normaal">
                        <p>
                        In de situatie dat u plotseling niet aanwezig kunt zijn, zal iemand anders uw dagelijkse
                        werkzaamheden moeten overnemen. Binnen de onderneming zal dit ook duidelijk moeten zijn, zodat
                        er geen verwarring ontstaat over de dagelijkse leiding. Iemand die tijdelijk de dagelijkse
                        leiding overneemt, noemt men een waarnemer.
                        </p>
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
                                    <div class="normaal">
                                        ja
                                    </div>
                                </template>
                            </v-radio>
                            <v-radio value='nee'>
                                <template slot="label">
                                    <div class="normaal">
                                        nee
                                    </div>
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
                <v-stepper-step step="5">
                    <div class="staptekts">
                        Opvolger
                    </div>
                </v-stepper-step>
                <v-stepper-content step="5">
                    <div class="normaal">
                        In de situatie dat u permanent niet meer aanwezig kunt zijn, bijvoorbeeld door zware
                        arbeidsongeschiktheid of overlijden, zal iemand uw rol moeten overnemen. Wij noemen deze persoon
                        uw noodopvolger. Dit hoeft niet dezelfde persoon te zijn als uw waarnemer, maar dat kan
                        natuurlijk wel.<br>Nog meer dan bij de keuze van een waarnemer, spelen de kennis, ervaring en
                        managementvaardigheden een rol bij de keuze van een noodopvolger. Allereerst omdat de
                        noodopvolger in staat zal moeten zijn om uw onderneming veilig door een ontstane crisis zal
                        moeten loodsen, over een langere tijd leiding moeten geven en betrokken zal moeten zijn bij de
                        overdracht of verkoop van uw onderneming. Dit vraagt om persoonlijke vaardigheden zoals
                        managementvaardigheden, stressbestendigheid, persoonlijk overwicht en senioriteit.<br>Belangrijk
                        is dat uw noodopvolger uw onderneming juridisch mag vertegenwoordigen.
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
                                    <div class="normaal">
                                        ja
                                    </div>
                                </template>
                            </v-radio>
                            <v-radio value='nee'>
                                <template slot="label">
                                    <div class="normaal">
                                        nee
                                    </div>
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
                <v-stepper-step step="6">
                    <div class="staptekts">
                        Uw gevoel
                    </div>
                </v-stepper-step>
                <v-stepper-content step="6">
                    <div class="normaal">
                        <p>
                        Voor uw medewerkers, klanten en leveranciers bent u het boegbeeld van uw onderneming. Als u
                        plotseling wegvalt, kan dit betekenen dat het vertrouwen in de toekomst van de onderneming wordt
                        aangetast.<br>Met als gevolg dat uw belangrijkste stakeholders andere keuzes maken en de
                        bedrijfscontinuïteit in korte tijd onder druk kan komen te staan.
                        </p>
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

                    <knopverder
                            :onClick="verderzonderval">
                    </knopverder>
                    <knopterug :onClick="terug">
                    </knopterug>
                </v-stepper-content>
                <!--Stap 6-->
                <v-stepper-step step="7">
                    <div class="staptekts">
                        Vertegenwoordigen
                    </div>
                </v-stepper-step>
                <v-stepper-content step="7">
                    <div class="normaal">
                        <p>
                        Belangrijk is dat uw noodopvolger uw onderneming juridisch mag vertegenwoordigen, denk hierbij
                        aan inschrijving KvK, machtiging bankrekening et cetera.
                        </p>
                    </div>
                    <div class="vraag">
                        <h1>
                            Is uw vertegenwoordiger gemachtigd?
                        </h1>
                    </div>
                    <v-form v-model="valid2" ref="form2" lazy-validation>
                        <v-radio-group v-model="vraag5"
                                       :rules="[v => !!v || ' U kunt niet verder zonder eerst de vraag te hebben beantwoord']"
                                       required>
                            <v-radio value='ja'>
                                <template slot="label">
                                    <div class="normaal">
                                        ja
                                    </div>
                                </template>
                            </v-radio>
                            <v-radio value='nee'>
                                <template slot="label">
                                    <div class="normaal">
                                        nee
                                    </div>
                                </template>
                            </v-radio>
                            <v-radio value='onbekend'>
                                <template slot="label">
                                    <div class="normaal">
                                        weet niet / onbekend
                                    </div>
                                </template>
                            </v-radio>
                        </v-radio-group>
                        <v-btn color="primary"
                               @click="verdermetval2"
                               :disabled="!valid2"
                        >Verder
                        </v-btn>
                        <knopterug :onClick="terug">
                        </knopterug>
                    </v-form>
                </v-stepper-content>
                <!--stap 7-->
                <v-stepper-step step="8">
                    <div class="staptekts">
                        Strategie
                    </div>
                </v-stepper-step>
                <v-stepper-content step="8">
                    <div class="normaal">
                        <p>
                        In de situatie dat u permanent niet meer aanwezig kunt zijn, zal de onderneming uiteindelijk in
                        andere handen overgaan of wellicht zelfs in het uiterste geval haar activiteiten staken. Voor uw
                        noodopvolger en gezin is het van essentieel belang om te weten wat uw wensen zijn als u zelf
                        niet meer betrokken kunt zijn bij uw onderneming. Het gaat daarbij om de strategie van de
                        onderneming zelf en om de strategische keuze met betrekking tot het eigendom over de
                        onderneming.
                        </p>
                    </div>
                    <div class="vraag">
                        <h1>
                            Hebt u een uitgewerkt business plan voor uw onderneming?
                        </h1>
                    </div>
                    <v-form v-model="valid3" ref="form3" lazy-validation>
                        <v-radio-group v-model="vraag6"
                                       :rules="[v => !!v || ' U kunt niet verder zonder eerst de vraag te hebben beantwoord']"
                                       required>
                            <v-radio value='ja'>
                                <template slot="label">
                                    <div class="normaal">
                                        ja
                                    </div>
                                </template>
                            </v-radio>
                            <v-radio value='nee'>
                                <template slot="label">
                                    <div class="normaal">
                                        nee
                                    </div>
                                </template>
                            </v-radio>

                        </v-radio-group>
                        <v-btn color="primary"
                               @click="verdermetval3"
                               :disabled="!valid3"
                        >Verder
                        </v-btn>
                        <knopterug :onClick="terug">
                        </knopterug>
                    </v-form>
                </v-stepper-content>
                <!--stap 8-->
                <v-stepper-step step="9">
                    <div class="staptekts">
                        Toekomst
                    </div>
                </v-stepper-step>
                <v-stepper-content step="9">
                    <div class="normaal">
                        <p>
                        Hier moet nog een tekst
                        </p>
                    </div>
                    <div class="vraag">
                        <h1>
                            Hebt u uw wensen over de toekomst van uw onderneming, bijvoorbeeld overdragen of verkopen,
                            vastgelegd?
                        </h1>
                    </div>
                    <v-form v-model="valid4" ref="form4" lazy-validation>
                        <v-radio-group v-model="vraag7"
                                       :rules="[v => !!v || ' U kunt niet verder zonder eerst de vraag te hebben beantwoord']"
                                       required>
                            <v-radio value='ja'>
                                <template slot="label">
                                    <div class="normaal">
                                        ja
                                    </div>
                                </template>
                            </v-radio>
                            <v-radio value='nee'>
                                <template slot="label">
                                    <div class="normaal">
                                        nee
                                    </div>
                                </template>
                            </v-radio>

                        </v-radio-group>
                        <v-btn color="primary"
                               @click="verdermetval4"
                               :disabled="!valid4"
                        >Verder
                        </v-btn>
                        <knopterug :onClick="terug">
                        </knopterug>
                    </v-form>
                </v-stepper-content>
                <!--stap 9-->

                <v-stepper-step step="10">
                    <div class="staptekts">
                        Zorg voor uw gezin
                    </div>
                </v-stepper-step>
                <v-stepper-content step="10">
                    <div class="normaal">
                        <p>
                        In de situatie dat u permanent niet meer aanwezig kunt zijn, zult u ook uw gezin willen
                        beschermen tegen de gevolgen hiervan. Vanuit financieel oogpunt zult u bijvoorbeeld het verlies
                        aan inkomen voor een belangrijk deel of zelfs volledig willen compenseren. Dat vraagt om een
                        aantal financiële maatregelen, zowel binnen de onderneming als in de privésituatie.<br>Bijvoorbeeld
                        als u een eigen woning hebt gekocht en daarvoor financiering hebt aangetrokken.
                        </p>
                    </div>
                    <div class="vraag">
                        <h1>
                            Mocht u iets overkomen, hebt u dan alles goed geregeld voor uw gezin?
                        </h1>
                    </div>
                    <v-form v-model="valid5" ref="form5" lazy-validation>
                        <v-radio-group v-model="vraag8"
                                       :rules="[v => !!v || ' U kunt niet verder zonder eerst de vraag te hebben beantwoord']"
                                       required>
                            <v-radio value='ja'>
                                <template slot="label">
                                    <div class="normaal">
                                        ja
                                    </div>
                                </template>
                            </v-radio>
                            <v-radio value='nee'>
                                <template slot="label">
                                    <div class="normaal">
                                        nee
                                    </div>
                                </template>
                            </v-radio>
                            <v-radio value='onb'>
                                <template slot="label">
                                    <div class="normaal">
                                        weet niet /onbekend
                                    </div>
                                </template>
                            </v-radio>

                        </v-radio-group>
                        <v-btn color="primary"
                               @click="verdermetval5"
                               :disabled="!valid5"
                        >Verder
                        </v-btn>
                        <knopterug :onClick="terug">
                        </knopterug>
                    </v-form>
                </v-stepper-content>
                <!--stap eind                -->
                <v-stepper-step step="11">
                    <div class="staptekts">
                        Verstuur
                    </div>
                </v-stepper-step>
                <v-stepper-content step="11">
                    <div class="vraag">
                        Einde
                    </div>
                    <div class="normaal">
                        <p>
                        U bent aan het einde gekomen van deze vragenlijst. U kunt u gegeven antwoorden nog aanpassen.
                        Gebruik hiervoor de knoppen terug en verder.<br> Binnen enkele minuten kunt u uw persoonlijke rapportage
                        verwachten in uw mailbox. (Vergeet niet op verstuur te klikken)
                        </p>
                    </div>
<!--                    <div class="stelling">-->
<!--                        Opmerkingen-->
<!--                    </div>-->
<!--                    <div class="normaal">-->
<!--                        Heeft u direct al opmerkingen of vragen hebben naar aanleiding van deze vragenlijst dan kunt u-->
<!--                        deze onderstaand kwijt. <br> <br>-->
<!--                    </div>-->
<!--                    <v-form v-model="valid6" ref="form6" lazy-validation>-->
<!--                        <v-textarea-->
<!--                                label="Opmerking of vraag"-->
<!--                                v-model="opmerking"-->
<!--                                rows="3"-->
<!--                                :rules="[v => v.length <= 150 || 'U hebt maximaal 150 tekens']"-->
<!--                                :counter="150"-->

<!--                        ></v-textarea>-->

                        <div class="normaal">
                            <p>
                            Wij gaan op een zorgvuldige wijze met uw gegevens om. Kijk voor al onze voorwaarden op onze
                            website!<br>
                            www.trustedaccountant.nl/privacy<br>
                                (Vergeet niet op verstuur te klikken)
                            </p>

                        </div>
                        <div>
                            <br>
                            <br>
                        </div>
                        <v-btn color="primary"
                               @click="verdermetval6"
                               :disabled="!valid6"
                        >Verstuur
                        </v-btn>
                        <knopterug :onClick="terug">
                        </knopterug>
                    </v-form>


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
                valid2: true,
                valid3: true,
                valid4: true,
                valid5: true,
                valid6: true,
                status: 0,
                stap: 1,
                bpm: 0,
                bpm1: 0,
                vraag1: 0,
                vraag2: null,
                vraag3: null,
                vraag4: null,
                vraag5: null,
                vraag6: null,
                vraag7: null,
                vraag8: null,
                opmerking: String,
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

            verdermetval2() {
                if (this.$refs.form2.validate()) {
                    this.stap++;

                }
            },
            verdermetval3() {
                if (this.$refs.form3.validate()) {
                    this.stap++;

                }
            },
            verdermetval4() {
                if (this.$refs.form4.validate()) {
                    this.stap++;

                }
            },
            verdermetval5() {
                if (this.$refs.form5.validate()) {
                    this.stap++;

                }
            },
            verdermetval6() {

                    this.stap = 1;


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

    .staptekts {
        color: #2196F3;

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


    }


</style>
