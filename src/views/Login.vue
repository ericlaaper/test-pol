<template>
    <v-flex xs12 sm6 offset-sm3>
        <v-card class="mb-5">
            <v-toolbar color="info">
                <v-toolbar-title class="white--text">Personal QuickScan Noodsituatie</v-toolbar-title>
            </v-toolbar>

            <div id="login">




                        <v-card>
                            <v-card-text class="pt-4">
                                <div>
                                    <v-form v-model="valid" ref="form">
                                        <v-text-field
                                                label="Vul uw  e-mail in"
                                                v-model="email"
                                                :rules="emailRules"
                                                required
                                        />
                                        <v-text-field
                                                label="Vul uw paswoord in"
                                                v-model="wachtwoord"
                                                min="8"
                                                :type="e1 ? 'wachtwoord' : 'text'"
                                                :rules="passwordRules"
                                                required
                                        />
                                        <v-layout justify-space-between>
                                            <v-btn @click="submit" :class=" { 'blue darken-4 white--text' : valid, disabled: !valid }">Login</v-btn>
                                        </v-layout>
                                    </v-form>
                                </div>
                            </v-card-text>
                        </v-card>




            </div>
            <div>
                <v-alert
                        v-model="alert"
                        dismissible
                        type="success"
                >
                   Controleer a.u.b. uw gegevens!
                </v-alert>


            </div>


        </v-card>
    </v-flex>
</template>

<script>
    import axios from 'axios';


    export default {
        name: "Login",
        data() {
            return {
                valid: false,
                e1:false,
                passwordRules: [
                    (v) => !!v || 'Wachtwoord is verplicht',
                ],
                email: '',
                emailRules: [
                    (v) => !!v || 'E-mail is verplicht',
                    // eslint-disable-next-line
                    (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Dit lijkt geen goed email adres'
                ],
                wachtwoord: '',
                alert:false,
                token: '',
                data: {},
                results: []
            }
        },
        methods: {
            submit() {
                // eslint-disable-next-line
                console.log('login clicked');
                if (this.$refs.form.validate()){
                let data = JSON.stringify({
                    password: this.wachtwoord,
                    email: this.email,
                });

                axios.post('/Loginquick1', data, {
                    headers: {
                        // 'X-CSRF-TOKEN': window.Laravel.csrfToken,
                        // 'X-Requested-With': 'XMLHttpRequest'


                        // 'Accept':'x-www-form-urlencoded',
                        // 'Access-Control-Allow-Credentials': true,


                    }
                })
                    .then(response => {
                        // eslint-disable-next-line
                        console.log(response);
                        this.token = response.data.token;
                        if (this.token === undefined) {
                            // eslint-disable-next-line
                            console.log('verkeerde gegevens');
                            this.alert = true;
                        }
                        else{
                            // eslint-disable-next-line
                            console.log('juiste gegevens');
                            this.alert = false;
                            localStorage.setItem('token',JSON.stringify(response.data.token));
                            localStorage.setItem('email', JSON.stringify(this.email));
                            localStorage.setItem('wachtwoord', JSON.stringify(this.wachtwoord));
                            this.$store.commit("change", response.data.token);
                            this.$router.push({ path: '/quickscan' })


                        }
                    })



                }
            },

        }
    }
</script>

<style scoped>
    .signin-form {
        width: 400px;
        margin: 30px auto;

        border: 1px solid #eee;
        padding: 20px;
        box-shadow: 0 2px 3px #ccc;
    }

    .input {
        margin: 10px auto;
    }

    .input label {
        display: block;
        color: #4e4e4e;
        margin-bottom: 6px;
    }

    .input input {
        font: inherit;
        width: 100%;
        padding: 6px 12px;
        box-sizing: border-box;
        border: 1px solid #ccc;
    }

    .input input:focus {
        outline: none;
        border: 1px solid #521751;
        background-color: #eee;
    }

    .submit button {
        border: 1px solid #521751;
        color: #521751;
        padding: 10px 20px;
        font: inherit;
        cursor: pointer;
    }

    .submit button:hover,
    .submit button:active {
        background-color: #521751;
        color: white;
    }

    .submit button[disabled],
    .submit button[disabled]:hover,
    .submit button[disabled]:active {
        border: 1px solid #ccc;
        background-color: transparent;
        color: #ccc;
        cursor: not-allowed;
    }
</style>
