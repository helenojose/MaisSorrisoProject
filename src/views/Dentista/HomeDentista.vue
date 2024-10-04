<template>
  <div>
    <h1>Home Dentista</h1>
    <p>Bem-vindo, Dentista!</p>
  </div>
</template>

<script>
export default {
  name: 'HomeDentista',
  created() {
    // Verifica se o usuário está logado
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn) {
      // Se não estiver logado, redireciona para a página de login
      this.$router.push('/login/dentista');
    }
  }
};
</script>