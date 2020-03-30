console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let allBreeds = []

let filteredBreeds = []

function fetchDogImages(){
   return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderDogImages(json));
}

function renderDogImages(json) {
    //id="dog-image-container"
    let dogImageContainer = document.getElementById('dog-image-container');
    json.message.forEach(dogImage => {
        let img = document.createElement('IMG');
        img.src = dogImage;
        img.setAttribute("width", "304");
        img.setAttribute("height", "304");
        img.setAttribute("alt", "Dog Photo");
        dogImageContainer.appendChild(img);

    })
}

function fetchDogBreeds() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => listDogBreeds(json));
}
function listDogBreeds(json) {
    allBreeds = Object.keys(json.message)
    renderDogBreeds(allBreeds);
  }
function renderDogBreeds(breeds){
    let dogBreeds = document.getElementById('dog-breeds');
    breeds.forEach(breed => {
        let list = document.createElement('li');
        list.textContent = breed;
        list.addEventListener('click', changeFontColor)
        dogBreeds.appendChild(list);
    })

}
function changeFontColor(event) {
    event.target.style.color = "orange";
  }
  function filterBreeds(letter) {
    filteredBreeds = [];
    filteredBreeds = allBreeds.filter(breed => breed[0] === letter);
    renderDogBreeds(filteredBreeds);
  }

document.addEventListener('DOMContentLoaded', function() {
    fetchDogImages()
    fetchDogBreeds()
  })