    <template>
        <div class="sideBarContainer">
            <div class="UpSideItems">
                 <img src="../img/Sidebar/LogoSorriso.png" alt="">
                 <div class="sideButton">
                    <i class="bi bi-house"></i>
                    <span class="sideText">HOME</span>
                 </div>
                 <div class="sideButton">
                    <i class="bi bi-card-list"></i>
                    <span style="font-size: 12px" class="sideText">ATENDIMENTOS</span>
                 </div>
                 
            </div>
            <div class="LogOutButtonContainer">
                <i class="bi bi-box-arrow-left"></i>
                <span style="color: white;">Sair</span>
            </div>
        </div>
    </template>
  
  <script>
  export default {
    name: 'SideBar',
    data() {
      return {

      };
    },
    props: {

    },
    methods: {

    }
  };
  </script>
  
  <style scoped>
    .html, body {
        margin: 0px;
        padding: 0px;
        height: 100%;
    }

    .sideBarContainer{
        width: 135px;
        height: 100vh;
        background-color: #752025;
        position: fixed;
    }
    .UpSideItems{
        display: flex;
        flex-direction: column;
        align-items: center
    }
    .UpSideItems img{
        margin-top: 50px;
        width: 100px;
    }
    .sideButton{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 92px;
        width: 100%;
        margin-top: 20px;
        flex-direction: column;
        cursor: pointer;
    }
    .LogOutButtonContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 92px;
        width: 100%;
        margin-top: 130px;
        flex-direction: column;
        cursor: pointer;
    }
    .sideText{
        color: white;
    }
    .bi{
        font-size: 40px;
        color: white;
    }
    .sideButton:hover{
        .bi{
            color: #752025;
            font-size: 50px;
        }
        .sideText{
            color: #752025;
        }
        animation: fadeIn 0.3s ease-in forwards;
    }











    @keyframes fadeIn {
        0%{
            background-color: #752025;
        }
        100%{
            background-color: white;
        }
    }
  </style>