<template>
  <router-view/>
</template>

<style>
/* Remove margens do body e html */
html{
  height: 100%; /* Garante que o html também preencha a altura */
} 

body {
  font-family: Lexend;
  margin: 0; /* Remove margens padrão */
  padding: 0; /* Remove preenchimento padrão */
  height: 100%; /* Garante que o corpo preencha a altura */
  overflow: hidden; /* Remove barras de rolagem, se necessário */
}

@font-face {
  font-family: 'Lexend-VariableFont_wght.ttf';
  src: url('@/assets/fonts/Lexend-VariableFont_wght.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
</style>
