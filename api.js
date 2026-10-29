import axios from 'axios';

// Endereço do recurso "Filmes" criado no MockAPI.
const URL_FILMES = 'https://6ae375b6933120ae20f8cc75.mockapi.io/filmes/Filmes';

const api = axios.create({
  baseURL: URL_FILMES
});

// Devolve true quando a API respondeu "404" (o ID não existe).
// Qualquer outro erro (internet fora, API fora do ar...) devolve false.
export function erroNaoEncontrado(erro) {
  return erro.response?.status === 404;
}

export default api;
