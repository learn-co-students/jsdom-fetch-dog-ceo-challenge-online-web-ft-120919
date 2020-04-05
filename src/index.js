console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

async function fetchImages() {
  return fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => {
    console.log("Images fetched");
    addImages(json)
  });
}

function addImages(json) {
  const imageDiv = document.getElementById('dog-image-container');
  for (const url of json['message']) {
    const image = document.createElement('img');
    image.src = url;
    imageDiv.appendChild(image);
  }
}

async function fetchBreeds(filterValue = null) {
  return fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => {addBreeds(json, filterValue)})
  .then(addClickEvents)
  .then(addFilterEvent);
}

function addBreeds(json, filterValue = null) {
  const breedList = document.getElementById('dog-breeds');
  for(element of breedList.querySelectorAll('li')) { element.remove(); }
  const breedArray = json['message'];
  for (const breed in breedArray) {
    if(!filterValue || breed[0] === filterValue) {
      const breedItem = document.createElement('li');
      breedItem.innerText = breed;
      const typeArray = breedArray[breed];
      if (typeArray.length > 0) {
        const typeList = document.createElement('ul');
        for (const type of typeArray) {
          const typeItem = document.createElement('li');
          typeItem.innerText = type;
          typeList.appendChild(typeItem);
        }
        breedItem.appendChild(typeList);
      }
      breedList.appendChild(breedItem);
    }
  }
}

function changeColor() {
  console.log("Item clicked");
  if (this.style.color === "blue") {
    this.style.color = "black";
  } else {
    this.style.color = "blue";
  }
}

function addClickEvents() {
  const listItems = document.getElementsByTagName('li');
  for(const listItem of listItems) {
    listItem.addEventListener('click', changeColor);
  }
}

function filter() {
  const filterValue = this.value;
  fetchBreeds(filterValue);
}

function addFilterEvent() {
  const dropdown = document.getElementById('breed-dropdown');
  dropdown.addEventListener('input', filter);
}

function init () {
  fetchImages();
  fetchBreeds();
}

document.addEventListener('DOMContentLoaded', init);