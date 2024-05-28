'use strict'

const {createApp} = Vue;

createApp({
    data() {
        return{
           email: [],

        };
    },
    created() {
        for (let i = 0; i < 10; i++) {

            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.email.push(response.data.response);
                
            });
        }
    },
}).mount('#app');