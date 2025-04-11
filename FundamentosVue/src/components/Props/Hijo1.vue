<script setup>
defineProps({
  nombre: {
    type: String,
    required: true
  },
  edad: {
    type: String,
    required: true
  },
  info: {
    type: String,
    default: 'Sin especificar'
  }
})
</script>

<template>
  <div class="card">
    <h3>Soy el componente hijo 1</h3>
    <p><strong>Nombre:</strong> {{ nombre }} Lucero </p>
    <p><strong>Edad:</strong> {{ edad }} años</p>
    <p> {{ info }}</p>
  </div>
</template>


<style scoped>
.card {
  border: 2px solid #e74c3c;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9ebea;
  transition: transform 0.3s;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}
h3 {
  color: #e74c3c;
}
p {
  font-size: 16px;
}
</style>