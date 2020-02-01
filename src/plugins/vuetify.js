import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark:false,
        themes: {
            light: {
                primary: '#d22630',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#D1183A',
                success: '#4CAF50',
                warning: '#FFC107'
            },
            dark: {
                primary: '#d22630',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#346799',
                success: '#4CAF50',
                warning: '#ffe600'
            },
        },
    },
})