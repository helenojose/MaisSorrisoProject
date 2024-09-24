<template>
  <div>
    <div id="logo">
      <img src="img/LOGO_MS.png" alt="Logo MS">
    </div>
    
    <div class="box">
      <h1>LOGIN RECEPCIONISTA</h1>
      <h2>DIGITE SEU USUÁRIO E SENHA PARA LOGAR:</h2>

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
      
      <h3>Esqueci minha senha</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    verificar() {
      if (this.username === "" || this.password === "") {
        alert("É necessário preencher todos os campos!");
      } else {
        console.log("Usuario:" + this.username,"Senha:" +  this.password);
      }
    }
  }
};
</script>

<style>
/* Centraliza a box de login na tela */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  height: 100vh;
  margin: 0;
  background: linear-gradient(to top, #42060A, #752025);
}

/* Estilização do checkbox sobrescrevendo a estilização dos inputs */
#lembrar-senha {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.0);
  width: 30px; 
  padding: 0px; 
  margin-bottom: 2px; 
  border: 1.5px solid #ccc;
}

#logo {
  margin-bottom: 20px; /* Espaço entre a imagem e a box */
  text-align: center; /* Centraliza a imagem */
}

#logo img {
  max-width: 100%; /* Faz a imagem responsiva */
  height: auto; /* Mantém a proporção da imagem */
}

.box {
  width: 300px;
  height: 400px;
  padding: 60px 40px;
  background-color: #ECEAF4;
  border-radius: 10px;
  box-shadow: 0 14px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Lexend;
}

/* Estilização dos inputs */
input {
  width: 320px; 
  padding: 15px; 
  margin-bottom: 28px; 
  border: 1.5px solid #ccc;
  box-sizing: border-box;
  font-size: 14px; 
  box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.5);
  text-decoration: solid;
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
  font-family: Lexend;
  font-weight: bold;
}

button:hover {
  background-color: #F0F0F0;
}

h1 {
  font-size: 22px; /* Reduz o tamanho da fonte do título principal */
  margin-bottom: 15px;
}

h2 {
  font-size: 13px;
  max-width: 250px; 
  margin-bottom: 20px;
  text-align: center;
  color: #6d6d6d;
}

/* Estiliza o link "Esqueci minha senha" */
h3 {
  color: #4e4e4e;
  font-size: 14px; 
  cursor: pointer;
  text-decoration: underline;
  margin-top: 85px;
}

h3:hover {
  color: black;
}
</style>


