<template>
   <div class="page-container">
      <div class="logo">
        <img :src="require('@/assets/images/logo.png')" alt="Logo">
      </div>
      <div class="container">
        <div class="tittle-container">
          <h1>LOGIN RECEPCIONISTA</h1>
          <p>DIGITE SEU USUÁRIO E SENHA PARA FAZER LOGIN :</p>
        </div>
     
      <div class="group-input">
        <div>
          <input 
            id="user" 
            type="text" 
            placeholder="USUÁRIO" 
            v-model="username"
          />
        </div>

        <div>
          <input 
            id="password" 
            type="password" 
            placeholder="SENHA" 
            v-model="password"
          />
        </div>

        <div class="button-container">
          <input type="checkbox" name="Lembrar senha" id="lembrar-senha" />
          <label for="lembrar-senha">Lembrar senha</label>
          <button @click="verificar">ENTRAR</button>
        </div>
      </div>

      <div class="text-password">
        <h3>Esqueci minha senha</h3>
      </div> 
      
      </div>
   </div>
    
</template>

<script>
import { loginRecepcionista } from '@/services/api';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async verificar() {
      try {
        const credenciais = {
          username: this.username,
          password: this.password
        };

        // Faz a requisição de login para a API
        await loginRecepcionista(credenciais);

        // Armazena a sessão e redireciona para a home do recepcionista
        sessionStorage.setItem('isLoggedIn', 'true');
        this.$router.push('/home/recepcionista');
      } catch (error) {
        alert('Usuário ou senha incorretos!');
        console.error('Erro ao fazer login:', error);
      }
    }
  },
  created() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      this.$router.push('/home/recepcionista');
    }
  }
};
</script>

<style scoped>
/* Centraliza a box de login na tela */
.page-container {
  display: flex;
  flex-direction: column; /* Empilha os elementos verticalmente */
  align-items: center; /* Centraliza os itens no eixo horizontal */
  justify-content: center; /* Centraliza os itens no eixo vertical */
  text-align: center; /* Centraliza o texto */
  background: linear-gradient(to top, #42060A, #752025); /* Gradiente de fundo */
  height: 100vh; /* Altura total da tela */
  margin: 0; /* Remove margens */
}

.container {
 flex-direction: column;
  width: 300px; /* Largura do menu */
  height: auto; /* Ajusta a altura com base no conteúdo */
  border: 1px solid black; /* Borda do menu */
  border-radius: 1rem; /* Cantos arredondados */
  background: white; /* Cor de fundo do menu */
  text-align: center;
  padding: 1rem;
  font-family: Lexend;
}

/* Estilização do checkbox sobrescrevendo a estilização dos inputs */
#lembrar-senha {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.0);
  width: 30px; 
  padding: 0px; 
  margin-bottom: 2px; 
  border: 1.5px solid #ccc;
}

.logo {
  margin-top: 2rem; /* Espaço entre a logo e o menu */ 
  
}

.logo img {
   width: 350px; /* Ajuste o tamanho da logo conforme necessário */
  max-width: 90%; /* Garante que a logo se ajuste ao tamanho do contêiner */
}

/* Estilos para o título do menu */
.tittle-container{
  padding: 1.7rem; /* Espaçamento interno */
}

/* Estiliza o h1 do título */
.tittle-container h1{
  font-size: 1rem;  
}

/* Estiliza o parágrafo do título */
.tittle-container p{
  font-size: 0.7rem; /* Tamanho da fonte */
  font-weight: bold; /* Negrito */
  color: #646464; /* Cor do texto */
  margin-bottom: -1rem;
}

/* Estilização dos inputs */
.group-input input {
  border: none;
  box-shadow: 2px 2px 8px 3px rgba(161, 161, 161, 0.5); /* Sombra do botão */
  padding: 0.5rem;
  margin: 0.5rem;
  width: 245px;
  font-family: Lexend;
  font-weight: bold;
}

/* Estilização para ficar do lado do button */
.button-container {
  display: flex;
  align-items: center; 
  margin-top: 20px; 
}

/* Estiliza o botão */
button {
  width: 100px; 
  padding: 8px; 
  background-color: white;
  color: #752025;
  border: none;
  cursor: pointer;
  font-size: 14px; 
  margin-left: 46px;
  box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: bold;
}

button:hover {
  background-color: #F0F0F0;
}



.button-container input{
  margin-right: -2rem;
  border: none;
  box-shadow: 2px 2px 8px 3px rgba(161, 161, 161, 0.5); /* Sombra do botão */
}

label{
  font-weight: 500;
  font-size: 12px;
  width: 121px;
  margin-left: 1rem;
  margin-top: 0.33rem;
}

/* Estiliza o link "Esqueci minha senha" */
.text-password h3 {
  color: #4e4e4e;
  font-size: 14px; 
  cursor: pointer;
  text-decoration: underline;
  margin-top: 85px;
}

.text-password:hover h3{
  color: black;
}



/* Para telas grandes (ex: 24 polegadas) */
@media (min-width: 1440px) { /* A partir de 1440px, aproximadamente 24 polegadas */
  .container {
    margin: 180px; /* Margem para telas grandes */
    margin-top: -100px;
    padding: 35px;
  }

  .tittle-container h1{
    font-size: 1.7rem;
    padding-bottom: 2rem;
  }

  .tittle-container p{
    font-size: 0.8rem;
    padding-bottom: 1rem;
  }

  .logo {
    margin-bottom: 30px;
    padding: -100px;
    width: 500px
  }

 
  .tittle-container h1{
    font-size: 1.2rem;  
  }


  .tittle-container p{
    font-size: 0.7rem;
    font-weight: bold; 
    color: #646464;
    margin-bottom: -1rem;
  }

  .group-input{
    margin-left: -1.4rem;
  }

  .group-input input{
    padding: 0.7rem;
    margin: 0.7rem;
    width: 300px;
  }

  .button-container {
    width: 300px;
    height: 5vh;
    display: flex; /* Define um layout flexível */
    justify-content: center; /* Centraliza os botões horizontalmente */
    gap: 10px; /* Espaço entre os botões */
    margin-bottom: 20px; /* Espaço abaixo do grupo de botões */
    margin-left: 1.5rem;
    
  }
  .button-container button{
    width: 140px;
    height: 4vh;
    
  }
  
  .button-container input{
  margin-right: -2rem;
  border: none;
  box-shadow: 2px 2px 8px 3px rgba(161, 161, 161, 0.5); /* Sombra do botão */
}

  .button-container label{
    font-weight: 500;
    font-size: 12px;
    width: 121px;
    margin-top: 0.35rem;
  }
}

/* Para telas médias e pequenas (ex: 14 polegadas) */
@media (max-width: 1440px) and (min-width: 768px) { /* Entre 768px e 1440px */
  .container {
    margin: 100px; 
    padding: 4px;
    margin-top: -100px;
  }
  .logo {
    margin-bottom: 30px;
    padding: -100px;
    width: 300px
  }
  .button-container {
    width: 300px;
    height: 6vh;
    display: flex; /* Define um layout flexível */
    justify-content: center; /* Centraliza os botões horizontalmente */
    gap: 10px; /* Espaço entre os botões */
    
  }
  .button-container button{
    width: 110px;
    height: 4.5vh;
    margin-right: 1.5rem;
    
  }
}

/* Para telas menores que 768px, ajuste a margem se necessário */
@media (max-width: 768px) {
  .menu {
    margin: 20px; /* Margens menores para telas muito pequenas, se necessário */
  }
}

</style>