<template>
  <div>
    <h1>Escolha o Tipo de Login</h1>
    <router-link to="/login/dentista">Login Dentista |</router-link>
    <router-link to="/login/recepcionista">| Login Recepcionista</router-link>
  </div>
</template>

<script>
export default {
  name: 'LoginEscolha'
};
</script>