<template>
  <div class="container">
    <h2>Cadastro de Paciente</h2>
    <form @submit.prevent="cadastrarPaciente">
      <div>
        <label for="nomeCompleto">Nome Completo</label>
        <input type="text" v-model="form.nomeCompleto" id="nomeCompleto" required />
      </div>

      <div>
        <label for="dataNascimento">Data de Nascimento</label>
        <input type="date" v-model="form.dataNascimento" id="dataNascimento" required />
      </div>

      <div>
        <label for="cpf">CPF</label>
        <input type="text" v-model="form.cpf" id="cpf" />
      </div>

      <div>
        <label for="cpfResponsavel">CPF do Responsável</label>
        <input type="text" v-model="form.cpfResponsavel" id="cpfResponsavel" />
      </div>

      <div>
        <label for="telefone">Telefone</label>
        <input type="tel" v-model="form.telefone" id="telefone" required />
      </div>

      <div>
        <label>Sexo</label>
        <div>
          <input type="radio" v-model="form.sexo" value="Masculino" id="masculino" required />
          <label for="masculino">Masculino</label>
        </div>
        <div>
          <input type="radio" v-model="form.sexo" value="Feminino" id="feminino" required />
          <label for="feminino">Feminino</label>
        </div>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nomeCompleto: '',
        dataNascimento: '',
        cpf: '',
        cpfResponsavel: '',
        telefone: '',
        sexo: '',
      },
    };
  },
  methods: {
    cadastrarPaciente() {
      if (this.form.nomeCompleto && this.form.dataNascimento && this.form.telefone && this.form.sexo) {
        // Lógica para cadastrar o paciente
        console.log('Paciente cadastrado:', this.form);
      } else {
        alert('Preencha todos os campos obrigatórios.');
      }
    },
  },
};
</script>