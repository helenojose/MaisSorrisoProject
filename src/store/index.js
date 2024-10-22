import { createStore } from 'vuex';
import { getPaciente } from '../services/api';  // Importar o método da API

export default createStore({

    state: {
        dentesInfo: [],
        frenteActive: true,
        atendimentosConcluidos: []
    },

    mutations: {
        showVerso(state) {
            state.frenteActive = false;
        },
        hideVerso(state) {
            state.frenteActive = true;
        },
        ADD_ATENDIMENTO(state, atendimento) {
            state.atendimentosConcluidos.push(atendimento);
        },
        SET_PACIENTE_ATUAL(state, paciente) {
            state.pacienteAtual = paciente; // Armazena o paciente no estado
        }
    },

    actions: {
        async adicionarAtendimento({ commit }, codPaciente) {
            try {
                const paciente = await getPaciente(codPaciente); // Busca paciente pela API
                commit('SET_PACIENTE_ATUAL', paciente); // Armazena o paciente atual no Vuex
                commit('ADD_ATENDIMENTO', paciente);    // Adiciona o paciente nos atendimentos concluídos
            } catch (error) {
                console.error('Erro ao adicionar atendimento:', error);
            }
        }
    }
});