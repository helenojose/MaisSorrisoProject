<template>
  <div class="container">
      <div>
        <SideBar/>
      </div>
      <div class="Content-body">
          
        <form @submit.prevent="cadastrarPaciente" class="form-container">
          <h2>NOVO CADASTRO</h2>

          <div class="content-register">
            <h5 class="no-margin">
              Os campos obrigatórios estarão com um asterisco vermelho
              <span class="asterisk">(*)</span>
            </h5>
            <hr class="tight-hr" />
            <p class=" center-text tight-paragraph">
              <span class="obs-text">OBS:</span>
              <span class="obs-description">(Em caso da criança não possuir CPF, cadastre o do Responsável)</span>
            </p>
          </div>
         

       
          <div class="form-group">
            <label for="nomeCompleto">Nome Completo <span class="asterisk">*</span></label>
            <input type="text" v-model="form.nomeCompleto" id="nomeCompleto" placeholder="Digite o nome completo" required />
          </div>

          <div class="form-group">
            <label for="dataNascimento">Data de Nascimento <span class="asterisk">*</span></label>
            <input type="date" v-model="form.dataNascimento" id="dataNascimento" required />
          </div>

          <div class="form-group">
            <label for="cpf">CPF</label>
            <input type="text" v-model="form.cpf" id="cpf" placeholder="Digite o CPF" />
          </div>

          <div class="form-group">
            <label for="cpfResponsavel">CPF do Responsável</label>
            <input type="text" v-model="form.cpfResponsavel" id="cpfResponsavel" placeholder="Digite o CPF do responsável"/>
          </div>

          <div class="form-group">
            <label for="telefone">Telefone <span class="asterisk">*</span></label>
            <input type="tel" v-model="form.telefone" id="telefone" placeholder="Digite o telefone" required />
          </div>

           <div class="form-group">
            <label>Selecione o sexo do paciente</label>
            <div class="gender-options">
              <div class="gender-option">
                <label for="masculino">Masculino</label>
                <input type="radio" v-model="form.sexo" id="masculino" value="Masculino" />
              </div>
              <div class="gender-option">
                <label for="feminino">Feminino</label>
                <input type="radio" v-model="form.sexo" id="feminino" value="Feminino" />
              </div>
            </div>
          </div>

        <div class="button-register">
            <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SideBar from '../../components/SideBarProntuario.vue';

export default {
  components: {
    SideBar,
  },
  data() {
    return {
      form: {
        nomeCompleto: '',
        dataNascimento: '',
        cpf: '',
        cpfResponsavel: '',
        telefone: '',
        sexo: '',
      },
      fichaCounter: 1, // Adicionando contador de fichas
    };
  },
  methods: {
    cadastrarPaciente() {
      // Verificação básica
      if (this.form.nomeCompleto && this.form.dataNascimento && this.form.telefone && this.form.sexo) {
        // Lógica para cadastrar o paciente
        console.log('Paciente cadastrado:', this.form);

        // Redireciona após o cadastro
        this.$router.push({
          name: 'HomeProntuarios', // Nome da rota que você definiu
          params: {
            ficha: this.fichaCounter, // Passando o número da ficha sequencial
            nomeCompleto: this.form.nomeCompleto, // Passando o nome completo
            telefone: this.form.telefone, // Passando o telefone
          },
        });

        // Incrementa o contador de ficha
        this.incrementFichaCounter();

        // Limpar o formulário após o cadastro
        this.resetForm();
      } else {
        alert('Preencha todos os campos obrigatórios.');
      }
    },
    incrementFichaCounter() {
      this.fichaCounter += 1; // Incrementa o número da ficha
    },
    resetForm() {
      this.form = {
        nomeCompleto: '',
        dataNascimento: '',
        cpf: '',
        cpfResponsavel: '',
        telefone: '',
        sexo: '',
      };
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
}

.content-body {
  background-color: yellow;
  border-radius: 1rem;
  text-align: center;
  font-family: Lexend;
}

.form-container{
  width: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  background-color: #F1F0F0 ;
}

.form-container h2{
  text-align: center;
   margin-bottom: -1rem;
}

.no-margin {
  margin-bottom: 0;
}

.tight-hr {
  margin: 0;
  margin-bottom: 10px;
  border: none;
  border-top: 1px solid gray;
}

.tight-paragraph {
  margin-top: 0.25rem; 
  margin-top: -7px;
}

.asterisk {
  color: red; 
  font-weight: bold;
}

.obs-text {
  margin-top: 0;
  color: red; 
}

.obs-description {
  color: rgb(81, 81, 81); 
}

hr {
  margin: 1rem 0;
  border-top: 1px solid rgb(52, 52, 52); 
}

.form-container p{
  font-size: 12px;
  text-align: center;
}

.form-container h5{
  font-weight: 500;
  font-size: 14px;
  text-align: center;
}

/* Estilização da label para ficar acima e à esquerda */
.form-container label {
  display: block;
  text-align: left;
  margin-bottom: 0.5rem;
}

/* Para agrupar a label e input corretamente */
.form-group {
  margin-bottom: 1rem;
}

.form-container input {
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  box-shadow: 2px 1px 8px 2px rgba(161, 161, 161, 0.5);
  
}

.gender-options {
  display: flex;
  justify-content: flex-start; /* Alinha as opções à esquerda */
  gap: -1rem; /* Espaçamento entre as opções "Masculino" e "Feminino" */
  margin-bottom: 1rem;
}

.gender-option {
  display: flex;
  align-items: center; /* Alinha verticalmente o texto e o radio button */
}

.gender-option label {
  margin-right: 0.5rem; /* Espaço entre o label e o radio button */
}

.gender-option input[type="radio"] {
  appearance: none; /* Remove o estilo padrão */
  width: 16px;
  height: 16px;
  border: 1px solid #ccc; /* Adiciona uma borda leve */
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
}

.gender-option input[type="radio"]:checked {
  background-color: #4CAF50; /* Cor de fundo quando o radio está marcado */
  border-color: #4CAF50;
}

.button-register button{
  width: 120px; 
  height: 6vh; 
  box-shadow: 2px 1px 8px 2px rgba(161, 161, 161, 0.5); 
  border: none; 
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer; 
  font-size: 0.8rem; 
  font-weight: 700; 
  color: white;
  background-color: #42060A;
  margin: 0; 
  padding: 0.5rem 1rem; 
}

.button-register {
  display: flex; 
  justify-content: center;
  margin-bottom: 20px; 
  margin: 0;
  padding: 0;
}

.button-register:hover button{
  background-color: #6b0007; 
  color: rgb(255, 255, 255); 

}

.content {
  margin-left: 220px; 
  padding: 20px;
  flex-grow: 1;
}

.sidebar {
  width: 200px;
}

/* Para telas grandes (ex: 24 polegadas) */
@media (min-width: 1440px) { /* A partir de 1440px, aproximadamente 24 polegadas */
  .form-container{
    width: 600px;
    height: 80vh;
    padding: 3rem 2rem; /* Mantém o padding interno */
    margin-top: 10rem; /* Aumenta o espaço acima do formulário */
    margin-bottom: 10rem; /* Adiciona um sombreamento mais profundo */
  }

  .form-group{
    text-align: center;
    justify-content: center;
  }

  .form-group label{
    padding-left: 1.8rem;
    font-size: 18px;
    padding: 0.37rem;
  }

  .form-group input{
    max-width: 95%;
    height: 3vh;
    
  }

  .form-container h2{
    font-size: 26px;
    margin-top: -1rem;
    padding-bottom: 0.3rem;
  }
  .content-register h5{
    font-size: 16px;
    margin-bottom: 0.1rem;
  }
  .content-register p{
    font-size: 14px;
  }

  .gender-options{
    display: flex;
    justify-content: flex-start; /* Alinha as opções à esquerda */
    gap: -2rem; /* Espaçamento entre as opções "Masculino" e "Feminino" */
    margin-bottom: 1rem; 
  }
  .gender-option{
    gap: -1rem;
  }
  .gender-option input[type="radio"] {
    order: 2; /* Move o checkbox para depois do label */
    margin-left: -0.3rem; /* Cria um espaço entre o texto e o checkbox */
    margin-bottom: 0.5rem;
  }

  .button-register button{
    width: 140px;
    font-size: 12px;
    height: 5.5vh;
    border-radius: 1rem;
  }
  .button-register{
    margin-top: -1rem;
  }
}

/* Para telas médias e pequenas (ex: 14 polegadas) */
@media (max-width: 1440px) and (min-width: 768px) { /* Entre 768px e 1440px */
  
 .form-container{
    width: 450px;
    height: 78vh;
    padding: 3rem 2rem; /* Mantém o padding interno */
    margin-top: 10rem; /* Aumenta o espaço acima do formulário */
    margin-bottom: 10rem; /* Adiciona um sombreamento mais profundo */
  }

  .form-group{
    text-align: center;
    justify-content: center;
  }

  .form-group label{
    padding-left: 1.8rem;
    font-size: 12px;
  }

  .form-group input{
    max-width: 80%;
    height: 2vh;
    
  }

  .form-container h2{
    font-size: 20px;
    margin-top: -1rem;
    padding-bottom: 0.3rem;
  }
  .content-register h5{
    font-size: 11px;
    margin-bottom: 0.1rem;
  }
  .content-register p{
    font-size: 10px;
  }

  .gender-options{
    display: flex;
    justify-content: flex-start; /* Alinha as opções à esquerda */
    gap: -2rem; /* Espaçamento entre as opções "Masculino" e "Feminino" */
    margin-bottom: 1rem; 
  }
  .gender-option{
    gap: -1rem;
  }
  .gender-option input[type="radio"] {
    order: 2; /* Move o checkbox para depois do label */
    margin-left: -0.3rem; /* Cria um espaço entre o texto e o checkbox */
    margin-bottom: 0.5rem;
  }

  .button-register button{
    width: 140px;
    font-size: 12px;
    height: 5.5vh;
    border-radius: 1rem;
  }
  .button-register{
    margin-top: -1rem;
  }
 
}
</style>