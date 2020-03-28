console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breeds = []

document.addEventListener("DOMContentLoaded", () => {  
    fetchImages();
    fetchBreeds();
    breedDropdwon();
    
})

function breedDropdwon() { 
    document.getElementById("breed-dropdown").addEventListener("change", (event) => {
        // const dogBreedId = document.querySelector('#dog-breeds')
        // debugger
        // debugger
        if (event.target.value === "a") {
            getBreedsByFirstLetter("a")
        } else if (event.target.value === "b") {
            getBreedsByFirstLetter("b")  
        } else if (event.target.value === "c") {
            getBreedsByFirstLetter("c") 
        } else if (event.target.value === "d") {
            getBreedsByFirstLetter("d") 
        }
    });
}

function getBreedsByFirstLetter(letter) {
    const dogBreedId = document.querySelector('#dog-breeds')
    const arrA = []
    for (let i=0; i<breeds.length; i++){
        if (breeds[i].innerText[0]===letter) {
            arrA.push(breeds[i])
        }
    }
    // debugger
    dogBreedId.innerText = ''
    for (let i=0; i<arrA.length; i++){
        dogBreedId.appendChild(arrA[i])
    }
}

// for (let i=0; i<dogBreedLis.length; i++){
//     if (document.querySelectorAll(".liClass")[i].innerText==='a') {
//         console.log(document.querySelectorAll(".liClass")[i].innerText[0])
//     }
// }


// write a function that captures when the option a,b,c,d is selected
// so user selects a for example
// this function will see if users input here (a)
// is equal to the first letter of the breed in the li
// by iterating through all of the lis

function fetchImages() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json =>{
        renderImages(json.message)
    });
}

function renderImages(json) {
    const dogId = document.querySelector('#dog-image-container')
    json.forEach(url => {
      const imgElm = document.createElement('img')
      imgElm.src = url 
      dogId.appendChild(imgElm)
    })
  }

  function fetchBreeds() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json =>{
        // debugger
        renderBreeds(json.message)
        
    });
    }

    function renderBreeds(json) {
        const dogBreedId = document.querySelector('#dog-breeds')
        // debugger
        Object.keys(json).forEach(breed => {
          const li = document.createElement('li')
          li.classList.add("liClass");
          li.addEventListener("click", () => {
            li.style.color = "firebrick"
           });
          li.innerHTML = breed 
          dogBreedId.appendChild(li)
          breeds.push(li)
        })
      }

  



