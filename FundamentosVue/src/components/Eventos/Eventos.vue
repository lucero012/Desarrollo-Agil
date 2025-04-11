<template>
    <div class="container py-4">
      <div class="row g-4">
        
        <!-- Sección de Eventos -->
        <div class="col-md-4">
          <h4 class="text-center">Eventos</h4>
          <div class="d-flex justify-content-center">
            <button @click="clic" class="btn btn-danger me-2">Dale Clic</button>
            <button @click="soyBoton" class="btn btn-warning">Dale Clic 2</button>
          </div>
        </div>
  
        <!-- Sección de Evento Change -->
        <div class="col-md-4">
          <h4 class="text-center">Evento Change</h4>
          <div class="mb-3">
            <label for="nombre" class="form-label">Ingresa tu nombre:</label>
            <input type="text" id="nombre" @change="nombreE" class="form-control" placeholder="Escribe tu nombre">
          </div>
          <p class="text-center">El nombre ingresado es: <br> <strong>{{ nombre }}</strong></p>
        </div>
  
        <!-- Sección de Evento Mouse -->
        <div class="col-md-4">
          <h4 class="text-center">Evento Mouse</h4>
          <div 
            class="cuadro mx-auto d-flex align-items-center justify-content-center"
            @mouseenter="mostrarMensaje"
            @mouseleave="ocultarMensaje"
          >
            <p class="m-0">Pase el mouse</p>
          </div>
          <p class="text-center mt-2">{{ mensaje }}</p>
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nombre: '',
        mensaje: ''
      }
    },
    methods: {
      clic() {
        alert('Gracias por darle Clic')
      },
      soyBoton() {
        alert('Gracias por darle Clic 2')
      },
      nombreE(event) {
        this.nombre = event.target.value
      },
      mostrarMensaje() {
        this.mensaje = 'Estás sobre el cuadro'
      },
      ocultarMensaje() {
        this.mensaje = 'No estás sobre el cuadro'
      }
    }
  }
  </script>
  
  <style scoped>
  .cuadro {
    width: 200px;
    height: 200px;
    background-color: rgb(235, 176, 153);
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  .cuadro:hover {
    background-color: orange;
    transform: scale(1.05);
  }
  </style>
  