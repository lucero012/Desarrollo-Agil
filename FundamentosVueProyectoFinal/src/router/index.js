import { createRouter, createWebHashHistory } from "vue-router";
//Agregando pag de la aplicacion

import CalculadoraV1 from "../Pages/Calculadora/CalculadoraV1.vue";
import CalculadoraV2 from "../Pages/Calculadora/CalculadoraV2.vue";
import Recorrido from "../Pages/Ciclos/Recorrido.vue";
import Eventos from "../Pages/Eventos/Eventos.vue"
import Horario from "../Pages/Horario/Horario.vue"
import Padre from "../Pages/Props/Padre.vue"
import Home from "../Pages/Home.vue";
import Recorrido1 from "../Pages/Ciclos/Recorrido1.vue";
import Horario1 from "../Pages/Horario/Horario1.vue";
const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    {
        path: "/CalculadoraV1",
        name: "CalculadoraV1",
        component: CalculadoraV1,
    },
    {
        path: "/CalculadoraV2",
        name: "CalculadoraV2",
        component: CalculadoraV2,
    },
    {
        path: "/Recorrido",
        name: "Recorrido",
        component: Recorrido,
    }, 
    {
        path: "/Recorrido1",
        name: "Recorrido1",
        component: Recorrido1,
    }, 
    {
        path: "/Eventos",
        name: "Eventos",
        component: Eventos,
    }, {
        path: "/Horario1",
        name: "Horario1",
        component: Horario1,
    },
    {
        path: "/Horario",
        name: "Horario",
        component: Horario,
    }
    , {
        path: "/Padre",
        name: "Padre",
        component: Padre,
    }
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;