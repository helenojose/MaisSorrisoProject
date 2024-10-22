<template>
    <div @click="setPosition" class="popUpContainer">
        <div class="elementContainer" v-for="(servico, index) in servicos" :key="index">
            <span class="poptext">{{ servico.label }}</span>
            <div @click="servico.active = !servico.active" :class="{ 'active': servico.active }" class="checkbox"></div>
        </div>
        <button @click="salvarDadosDente" style=" font-weight: bolder; background-color: rgb(117, 32, 37); border: none; position: relative; top: 50px; color: white; height: 30px;">SALVAR</button>
    </div>
</template>

<script>
import { mapState } from 'vuex';

    export default{
        name: "PopUp",
        data(){
            return{
                servicos: [
                    { label: 'EXTRAÇÃO', value: '1', active: false },
                    { label: 'PINO', value: '4', active: false },
                    { label: 'CANAL', value: '2', active: false },
                    { label: 'COROA', value: '5', active: false },
                    { label: 'RESTAURAÇÃO', value: '3', active: false }
                ]
            }
        },
        methods : {
           loadServicosInStore(){
               //busca na store o dente pelo idIndex carregado ao mudar o dente selecionado
               let dente = this.dentesInfo.find(dente => dente.denteId == this.idDente);

                if(dente){
                    dente.servicos.forEach(servico => {
                        let servicoIndex = this.servicos.findIndex(item => item.value == servico);
                        //se no store existir um servico ele seta como ativo o servico, pois ja existe
                        if(servicoIndex !== -1){
                            this.servicos[servicoIndex].active = true;
                        }
                    })
                }
           },
           resetServicos(){
            this.servicos = [
                    { label: 'EXTRAÇÃO', value: '1', active: false },
                    { label: 'PINO', value: '4', active: false },
                    { label: 'CANAL', value: '2', active: false },
                    { label: 'COROA', value: '5', active: false },
                    { label: 'RESTAURAÇÃO', value: '3', active: false }
                ]
           },
           setPosition(){
            let selectedPopUp = document.querySelector('.popUpContainer');

            selectedPopUp.style.left = `${this.x}px`;
            selectedPopUp.style.top = `${this.y}px`;
            selectedPopUp.style.display= this.displayStyle;
           },
           salvarDadosDente(){
            let servicosSelecionados = this.servicos.filter(servico => servico.active).map(servico => servico.value);
            
            let denteFoundIndex = this.dentesInfo.findIndex((item)=> item.denteId == this.idDente)
            
            if(this.dentesInfo[denteFoundIndex]){
                this.dentesInfo[denteFoundIndex].servicos = servicosSelecionados;
            }else{
                this.dentesInfo.push({
                    denteId: this.idDente,
                    servicos: servicosSelecionados
                })
            }
            console.log(this.dentesInfo);
           }
        },
        computed: mapState(['dentesInfo']),
        
        props: {
            x: String,
            y: String,
            displayStyle: String,
            idDente: String
        },
        watch:{
            x(){
                this.setPosition();

                this.resetServicos();
                this.loadServicosInStore();
            },
            y(){
                this.setPosition();
            },
            displayStyle(){
                this.setPosition();
            }
        },
        mounted(){
            let selectedPopUp = document.querySelector('.popUpContainer');
            selectedPopUp.style.display = 'none'
            this.loadServicosInStore()
        }
    }
</script>

<style scoped>
    .popUpContainer{
        flex-direction: column;
        height: 100px;
        width: 200px;
        background-color: rgba(117, 32, 37, 0.9) ;
        border-radius: 4px;
        grid-template-columns: 1.2fr 1fr;
        padding-left: 15px;
        align-items: center;
        position: absolute;
    }
    .elementContainer{
        display: flex;
        height: fit-content;
        font-size: 14px;
        color: white;
        align-items: center;
        gap: 5px;
    }
    .checkbox{
        height: 15px;
        width: 15px;
        background-color: white;
        border-radius: 1px;
        cursor: pointer;
    }
    .active{
        background-color: lime;
        transition: background-color 0.3s ease, color 0.3s ease;
    }
</style>