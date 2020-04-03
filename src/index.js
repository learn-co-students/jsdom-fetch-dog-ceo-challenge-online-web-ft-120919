let image;
const imgUrl = "https://dog.ceo/api/breeds/image/random/20";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const dogBreedId = "dog-breeds";
const dogImageId = "dog-image-container";
function fetchImage(url, ident) {
	return fetch(`${url}`)
		.then(response => {
			return response.json();
		})
		.then(data => {
			data.message.forEach(url => {
				addDogImage(url, ident);
			});
		});
}
function addDogImage(url, cssId) {
	let list = document.getElementById(`${cssId}`);
	list.innerHTML += `<li><img style="width:1000px;height:600px" src=${url} alt=""></li><br>`;
}
function fetchBreed(url) {
	fetch(`${url}`)
		.then(response => {
			return response.json();
		})
		.then(data => {
			for (let [key, value] of Object.entries(data.message)) {
				let list = document.getElementById("dog-breeds");

				list.innerHTML += `<li>${key}</li><br>`;
			}
		});
}
function func(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

	e.target.style.color = `rgb(${r}, ${g}, ${b})`;
}
// insert dog image10
document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("dog-breeds").addEventListener("click", func);
    fetchImage(imgUrl, dogImageId);
    fetchBreed(breedUrl);
});

