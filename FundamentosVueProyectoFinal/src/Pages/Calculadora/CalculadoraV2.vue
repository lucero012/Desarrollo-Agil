<template>
    <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div class="card p-4 shadow-lg" style="width: 320px; background: linear-gradient(135deg, #17EAD9, #6078EA); border-radius: 20px;">
        <div class="card-body">
          <h4 class="text-center text-white mb-4">Calculadora V2</h4>
  
          <div class="mb-3">
            <input type="text" class="form-control text-end" v-model="display" disabled />
          </div>
  
          <!-- Fila de botones -->
          <div class="d-flex justify-content-between mb-3">
            <button class="btn btn-danger" @click="limpiarDisplay">AC</button>
            <button class="btn btn-warning" @click="agregarNumero('()')">()</button>
            <button class="btn btn-warning" @click="agregarNumero('%')">%</button>
            <button class="btn btn-warning" @click="agregarNumero('/')">/</button>
          </div>
  
          <div class="d-flex justify-content-between mb-3">
            <button class="btn btn-secondary" @click="agregarNumero(7)">7</button>
            <button class="btn btn-secondary" @click="agregarNumero(8)">8</button>
            <button class="btn btn-secondary" @click="agregarNumero(9)">9</button>
            <button class="btn btn-warning" @click="agregarNumero('*')">*</button>
          </div>
  
          <div class="d-flex justify-content-between mb-3">
            <button class="btn btn-secondary" @click="agregarNumero(4)">4</button>
            <button class="btn btn-secondary" @click="agregarNumero(5)">5</button>
            <button class="btn btn-secondary" @click="agregarNumero(6)">6</button>
            <button class="btn btn-warning" @click="agregarNumero('-')">-</button>
          </div>
  
          <div class="d-flex justify-content-between mb-3">
            <button class="btn btn-secondary" @click="agregarNumero(1)">1</button>
            <button class="btn btn-secondary" @click="agregarNumero(2)">2</button>
            <button class="btn btn-secondary" @click="agregarNumero(3)">3</button>
            <button class="btn btn-warning" @click="agregarNumero('+')">+</button>
          </div>
  
          <div class="d-flex justify-content-between">
            <button class="btn btn-secondary" @click="agregarNumero(0)">0</button>
            <button class="btn btn-secondary" @click="agregarNumero('.')">.</button>
            <button class="btn btn-danger" @click="limpiarDisplay">⌫</button>
            <button class="btn btn-success" @click="calculo">=</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        display: '',
        currentValue: 0,
      };
    },
    methods: {
      agregarNumero(numero) {
        this.display += numero;
      },
      calculo() {
        try {
          this.currentValue = eval(this.display);
          this.display = this.currentValue.toString();
        } catch (error) {
          this.display = 'Error';
        }
      },
      limpiarDisplay() {
        this.display = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .bg-light {
    background-color: #f1f3f5 !important;
  }
  </style>
  