import axios from 'axios';

// Configuração da API
const api = axios.create({
  baseURL: 'http://26.67.203.211:8080/teste', //URL base da sua API
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