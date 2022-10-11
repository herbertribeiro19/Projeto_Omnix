'use strict';

const pesquisarCep = () => {
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    console.log(cep);
}

document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep);