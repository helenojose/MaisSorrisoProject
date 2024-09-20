import { createRouter, createWebHistory } from 'vue-router';
import CadastroUsuario from '../views/CadastroUsuario.vue';
import LoginEscolha from '../views/Login.vue';
import LoginDentista from '../views/Dentista/LoginDentista.vue';
import LoginRecepcionista from '../views/Recepcionista/LoginRecepcionista.vue';
import HomeDentista from '../views/Dentista/HomeDentista.vue';
import HomeRecepcionista from '../views/Recepcionista/HomeRecepcionista.vue';

const routes = [
  { path: '/Cadastro', name: 'Cadastro', component: CadastroUsuario },
  { path: '/Login', name: 'LoginEscolha', component: LoginEscolha },
  { path: '/login/dentista', name: 'LoginDentista', component: LoginDentista },
  { path: '/login/recepcionista', name: 'LoginRecepcionista', component: LoginRecepcionista },
  { path: '/home/dentista', name: 'HomeDentista', component: HomeDentista },
  { path: '/home/recepcionista', name: 'HomeRecepcionista', component: HomeRecepcionista },
  { path: '/', redirect: '/login' } 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;