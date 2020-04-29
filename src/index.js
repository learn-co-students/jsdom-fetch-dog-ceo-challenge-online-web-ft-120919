

function loadDogImages() {
  const apiUrl = 'https://dog.ceo/api/breeds/image/random/4';
  fetch(apiUrl)
    .then(resp => resp.json())
    .then(json => json.message.forEach(image => addImage(image)));
}

function addImage(url) {
  const imgContainer = document.getElementById('dog-image-container');
  let newImage = document.createElement('img');
  newImage.src = url
  newImage.style.width = "150px"; 
  imgContainer.appendChild(newImage);
} 

function loadBreeds() {
  const apiUrl = 'https://dog.ceo/api/breeds/list/all';
  fetch(apiUrl)
    .then(resp => resp.json())
    .then(json => Object.keys(json.message))
    .then(arr => arr.forEach(breed => addBreed(breed)));
}

function addBreed(breed) {
  const ul = document.getElementById("dog-breeds");
  const newBreed = document.createElement("li");
  const breedText = document.createTextNode(breed);
  newBreed.appendChild(breedText);
  ul.appendChild(newBreed);
}

function listenForFilter() {
  const selector = document.getElementById("breed-dropdown");
  selector.addEventListener("change", () => filterBreeds(selector.value));
}

function filterBreeds(char) {
  console.log(`filtering by ${char}`);
  // HTML collection of lis
  const breeds = document.getElementById("dog-breeds").children;
  for (let i = 0; i < breeds.length; i++) {
    let dog = breeds.item(i);
    if (dog.textContent[0] == char) {
      dog.style.removeProperty("display");
    }
    else {
      dog.style.display = "none";
    }
  }
  // loop over breed list for length, selecting item innertext with index of i
}

window.addEventListener('DOMContentLoaded', () => {
  loadDogImages();
  loadBreeds();
  listenForFilter();
});
