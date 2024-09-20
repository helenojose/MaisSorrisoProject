<template>
  <div>
    <h1>Cadastro</h1>
    <form @submit.prevent="fazerCadastro">
      <label for="name">Nome</label>
      <input v-model="name" type="text" id="name" required />

      <label for="email">Email</label>
      <input v-model="email" type="email" id="email" required />

      <label for="password">Senha</label>
      <input v-model="password" type="password" id="password" required />

      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CadastroUsuario',
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    fazerCadastro() {
      console.log('Cadastro realizado com sucesso!');
      this.$router.push('/login');
    }
  }
};
</script>