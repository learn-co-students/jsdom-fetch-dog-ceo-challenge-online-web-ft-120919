console.log('%c HI', 'color: firebrick')



function start(){
    fetchData();
    filterData();
}

function filterData(){
    let dd = document.getElementById("breed-dropdown");
    let alphabet = dd.value;
    fetchBreeds(alphabet);
}

function fetchData(){
    fetchImages();
}

function fetchBreeds(alphabet) {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    let {f, ft} = getJSON(breedUrl);
    let ftt = ft.then(function (json)
        {
            renderBreeds(json, alphabet)
        }
    );
    return f;
}

function renderBreeds(json, alphabet) {
    const breedUL = document.getElementById("dog-breeds");
    let breeds = Object.keys(json.message);
    //debugger
    breeds.forEach(breed => {
        if (breed.charAt(0)==alphabet){
            let liTag = document.createElement("li");
            liTag.innerHTML=breed;
            liTag.id=breed;
            liTag.addEventListener("click", changeColor);
            breedUL.appendChild(liTag)
        }
    })
}

function changeColor(event){
    //debugger
    let liTag= document.getElementById(event.target.id);
        liTag.style.color = "blue";
}

function fetchImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    let {f, ft} = getJSON(imgUrl);
    let ftt = ft.then(function (json)
        {
            renderImages(json)
        }
    );
    return f;
}

function renderImages(json) {
    const dogDiv = document.getElementById("dog-image-container")
    let msgArray = json.message;
    msgArray.forEach(img => {
        const imgTg = document.createElement('img');
        imgTg.setAttribute("src", img);
        dogDiv.appendChild(imgTg)
    })
}

function getJSON(url) {
    let f = fetch(url);
    let ft = f.then(function (response) {
            return response.json();
        }
    );
    return {f, ft};
}


document.addEventListener('DOMContentLoaded', function () {
    start()
})