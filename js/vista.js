let ulPersonajes = document.querySelector('#personajes');
let sectionPersonaje = document.querySelector('#vistaPersonaje');
let btnNext = document.querySelector('.botones div:last-child');
let btnPrev = document.querySelector('.botones div:first-child');


function printResults(pCharacterList, pPagePrev, pPageNext) {
    ulPersonajes.innerHTML = '';

    for (let character of pCharacterList) {
        let li = document.createElement('li');
        let characterName = document.createTextNode(character.name);
        li.dataset.url = character.url;
        li.addEventListener('click', getInforCharacter);
        li.appendChild(characterName);
        ulPersonajes.appendChild(li);
    }


    btnPrev.dataset.page = pPagePrev;
    btnNext.dataset.page = pPageNext;

    //Que el boton anterior no haya pagina , no este y siguiente cuando no haya pagina que no se vea. 
    btnPrev.style.display = (pPagePrev) ? 'block' : 'none';
    btnNext.style.display = (pPageNext) ? 'block' : 'none';

    btnPrev.addEventListener('click', goPage);
    btnNext.addEventListener('click', goPage);

}

function goPage(event) {
    getAll(event.target.dataset.page);
}


function getInforCharacter(event) {
    //necesito recoger la url y mandarsela a getOne()
    getOne(event.target.dataset.url);
}

function printCharacter(pObjectCharacter) {
    sectionPersonaje.innerHTML = `<h2>${pObjectCharacter.name}</h2>
    <ul>
        <li>Altura: ${pObjectCharacter.height}</li>
        <li>Peso:${pObjectCharacter.mass}</li>
        <li>Color de la piel: ${pObjectCharacter.skin_color}</li>
        <li>Color de pelo: ${pObjectCharacter.hair_color}</li>
        <li>Género: ${pObjectCharacter.genger}</li>
        <li>Año de nacimiento: ${pObjectCharacter.birth_year}</li>
    </ul>
    <h2>Peliculas donde aparece</h2>
    <div id="peliculas"></div>`

    const films = pObjectCharacter.films;

    for (let film of films) {
        getOne(film, 'film');
    }
}

function printFilm(pObjectFilm) {
    let divFilm = document.querySelector('#peliculas');
    divFilm.innerHTML += `<article>
    <h3>${pObjectFilm.title}</h3>
    <ul>
        <li>Capitulo: ${pObjectFilm.episode_id}</li>
        <li>Director: ${pObjectFilm.director}</li>
        <li>Año: ${pObjectFilm.release_date}</li>
    </ul>
</article>`
}