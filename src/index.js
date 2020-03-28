console.log('%c HI', 'color: firebrick')

function fetchImages() {
  const imgURL = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgURL).then(function(response) {
    return response.json();
  }).then(function(json) {
    addImages(json);
  })
} //function fetchImages

function fetchBreeds() {
  const breedURL = "https://dog.ceo/api/breeds/list/all"
  fetch(breedURL).then(function(response) {
    return response.json();
  }).then(function(json) {
    addBreeds(json);
  })
} //function fetchImages

function addImages(json) {
  //debugger 
  const dogImages = document.getElementById("dog-image-container");
  json["message"].forEach(url => {
      const dogImg = document.createElement('img');
      dogImg.src = url;
      dogImages.appendChild(dogImg);
  })
}// function addImages

function addBreeds(json) {
  const breedList = document.getElementById("dog-breeds");
  const allBreeds = json["message"];

  for (const key in allBreeds) {
    if (allBreeds[key].length == 0) {
      li = document.createElement('li');
      li.innerHTML = key;
      breedList.appendChild(li);
      li.classList.add("breed");
    }// no sub-breeds

    else {
      for (let i = 0; i < allBreeds[key].length; i++) {
        li = document.createElement('li');
        li.innerHTML = `${key} (${allBreeds[key][i]})`;
        breedList.appendChild(li);
        li.classList.add("breed");
      }// for
    }// sub-breeds

    breedList.addEventListener("click", function(e) {
      changeColor(e.target, "teal");
      //e.target.style.color = "teal";
    })//eventListener click on list item
  }// for 

}//function addBreeds 

document.addEventListener('DOMContentLoaded', function() {
  fetchImages();
  fetchBreeds();
  const menu = document.getElementById("breed-dropdown");
  menu.addEventListener('change', function(event) {
    let allItems = document.getElementsByClassName("breed")
    for (let i = 0; i < allItems.length; i++) {
      allItems[i].hidden = false;
    }//for

    const firstLetter = event.target.value;
    filterBreeds(firstLetter);
  })//eventListener for dropdown menu
})//eventListener for DOMContentLoaded

function changeColor(elt, newColor){
  elt.style.color = newColor;
}//function changeColor

function filterBreeds(letter) {
  let allItems = document.getElementsByClassName("breed")
  for (let i = 0; i < allItems.length; i++) {
    if (allItems[i].innerText[0] != letter) {
      allItems[i].hidden = true;
    }//if
  }//for
}//function filterBreeds




