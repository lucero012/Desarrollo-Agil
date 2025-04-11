<script setup>
import Hijo1 from './Hijo1.vue'
import Hijo2 from './Hijo2.vue'
</script>

<template>
  <div class="container">
    <h1>Soy el componente padre</h1>

    <!-- Envío de múltiples props -->
    <Hijo1 class="mt-4" nombre="Abril" edad="9"
     info="Estudiante de tercer grado de primaria" />
    <Hijo2 class="mt-4" nombre="Axel" edad="4" 
    info="Estudiante de segundo año de preescolar" />
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  padding: 30px;
  background-color: #f3f1b1;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
h1 {
  color: #2c3e50;
}
</style>
