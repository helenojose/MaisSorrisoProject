<template>
    <div class="infosContainer">
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
                    <div v-for="dente in lineUpDentes" :key="dente.numDente" style="display: flex;">
                        <img class="dente" src="dente.caminhoImg" alt="">
                        <PopUpDente x="250"/>
                    </div>
                </div>
                <div style="color: rgb(189, 189, 189);" class="tracejado">-----------------------------------------------------------------------------------------------------------</div>
                <div class="downLineDentes">
                    <img class="dente" src="../img/dentes/48.png" alt="">
                    <img class="dente" src="../img/dentes/47.png" alt="">
                    <img class="dente" src="../img/dentes/46.png" alt="">
                    <img class="dente" src="../img/dentes/45.png" alt="">
                    <img class="dente" src="../img/dentes/44.png" alt="">
                    <img class="dente" src="../img/dentes/43.png" alt="">
                    <img class="dente" src="../img/dentes/42.png" alt="">
                    <img class="dente" src="../img/dentes/41.png" alt="">
                    <img class="dente" src="../img/dentes/31.png" alt="">
                    <img class="dente" src="../img/dentes/32.png" alt="">
                    <img class="dente" src="../img/dentes/33.png" alt="">
                    <img class="dente" src="../img/dentes/34.png" alt="">
                    <img class="dente" src="../img/dentes/35.png" alt="">
                    <img class="dente" src="../img/dentes/36.png" alt="">
                    <img class="dente" src="../img/dentes/37.png" alt="">
                    <img class="dente" src="../img/dentes/38.png" alt="">
                </div>

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
            <div style="margin-left: auto; display: flex; align-items: center; gap: 20px; cursor: pointer;">
                <span style="color: #752025; font-weight: bolder; font-size: 24px;">VERSO</span>
                <i class="bi bi-arrow-right-square-fill"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import PopUpDente from '../components/PopUpDente.vue'
    import dentes1 from '../utils/dentes1.json'
    import dentes2 from '../utils/dentes2.json'

    export default {
        data(){
            return{
                denteXPosition: String,
                denteYPosition: String,
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

        },
        async mounted(){
            this.lineUpDentes = await dentes1
            this.lineDownDentes = await dentes2
            console.log(dentes1)
            console.log(dentes2)
        }
    }

</script>

<style scoped>

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