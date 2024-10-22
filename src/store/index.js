import { createStore } from 'vuex';

export default createStore({
    state: {
        dentesInfo: [],
        frenteActive: true,
        atendimentosConcluidos: [], // Inicializa como um array vazio
        historicoAtendimentos: [], // Adicione uma nova lista para o histórico
        allPacientes: [],
        userType: null
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
        MOVE_ATENDIMENTO_HISTORICO(state, atendimento) {
            state.historicoAtendimentos.push(atendimento); // Adiciona ao histórico
            state.atendimentosConcluidos = state.atendimentosConcluidos.filter(a => a !== atendimento); // Remove da lista de atendimentos concluídos
        },
        ADD_PACIENTE(state, paciente) {
            state.allPacientes.push(paciente);
        },
        SET_USER_TYPE(state, userType) {
            state.userType = userType;
        },
        LOGOUT(state) {
            state.userType = null; // Limpa o tipo de usuário ao sair
        },
    },
    actions: {
        adicionarAtendimento({ commit }, atendimento) {
            commit('ADD_ATENDIMENTO', atendimento);
        },
        moveAtendimentoHistorico({ commit }, atendimento) {
            commit('MOVE_ATENDIMENTO_HISTORICO', atendimento); // Ação para mover o atendimento
        },
        addPaciente({ commit }, paciente) {
            commit('ADD_PACIENTE', paciente);
        },
        login({ commit }, userType) {
            commit('SET_USER_TYPE', userType); // Define o tipo de usuário no login
        },
        logout({ commit }) {
            commit('LOGOUT'); // Limpa o tipo de usuário no logout
        },

    },
    getters: {
        allPacientes: state => state.allPacientes,
        atendimentosConcluidos: state => state.atendimentosConcluidos, // Adicione o getter para acessar os atendimentos concluídos
        historicoAtendimentos: state => state.historicoAtendimentos, // Getter para o histórico
        userType: state => state.userType
    }
});