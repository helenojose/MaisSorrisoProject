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
import { loginDentista } from '@/services/api'; // Importa a função do serviço

export default {
  data() {
    return {
      email: '', // Armazena o email do dentista
      password: '' // Armazena a senha do dentista
    };
  },
   methods: {
    async fazerLogin() {
      try {
        const credenciais = {
          email: this.email,
          senha: this.password
        };

      // Chama a função loginDentista do api.js
      const response = await loginDentista(credenciais);

      // Log de sucesso do login
      console.log('Login dentista realizado com sucesso!', response.data); 
      // Salva no sessionStorage indicando que o usuário está logado
      sessionStorage.setItem('isLoggedIn', 'true'); 
      // Redireciona para a home do dentista
        this.$router.push('/home/dentista');
      } catch (error) {
        console.error('Erro ao fazer login:', error);
      }
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