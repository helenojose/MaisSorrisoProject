<template>
    <div class="container">
      <SideBarProntuario />
      <div class="area">
        <div class="tabela-container"> 
          <table id="tabela">
            <thead>
              <tr>
                <th>Data</th>
                <th>Dente</th>
                <th>Tratamentos Realizados</th>
                <th>Dentista</th>
                <th>Valor</th>
                
              </tr>
            </thead>
            <tbody>
              <tr v-for="(linha, index) in linhas" :key="index">
                <td><input type="date" v-model="linha.data" /></td>
                <td><input type="text" v-model="linha.dente" /></td>
                <td><input type="text" v-model="linha.tratamento" /></td>
                <td><input type="text" v-model="linha.dentista" /></td>
                <td><input type="text" v-model="linha.valor" /></td>
                <button @click="removerLinha(index)"><img src="/src/img/lixeiraicon.png" alt=""></button>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <button @click="adicionarLinha"><img src="/src/img/addicon.png" alt=""></button>
        </div>
        <div class="observacoes">
          <label for="observacoes">Observações do Paciente:</label>
          <textarea id="observacoes" rows="4"></textarea>
        </div>
        <button><img src="/src/img/" alt="salvaricon"></button>
      </div>
    </div>
  </template>
  
  <script>
  import SideBarProntuario from '@/components/SideBarProntuario.vue';
  
  export default {
    name: 'VersoDentista',
    components: { SideBarProntuario },
    data() {
      return {
        linhas: [
          { data: '', dente: '', tratamento: '', dentista: '', valor: '' },
        ],
      };
    },
    methods: {
      adicionarLinha() {
        this.linhas.push({ data: '', dente: '', tratamento: '', dentista: '', valor: '' });
      },
      removerLinha(index) {
        this.linhas.splice(index, 1); 
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }
  
  .area {
    margin-top: 50px;
    background-color: #ccc;
    border-radius: 20px;
    padding: 20px;
    width: 85%;
    margin-left: 110px;
  }
  
  .tabela-container {
    max-height: 300px; 
    overflow-y: auto; 
  }
  
  #tabela {
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
  }
  
  td {
    padding: 12px;
    text-align: left;
    border: 2px solid black;
  }
  
  input {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  
  .observacoes {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    background-color: #ccc;
    padding: 20px;
  }
  
  textarea {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    resize: none;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
  }
  
  button:hover {
    
    transform: scale(1.08);
  }
  </style>
  