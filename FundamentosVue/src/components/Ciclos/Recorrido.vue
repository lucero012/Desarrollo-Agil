<script>
export default {
  data() {
    return {
      alumnos: [
        { nc: 21620139, nombre: 'Maribel Lucero Zuñiga', gusto: 'Me gusta la programación' },
        { nc: 21620140, nombre: 'Lucero Zuñiga Quiroz', gusto: 'Me gusta correr' },
        { nc: 21620141, nombre: 'Josue Sarmiento Juarez', gusto: 'Me gusta la música' },
        { nc: 21620142, nombre: 'Luis Ángel Hernandez Peña', gusto: 'Me gusta la lectura' },
        { nc: 21620143, nombre: 'Luisa García Sánchez', gusto: 'Me gusta la pintura' },
        { nc: 21620144, nombre: 'María Fernanda López', gusto: 'Me gusta la danza' },
        { nc: 21620145, nombre: 'José Luis Pérez', gusto: 'Me gusta el cine' },
        { nc: 21620146, nombre: 'Mar de Jesús García', gusto: 'Me gusta la fotografía' },
        { nc: 21620147, nombre: 'Gustavo Salazar Ortíz', gusto: 'Me gusta el cine' }
      ]
    };
  }
};
</script>

<template>
<div class="container mt-5">
  <h3 class="text-center">LISTA DE ALUMNOS</h3>
  
  <div class="row">
    <div v-for="alumno in alumnos" :key="alumno.nc" class="col-md-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">{{ alumno.nombre }}</h5>
          <p class="card-text"><strong>Número de control:</strong> {{ alumno.nc }}</p>
          <p class="card-text"><strong>Gusto:</strong> {{ alumno.gusto }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

h3 {
    font-family: 'Pacifico', cursive;
  color: rgb(1, 1, 1);
  background-color: #79ecea;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.card {
  transition: transform 0.3s, box-shadow 0.3s;
  border-radius: 15px;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card-title {
  font-size: 1.2rem;
  color: #060352;
}

.card-text {
  color: #495057;
}
</style>
