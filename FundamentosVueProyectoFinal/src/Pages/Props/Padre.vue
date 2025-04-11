<script setup>
import Hijo1 from './Hijo1.vue'
import Hijo2 from './Hijo2.vue'
</script>

<template>
  <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div class="container text-center">
      <h1>Soy el componente padre</h1>

      <!-- Envío de múltiples props -->
      <Hijo1 class="mt-5" nombre="Abril" edad="9"
        info="Estudiante de tercer grado de primaria" />
      <Hijo2 class="mt-5" nombre="Axel" edad="4"
        info="Estudiante de segundo año de preescolar" />
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 30px;
  background-color: #f3f1b1;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}
h1 {
  color: #2c3e50;
}
.bg-light {
  background-color: #f8f9fa !important;
}
</style>
