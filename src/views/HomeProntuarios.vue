<template>
  <div id="container">
    <!-- Barra Lateral -->
    <div id="barra_lateral">
      <SideBarProntuario/>
    </div>

    <!-- Área de Conteúdo -->
   <ListaPaciente :pacientes-dados="pacientes"/>
   </div>
</template>

<script>
//import { getPacientes } from '../services/api';
import SideBarProntuario from '@/components/SideBarProntuario.vue';
import ListaPaciente from '@/components/ListaPaciente.vue';

export default {
  components:{SideBarProntuario,ListaPaciente},
  data() {
    return {
      pacientes: [], // Armazena os pacientes
      search: "", // Termo de busca
    };
  },
  computed: {
    filteredPacientes() {
      return this.pacientes.filter((paciente) =>
        paciente.nome.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  async mounted() {
    try {
      // Buscando os pacientes da API
      // const response = await getPacientes();
      // this.pacientes = response;
      // console.log(this.pacientes)

      this.pacientes = [{
        nome: "Lukas Rodrigues",
        cpf: "99999999900",
        cpfResponsavel:'',
        dataNascimento:'2005/10/10',
        contato:"2874821578",
        sexo:"Masculino",
        codPaciente:"2"
      }]
    } catch (error) {
      console.error("Erro ao carregar pacientes:", error);
    }
  },
  methods: {
    irParaCadastroPacientes() {
      this.$router.push({ name: 'CadastroPacientes' });
    },
    irParaAtendimentos() {
      // Caso a rota de atendimentos já esteja definida
      this.$router.push({ name: 'Atendimentos' });
    },
    fazerLogout() {
      const userType = localStorage.getItem('userType');
      
      if (userType === '1') {
        this.$router.push({ name: 'LoginDentista' });
      } else if (userType === '2') {
        this.$router.push({ name: 'LoginRecepcionista' });
      }
      
      // Limpar o tipo de usuário do localStorage
      localStorage.removeItem('userType');
    }
  }
};
</script>





