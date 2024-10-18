<template>
<div class="container">
    <SideBarProntuario/>
    <div class="area">
        <table id="tabela">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Dente</th>
                    <th>Tratamentos Realizados</th>
                    <th>Dentista</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="date"></td>
                    <td><input type="text"></td>
                    <td><input type=""></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td><input type="date"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td><input type="date"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td><input type="date"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td><input type="date"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td><input type="date"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td><input type="date"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                    <td><input type="text"></td>
                </tr>

            </tbody>
        </table>

        <div class="observacoes">
            <label for="observacoes">Observações do Paciente:</label>
            <textarea id="observacoes" rows="4"></textarea>
        </div>
        
    </div>
    </div>
    </template>

    <script>
import SideBarProntuario from '@/components/SideBarProntuario.vue';
export default{
    name:'VersoDentista',
    components:{SideBarProntuario

    }
}
</script>
<style scoped>
.container {
    display: flex;
    justify-content: center; /* Centraliza a área horizontalmente */
    padding-top: 20px;
}

.area {
    background-color: #ccc;
    border-radius: 20px;
    padding: 20px;
    width: 85%; /* Aumenta a área */
    margin-left: 100px; /* Garante espaçamento da sidebar */
}

#tabela {
    width: 100%; /* Tabela ocupa toda a área disponível */
    border-collapse: collapse;
    margin: 0 auto;
}

 td {
    padding: 12px;
    text-align: left;
    border: 2px solid black;
}

input {
    width: 100%; /* Inputs ocupam todo o espaço da célula */
    height: 100%;
    box-sizing: border-box; /* Inclui padding e border no tamanho total do input */
}

.observacoes {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza o label e o textarea */
    margin-top: 20px;
    background-color: white;
    padding: 20px;
    
}

textarea {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    resize: none;
}

label {
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
}

</style>