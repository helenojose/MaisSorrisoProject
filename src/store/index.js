import { createStore } from 'vuex'

export default createStore({
    state: {
        dentesInfo: [],
        frenteActive: true,
        atendimentosConcluidos: []
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