<script>
</script>

<template>
    <div id="app">

        <div class="container">

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">

                    <div class="container-fluid">
                        <router-link class="navbar-brand" to="/home">Menú</router-link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                            style="--bs-scroll-height: 100px;">

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Calculadora
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item">
                                            <router-link to="/CalculadoraV1">CalculadoraV1</router-link>
                                        </a>
                                    </li>
                                    <li><a class="dropdown-item">
                                            <router-link to="/CalculadoraV2">CalculadoraV2</router-link>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Recorrido
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item">
                                            <router-link to="/Recorrido1">Lista Ejemplo</router-link>
                                        </a>
                                    </li>
                                    <li><a class="dropdown-item">
                                            <router-link to="/Recorrido">Lista</router-link>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Eventos
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item">
                                            <router-link to="/Eventos">Eventos</router-link>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Tabla
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item">
                                            <router-link to="/Horario1">Horario Ejemplo</router-link>
                                        </a>
                                    </li>
                                    <li><a class="dropdown-item">
                                            <router-link to="/Horario">Horario</router-link>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Props
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item">
                                            <router-link to="/Padre">Padre</router-link>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped></style>
