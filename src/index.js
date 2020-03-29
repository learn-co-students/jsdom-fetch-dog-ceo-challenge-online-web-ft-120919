console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function() {
  loadImages()
  loadBreedOptions()
  const breedsUl = document.querySelector('#dog-breeds')
  const dropDown = document.querySelector('#breed-dropdown')
  const listListener = breedsUl.addEventListener('click', function(e) {
    e.target.style.color = "goldenrod"
  })


  
  function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then(function(response) {
    return response.json()
    })
    .then(function(result) {
      result.message.forEach(image => addImage(image))
    })
  }

  function addImage(imageItem) {
    let imgContainer = document.querySelector('#dog-image-container')
    let newImageTag = document.createElement("img")
    newImageTag.src = imageItem
    imgContainer.appendChild(newImageTag)
  }

  function loadBreedOptions() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
      .then(function(response) {
        return response.json()
      })
      .then(function(result) {
      dogBreeds = Object.keys(result.message)
      dogBreeds.forEach(breed => addBreed(breed))
    })
    
  }
  function addBreed(breed) {
    let newBreedLi = document.createElement('li')
    newBreedLi.innerText = breed
    breedsUl.appendChild(newBreedLi)
  }
  
  function clearList(list){
    let child = list.lastElementChild
    while (child) {
      list.removeChild(child)
      child = list.lastElementChild
    }
  }

  function startsWith(letter) {
    clearList(breedsUl)
    let dogSelection = dogBreeds.filter(breed => breed.startsWith(`${letter}`))
    dogSelection.forEach(breed => addBreed(breed))
  }
  const dropDownListener = dropDown.addEventListener('change', function(e) {
    startsWith(e.target.value)
      if (e.target.value === "all") {
        clearList(breedsUl)
        dogBreeds.forEach(breed => addBreed(breed))
      }
    // if (e.target.value === "a") {
    //   clearList(breedsUl)
    //   const dogsA = dogBreeds.filter(breed => breed.startsWith("a"))
    //   dogsA.forEach(breed => addBreed(breed))
    // }
    // if (e.target.value === "b") {
    //   clearList(breedsUl)
    //   const dogsB = dogBreeds.filter(breed => breed.startsWith("b"))
    //   dogsB.forEach(breed => addBreed(breed))
    // }
    // if (e.target.value === "c") {
    //   clearList(breedsUl)
    //   const dogsC = dogBreeds.filter(breed => breed.startsWith("c"))
    //   dogsC.forEach(breed => addBreed(breed))
    // }
    // if (e.target.value === "d") {
    //   clearList(breedsUl)
    //   const dogsD = dogBreeds.filter(breed => breed.startsWith("d"))
    //   dogsD.forEach(breed => addBreed(breed))
    // }
  })  
})
