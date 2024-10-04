<template>
  <div>
    <h1>Login Dentista</h1> <!-- Título da página de login do dentista -->
    <form @submit.prevent="fazerLogin"> <!-- Evita o comportamento padrão de submissão -->
      <label for="email">Email</label> <!-- Rótulo para o campo de email -->
      <input v-model="email" type="email" id="email" required /> <!-- Campo de entrada para email -->

      <label for="password">Senha</label> <!-- Rótulo para o campo de senha -->
      <input v-model="password" type="password" id="password" required /> <!-- Campo de entrada para senha -->

      <button type="submit">Entrar</button> <!-- Botão de submissão -->
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '', // Armazena o email do dentista
      password: '' // Armazena a senha do dentista
    };
  },
   methods: {
    fazerLogin() {
      console.log('Login dentista realizado com sucesso!'); // Log de sucesso do login
      // Salva no sessionStorage indicando que o usuário está logado
      sessionStorage.setItem('isLoggedIn', 'true'); 
      // Redireciona para a home do dentista
      this.$router.push('/home/dentista'); 
    }
  },
  created() {
    // Verifica se o usuário já está logado
    const isLoggedIn = sessionStorage.getItem('isLoggedIn'); 
    if (isLoggedIn) {
      // Se estiver logado, redireciona para a home do dentista
      this.$router.push('/home/dentista'); 
    }
  }
};
</script>