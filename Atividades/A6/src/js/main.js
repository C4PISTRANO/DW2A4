import Cep from './modules/cepApi.js';
import Covid from './modules/covidApi.js';
import mask from './modules/mask.js';

document.getElementById('cep').addEventListener('input', async (event) => {
  event.target.value = mask[event.target.id](event.target.value)
});

document.getElementById('button').addEventListener('submit', async (e) => {
  e.preventDefault();
  cep.clearUl();
  const uf = await cep.cepToState();
  covid.returnResults(uf);
});
