<script setup>
import CalculadoraV1 from './components/Calculadora/CalculadoraV1.vue'
import Recorrido    from './components/Ciclos/Recorrido.vue';
import Eventos      from './components/Eventos/Eventos.vue';
import Horario      from './components/horario/Horario.vue';
import Padre from './components/Props/Padre.vue';
import CalculadoraV2 from './components/calculadora/CalculadoraV2.vue';
</script>

<template>
 <CalculadoraV1/> 
<CalculadoraV2 />
<Recorrido />
<Eventos />
<Horario />
<Padre />

</template>


