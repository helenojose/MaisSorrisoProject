<template>
    <div class="container">
        

         <SideBar/>        
         <ListaPaciente/>
         
    </div>
</template>

<script>

import ListaPaciente from '@/components/ListaPaciente.vue';
import SideBar from '../../components/SideBarProntuario.vue';

export default {
    name: "HomeDentista",
    created() {
    // Verifica se o usuário está logado
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn) {
      // Se não estiver logado, redireciona para a página de login
      this.$router.push('/login/dentista');
    }
},
    components: {
        ListaPaciente,SideBar
    },
};
</script>
