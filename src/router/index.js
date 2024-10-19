import { createRouter, createWebHistory } from 'vue-router';
import CadastroUsuario from '../views/CadastroUsuario.vue';
import LoginDentista from '../views/Dentista/LoginDentista.vue';
import LoginRecepcionista from '../views/Recepcionista/LoginRecepcionista.vue';
import HomeDentista from '../views/Dentista/HomeDentista.vue';
import HomeRecepcionista from '../views/Recepcionista/HomeRecepcionista.vue';
import ProntuarioDentista from '../views/Dentista/ProntuarioDentista.vue';
import CadastroPacientes from '../views/Recepcionista/CadastroPacientes';
import HomeProntuarios from '../views/HomeProntuarios';
import EditarPaciente from '../views/Recepcionista/EditarPaciente';
import VersoDentista from '../views/Dentista/VersoDentista';
import Atendimento from '../views/Dentista/Atendimento'
const routes = [
  { path: '/Cadastro', name: 'Cadastro', component: CadastroUsuario },
  { path: '/login/dentista', name: 'LoginDentista', component: LoginDentista },
  { path: '/login/recepcionista', name: 'LoginRecepcionista', component: LoginRecepcionista },
  { path: '/home/dentista', name: 'HomeDentista', component: HomeDentista },
  { path: '/home/recepcionista', name: 'HomeRecepcionista', component: HomeRecepcionista },
  { path: '/', redirect: '/Cadastro' } ,
  {path: '/prontuario/dentista', name: 'ProntuarioDentista', component: ProntuarioDentista},
  {path: '/cadastro/pacientes', name: 'CadastroPacientes', component: CadastroPacientes},
  {path: '/home/prontuarios', name: 'HomeProntuarios', component: HomeProntuarios},
  {path: '/editar/paciente', name: 'EditarPaciente', component: EditarPaciente},
  {path: '/Versodentista', name: 'Versodentista', component: VersoDentista},
  {path:'/Atendimento',name:'Atendimento',component:Atendimento}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;