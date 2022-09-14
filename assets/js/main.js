'use strict'

import {searchDogByBreed} from "./modules/dogapi.js";

const createImg = (imgAdrress) => {
    const img = document.createElement('img');
    img.classList.add('dog-img');
    img.src = imgAdrress;
    return img;
}

const search = async () => {
    // Pegar a raça do input
    const breed = document.querySelector('#search').value;
    // receber a array que a funcao searchDogByBreed retorna
    const dogsList = await searchDogByBreed(breed);
    // Seleciona a div 'galery'
    const galery = document.querySelector('#galery');
    
    const tagImages = dogsList.map(createImg);

    galery.replaceChildren(...tagImages);
}

// Esperar o usuário pressionar a tecla enter
const handleKeypress = (event) => {
    if (event.key == 'Enter') {
        search();
    }
}

document.querySelector('#search')
        .addEventListener('keypress', handleKeypress);