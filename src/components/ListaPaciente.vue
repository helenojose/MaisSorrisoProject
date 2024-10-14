 <template>
 <!-- Área de Conteúdo -->
 <div id="content-area">
    <!-- Cabeçalho -->
    <div id="header">
        <h1>BEM-VINDO AO SISTEMA DE PRONTUÁRIOS!</h1>
    </div>

    <!-- Campo de Busca -->
    <div id="search-container">
        <input type="text" placeholder="Digite o nome do paciente...">
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
                <tr>
                    <td>Nº 01</td>
                    <td>GABRIEL VICTOR ARAUJO VIEIRA</td>
                    <td>(XXX) XXXXX-XXXX</td>
                </tr>
                <tr>
                    <td>Nº 02</td>
                    <td>GABRIEL VICTOR ARAUJO VIEIRA</td>
                    <td>(XXX) XXXXX-XXXX</td>
                </tr>
                <!-- Outras linhas -->
            </tbody>
        </table>
    </div>
</div>

</template>

<style>
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
    padding-left: 30px;
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
    width: 90%; /* A tabela agora ocupa menos espaço */
    background-color: #f0f0f0;
    border-radius: 20px; /* Borda arredondada para o contêiner da tabela */
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 20px; /* Arredonda as bordas da tabela */
    overflow: hidden; /* Garante que o arredondamento funcione */
}

table thead {
    background-color: #752025;
    color: white;
}

table th, table td {
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #ccc;
}

table tbody tr:hover {
    background-color: #f5f5f5;
}

/* Arredondando as células de cabeçalho */
#ficha, #pacientes, #contato {
    border-radius: 20px;
    padding: 10 px;
}
</style>

<script>
export default{
    name:'ListaPaciente'
}</script>