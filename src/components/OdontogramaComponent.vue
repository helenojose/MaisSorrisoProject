<template>
    <div @click="hidePopUp($event.target)" class="infosContainer">
        <div class="header">
            <div class="infos">
                <div class="leftInfos">
                    <span>NOME: {{ pacienteDados.nome }} </span>
                    <div class="underLine"></div>
                    <span>CPF: {{ pacienteDados.cpf }}</span>
                    <div class="underLine"></div>
                    <span>CPF Responsavel: {{ pacienteDados.cpfResponsavel }}</span>
                    <div class="underLine"></div>
                    <span>CELULAR: {{ pacienteDados.contato }}</span>
                    <div class="underLine"></div>
                </div>
                <div class="rigthInfos">
                    <span>N°: {{ pacienteDados.codPaciente }} </span>
                    <div class="underLine"></div>
                    <span>SEXO: {{ pacienteDados.sexo }}</span>
                    <span>IDADE: {{ pacienteDados.idade }}</span>
                    <div class="underLine"></div>
                </div>
            </div>
            <div @click="irHomeProntuario" style="display: flex; margin-top: 30px; margin-right: 40px; gap: 10px; cursor: pointer;">
                <img class="voltar" src="../img/Voltar - Vermelho.png" alt="">
                <span class="voltarText">Voltar</span>
            </div>
        </div>
        <div class="infosBody">
            <div class="dentesContainer">
                <div class="upLineDentes">
                    <div v-for="dente in lineUpDentes" :key="dente.numDente" style="display: flex; position: relative;">
                        <img class="dente" :src="require(`../../public/dentes/${dente.caminhoImg}`)" alt="">
                        <div @click="setPopUp($event.target)" :class="['UPquadradinhos', dente.numDente, {'activePontinho': (!!getDenteStore(dente.numDente) && getDenteStore(dente.numDente).servicos.length > 0)}]"></div>
                    </div>
                </div>
                <div class="downLineDentes">
                    <div v-for="dente in lineDownDentes" :key="dente.numDente" style="display: flex; position: relative;">
                        <img class="dente" :src="require(`../../public/dentes/${dente.caminhoImg}`)" alt="">
                        <div @click="setPopUp($event.target)" :class="['quadradinhos', dente.numDente, {'activePontinho': (!!getDenteStore(dente.numDente) && getDenteStore(dente.numDente).servicos.length > 0)}]"></div>
                    </div>
                </div>
                <PopUpDente :id-dente="`${idDente}`" :x="`${denteXPosition}`" :y="`${denteYPosition}`" :display-style="`${popUpDisplay}`"/>
            </div>
            <div @click="uploadFile" class="radiografia">
                <input id="file" type="file" style="display: none;">
                <span style="color:rgb(189, 189, 189); font-size: 24px;">RADIOGRAFIAS</span>
                <i class="bi bi-file-earmark-plus-fill"></i>
            </div>
        </div>
        <div class="informationContainers">
            <div style="width: 480px; display: flex; flex-direction: column; align-items: center; margin-left: 300px;">
                <span class="infoText">CLIQUE NOS CAMPOS CIRCULARES NOS DENTES, PARA FAZER ALTERAÇÕES NO ODONTOGRAMA.</span>
                <button @click="salvarTudo" class="salvarTudoBtn">SALVAR TUDO</button>
            </div>
            <div @click="mostrarVerso" style="margin-left: auto; display: flex; align-items: center; gap: 20px; cursor: pointer;">
                <span style="color: #752025; font-weight: bolder; font-size: 24px;">VERSO</span>
                <i class="bi bi-arrow-right-square-fill"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import PopUpDente from '../components/PopUpDente.vue';
import dentes1 from '../utils/dentes1.js';
import dentes2 from '../utils/dentes2.js';
//import { getPaciente } from '@/services/api';

export default {
    data() {
        return {
            denteXPosition: String,
            denteYPosition: String,
            popUpDisplay: "none",
            idDente: String,
            lineUpDentes: [],
            lineDownDentes: [],
            codPaciente: String,
            pacienteDados: Object
        };
    },
    components: {
        PopUpDente
    },
    methods: {
        async salvarTudo() {
            const atendimento = {
                codPaciente: this.codPaciente,
                // Adicione outros dados relevantes aqui se necessário
                servicos: this.getServicosConcluidos()
            };
            
            // Dispara a ação do Vuex para adicionar o atendimento
            this.$store.dispatch('adicionarAtendimento', atendimento);
            
            // Feedback visual ao usuário
            alert("Atendimento salvo com sucesso!");

            this.$router.push({ name: "Atendimento" })
        },


        
        getServicosConcluidos() {
            // Aqui você deve retornar os serviços que foram adicionados ao dente
            // Você pode adaptar isso conforme a estrutura de dados do seu dente
            // Por exemplo:
            let servicos = [];
            this.lineUpDentes.forEach(dente => {
                const denteInfo = this.getDenteStore(dente.numDente);
                if (denteInfo && denteInfo.servicos.length > 0) {
                    servicos.push(...denteInfo.servicos);
                }
            });
            this.lineDownDentes.forEach(dente => {
                const denteInfo = this.getDenteStore(dente.numDente);
                if (denteInfo && denteInfo.servicos.length > 0) {
                    servicos.push(...denteInfo.servicos);
                }
            });
            return servicos;
        },



        uploadFile() {
            document.getElementById('file').click();
        },
        irHomeProntuario() {
            this.$router.push({ name: "HomeProntuarios" });
        },
        mostrarVerso() {
            this.$store.commit('showVerso');
        },
        getDenteStore(id) {
            return this.dentesInfo.find(item => item.denteId == id);
        },
        setPopUp(quadradinho) {
            let coordenadas = quadradinho.getBoundingClientRect();
            this.popUpDisplay = "grid";
            this.denteXPosition = `${Math.ceil(coordenadas.x)}`;
            this.denteYPosition = `${Math.ceil(coordenadas.y - 95)}`;
            this.idDente = quadradinho.className.split(' ')[1];
        },
        hidePopUp(element) {
            if (element.classList.contains('UPquadradinhos') ||
                element.classList.contains('quadradinhos') ||
                element.classList.contains('checkbox') ||
                element.classList.contains('popUpContainer') ||
                element.classList.contains('elementContainer') ||
                element.classList.contains('poptext')) {
                return;
            } else {
                this.popUpDisplay = "none";
            }
        }
    },
    computed: {
        ...mapState(['dentesInfo', 'versoActive']),
    },
    async mounted() {
        this.lineUpDentes = await dentes1;
        this.lineDownDentes = await dentes2;

        this.codPaciente = this.$route.params.id;
        this.pacienteDados = [{
        nome: "Lukas Rodrigues",
        cpf: "99999999900",
        cpfResponsavel:'',
        dataNascimento:'2005/10/10',
        contato:"2874821578",
        sexo:"Masculino",
        codPaciente:"2"
      }][0]
        //this.pacienteDados = await getPaciente(this.codPaciente);

        console.log(this.pacienteDados);
    },
};
</script>
<style scoped>

    .activePontinho{
        background-color: #752025 !important;
    }

    .UPquadradinhos{
        cursor: pointer;
        height: 10px;
        width: 10px;
        background-color: rgb(167, 167, 167);
        position: absolute;
        top: -20px;
        left: 8px;
        border-radius: 5px;
    }

    .quadradinhos{
        cursor: pointer;
        top: 80px;
        left: 8px;
        border-radius: 5px;
        height: 10px;
        width: 10px;
        background-color: rgb(167, 167, 167);  
        position: absolute;
    }

    .bi-arrow-right-square-fill{
        color: #752025;
        margin-right: 30px;
        font-size: 40px;
    }
    .radiografia{
        height: 380px;
        width: 300px;
        background-color: #fff4b4;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .downLineDentes{
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        position: relative;
    }
    .upLineDentes{
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }
    .dente{
        display: flex;
        height: 70px;
    }
    .dentesContainer{
        display: flex;
        height: 200px;
        width: fit-content;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        /*background-color: aqua;*/
    }
    .infosContainer{
        background-color: #f1f0f0;
        height: 750px;
        width: 1150px;
        border-radius: 20px;
    }
    .header{
        background-color: rgb(202, 201, 201) ;
        width: 100%;
        height: 120px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom: 5px solid rgb(189, 189, 189);
        display: flex;
        justify-content: space-between;
    }
    .leftInfos{
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
    .rigthInfos{
        display: flex;
        flex-direction: column;
        height: 100%;
        padding-top: 13px;
        gap: 10px;
    }
    .infos{
        display: flex;
        margin-left: 40px;
        justify-content: center;
        align-items: center;
        gap: 25px;
    }
    .underLine{
        height: 1px;
        width: 300px;
        background-color: black;
    }
    .voltar{
        margin-top: 5px;
        height: 40px;
    }
    .voltarText{
        margin-top: 13px;
        color: #752025;
        font-size: 18px;
        font-weight: bolder;
    }
    .infosBody{
        height: 65%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 60px;
    }
    .informationContainers{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .infoText{
        color:#535355 ;
        font-size: 18px;
    }
    .salvarTudoBtn{
        margin-top: 25px;
        width: 150px;
        height: 40px;
        color: white;
        background-color: rgb(82, 199, 98);
        border: none;
        border-radius: 3px;
        cursor: pointer;
        -webkit-box-shadow: -4px 3px 10px -1px rgba(0,0,0,0.73);
        -moz-box-shadow: -4px 3px 10px -1px rgba(0,0,0,0.73);
        box-shadow: -4px 3px 10px -1px rgba(0,0,0,0.73);
        font-size: small;
        font-weight: bolder;

    }
    .salvarTudoBtn:hover{
        background-color: rgb(106, 221, 121);
    }
    .bi-file-earmark-plus-fill{
        color: rgb(189, 189, 189);
        font-size: 100px;
    }
</style>