<template>
  <div>
      <SideBarProntuario/>
      <p id="header">PROCEDIMENTO CONCLUÍDO ({{ atendimentosConcluidos.length }})</p>
      <div class="bloco concluido" v-for="atendimento in atendimentosConcluidos" :key="atendimento.numero">
          <div class="bloco-menor">
              <p class="numero">Nº {{ atendimento.codPaciente }}</p>
              <button @click="concluirAtendimento(atendimento)" class="atendimento-concluido">ATENDIMENTO CONCLUÍDO</button>
              <button @click="verFicha(atendimento.codPaciente)" class="visualizar">VISUALIZAR FICHA</button>
          </div>
      </div>
      
      <p id="header" style="margin-top: 40px;">HISTÓRICO DE ATENDIMENTOS ({{ atendimentosConcluidos.length }})</p>
      <div class="bloco concluido" v-for="atendimento in atendimentosConcluidos" :key="atendimento.codPaciente">
          <div class="bloco-menor">
              <p class="numero">Nº {{ atendimento.codPaciente }}</p>
              <button @click="verFicha(atendimento.codPaciente)" class="visualizar">VISUALIZAR FICHA</button>
          </div>
      </div>
  </div>
</template>

<script>
import SideBarProntuario from '@/components/SideBarProntuario.vue';
import { mapState } from 'vuex';

export default {
  name: "AtendimentosPaciente",
  components: {
      SideBarProntuario
  },
  computed: {
      ...mapState(['atendimentosConcluidos','atendimentosEmAndamento']),
  },
  methods: {
    verFicha(codPaciente){
        this.$router.push({ name: "FichaPaciente", params: { id: codPaciente } });
    },
     concluirAtendimento(atendimento) {
      // Dispara uma ação do Vuex para mover o atendimento
      this.$store.dispatch('moverParaHistorico', atendimento);
    }
  }
}
</script>

<style scoped>
/* Layout geral */
#header {
padding-left: 250px;
font-weight: bold;
margin-bottom: 20px;
}

/* Blocos */
.bloco {
display: flex;
justify-content: center;
margin-bottom: 20px;
}

.bloco-menor {
display: flex;
flex-direction: column;
align-items: center;
background-color: #f8f8f8;
width: 400px;
padding: 20px;
border-radius: 10px;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

/* Estilo do número */
.numero {
font-size: 24px;
font-weight: bold;
margin-bottom: 15px;
}

/* Botões */
button {
width: 250px;
height: 40px;
margin: 5px 0;
border-radius: 8px;
font-size: 16px;
font-weight: bold;
cursor: pointer;
border: none;
transition: background-color 0.3s ease, transform 0.2s ease;
}

/* Estilos individuais dos botões */
.visualizar {
background-color: #ccc;
color: white;
}

.atendimento-concluido {
background-color: #52b788;
color: white;
}

/* Efeitos de Hover */
button:hover {
transform: scale(1.05);
}
</style>
