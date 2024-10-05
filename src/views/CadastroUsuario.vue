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
import { cadastrarUsuario } from '@/services/api'; // Importa a função do serviço

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
    async fazerCadastro() {
      try {
        // Prepara os dados para enviar à API
        const usuario = {
          nome: this.name,
          email: this.email,
          senha: this.password
        };
        
        // Chama a função cadastrarUsuario do api.js
        const response = await cadastrarUsuario(usuario);
        
        console.log('Cadastro realizado com sucesso!', response.data);
        this.$router.push('/login');
      } catch (error) {
        console.error('Erro ao cadastrar o usuário:', error);
      }
    }
  }
};
</script>