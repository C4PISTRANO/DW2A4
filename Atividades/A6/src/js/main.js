import Cep from './modules/cepApi.js';
import Covid from './modules/covidApi.js';
import Mask from './modules/mask.js';

const mask = new Mask;
const cep = new Cep;
const covid = new Covid;

document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  cep.clearUl();
  const uf = await cep.cepToState();
  covid.returnResults(uf);
});
