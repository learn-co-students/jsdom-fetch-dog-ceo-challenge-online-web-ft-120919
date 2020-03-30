console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchDogPictures() {
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => {
            renderPictures(json.message)
        })
}

function renderPictures(imgUrls) {
    const imageContainer = document.getElementById('dog-image-container')
    imgUrls.forEach(url => {
        const img = document.createElement('img')
        img.src = url
        imageContainer.appendChild(img)
    })
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDogBreeds() {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {
            renderBreeds(json.message)
        })
}

function renderBreeds(breeds) {
    const breedList = document.getElementById('dog-breeds')
    for (breed in breeds) {
        const li = document.createElement('li')
        li.innerText = breed
        li.classList.add("super-breed")
        breedList.appendChild(li)
        li.addEventListener('click', addcolors)
        if(breeds[breed].length) {
            const ul = document.createElement('ul')
            li.appendChild(ul)
            breeds[breed].forEach(function(name) {
                const subLi = document.createElement('li')
                subLi.innerText = name
                ul.appendChild(subLi)
            })
        }
    }
}

function addcolors(event) {
    event.target.style.color = "red"
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDogPictures()
    fetchDogBreeds()

})