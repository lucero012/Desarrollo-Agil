<template>
    <div class="container text-center">
        <h1 class="text-center p-3 rounded shadow">Horario de Clases</h1>

        <div class="row justify-content-center">
            <div class="col-md-2 text-center">
                <h4 class="text-center mt-3">Lunes</h4>
                <div v-for="(clase, dia) in horario.Lunes" :key="dia" class="card my-3 shadow-sm">
                    <div class="card-body p-3">
                        <h6 class="text-primary">
                            <i class="bi bi-clock"></i> {{ clase.hora }}
                        </h6>
                        <p class="fw-bold">{{ clase.materia }}</p>
                        <p class="text-muted">Aula: {{ clase.aula }} / Profesor: {{ clase.profesor }}</p>
                        <p class="text-muted">Grupo: {{ clase.grupo }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <h4 class="text-center mt-3">Martes</h4>
                <div v-for="(clase, dia) in horario.Martes" :key="dia" class="card my-3 shadow-sm">
                    <div class="card-body p-3">
                        <h6 class="text-primary">
                            <i class="bi bi-clock"></i> {{ clase.hora }}
                        </h6>
                        <p class="fw-bold">{{ clase.materia }}</p>
                        <p class="text-muted">Aula: {{ clase.aula }} / Profesor: {{ clase.profesor }}</p>
                        <p class="text-muted">Grupo: {{ clase.grupo }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <h4 class="text-center mt-3">Miercoles</h4>
                <div v-for="(clase, dia) in horario.Miércoles" :key="dia" class="card my-3 shadow-sm">
                    <div class="card-body p-3">
                        <h6 class="text-primary">
                            <i class="bi bi-clock"></i> {{ clase.hora }}
                        </h6>
                        <p class="fw-bold">{{ clase.materia }}</p>
                        <p class="text-muted">Aula: {{ clase.aula }} / Profesor: {{ clase.profesor }}</p>
                        <p class="text-muted">Grupo: {{ clase.grupo }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <h4 class="text-center mt-3">Jueves</h4>
                <div v-for="(clase, dia) in horario.Jueves" :key="dia" class="card my-3 shadow-sm">
                    <div class="card-body p-3">
                        <h6 class="text-primary">
                            <i class="bi bi-clock"></i> {{ clase.hora }}
                        </h6>
                        <p class="fw-bold">{{ clase.materia }}</p>
                        <p class="text-muted">Aula: {{ clase.aula }} / Profesor: {{ clase.profesor }}</p>
                        <p class="text-muted">Grupo: {{ clase.grupo }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-2 ">
                <h4 class="text-center mt-3">Viernes</h4>
                <div v-for="(clase, dia) in horario.Viernes" :key="dia" class="card my-3 shadow-sm">
                    <div class="card-body p-3">
                        <h6 class="text-primary">
                            <i class="bi bi-clock"></i> {{ clase.hora }}
                        </h6>
                        <p class="fw-bold">{{ clase.materia }}</p>
                        <p class="text-muted">Aula: {{ clase.aula }} / Profesor: {{ clase.profesor }}</p>
                        <p class="text-muted">Grupo: {{ clase.grupo }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';

const horario = ref({
    Lunes: [
        { hora: '07:00-09:00', materia: 'Programación Lógica Y Funcional', 
        aula: 'LDS', profesor: 'Sánchez Vásquez Lucía', grupo: '8US' },
        { hora: '09:00-11:00', materia: 'Desarrollo Ágil', aula: 'LDS',
         profesor: 'Vásquez Martínez Josué Israel', grupo: '8US' }
    ],
    Martes: [
        { hora: '07:00-09:00', materia: 'Inteligencia Artificial', aula: 'ACS', profesor: 'Vásquez Martínez Josué Israel', grupo: '8US' },
        { hora: '09:00-11:00', materia: 'Administración De Redes', aula: 'RDS', profesor: 'García Hernández Astrid Mildred', grupo: '8US' },
        { hora: '11:00-13:00', materia: 'Desarrollo En La Nube', aula: 'RDS', profesor: 'Perez Garcia Audel Rolando', grupo: '8US' },
        { hora: '15:00-17:00', materia: 'Desarrollo Con Realidad Aumentada', aula: 'LDS', profesor: 'Roman Cruz Jose Alfredo ', grupo: '8US' }

    ],
    Miércoles: [
        { hora: '07:00-09:00', materia: 'Desarrollo Ágil', aula: 'ACS', profesor: 'Vásquez Martínez Josué Israel', grupo: '8US' },
        { hora: '11:00-13:00', materia: 'Desarrollo En La Nube', aula: 'LC3', profesor: 'Perez Garcia Audel Rolando', grupo: '8US' },
        { hora: '13:00-15:00', materia: 'Desarrollo Con Realidad Aumentada', aula: 'LC3', profesor: 'Roman Cruz Jose Alfredo', grupo: '8US' },
        { hora: '15:00-17:00', materia: 'Taller De Investigacion II', aula: 'ACS', profesor: 'Ortiz Ortiz Alfonso', grupo: '8US' }

    ],
    Jueves: [
        { hora: '07:00-09:00', materia: 'Programación Lógica Y Funcional', aula: 'RDS', profesor: 'Sánchez Vásquez Lucía', grupo: '8US' },
        { hora: '09:00-11:00', materia: 'Administracion De Redes', aula: 'RDS', profesor: 'Garcia Hernandez Astrid Mildred', grupo: '8US' },
        { hora: '11:00-13:00', materia: 'Inteligencia Artificial', aula: 'RDS', profesor: 'Vasquez Martínez Josué Israel ', grupo: '8US' },
        { hora: '13:00-14:00', materia: 'Desarrollo Con Realidad Aumentada', aula: 'ACS', profesor: 'Roman Cruz Jose Alfredo', grupo: '8US' }

    ],
    Viernes: [
        { hora: '10:00-11:00', materia: 'Desarrollo Ágil', aula: 'ACS', profesor: 'Vásquez Martínez Josué Israel', grupo: '8US' },
        { hora: '11:00-12:00', materia: 'Desarrollo En La Nube', aula: 'Aula: 4', profesor: 'Vásquez Martínez Josué Israel', grupo: '8US' },
        { hora: '14:00-16:00', materia: 'Taller De Investigacion II', aula: 'Aula: 9', profesor: 'Vásquez Martínez Josué Israel', grupo: '8US' }
    ]
});
</script>
<style scoped>
h1 {
    color: #060352;
    font-family: 'Pacifico', cursive;
    background-color: #79ecea;
    border-radius: 15px;
    padding: 15px;
    margin-bottom: 30px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.card {
    border-left: 5px solid #6a0dad;
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card h6 {
    font-size: 1rem;
}

.card p {
    margin: 0;
    font-size: 0.9rem;
}
</style>
