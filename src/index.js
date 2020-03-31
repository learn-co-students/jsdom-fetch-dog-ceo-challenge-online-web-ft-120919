console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function () {

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const breedDropdown = document.getElementById('breed-dropdown')
  let dogBreeds = document.getElementById('dog-breeds')
  const imageContainer = document.getElementById('dog-image-container')


  fetchImages(imgUrl)
  fetchBreeds(breedUrl)
  dogBreeds.addEventListener('click', function (e) {
    event.target.style.color = "Tomato"
  })


  function fetchImages(imgUrl) {
    fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => addImages(json))
  }

  function addImages(json) {
    images = json.message
    images.forEach(image => {
      var img = document.createElement("img")
      img.src = image
      imageContainer.appendChild(img)
    })
  }

  function fetchBreeds(breedUrl) {
    fetch(breedUrl)
      .then(resp => resp.json())
      .then(json => addBreeds(json))
  }

  function addBreeds(json) {
    breeds = json.message
    for (key in breeds) {
      let li = document.createElement("li")
      li.innerHTML = key
      dogBreeds.appendChild(li)
    }
  }

  breedDropdown.addEventListener('change', event => {
    filterBreeds(event.target.value)
  })

  function filterBreeds(inputValue) {
    let liElements = Array.from(dogBreeds.children);
    liElements.forEach(liTag => {
      console.log(liTag);
      if (liTag.innerHTML.startsWith(inputValue)) {
        liTag.style = "display: block";
      }
      else {
        liTag.style = "display: none";
      }
    })
  }


})
