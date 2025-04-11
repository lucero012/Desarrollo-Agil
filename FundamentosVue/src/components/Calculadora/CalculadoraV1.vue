<script>
export default {
    data() {
        return {
            numero1: 0,
            numero2: 0,
            resultado: 0
        }
    },
    methods: {
        sumar() {
            this.resultado = parseFloat(this.numero1) + parseFloat(this.numero2);
        },
        restar() {
            this.resultado = parseFloat(this.numero1) - parseFloat(this.numero2);
        },
        multiplicar() {
            this.resultado = parseFloat(this.numero1) * parseFloat(this.numero2);
        },
        dividir() {
            this.resultado = this.numero2 != 0 
                ? (parseFloat(this.numero1) / parseFloat(this.numero2)).toFixed(2)
                : 'Error: División por 0';
        }
    }
}
</script>

<template>
<div class="container mt-5 d-flex justify-content-center align-items-center vh-100">
    <div class="card shadow p-4">
        <h1 class="text-center">Calculadora V1</h1>

        <!-- Estilo tipo pantalla de calculadora -->
        <div class="result-screen" 
             :class="{'positive': resultado > 0, 'negative': resultado < 0, 'neutral': resultado == 0}">
            {{ resultado }}
        </div>

        <div class="mb-3">
            <label for="">Número 1</label>
            <input type="number" class="form-control" v-model="numero1" placeholder="Ingrese el primer número">
        </div>

        <div class="mb-3">
            <label for="">Número 2</label>
            <input type="number" class="form-control" v-model="numero2" placeholder="Ingrese el segundo número">
        </div>

        <div class="d-flex justify-content-center gap-2">
            <button @click="sumar" class="btn btn-success">
                ➕ Sumar
            </button>
            <button @click="restar" class="btn btn-warning">
                ➖ Restar
            </button>
            <button @click="multiplicar" class="btn btn-primary">
                * Multiplicar
            </button>
            <button @click="dividir" class="btn btn-danger">
                ➗ Dividir
            </button>
        </div>
    </div>
</div>
</template>

<style scoped>
/* Estilo de pantalla de calculadora */
.result-screen {
    font-family: 'Courier New', monospace;
    font-size: 2rem;
    text-align: right;
    padding: 20px;
    margin: 20px 0;
    border: 2px solid #ccc;
    border-radius: 10px;
    background: #f0f0f0;
    box-shadow: inset 0 0 10px #aaa;
    transition: 0.3s;
}

/* Colores dinámicos */
.positive {
    color: green;
}
.negative {
    color: red;
}
.neutral {
    color: #555;
}
</style>
