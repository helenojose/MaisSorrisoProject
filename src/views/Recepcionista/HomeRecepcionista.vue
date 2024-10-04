<template>
  <div>
    <h1>Home Recepcionista</h1>
    <p>Bem-vindo, Recepcionista!</p>
  </div>
</template>

<script>
export default {
  name: 'HomeRecepcionista',
  created() {
    // Verifica se o usuário está logado
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn) {
      // Se não estiver logado, redireciona para a página de login
      this.$router.push('/login/recepcionista');
    }
  }
};
</script>