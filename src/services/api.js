import axios from 'axios';

// Configuração da API
const api = axios.create({
  baseURL: 'http://localhost:8080/api', //URL base da sua API
  headers: {
    'Content-Type': 'application/json',
  }
});

// Função para cadastrar usuário
export const cadastrarUsuario = (usuario) => {
  return api.post('/cadastro', usuario); //endpoint de login para cadastro
};

// Função para login de dentista
export const loginDentista = (credenciais) => {
  return api.post('/login/dentista', credenciais); //endpoint de login para dentista
};

// Função para login de recepcionista
export const loginRecepcionista = (credenciais) => {
  return api.post('/login/recepcionista', credenciais); //endpoint de login para recepcionista
};

export default api;