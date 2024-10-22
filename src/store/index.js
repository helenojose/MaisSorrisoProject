import { createStore } from 'vuex'

export default createStore({
    state: {
        dentesInfo: [],
        frenteActive: true,
        atendimentosConcluidos: [{
            nome: "Lukas Rodrigues",
            cpf: "99999999900",
            cpfResponsavel:'',
            dataNascimento:'2005/10/10',
            contato:"2874821578",
            sexo:"Masculino",
            codPaciente:"1"
          }],
          atendimentosEmAndamento: [{
            nome: "Lukas Rodrigues",
            cpf: "99999999900",
            cpfResponsavel:'',
            dataNascimento:'2005/10/10',
            contato:"2874821578",
            sexo:"Masculino",
            codPaciente:"3"
          }],
          
    },

    mutations:{
        showVerso(state){
            state.frenteActive = false;
        },
        hideVerso(state){
            state.frenteActive = true;
        },
        ADD_ATENDIMENTO(state, atendimento) {
            state.atendimentosEmAndamento.push(atendimento);
        },
        MOVE_ATENDIMENTO(state, atendimento) {
            // Remove o atendimento de "em andamento" e adiciona ao histórico
            const index = state.atendimentosEmAndamento.indexOf(atendimento);
            if (index !== -1) {
              state.atendimentosEmAndamento.splice(index, 1);
              state.atendimentosConcluidos.push(atendimento);
            }
          },
        },

    actions: {
        adicionarAtendimento({ commit }, atendimento) {
          commit('ADD_ATENDIMENTO', atendimento);
        }, 
        moverParaHistorico({ commit }, atendimento) {
            commit('MOVE_ATENDIMENTO', atendimento);
          },
        },

    getters: {
        atendimentosConcluidos: state => state.atendimentosConcluidos,
        atendimentosEmAndamento: state => state.atendimentosEmAndamento,
      },
    });