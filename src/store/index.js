import { createStore } from 'vuex'

export default createStore({
    state: {
        dentesInfo: [],
        frenteActive: true
    },

    mutations:{
        showVerso(state){
            state.frenteActive = false;
        },
        hideVerso(state){
            state.frenteActive = true;
        }
    },

    actions:{

    }
})