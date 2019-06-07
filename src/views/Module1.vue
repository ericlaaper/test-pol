<template>
    <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <v-toolbar color="info">
                <v-toolbar-title class="white--text">Noodsituatie</v-toolbar-title>
            </v-toolbar>
            <v-stepper v-model="el3" vertical>
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

                    <div class="flex body-2 padje">
                        Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een
                        mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst
                        Een een mooie tekst Een een mooie tekst Een een mooie tekst
                        Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een
                        mooie tekst Een een mooie tekst
                        Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een
                        mooie tekst Een een mooie tekst
                        Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een
                        mooie tekst Een een mooie tekst
                    </div>
                    <v-btn color="primary" @click="el3 = 2">Continue</v-btn>
                    <v-btn flat>Cancel</v-btn>
                </v-stepper-content>


            <v-stepper-step step="2">Stelling 1</v-stepper-step>

            <v-stepper-content step="2">


                <div class="flex body-2 padje">
                    Voor uw medewerkers, klanten en leveranciers bent u het boegbeeld van uw onderneming. Als u plotseling wegvalt, kan dit betekenen dat het vertrouwen in de toekomst van de onderneming wordt aangetast.<br>Met als gevolg dat uw belangrijkste stakeholders andere keuzes maken en de bedrijfscontinuïteit in korte tijd onder druk kan komen te staan.
                </div>
<!--                <div class="flex display-2 padje">-->
<!--                    Stelling 1-->
<!--                </div>-->
                <div class="flex body-4 mt-3 padje">
                    In hoeverre kunt u zich gevoelsmatig in de volgende stelling vinden<br><br>
                   Mijn onderneming blijft gewoon doordraaien als ik plotseling wegval!
<!--ik twijfel hier sterk aan-->
<!--ik twijfel hier niet aan                    -->
                </div>
                <v-slider
                        v-model="bpm"
                        :color="color"
                        append-icon= "add_circle_outline"
                        prepend-icon= "remove_circle_outline"

                        always-dirty
                        min="-100"
                        max="100"
                >
               </v-slider>
                <v-layout row justify-space-between>
                    <v-flex xs2>
                       <p>Ik twijfel hier sterk aan</p>
                    </v-flex>
                    <v-flex xs2>

                    </v-flex>
                    <v-flex xs2>
                        <p>Ik twijfel hier niet aan</p>
                    </v-flex>
                </v-layout>


                <div class="flex display-2 padje">
                    Stelling 2
                </div>
                <div class="flex body-2 padje">
                    Toelichting op stelling kan een beetje langer dan dit

                </div>
                <v-slider
                        v-model="bpm1"
                        :color="color"
                        append-icon= "add_circle_outline"
                        prepend-icon= "remove_circle_outline"
                        always-dirty
                        min="-100"
                        max="100"
                >
                </v-slider>


                <v-btn color="primary" @click="el3 = 3">Continue</v-btn>
                <v-btn flat>Cancel</v-btn>
            </v-stepper-content>

                <v-stepper-content step="3">
                    <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                    <v-btn color="primary" @click="el3 = 4">Continue</v-btn>
                    <v-btn flat>Cancel</v-btn>
                </v-stepper-content>

            </v-stepper>




            <!--            <div v-if="status === 0">-->

<!--                <video controls-->
<!--                       poster="../assets/introfilm.png"-->
<!--                       class="alignVideo"-->
<!--                       src="../assets/mod7.mp4"-->
<!--                       type='video/mp4'>-->
<!--                </video>-->
<!--                <div class="flex display-2 padje">-->
<!--                    Familieoverleg-->
<!--                </div>-->
<!--                <div class="flex body-2 padje">-->
<!--                    Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een-->
<!--                    mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst-->
<!--                    Een een mooie tekst Een een mooie tekst Een een mooie tekst-->
<!--                    Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een-->
<!--                    mooie tekst Een een mooie tekst-->
<!--                    Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een-->
<!--                    mooie tekst Een een mooie tekst-->
<!--                    Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een mooie tekst Een een-->
<!--                    mooie tekst Een een mooie tekst-->
<!--                </div>-->


<!--            </div>-->

        </v-card>
    </v-flex>
</template>

<script>
    export default {
        name: "Module1.vue",
        data() {
            return {
                status: 0,
                el3:1,
                bpm:0,
                bpm1:0,

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

</style>
