<template>
    <div class="sideBarContainer">
        <div class="UpSideItems">
            <img src="../img/Sidebar/LogoSorriso.png" alt="">
            <div class="sideButton">
                <i class="bi bi-house" ></i>
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