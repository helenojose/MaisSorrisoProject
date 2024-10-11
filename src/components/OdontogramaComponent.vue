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
                <div class="upLineDentes">
                    
                </div>
                <div class="downLineDentes">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){

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

        }
    }

</script>

<style scoped>
    .upLineDentes{
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .dente{
        display: flex;
        height: 30px;
    }
    .dentesContainer{
        display: flex;
        height: 300px;
        width: 850px;
        background-color: aqua;
    }
    .infosContainer{
        background-color: rgb(223, 223, 223);
        height: 500px;
        width: 1000px;
        border-radius: 20px
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
        height: 75%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>