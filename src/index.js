console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
  fetchImages()
  fetchBreeds()
  document.getElementById('breed-dropdown').addEventListener('change', filterList)
})



function fetchImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  return fetch(imgUrl)
    .then(response => response.json())
    .then(json => {
      json['message'].forEach((url) => {
        addImgToDOM(url)
      });
    })
}

function addImgToDOM(url) {
  const imageContainter = document.getElementById('dog-image-container')
  let node = document.createElement('img')
  node.setAttribute('src', url)
  imageContainter.appendChild(node)
}

function fetchBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
      console.log(json.message)
      for (let breed in json.message) {
        addBreedToDom(breed)
      }
    })
}

function addBreedToDom(breed) {
  const ul = document.getElementById('dog-breeds')
  const li = document.createElement('li')
  li.innerText = breed
  ul.appendChild(li)
  addClickListener(li)
}

function addClickListener(node) {
  node.addEventListener('click', function(e) {
    e.target.style.color = 'firebrick'
  })
}

function filterList() {
  const dropdown = document.getElementById('breed-dropdown')
  const listElements = document.getElementsByTagName('li')
  let letter = dropdown.value
  for (let li of listElements) {
    //console.log(li.innerText)
    if (li.innerText.startsWith(letter)) {
      li.style.display = 'inherit'
    } else {
      li.style.display = 'none'
    }
  }
}
