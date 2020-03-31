console.log('%c HI', 'color: firebrick')



function fetchImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl).then(function(response){
    return response.json();

}).then(function(json){
    addImages(json);
})

}
   


function fetchBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl).then(function(response){
    return response.json();

}).then(function(json){
    addBreeds(json);
})

}
 