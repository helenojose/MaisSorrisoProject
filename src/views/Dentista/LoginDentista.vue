<template>
  <div>
    <h1>Login Dentista</h1>
    <form @submit.prevent="fazerLogin">
      <label for="email">Email</label>
      <input v-model="email" type="email" id="email" required />

      <label for="password">Senha</label>
      <input v-model="password" type="password" id="password" required />

      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    fazerLogin() {
      console.log('Login dentista realizado com sucesso!');
      this.$router.push('/home/dentista');
    }
  }
};
</script>