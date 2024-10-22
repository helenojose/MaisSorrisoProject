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
            codPaciente:"2"
          }]
    },

    mutations:{
        showVerso(state){
            state.frenteActive = false;
        },
        hideVerso(state){
            state.frenteActive = true;
        },
        ADD_ATENDIMENTO(state, atendimento) {
            state.atendimentosConcluidos.push(atendimento);
        }
    },

    actions: {
        adicionarAtendimento({ commit }, atendimento) {
          commit('ADD_ATENDIMENTO', atendimento);
        }  
    }    
})