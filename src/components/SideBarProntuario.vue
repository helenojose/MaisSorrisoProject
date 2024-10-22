<template>
    <div class="sideBarContainer">
        <div class="UpSideItems">
            <img src="../img/Sidebar/LogoSorriso.png" alt="">
            
            <div @click="irHomeProntuario" class="sideButton">
                <i class="bi bi-card-list"></i>
                <span style="font-size: 12px" class="sideText">PRONTUARIOS</span>
            </div>
            <div @click="cadastrarPaciente" class="sideButton">
                <i class="bi bi-person-circle"></i>
                <span style="font-size: 11px" class="sideText">CADASTRAR PACIENTE</span>
            </div>
            <div @click="irAtendimentos" class="sideButton">
                <i class="bi bi-archive-fill"></i>
                <span style="font-size: 11px" class="sideText">ATENDIMENTOS</span>
            </div>
        </div>
        <div @click="sair" class="LogOutButtonContainer">
            <i class="bi bi-box-arrow-left"></i>
            <span style="color: white;">Sair</span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'SideBar',
    computed: {
        ...mapState(['userType']) // Supondo que você tenha userType no Vuex
    },
    methods: {
        cadastrarPaciente(){
            this.$router.push({ name: "CadastroPacientes" });
        },
        irHomeProntuario() {
            this.$router.push({ name: "HomeProntuarios" });
        },
        irAtendimentos() {
            this.$router.push({ name: "Atendimento" });
        },
        sair() {
            // Verifica o tipo de usuário e redireciona para a tela de login correspondente
            if (this.userType === 1) {
                this.$router.push({ name: "LoginDentista" });
            } else if (this.userType === 2) {
                this.$router.push({ name: "LoginRecepcionista" });
            }
            // Aqui você pode adicionar a lógica para limpar o estado de autenticação, se necessário
        }
    }
};
</script>

<style scoped>
html, body {
    margin: 0px;
    padding: 0px;
    height: 100%;
}

.sideBarContainer {
    width: 135px;
    height: 100vh;
    background-color: #752025;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
}

.UpSideItems {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.UpSideItems img {
    margin-top: 20px;
    width: 100px;
}

.sideButton {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 92px;
    width: 100%;
    margin-top: 50px;
    flex-direction: column;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.LogOutButtonContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 92px;
    width: 100%;
    margin-top: 130px;
    flex-direction: column;
    cursor: pointer;
}

.sideText {
    color: white;
}

.bi {
    font-size: 40px;
    color: white;
}

/* Efeito de hover para os botões da sidebar */
.sideButton:hover {
    background-color: white;
}

.sideButton:hover .bi {
    color: #752025;
    font-size: 50px;
}

.sideButton:hover .sideText {
    color: #752025;
}
</style>