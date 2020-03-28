console.log('%c HI', 'color: firebrick')

function fetchImages() {
  const imgURL = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgURL).then(function(response) {
    return response.json();
  }).then(function(json) {
    addImages(json);
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
} //function addImages

document.addEventListener('DOMContentLoaded', function() {
  fetchImages();
})

/* json =>
{
    "message": [
      "https://images.dog.ceo/breeds/terrier-russell/little1.jpg",
      "https://images.dog.ceo/breeds/terrier-border/n02093754_373.jpg",
      "https://images.dog.ceo/breeds/bulldog-english/bunz.jpg",
      "https://images.dog.ceo/breeds/husky/n02110185_14560.jpg"
    ],
    "status": "success"
  }
  */
 