<script>
export default {
  data() {
    return {
      alumnos: [
        { nc: 12345, nombre: 'Maribel', carrera: 'ISC' },
        { nc: 12346, nombre: 'Lucero', carrera: 'TICS' },
        { nc: 12347, nombre: 'Abi', carrera: 'ISC' },
        { nc: 12348, nombre: 'Aldair', carrera: 'TICS' },
      ]
    };
  }
}
</script>

<template>
  <div class="container">
    <h3 class="mt-4 text-center">Lista de alumnos</h3>
    <ul class="alumnos-list">
      <li
        class="alumno-item"
        v-for="alumno in alumnos"
        :key="alumno.nc"
      >
        <strong>{{ alumno.nombre }}</strong> - 
        <strong>{{ alumno.carrera }}</strong>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h3 {
  color: rgb(0, 0, 0);
  background-color: rgb(171, 249, 242);
  border-radius: 15px;
  padding: 10px;
}

.alumnos-list {
  list-style-type: none;
  padding: 0%;
}

.alumno-item {
  color: rgb(0, 0, 0);
  background-color: rgb(246, 201, 201);
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  text-align: center;
}
</style>