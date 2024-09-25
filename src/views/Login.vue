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
  name: 'LoginEscolha',
  data(){
     return {
      userType: null, // Variável para armazenar a escolha do usuário
     };
  },
  methods: {
    selectUser(user) {
      this.userType = user;
    },
    confirmSelection(){
      if (this.userType) {
        this.$router.push(`/login/${this.userType}`);
      } else {
        alert('Por favor, selecione um tipo de usuário antes de confirmar.');
      }      
    }
  }
}
</script>

<style scoped>

.Page-Container{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(to top, #42060A, #752025);
  height: 100vh;
  margin: 0;
  
}

.tittle-menu{
  padding: 2.7rem;
}

.tittle-menu h1{
  font-size: 1.2rem;  
}

.tittle-menu p{
  font-size: 0.7rem;
  font-weight: bold;
  color: #646464;
}

.menu{
  width: 350px;
  height: 70vh;
  border: 1px solid black;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  background: white;
}

button {
  width: 300px;
  height: 6vh;
  box-shadow: 2px 1px 8px 2px rgba(161, 161, 161, 0.5);
  border: none;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 700;
  color: #646464;
  background-color: white; 
}


button:hover {
  background-color: #42060A;
  color: white;
}

.button-confirmed:hover button{
  color: white;
}


button.selected {
  background-color: #42060A;
  color: white;
}

.dentista {
  padding: 1rem;
}

.recep {
  padding: 1rem;
}

.button-confirmed button {
  width: 120px;
  height: 6vh;
  box-shadow: 0px 4px 4px rgba(161, 161, 161, 0.5);
  border: none;
  transition: background-color 0.5s, color 0.5s;
  cursor: pointer;
  color: #646464;
}

.button-confirmed {
  padding: 2rem;
}

</style>