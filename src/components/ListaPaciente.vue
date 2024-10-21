<template>
    <!-- Área de Conteúdo -->
    <div id="content-area">
      <!-- Cabeçalho -->
      <div id="header">
        <h1>BEM-VINDO AO SISTEMA DE PRONTUÁRIOS!</h1>
      </div>
  
      <!-- Campo de Busca -->
      <div id="search-container">
        <input type="text" placeholder="Digite o nome do paciente..." v-model="search">
      </div>
  
      <!-- Tabela de Prontuários -->
      <div id="table-container">
        <table>
          <thead>
            <tr>
              <th id="ficha">Fichas</th>
              <th id="pacientes">Pacientes</th>
              <th id="contato">Contato</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(paciente, index) in filteredPacientes"
              :key="index"
              @click="verProntuario(paciente.codPaciente)"
            >
              <td>Nº {{ paciente.codPaciente }}</td>
              <td>{{ paciente.nome }}</td>
              <td>{{ paciente.contato }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>

<style scoped >
#search-container {
    margin-top: 30px;
    width: 25%;
    height: 3%; /* O input agora tem metade da largura da tela */
    display: flex;
    padding-left: 128px;
    
}

#search-container input {
    width: 100%;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 50px; /* Deixa o input redondo */
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}
#content-area {
    flex-grow: 1;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: left; /* Centraliza os elementos na esquerda */
    padding-left: 180px;
}

/* Cabeçalho */
#header {
    width: 99%;
    background-color: #fff;
    padding: 2px;
    text-align: left;
    
}

#header h1 {
    margin-top: 25px;
    color: #752025;
    padding-left: 30px;
    font-size: 20px;

  }

/* Campo de Busca */
#search-container {
    margin-top: 20px;
    width: 25%;
    height: 3%; /* O input agora tem metade da largura da tela */
    display: flex;
    padding-left: 28px;
    
}

#search-container input {
    width: 100%;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 50px; /* Deixa o input redondo */
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

/* Tabela */
#table-container {
    margin-top: 20px;
    width: 90%; 
    background-color: #f0f0f0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    
    
}

table thead {
    background-color: #752025;
    color: white;
    
   
}

table th, table td {
    padding: 13px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    
}

table tbody tr:hover {
    background-color: #f5f5f5;
}

</style>

<script>
export default {
  name: "ListaPaciente",
  data() {
    return {
      search: "",
      pacientes: [
        { codPaciente: 1, nome: "João Silva", contato: "123456789" },
        { codPaciente: 2, nome: "Maria Oliveira", contato: "987654321" }
      ]
    };
  },
  computed: {
    filteredPacientes() {
      return this.pacientes.filter((paciente) =>
        paciente.nome.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  methods: {
    verProntuario(codPaciente) {
      // Redireciona para a página de prontuário passando o ID do paciente
      this.$router.push({ name: "ProntuarioDentista", params: { id: codPaciente } });
    }
  }
};
</script>