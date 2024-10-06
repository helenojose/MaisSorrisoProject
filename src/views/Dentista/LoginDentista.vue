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
// import { loginDentista } from '@/services/api';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    fazerLogin() {
      console.log('Simulação de login dentista com sucesso!');
      sessionStorage.setItem('isLoggedIn', 'true');
      this.$router.push('/home/dentista');
    }
  },
  created() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      this.$router.push('/home/dentista');
    }
  }
};
</script>