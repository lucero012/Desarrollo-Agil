<script>
export default {
    data() {
        return {
            display: '',
            currentValue: 0,
        }
    },
    methods: {
        agregarNumero(numero) {
            this.display += numero;
        },
        calculo() {
            try{
                this.currentValue = eval(this.display);
                this.display = this.currentValue.toString();
            }
            catch (error) {
               this.display = 'Error';
            }
        },
        limpiarDisplay() {
            this.display = '';
        }
    }
}
</script>

<template>
<div class="container d-flex justify-content-center mt-4" style="height: 450px;">
    <div class="card p-3" style="width: 300px; background: linear-gradient(135deg, #17EAD9, #6078EA) ; ">
        <div class="card-body">
            <h6 class="text-center">Calculadora V2</h6>
            <!--Display de la calculadora-->
            <div class="mb-3">
                <input type="text" class="form-control" v-model="display" disabled>
            </div>
            <div class="d-flex justify-content-between mt-4">
                <button class="btn btn-danger" @click="limpiarDisplay">AC</button>
                <button class="btn btn-warning" @click="agregarNumero('()')">()</button>
                <button class="btn btn-warning" @click="agregarNumero('%')">%</button>
                <button class="btn btn-warning" @click="agregarNumero('/')">/</button>
            </div>
            <div class="d-flex justify-content-between mt-4">
                <button class="btn btn-secondary" @click="agregarNumero(7)">7</button>
                <button class="btn btn-secondary" @click="agregarNumero(8)">8</button>
                <button class="btn btn-secondary" @click="agregarNumero(9)">9</button>
                <button class="btn btn-warning" @click="agregarNumero('*')">*</button>
            </div>
            <div class="d-flex justify-content-between mt-4">
                <button class="btn btn-secondary" @click="agregarNumero(4)">4</button>
                <button class="btn btn-secondary" @click="agregarNumero(5)">5</button>
                <button class="btn btn-secondary" @click="agregarNumero(6)">6</button>
                <button class="btn btn-warning" @click="agregarNumero('-')">-</button>
            </div>
            <div class="d-flex justify-content-between mt-4">
                <button class="btn btn-secondary" @click="agregarNumero(1)">1</button>
                <button class="btn btn-secondary" @click="agregarNumero(2)">2</button>
                <button class="btn btn-secondary" @click="agregarNumero(3)">3</button>
                <button class="btn btn-warning" @click="agregarNumero('+')">+</button>
            </div>
            <div class="d-flex justify-content-between mt-4">
                <button class="btn btn-secondary" @click="agregarNumero(0)">0</button>
                <button class="btn btn-secondary" @click="agregarNumero('.')">.</button>
                <button class="btn btn-danger" @click="limpiarDisplay">⌫</button>
                <button class="btn btn-success" @click="calculo">=</button>
            </div>
        </div>
    </div>
</div>
</template>
