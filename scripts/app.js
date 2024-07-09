console.log('Vue scripts loaded');

const app = Vue.createApp({
    data(){
        return{
            greeting: 'Week 10 Lab'
        };
    }
    data(){
        return{
            firstName: '',
            lastName: '',
            quantity: 0,
            pricePerItem: 10
        };
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        totalPrice() {
            return this.quantity * this.pricePerItem;
        }
    },
    methods: {
        clearFields() {
            this.firstName = '';
            this.lastName = '';
            this.quantity = 0;
        }
    }
});

app.mount('#app');
