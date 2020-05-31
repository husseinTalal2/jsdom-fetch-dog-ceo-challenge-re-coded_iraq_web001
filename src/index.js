console.log('%c HI', 'color: firebrick')
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
document.addEventListener('DOMContentLoaded',()=>{
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(resp => addImgElems(resp));
})
function addImgElems(obj){
  imgsArray = obj.message;
  for(elem in imgsArray){
    console.log(elem)
  }
  //console.log(imgsArray);
}
