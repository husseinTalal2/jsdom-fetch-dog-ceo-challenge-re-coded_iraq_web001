console.log('%c HI', 'color: firebrick')
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
document.addEventListener('DOMContentLoaded',()=>{
  fetch(imgUrl)
  .then(response => {
    response.json();
    //console.log(response)
  })
  .then(response => console.log(response));
})
