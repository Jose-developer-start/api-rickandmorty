//API DE RICK AND MORF
const row = document.querySelector('#row')
const title = document.querySelector('#title')

title.textContent = "API RICK AND MORTY"
//Peticion a la API
async function requestGET (callback){
    const res = await fetch('https://rickandmortyapi.com/api/character/')
    const result = await res.json();
    callback(result.results)
}

requestGET((results)=>{
    
    results.forEach(result => {
        let html = document.createRange().createContextualFragment(/*html*/`
    
        <div class="col">
            <div class="card">
                <img src="${result.image}" alt="">
                <h3>${result.name}</h3>
                <p>${result.species}</p>
            </div>
        </div>
    
    `)
    row.appendChild(html)
    });
})