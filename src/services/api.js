import axios from 'axios';

// Configuração da API
const api = axios.create({
  baseURL: 'http://26.240.188.67:8080', //URL base da sua API
  headers: {
    'Content-Type': 'application/json',
  }
});

// Método para fazer o cadastro de usuário
export const cadastrarUsuario = async (usuario) => {
  try {
    // Fazer a requisição POST para o endpoint de cadastro
    const response = await api.post('/usuario', usuario);
    return response.data; // Retorna os dados de resposta da API
  } catch (error) {
    console.error('Erro ao fazer o cadastro do usuário:', error);
    throw error; // Lança o erro para ser tratado no componente Vue
  }
};

// Função para login de dentista
export const loginDentista = (credenciais) => {
  return api.post('/login', credenciais); //endpoint de login para dentista
};

// Função para login de recepcionista
export const loginRecepcionista = (credenciais) => {
  return api.post('/login/recepcionista', credenciais); //endpoint de login para recepcionista
};

export default api;