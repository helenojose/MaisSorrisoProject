<template>
    <div @click="hidePopUp($event.target)" class="infosContainer">
        <div class="header">
            <div class="infos">
                <div class="leftInfos">
                <span>NOME: Lukas Rodrigues da Silva </span>
                <div class="underLine"></div>
                <span>CPF: XXX.XXX.XXX-XX
                </span>
                <div class="underLine"></div>
                <span>CPF (Responsável) XXX.XXX.XXX-XX</span>
                <div class="underLine"></div>
                <span>CELULAR (XX) XXXXX-XXXX</span>
                <div class="underLine"></div>
            </div>
            <div class="rigthInfos">
                <span>N°: 02 </span>
                <div class="underLine"></div>
                <span>SEXO: F <input type="checkbox"> M<input type="checkbox"></span>
                <span>IDADE 21</span>
                <div class="underLine"></div>
            </div>
            </div>
            <div style="display: flex; margin-top: 30px; margin-right: 40px; gap: 10px; cursor: pointer;">
                <img class="voltar" src="../img/Voltar - Vermelho.png" alt="">
                <span class="voltarText">Voltar</span>
            </div>
        </div>
        <div class="infosBody">
            <div class="dentesContainer">
                <div  class="upLineDentes">
                    <div v-for="dente in lineUpDentes" :key="dente.numDente" style="display: flex; position: relative;">
                        <img class="dente" :src="require(`../../public/dentes/${dente.caminhoImg}`)" alt="">
                        <div @click="setPopUp($event.target)" :class="['UPquadradinhos' , dente.numDente, {'activePontinho' : (!!getDenteStore(dente.numDente) && getDenteStore(dente.numDente).servicos.length > 0 )}]"></div>
                    </div>
                </div>
                <div class="downLineDentes">
                    <div v-for="dente in lineDownDentes" :key="dente.numDente" style="display: flex; position: relative;">
                        <img class="dente" :src="require(`../../public/dentes/${dente.caminhoImg}`)" alt="">
                        <div @click="setPopUp($event.target)" :class="['quadradinhos' , dente.numDente, {'activePontinho' : (!!getDenteStore(dente.numDente) && getDenteStore(dente.numDente).servicos.length > 0 )}]"></div>
                    </div>
                </div>
                <PopUpDente :id-dente="`${idDente}`" :x="`${denteXPosition}`" :y="`${denteYPosition}`" :display-style="`${popUpDisplay}`"/>
            </div>
            <div class="radiografia">
                <span style="color:rgb(189, 189, 189) ; font-size: 24px;">RADIOGRAFIAS</span>
                <i class="bi bi-file-earmark-plus-fill"></i>
            </div>
        </div>
        <div class="informationContainers">
            <div style="width: 480px; display: flex; flex-direction: column; align-items: center; margin-left: 300px;" >
                <span class="infoText">
                    CLIQUE NOS CAMPOS CIRCULARES NOS DENTES, PARA FAZER ALTERAÇÕES NO ODONTOGRAMA.
                </span>
                <button class="salvarTudoBtn">SALVAR TUDO</button>
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
import PopUpDente from '../components/PopUpDente.vue'
    import dentes1 from '../utils/dentes1.js'
    import dentes2 from '../utils/dentes2.js'

    export default {
        data(){
            return{
                denteXPosition: String,
                denteYPosition: String,
                popUpDisplay: "none",
                idDente: String,
                lineUpDentes: [],
                lineDownDentes: []
            }
        },
        components: {
            PopUpDente
        },
        props: {
            nome: String,
            cpfDependente: String,
            cpfResponsavel: String,
            celular: String,
            numFicha: String,
            sexo: String,
            idade: String
        },
        methods: {

            mostrarVerso(){
                this.$store.commit('showVerso');
            },

            getDenteStore(id){
                return this.dentesInfo.find(item => item.denteId == id);
            },

            setPopUp(quadradinho){

                let coordenadas = quadradinho.getBoundingClientRect();
                this.popUpDisplay = "grid";
                this.denteXPosition = `${Math.ceil(coordenadas.x)}`;
                this.denteYPosition = `${Math.ceil(coordenadas.y - 95)}`;
                this.idDente = quadradinho.className.split(' ')[1];
            },
            hidePopUp(element){
                if(element.classList.contains('UPquadradinhos')
                 || element.classList.contains('quadradinhos')
                 || element.classList.contains('checkbox')
                 || element.classList.contains('popUpContainer')
                 || element.classList.contains('elementContainer')
                 || element.classList.contains('poptext')){
                    return
                }else{
                    this.popUpDisplay = "none";
                }
            }
        },
        computed: mapState(['dentesInfo', 'versoActive']),
        async mounted(){
            this.lineUpDentes = await dentes1
            this.lineDownDentes = await dentes2
        }
    }

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