const buttonFind = document.querySelector('#btnFind')
const sectionFilm = document.querySelector('#sectionFilm')

function getRandomInt() {
  const min = Math.ceil(1);
  const max = Math.floor(1000);
  let numRandom = (Math.floor(Math.random() * (max - min + 1)) + min)
  return numRandom
}

const gerarSectionFilm = (title, text, img)=> {
  sectionFilm.innerHTML = `
  <div class="foundMovie">
    <img id="imgFilm" src="" alt="image-film">
    <div id="titleTextFilm">
      <h2 id="titleFilm"></h2>
      <p id="descriptionFilm" class="textFilm"></p>
    </div>
  </div>
  `
  document.querySelector('#titleFilm').innerHTML = title
  document.querySelector('#descriptionFilm').innerHTML = text
  document.querySelector('#imgFilm').setAttribute('src', img)
}

 const getFilm = () => {
  
  axios.get(`https://api.themoviedb.org/3/movie/${getRandomInt()}?api_key=c3abc9e0f2216b50811305ff6a9e8cfe&language=pt-br`)
  .then((res) => {
    let urlImg = `https://image.tmdb.org/t/p/w500${res.data.poster_path}`
    let titletFilm = res.data.title
    let textFilm= res.data.overview
    gerarSectionFilm(titletFilm, textFilm, urlImg)
  }) 
  .catch(() => {
    getFilm()
  })
}

buttonFind.addEventListener('click', getFilm)


