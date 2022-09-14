'use strict'

const searchDogByBreed = async (breed) => {
    const url = `https://dog.ceo/api/breed/${breed}/images`;

    const response = await fetch(url);
    const dogList = await response.json();

    return dogList.message;
}

export {
    searchDogByBreed
}