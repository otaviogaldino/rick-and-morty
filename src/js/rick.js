let nome = document.getElementById('nome')
let foto = document.getElementById('foto')
let origem = document.getElementById('origem')

//api
fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((data) => {
        nome.innerText = data.results[0].name
        foto.src = data.results[0].image
        origem.innerText = data.results[0].origin.name
    })

let btn = document.getElementById('mudar-personagem')
let indice = 0
let btnBack = document.getElementById('voltar-personagem')
btn.addEventListener('click', function()  {
    fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((data) => {
        indice++
        nome.innerHTML = data.results[indice].name
        foto.src = data.results[indice].image
        origem.innerText = data.results[indice].origin.name

    })
})

btnBack.addEventListener('click', function() {
    fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((data) => {
        indice--
        nome.innerHTML = data.results[indice].name
        foto.src = data.results[indice].image
        origem.innerText = data.results[indice].origin.name
    })
})
