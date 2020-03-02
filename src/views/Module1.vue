<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">

    <v-container xs12 sm6 offset-sm3>
        <v-card>
            <v-toolbar color="info">
                <v-toolbar-title class="white--text">Noodsituatie</v-toolbar-title>
            </v-toolbar>
            <v-stepper v-model="stap" vertical>
                <v-stepper-step step="1">
                    <Staptekst :staptekst="stapkop1"/>
                </v-stepper-step>
                <v-stepper-content step="1">
                    <KopInleiding :kop="stap1kop"/>
                    <TekstInleiding :tekst1="stap1tekst1" :tekst2="stap1tekst2"/>
                    <knopverder :onClick="verderzonderval"/>
                </v-stepper-content>
                <v-stepper-step step="2">
                    <Staptekst :staptekst="stapkop2"/>
                </v-stepper-step>
                <v-stepper-content step="2">
                    <vimeo-player :video-id="388964502" class="embed-container" :options="{'responsive':true}"></vimeo-player>
<!--                    <vue-plyr>-->
<!--                        <div data-plyr-provider="vimeo" data-plyr-embed-id="388964502"></div>-->
<!--                    </vue-plyr>-->
                    <KopInleiding :kop="stap2kop"/>
                    <TekstInleiding :tekst1="stap2tekst1" :tekst2="stap2tekst2"/>
                    <knopverder :onClick="verderzonderval"/>
                </v-stepper-content>
                <!--Stap 2-->
                <v-stepper-step step="3">
                    <Staptekst :staptekst="stapkop3"/>
                </v-stepper-step>
                <v-stepper-content step="3">
                    <TekstInleiding :tekst1="stap3tekst1" :tekst2="stap3tekst2"/>
                    <vraagtekst :vraag="vraagtekst3"/>
                    <stellingtekst :stelling="stellingtekst3"/>
                    <ta-slider2 v-model="vraag1e"/>
                    <knopverder :onClick="verderzonderval"/>
                    <knopterug :onClick="terug"/>
                </v-stepper-content>
                <!--Stap 3-->
                <v-stepper-step step="4">
                    <Staptekst :staptekst="stapkop4"/>
                </v-stepper-step>
                <v-stepper-content step="4">
                    <TekstInleiding :tekst1="stap4tekst1" :tekst2="stap4tekst2"/>
                    <vraagtekst :vraag="vraagtekst4"/>
                    <v-form v-model="valid" ref="form" lazy-validation>
                        <Radiojanee v-model="vraag2e"/>
                        <knopverder :onClick="verdermetval" :disabled="!valid"/>
                        <knopterug :onClick="terug">
                        </knopterug>
                    </v-form>
                </v-stepper-content>
                <!--Stap 4-->
                <v-stepper-step step="5">
                    <Staptekst :staptekst="stapkop5"/>
                </v-stepper-step>
                <v-stepper-content step="5">
                    <TekstInleiding :tekst1="stap5tekst1" :tekst2="stap5tekst2"/>
                    <vraagtekst :vraag="vraagtekst5"/>
                    <v-form v-model="valid1" ref="form1" lazy-validation>
                        <Radiojanee v-model="vraag3e"/>
                        <knopverder :onClick="verdermetval1" :disabled="!valid1"/>
                        <knopterug :onClick="terug"/>
                    </v-form>
                </v-stepper-content>
                <!--Stap 5-->
                <v-stepper-step step="6">
                    <Staptekst :staptekst="stapkop6"/>
                </v-stepper-step>
                <v-stepper-content step="6">
                    <TekstInleiding :tekst1="stap6tekst1" :tekst2="stap6tekst2"/>
                    <vraagtekst :vraag="vraagtekst6"/>
                    <stellingtekst :stelling="stellingtekst6"/>
                    <ta-slider2 v-model="vraag4e"/>
                    <knopverder :onClick="verderzonderval"/>
                    <knopterug :onClick="terug"/>
                </v-stepper-content>
                <!--Stap 6-->
                <v-stepper-step step="7">
                    <Staptekst :staptekst="stapkop7"/>
                </v-stepper-step>
                <v-stepper-content step="7">
                    <TekstInleiding :tekst1="stap7tekst1" :tekst2="stap7tekst2"/>
                    <vraagtekst :vraag="vraagtekst7"/>
                    <v-form v-model="valid2" ref="form2" lazy-validation>
                        <Radiojaneeweet v-model="vraag5e"/>
                        <knopverder :onClick="verdermetval2" :disabled="!valid2"/>
                        <knopterug :onClick="terug"/>
                    </v-form>
                </v-stepper-content>
                <!--stap 7-->
                <v-stepper-step step="8">
                    <Staptekst :staptekst="stapkop8"/>
                </v-stepper-step>
                <v-stepper-content step="8">
                    <TekstInleiding :tekst1="stap8tekst1" :tekst2="stap8tekst2"/>
                    <vraagtekst :vraag="vraagtekst8"/>
                    <v-form v-model="valid3" ref="form3" lazy-validation>
                        <Radiojanee v-model="vraag6e"/>
                        <knopverder :onClick="verdermetval3" :disabled="!valid3"/>
                        <knopterug :onClick="terug"/>
                    </v-form>
                </v-stepper-content>
                <!--stap 8-->
                <v-stepper-step step="9">
                    <Staptekst :staptekst="stapkop9"/>
                </v-stepper-step>
                <v-stepper-content step="9">
                    <TekstInleiding :tekst1="stap9tekst1" :tekst2="stap9tekst2"/>
                    <vraagtekst :vraag="vraagtekst9"/>
                    <v-form v-model="valid4" ref="form4" lazy-validation>
                        <Radiojanee v-model="vraag7e"/>
                        <knopverder :onClick="verdermetval4" :disabled="!valid4"/>
                        <knopterug :onClick="terug"/>
                    </v-form>
                </v-stepper-content>
                <!--stap 9-->

                <v-stepper-step step="10">
                    <Staptekst :staptekst="stapkop10"/>
                </v-stepper-step>
                <v-stepper-content step="10">
                    <TekstInleiding :tekst1="stap10tekst1" :tekst2="stap10tekst2"/>
                    <vraagtekst :vraag="vraagtekst10"/>
                    <v-form v-model="valid5" ref="form5" lazy-validation>
                        <Radiojaneeweet v-model="vraag8e"/>
                        <knopverder :onClick="verdermetval5" :disabled="!valid5"/>
                        <knopterug :onClick="terug"/>
                    </v-form>
                </v-stepper-content>
                <!--stap eind                -->
                <v-stepper-step step="11">
                    <Staptekst :staptekst="stapkop11"/>
                </v-stepper-step>
                <v-stepper-content step="11">
                    <KopInleiding :kop="stap11kop"/>
                    <TekstInleiding :tekst1="stap11tekst1" :tekst2="stap11tekst2"/>
                    <TekstInleiding :tekst1="stap11atekst1" :tekst2="stap11atekst2"/>
                    <disclaimer/>
                    <br><br><br>
                    <knopverder :onClick="verdermetval6" :disabled="!valid6"/>
                    <knopterug :onClick="terug"/>
                </v-stepper-content>
            </v-stepper>
        </v-card>
    </v-container>
</template>

<script>

    import Vraagtekst from "../components/vraagtekst";
    import Stellingtekst from "../components/stellingtekst";
    import Knopverder from "../components/knopverder";
    import Knopterug from "../components/knopterug";
    import Staptekst from "../components/staptekst";
    import axios from 'axios';
    import TaSlider2 from "../components/slider/ta-slider2";
    import KopInleiding from "../components/KopInleiding";
    import TekstInleiding from "../components/TekstInleiding";
    import Radiojanee from "../components/Radiojanee";
    import Radiojaneeweet from "../components/Radiojaneeweet";
    import Disclaimer from "../components/disclaimer";


    export default {
        name: "Module1.vue",
        components: {
            Disclaimer,
            Radiojaneeweet,
            Radiojanee,
            TekstInleiding,
            KopInleiding,
            TaSlider2, Knopterug, Knopverder, Staptekst, Stellingtekst, Vraagtekst
        },
        data() {
            return {
                stapkop1: 'Welkom',
                stapkop2: 'Inleiding',
                stapkop3: 'Uw gevoel',
                stapkop4: 'Waarnemer',
                stapkop5: 'Opvolger',
                stapkop6: 'Uw gevoel',
                stapkop7: 'Vertegenwoordiging',
                stapkop8: 'Strategie',
                stapkop9: 'Toekomst',
                stapkop10: 'Zorg voor uw gezin',
                stapkop11: 'Einde',
                stap1kop: 'Welkom',
                stap1tekst1: 'Veel ondernemers schatten het risico op het plotseling wegvallen als gevolg van een ziekte of ongeval laag in. Dat maakt dat ze weinig tot geen maatregelen nemen om hun onderneming en gezin tegen de impact hiervan te beschermen.',
                stap1tekst2: 'Met deze App nodigen wij u uit een korte vragenlijst over Noodopvolging voor uzelf in te vullen. Met de knop Verder gaat u naar de inleiding.',
                stap2kop: 'Introductie',
                stap2tekst1: 'In de bovenstaande animatie treft u een korte inleiding aan op het onderwerp Noodopvolging.',
                stap2tekst2: 'U kunt de animatie ook overslaan en direct naar de eerste vraag gaan met de knop Verder.',
                stap3kop: '',
                stap3tekst1: 'Voor uw medewerkers, klanten en leveranciers bent u het boegbeeld van uw onderneming. Als u plotseling wegvalt, kan dit betekenen dat het vertrouwen in de toekomst van de onderneming wordt aangetast.',
                stap3tekst2: 'Met als gevolg dat uw belangrijkste stakeholders andere keuzes maken en de bedrijfscontinuïteit in korte tijd onder druk kan komen te staan.',
                stap4kop: '',
                stap4tekst1: 'In de situatie dat u plotseling niet aanwezig kunt zijn, zal iemand anders uw dagelijkse werkzaamheden moeten overnemen. Binnen de onderneming zal dit ook duidelijk moeten zijn, zodat er geen verwarring ontstaat over de dagelijkse leiding. ',
                stap4tekst2: 'Iemand die tijdelijk de dagelijkse leiding overneemt, noemt men een waarnemer.',
                stap5kop: '',
                stap5tekst1: 'In de situatie dat u permanent niet meer aanwezig kunt zijn, bijvoorbeeld door zware arbeidsongeschiktheid of overlijden, zal iemand uw rol moeten overnemen. Wij noemen deze  persoon uw noodopvolger. Dit hoeft niet dezelfde persoon te zijn als uw waarnemer, maar dat kan natuurlijk wel.',
                stap5tekst2: 'Belangrijk is dat uw noodopvolger uw onderneming juridisch mag vertegenwoordigen.',
                stap6kop: '',
                stap6tekst1: 'Nog meer dan bij de keuze van een waarnemer, spelen de kennis, ervaring en managementvaardigheden een rol bij de keuze van een noodopvolger. Uw noodopvolger zal in staat moeten zijn om uw onderneming veilig door de ontstane crisis te loodsen, over een langere tijd leiding moeten geven en betrokken moeten zijn bij de overdracht of verkoop van uw onderneming.',
                stap6tekst2: 'Dit vraagt om persoonlijke vaardigheden zoals managementvaardigheden, stressbestendigheid, persoonlijk overwicht en senioriteit. In hoeverre beschikt uw beoogde opvolger over deze vaardigheden?',
                stap7kop: '',
                stap7tekst1: 'Belangrijk is dat in uw afwezigheid uw noodopvolger de onderneming juridisch kan vertegenwoordigen. Denk hierbij aan afspraken met klanten en leveranciers, de inschrijving bij de Kamer van Koophandel, maar ook inzicht en toegang tot de zakelijke rekeningen en het uitvoeren van betalingen.',
                stap7tekst2: '',
                stap8kop: '',
                stap8tekst1: 'In de situatie dat u permanent niet meer aanwezig kunt zijn, zal de onderneming uiteindelijk in andere handen overgaan of wellicht zelfs in het uiterste geval haar activiteiten staken.',
                stap8tekst2: 'Voor uw noodopvolger en gezin is het van essentieel belang om te weten wat uw wensen zijn als u zelf niet meer betrokken kunt zijn bij uw onderneming. Allereerst wat is de strategie van het bedrijf en is deze strategie bij alle betrokkenen?',
                stap9kop: '',
                stap9tekst1: 'Daarnaast is er de strategische keuze met betrekking tot het eigendom over de onderneming. Dienen uw naasten het eigendom in het bedrijf voort te zetten of wilt u dat het bedrijf wordt verkocht?',
                stap9tekst2: '',
                stap10kop: '',
                stap10tekst1: 'In de situatie dat u permanent niet meer aanwezig kunt zijn, zult u ook uw gezin willen beschermen tegen de gevolgen hiervan. Vanuit financieel oogpunt zult u bijvoorbeeld het verlies aan inkomen voor een belangrijk deel of zelfs volledig willen compenseren.',
                stap10tekst2: 'Dat vraagt om een aantal financiële maatregelen, zowel binnen de onderneming als in de privésituatie. Bijvoorbeeld als u een eigen woning hebt gekocht en daarvoor financiering hebt aangetrokken.',
                stap11kop: 'Einde',
                stap11tekst1: 'U bent aan het einde gekomen van deze vragenlijst. U kunt de door u gegeven antwoorden nog aanpassen.',
                stap11tekst2: 'Gebruik hiervoor de knoppen terug en verder.',
                stap11atekst1: 'Binnen enkele minuten kunt u uw persoonlijke rapportage verwachten in uw mailbox.',
                stap11atekst2: 'U bent aan het einde gekomen van deze vragenlijst. U kunt de door u gegeven antwoorden nog aanpassen.',

                vraagtekst1: '',
                vraagtekst2: '',
                vraagtekst3: 'In hoeverre kunt u zich gevoelsmatig in de volgende stelling vinden?',
                vraagtekst4: 'Hebt u een waarnemer aangesteld?',
                vraagtekst5: 'Hebt u een noodopvolger aangesteld die u permanent kan vervangen?',
                vraagtekst6: 'In hoeverre kunt u zich gevoelsmatig in de volgende stelling vinden?',
                vraagtekst7: 'Is uw vertegenwoordiger (waarnemer/opvolger) voldoende gemachtigd?',
                vraagtekst8: 'Hebt u een uitgewerkt businessplan voor uw onderneming?',
                vraagtekst9: 'Hebt u uw wensen over de toekomst van uw bedrijf, bijvoorbeeld overdragen of verkopen, vastgelegd?',
                vraagtekst10: 'Mocht u iets overkomen, hebt u dan alles goed geregeld voor uw gezin?',
                vraagtekst11: '',
                stellingtekst1: '',
                stellingtekst2: '',
                stellingtekst3: 'Mijn onderneming blijft gewoon doordraaien als ik plotseling wegval!',
                stellingtekst4: '',
                stellingtekst5: '',
                stellingtekst6: ' Mijn opvolger kan soepel mijn rol overnemen als ik plotseling wegval!',
                stellingtekst7: '',
                stellingtekst8: '',
                stellingtekst9: '',
                stellingtekst10: '',
                stellingtekst11: '',

                valid: true,
                valid1: true,
                valid2: true,
                valid3: true,
                valid4: true,
                valid5: true,
                valid6: true,
                status1: true,
                token: '',
                status: 0,
                stap: 1,
                bpm: 0,
                bpm1: 0,
                vraag1e: 0,
                vraag2e: null,
                vraag3e: null,
                vraag4e: 0,
                vraag5e: null,
                vraag6e: null,
                vraag7e: null,
                vraag8e: null,
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
                // eslint-disable-next-line
                console.log('Verzenden');
                let data = JSON.stringify({
                    token: this.token,
                    vraag1e: this.vraag1e,
                    vraag2e: this.vraag2e,
                    vraag3e: this.vraag3e,
                    vraag4e: this.vraag4e,
                    vraag5e: this.vraag5e,
                    vraag6e: this.vraag6e,
                    vraag7e: this.vraag7e,
                    vraag8e: this.vraag8e,
                    status1: this.status1,
                });
                axios
                    .post('/Bewaarquick1ex', data, {
                            headers: {}
                        }
                    )
                    .then((response) => {
// eslint-disable-next-line
                        console.log(response);
                        this.$swal({

                            icon: 'success',
                            title: 'Rapportage',
                            text: 'Uw rapportage wordt verstuurd maar uw email adres.',
                            showConfirmButton: true,
                            footer: 'Let op uw rapportage kan in uw spambox terecht komen.'
                        });

                        this.$router.push({name: 'home'});
                    })
                    .catch((error) => {
                        // eslint-disable-next-line
                        console.log(error);
                        this.$swal({
                            icon: 'warning',
                            title: 'Oops er gaat iets fout',
                            text: 'Let op er gaat iets niet goed',
                            footer: 'Probeer het aub nogmaals mocht u problemen blijven ondervinden neem dan contact met ons op!'
                        });
                    });
                localStorage.clear();
                localStorage.removeItem('token');
                localStorage.removeItem('email');
                localStorage.removeItem('wachtwoord');
                this.$router.replace({name: 'home'});
            },
            verderzonderval() {
                this.stap++
            },
            terug() {
                this.stap--
            },
            submit() {
                if (this.$refs.form.validate()) {
                    this.stap++;
                }
            },
        },
        mounted() {
            // eslint-disable-next-line
            console.log('App mounted!');
            this.token = JSON.parse(localStorage.getItem('token'));
        },
    }
</script>

<style scoped>
    .embed-container {
        width: 100% !important;
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

        .iframe-wrapper iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
</style>
