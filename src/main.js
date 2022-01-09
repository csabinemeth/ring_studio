import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import PrimeVue from "primevue/config";


import Button from "primevue/button"
import InputText from 'primevue/inputtext'



import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                         //icons






const app = createApp(App);
app.use(PrimeVue)



app.component('InputText', InputText);
app.component('Button', Button);


createApp(App).use(router).mount('#app')
