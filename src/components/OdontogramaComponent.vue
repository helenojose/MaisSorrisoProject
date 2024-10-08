<template>
    <div class="infosContainer">
        <div class="header">
            <div class="leftInfos">
                <span>NOME: Lukas Rodrigues da Silva </span>
                <span>CPF:</span>
                <span>CPF (Responsável) XXX.XXX.XXX-XX</span>
                <span>CELULAR (XX) XXXXX-XXXX</span>
            </div>
            <div class="rigthInfos">
                <span>N°: 02 </span>
                <span>Sexo: </span>
                <span>IDADE 21</span>
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
    }
    .leftInfos{
        display: flex;
        flex-direction: column;
    }
</style>