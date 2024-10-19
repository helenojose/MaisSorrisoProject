<template>
    <div @click="setPosition" class="popUpContainer">
        <div class="elementContainer">
            <span>EXTRAÇÃO</span>
            <div @click="toggleActive($event.target)" class="checkbox ext"></div>
        </div>
        <div class="elementContainer">
            <span>PINO</span>
            <div @click="toggleActive($event.target)" class="checkbox pin"></div>
        </div>
        <div class="elementContainer">
            <span>CANAL</span>
            <div @click="toggleActive($event.target)" class="checkbox can"></div>
        </div>
        <div class="elementContainer">
            <span>COROA</span>
            <div @click="toggleActive($event.target)" class="checkbox cor"></div>
        </div>
        <div class="elementContainer">
            <span>RESTAURAÇÃO</span>
            <div @click="toggleActive($event.target)" class="checkbox res"></div>
        </div>

        <button style=" font-weight: bolder; background-color: rgb(117, 32, 37); border: none; position: relative; top: 50px; color: white; height: 30px;">SALVAR</button>
    </div>
</template>

<script>
    export default{
        name: "PopUp",
        data(){
            return{
                
            }
        },
        methods : {
           setPosition(){
            let selectedPopUp = document.querySelector('.popUpContainer');

            selectedPopUp.style.left = `${this.x}px`;
           },
           toggleActive(element){
            if(element.classList.contains("active")){
                element.classList.remove("active");
            }else{
                element.classList.add("active");
            }
           }
        },
        
        props: {
            x: String,
            y: String
        },
        mounted(){
            this.setPosition();
        }
    }
</script>

<style scoped>
    .popUpContainer{
        display: none;
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