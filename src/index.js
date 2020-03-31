console.log('%c HI', 'color: firebrick')

function fetchPups() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => pupPics(json))
}

function pupPics(json) {
    const doggyDiv = document.querySelector('div#dog-image-container')
    json['message'].forEach(pic => {
        const pupImg = document.createElement('img')
        pupImg.src = `${pic}`
        doggyDiv.appendChild(pupImg)
    })
}

function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => breedFix(json))
}

function breedFix(json) {
    const doggyBreeds = document.querySelector('ul#dog-breeds')
    Object.keys(json['message']).forEach(breed => {
        const pupBreed = document.createElement('li')
        pupBreed.textContent = breed
        doggyBreeds.appendChild(pupBreed)
    })
    document.querySelectorAll('ul#dog-breeds li').forEach(li => {li.addEventListener('click', function() {
        li.style.color = 'red'
    })})
}

document.addEventListener('DOMContentLoaded', function() {
    fetchPups()
    fetchBreeds()
    const doggyDropdown = document.querySelector('select#breed-dropdown')
    doggyDropdown.addEventListener('change', function(opts) {
        const letter = opts.textContent
        document.querySelectorAll('ul#dog-breeds li').forEach(breed => {
            if (breed.textContent.split('')[0] == doggyDropdown.value) {
                breed.hidden = false
            } else {
                breed.hidden = true
            }
        })
    })
})

