<template>
  <div class="Page-Container">
    
    <div class="menu">
      <div class="tittle-menu">
        <h1>BEM-VINDO(A) DE VOLTA.</h1>
        <p>SELECIONE O TIPO DE USUÁRIO<br> QUE DESEJA FAZER LOGIN:</p>
      </div>
      
      <div class="dentista">
         <button @click="selectUser('dentista')" :class="{ selected: userType === 'dentista' }">
          DENTISTA
          </button>
      </div>
      <div class="recep">
        <button @click="selectUser('recepcionista')" :class="{ selected: userType === 'recepcionista' }">
          RECEPCIONISTA
          </button>
      </div>
      <div class="button-confirmed">
        <button @click="confirmSelection">
          CONFIRMAR
        </button>
      </div>
    
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'LoginEscolha', // Nome do componente
  data(){
     return {
      userType: null, // Variável para armazenar a escolha do tipo de usuário (dentista ou recepcionista)
     };
  },
  created() {
    // Verifica se o usuário já selecionou um tipo anteriormente
    const savedUserType = localStorage.getItem('userType'); // Obtém o tipo de usuário salvo
    const isLoggedIn = sessionStorage.getItem('isLoggedIn'); // Verifica se o usuário está logado

    if (savedUserType && isLoggedIn) {
      // Se já foi escolhido um tipo e o usuário está logado, redireciona para a home correspondente
      this.$router.push(`/home/${savedUserType}`);
    }
  },
  methods: {
    selectUser(user) {
      this.userType = user; // Armazena o tipo de usuário selecionado
    },
    confirmSelection() {
      if (this.userType) {
        // Se um tipo de usuário foi selecionado, armazena no localStorage
        localStorage.setItem('userType', this.userType);
        // Redireciona para a página de login correspondente ao tipo de usuário
        this.$router.push(`/login/${this.userType}`);
      } else {
        // Se nenhum tipo foi selecionado, exibe um alerta
        alert('Por favor, selecione um tipo de usuário antes de confirmar.');
      }
    }
  }
}
</script>

<style scoped>
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