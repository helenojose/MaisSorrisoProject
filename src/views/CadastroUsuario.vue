<template>
  <div class="Page-Container">
    <div class="menu">
      <div class="tittle-menu">
        <h1>Cadastro</h1>
      </div>
    <form @submit.prevent="fazerCadastro">
      <label for="name">Nome</label>
      <input v-model="name" type="text" id="name" required />

      <label for="email">Email</label>
      <input v-model="email" type="email" id="email" required />

      <label for="password">Senha</label>
      <input v-model="password" type="password" id="password" required />

       <!-- Seção de escolha do tipo de usuário -->
      <div>
        <h2>Selecione o tipo de usuário:</h2>
        <button 
          :class="{ selected: userType === 'dentista' }" 
          type="button"  
          @click="selectUser('dentista')">Dentista</button> <!-- Mudar o tipo do botão para evitar submit -->
        <button 
          :class="{ selected: userType === 'recepcionista' }" 
          type="button" 
          @click="selectUser('recepcionista')">Recepcionista</button>  <!-- Mudar o tipo do botão para evitar submit -->
      </div>

      <button type="submit">Cadastrar</button>
    </form>
     <!-- Exibir mensagem de erro se o tipo de usuário não foi selecionado -->
    <p v-if="showErrorMessage" class="error-message">Por favor, selecione um tipo de usuário.</p>
  </div>
    </div>
    
</template>

<script>
export default {
  name: 'CadastroUsuario',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      userType: null, // Tipo de usuário selecionado (dentista ou recepcionista)
      showErrorMessage: false // Controle de exibição da mensagem de erro
    };
  },
  created() {
    const savedUserType = localStorage.getItem('userType');
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    
    // Redireciona diretamente para a home se o usuário já estiver logado
    if (savedUserType && isLoggedIn) {
      this.$router.push(`/home/${savedUserType}`);
    }
  },
  methods: {
    // Método para selecionar o tipo de usuário
    selectUser(user) {
      this.userType = user;
      this.showErrorMessage = false; // Remove a mensagem de erro ao selecionar um usuário
    },
    // Método para realizar o cadastro
    fazerCadastro() {
      if (this.userType) {
        // Armazena o tipo de usuário e marca como logado
        localStorage.setItem('userType', this.userType);
        sessionStorage.setItem('isLoggedIn', true);

        // Redireciona diretamente para a página de login correspondente
        if (this.userType === 'dentista') {
          this.$router.push('/login/dentista');
        } else if (this.userType === 'recepcionista') {
          this.$router.push('/login/recepcionista');
        }
      } else {
        alert('Selecione o tipo de usuário antes de cadastrar.');
      }
    }
  }
};
</script>

<style scoped>
/* Estilos para indicar o botão selecionado */
button.selected {
  background-color: #4CAF50;
  color: white;
}

/* Estilo para a mensagem de erro */
.error-message {
  color: red;
  font-weight: bold;
}


.Page-Container{
  display: flex; /* Alinha itens no centro horizontalmente */
  align-items: center; /* Alinha itens no centro verticalmente */
  justify-content: center; /* Alinha itens no centro horizontalmente */
  text-align: center; /* Centraliza o texto */
  background: linear-gradient(to top, #42060A, #752025); /* Gradiente de fundo */
  height: 100vh; /* Altura total da tela */
  margin: 0; /* Remove margens */
}

/* Estilos para o título do menu */
.tittle-menu{
  padding: 2.7rem; /* Espaçamento interno */
}

/* Estiliza o h1 do título */
.tittle-menu h1{
  font-size: 1.2rem;  
}

/* Estiliza o parágrafo do título */
.tittle-menu p{
  font-size: 0.7rem; /* Tamanho da fonte */
  font-weight: bold; /* Negrito */
  color: #646464; /* Cor do texto */
}

.menu{
  width: 350px; /* Largura do menu */
  height: 70vh; /* Altura do menu */
  border: 1px solid black; /* Borda do menu */
  border-radius: 1rem; /* Cantos arredondados */
  align-items: center; /* Alinha itens ao centro */
  justify-content: center; /* Alinha itens ao centro */
  background: white; /* Cor de fundo do menu */
}

button {
  width: 300px; /* Largura do botão */
  height: 6vh; /* Altura do botão */
  box-shadow: 2px 1px 8px 2px rgba(161, 161, 161, 0.5); /* Sombra do botão */
  border: none; /* Sem borda */
  transition: background-color 0.3s, color 0.3s; /* Transição suave para mudança de cor */
  cursor: pointer; /* Cursor em forma de ponteiro ao passar o mouse */
  font-size: 0.8rem; /* Tamanho da fonte */
  font-weight: 700; /* Peso da fonte */
  color: #646464; /* Cor do texto */
  background-color: white; /* Cor de fundo do botão */
}

/* Efeito hover do botão */
button:hover {
  background-color: #42060A; /* Cor de fundo ao passar o mouse */
  color: white; /* Cor do texto ao passar o mouse */
}

.button-confirmed:hover button{
  color: white; /* Cor do texto ao passar o mouse no botão de confirmar */
}

button.selected {
  background-color: #42060A; /* Cor de fundo quando o botão está selecionado */
  color: white; /* Cor do texto quando o botão está selecionado */
}

.dentista {
  padding: 1rem; /* Espaçamento interno para dentista */
}

.recep {
  padding: 1rem; /* Espaçamento interno para recepcionista */
}

.button-confirmed button {
  width: 120px; /* Largura do botão de confirmação */
  height: 6vh; /* Altura do botão de confirmação */
  box-shadow: 0px 4px 4px rgba(161, 161, 161, 0.5); /* Sombra do botão de confirmação */
  border: none; /* Sem borda */
  transition: background-color 0.5s, color 0.5s; /* Transição suave para mudança de cor */
  cursor: pointer; /* Cursor em forma de ponteiro ao passar o mouse */
  color: #646464; /* Cor do texto do botão de confirmação */
}

.button-confirmed {
  padding: 2rem; /* Espaçamento interno */
}

</style>