import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Cart from '../components/Cart.vue'
import Contact from '../components/Contact.vue'
import Consultas from '../components/Consultas.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/consultas',
            name: 'consultas',
            component: Consultas
        }
    ]
});

export default router