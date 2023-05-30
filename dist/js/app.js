import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController;
console.log(controller.adiciona());
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
