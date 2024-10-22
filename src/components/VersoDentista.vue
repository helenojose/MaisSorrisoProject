<template>
  <div class="allCont">
    <div style="display: flex; justify-content: center; align-items: center;" class="container">
      <SideBarProntuario />

      <div>Selecione ou modifique a parte frontal do prontuário</div>
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
              <tr v-for="(dente, index) in dentesInfo" :key="index">
                <td><span>{{new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear()}}</span></td>
                <td><span>{{ dente.denteId }} - {{tratarServicosRecebidos(dente.servicos)}}</span></td>
                <td>
                  <select name="" id="tratamentos">
                    <option value="6">LIMPEZA</option>
                    <option value="7">CLAREAMENTO</option>
                    <option value="8">APARELHOS ORTODONTICOS</option>
                    <option value="9">TRATAMENTO DE GENGIVAS</option>
                    <option value="10">FACETAS</option>
                    <option value="11">MANUTENCAO</option>
                    <option value="12">FRENECTOMIA</option>
                    <option value="13">REMOCAO DE LESAO PATOLOGICA</option>
                    <option value="14">REGULARIZACAO DE REBORDO ALVEOLAR</option>
                    <option value="15">PROTESE ADESIVA</option>
                    <option value="16">AUMENTO COROA CLINICA</option>
                    <option value="17">GENGIVOPLASTIA</option>
                    <option value="18">PROVISORIO</option>
                    <option value="19">PLACA BRUXISMO</option>
                    <option value="20">CONTENCAO</option>
                  </select>
                </td>
                <td>{{getUser()}}</td>
                <td>R$<input maxlength="5" type="number"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="observacoes">
          <label for="observacoes">Observações do Paciente:</label>
          <textarea id="observacoes" rows="4"></textarea>
        </div>
      </div>
    </div>
    <button @click="esconderVerso" class="img-button-voltar">
      <span>FRENTE</span> <img src="../img/Voltar - Vermelho.png" alt="Salvar" class="iconVoltar">
  </button>
  </div>
  </template>
  
  <script>
  import SideBarProntuario from '@/components/SideBarProntuario.vue';

import { mapState } from 'vuex';
  
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
      getUser(){
        return sessionStorage.getItem('user')
      },

      adicionarLinha() {
        this.linhas.push({ data: '', dente: '', tratamento: '', dentista: '', valor: '' });
      },
      removerLinha(index) {
        this.linhas.splice(index, 1); 
      },
      esconderVerso(){
        this.$store.commit('hideVerso');
      },
      tratarServicosRecebidos(servicos){
        let servicosString = ''
        servicos.forEach((servico, index) => {
          if(index != 0 && index != servico.length - 1){
            servicosString += `, ${servico}`
          }else{
            servicosString += ` ${servico}`
          }
        })
        return servicosString;
      }
    },
    computed: {
        ...mapState(['frenteActive', 'dentesInfo']),
    }
  };
  </script>
  
  <style scoped>

  #tratamentos{
    background-color: #ccc;
    border: #bbb9b9 solid;
    outline: none;
    height: 40px;
  }

  .allCont{
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  .iconVoltar{
    height: 30px;
  }
  .container {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    flex-direction: column;
  }
  
  .area {
    background-color: #ccc;
    border-radius: 20px;
    padding: 20px;
    width: 85%;
    height: 800px;
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

  .img-button-voltar{
    display: flex;
    align-items: center;
    border: none;
    color: #752025;
    font-weight: bolder;
    font-size: 16px;
    cursor: pointer;
    border-radius: 3px;
    margin-top: 20px;
  }
  </style>
  