console.log('%c HI', 'color: firebrick');
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

document.addEventListener('DOMContentLoaded',()=>{
  const imgsContainer = document.getElementById('dog-image-container');
  console.log(imgsContainer);
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(resp => addImgElems(resp));
})
function addImgElems(obj){
  imgsArray = obj.message;
  const img = document.createElement('img');
  for(elem of imgsArray){
    console.log(elem)
    const img = document.createElement('img');
    imgsContainer.appendChild(img);
    img.setAttribute('src','elem');
  }
  //console.log(imgsArray);
}
