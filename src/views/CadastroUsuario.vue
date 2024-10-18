<template>
    <div class="Page-Container">
      <div class="logo">
        <img :src="require('@/assets/images/logo.png')" alt="Logo">
      </div>
      <div class="menu">
        <div class="tittle-menu">
          <h1>NOVA CONTA</h1>
          <p>PREENHA AS INFORMAÇÕES ABAIXO, E SELECIONE O TIPO DE CADASTRO QUE DESEJA CRIAR</p>
        </div>
        <form @submit.prevent="cadastrarUsuario">

          <div class="group-input">
            <div>
              <input 
                v-model="nome" 
                type="text" 
                id="name" 
                required 
                placeholder="Digite seu nome"
              />
            </div>
            
            <div>
              <input 
                v-model="login"
                type="username"
                id="username" 
                required 
                placeholder="Digite seu usuário"
            />
            </div>

            <div>
              <input 
                v-model="email" 
                type="email" 
                id="email" 
                required 
                placeholder="Digite seu E-mail"
              />
            </div>

            <div>
              <input 
                v-model="senha"
                type="password"
                id="password" 
                required 
                placeholder="Digite sua senha"
              />
            </div>
          </div>

          <div>
            <div class="button-group"> 
              <div class="dentista">
                <button 
                :class="{ selected: userType === 1 }" 
                type="button"  
                @click="selectUser(1)">Dentista</button>
              </div>
              <div class="recep">
                <button 
                :class="{ selected: userType === 2 }" 
                type="button" 
                @click="selectUser(2)">Recepcionista</button>
              </div>
              </div>
              <div class="button-register">
                <button type="submit">Cadastrar</button>
              </div>
          </div>
          
        </form>
        <!-- Exibir mensagem de erro se o tipo de usuário não foi selecionado -->
        <p v-if="showErrorMessage" class="error-message">Por favor, selecione um tipo de usuário.</p>
        
        </div>
      </div>
  
</template>

<script>
import { cadastrarUsuario } from '../services/api';

export default {
  name: 'CadastroUsuario',
  data() {
    return {
      nome: '',
      login: '',
      email: '',
      senha: '',
      userType: '',
      showErrorMessage: false,
    };
  },
  methods: {
    selectUser(type) {
      this.userType = type;
      this.showErrorMessage = false; // Oculta a mensagem de erro ao selecionar o tipo de usuário
    },
    async cadastrarUsuario() {
      if (this.userType) {
        // Crie o objeto com os dados do usuário
        const usuario = {
          nome: this.nome,
          login: this.login,
          email: this.email,
          senha: this.senha,
          userType: this.userType,
        };
        try {
          // Chame a função de cadastro da API
          await cadastrarUsuario(usuario);
          // Armazene as informações localmente após o sucesso
          localStorage.setItem('userData', JSON.stringify(usuario));
          localStorage.setItem('userType', this.userType);

          // Redirecione com base no tipo de usuário
          if (this.userType === 1) {
            this.$router.push('/login/dentista');
          } else if (this.userType === 2) {
            this.$router.push('/login/recepcionista');
          }
        } catch (error) {
          console.error('Erro ao cadastrar usuário:', error);
        }
      } else {
        this.showErrorMessage = true; // Exibe mensagem de erro se o tipo de usuário não foi selecionado
      }
    },
  },
};
</script>

<style scoped>

.Page-Container {
  display: flex;
  flex-direction: column; /* Empilha os elementos verticalmente */
  align-items: center; /* Centraliza os itens no eixo horizontal */
  justify-content: center; /* Centraliza os itens no eixo vertical */
  text-align: center; /* Centraliza o texto */
  background: linear-gradient(to top, #42060A, #752025); /* Gradiente de fundo */
  height: 100vh; /* Altura total da tela */
  margin: 0; /* Remove margens */
}

.logo {
  margin-top: -1rem; /* Espaço entre a logo e o menu */
}

.logo img {
  width: 350px; /* Ajuste o tamanho da logo conforme necessário */
  max-width: 90%; /* Garante que a logo se ajuste ao tamanho do contêiner */
}

/* Estilo padrão para todas as telas */
.menu {
  flex-direction: column;
  width: 300px; /* Largura do menu */
  height: auto; /* Ajusta a altura com base no conteúdo */
  border: 1px solid black; /* Borda do menu */
  border-radius: 1rem; /* Cantos arredondados */
  background: white; /* Cor de fundo do menu */
  text-align: center;
  padding: 1rem;
}

/* Estilos para o título do menu */
.tittle-menu{
  padding: 1.7rem; /* Espaçamento interno */
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
  margin-bottom: -1rem;
}

.group-input input{
  border: none;
  box-shadow: 2px 2px 8px 3px rgba(161, 161, 161, 0.5); /* Sombra do botão */
  padding: 0.5rem;
  margin: 0.5rem;
  width: 245px;
}

/* Estilos para o grupo de botões de usuário */
.button-group {
  display: flex; /* Define um layout flexível */
  justify-content: center; /* Centraliza os botões horizontalmente */
  margin-bottom: 20px; /* Espaço abaixo do grupo de botões */
}
.button-group button{
  width: 120px; /* Largura do botão */
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

.button-register button{
  width: 120px; /* Largura do botão */
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

.button-back button{
  border: none;
}

/* Efeito hover do botão */
.button-register:hover button{
  background-color: #42060A; /* Cor de fundo ao passar o mouse */
  color: white; /* Cor do texto ao passar o mouse */
}

.button-group button.selected {
  background-color: #42060A; /* Cor de fundo para o botão selecionado */
  color: white; /* Cor do texto para o botão selecionado */
}

.dentista:hover button {
  background-color: #42060A; /* Cor de fundo quando o botão está selecionado */
  color: white; /* Cor do texto quando o botão está selecionado */
}

.recep:hover button {
  background-color: #42060A; /* Cor de fundo quando o botão está selecionado */
  color: white; /* Cor do texto quando o botão está selecionado */
}

.dentista {
  padding: 1rem 1rem; /* Espaçamento interno para dentista */
}

.recep {
  padding: 1rem 1rem; /* Espaçamento interno para recepcionista */
}

/* Estilo para a mensagem de erro */
.error-message {
  color: red;
  font-weight: bold;
}

/* Para telas grandes (ex: 24 polegadas) */
@media (min-width: 1440px) { /* A partir de 1440px, aproximadamente 24 polegadas */
  .menu {
    margin: 180px; /* Margem para telas grandes */
    margin-top: -100px;
    padding: 35px;
  }

  .tittle-menu h1{
    font-size: 1.7rem;
    padding-bottom: 2rem;
  }

  .tittle-menu p{
    font-size: 0.8rem;
    padding-bottom: 1rem;
  }

  .logo {
    margin-bottom: 30px;
    padding: -100px;
    width: 500px
  }

  .group-input{
    margin-left: -1.4rem;
  }

  .group-input input{
    padding: 0.7rem;
    margin: 0.7rem;
    width: 300px;
  }

  .button-group {
    width: 300px;
    height: 5vh;
    display: flex; /* Define um layout flexível */
    justify-content: center; /* Centraliza os botões horizontalmente */
    gap: 10px; /* Espaço entre os botões */
    margin-bottom: 20px; /* Espaço abaixo do grupo de botões */
  }
  .button-group button{
    width: 140px;
    height: 4vh;
  }
  .button-register button{
    width: 140px;
    height: 4vh;
  }

}

/* Para telas médias e pequenas (ex: 14 polegadas) */
@media (max-width: 1440px) and (min-width: 768px) { /* Entre 768px e 1440px */
  .menu {
    margin: 100px; 
    padding: 4px;
    margin-top: -100px;
  }
  .logo {
    margin-bottom: 30px;
    padding: -100px;
    width: 300px
  }
  .button-group {
    width: 300px;
    height: 6vh;
    display: flex; /* Define um layout flexível */
    justify-content: center; /* Centraliza os botões horizontalmente */
    gap: 10px; /* Espaço entre os botões */
    
  }
  .button-group button{
    width: 110px;
    height: 4.5vh;
    
  }
  .button-register button{
    width: 120px;
    height: 4.5vh;
    margin-bottom: 20px; /* Espaço abaixo do grupo de botões */
  }


}

/* Para telas menores que 768px, ajuste a margem se necessário */
@media (max-width: 768px) {
  .menu {
    margin: 20px; /* Margens menores para telas muito pequenas, se necessário */
  }
}


</style>