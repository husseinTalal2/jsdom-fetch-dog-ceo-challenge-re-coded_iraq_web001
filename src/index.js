console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
document.addEventListener('DOMContentLoaded',()=>{
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(resp => addImgElems(resp));
})

document.addEventListener('DOMContentLoaded',()=>{
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(resp => console.log(resp));
})

function addBreeds(){

}

function addImgElems(obj){
  const imgsContainer = document.getElementById('dog-image-container');
  imgsArray = obj.message;
  const img = document.createElement('img');
  for(elem of imgsArray){
    const img = document.createElement('img');
    imgsContainer.appendChild(img);
    img.setAttribute('src',elem);
  }
}
