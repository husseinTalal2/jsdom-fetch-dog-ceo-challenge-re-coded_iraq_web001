console.log('%c HI', 'color: firebrick')
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
document.addEventListener('DOMContentLoaded',()=>{
  Fetch(imgUrl)
  .then(response => {
    response.json();
  })
  .then(data => console.log(data));
})
