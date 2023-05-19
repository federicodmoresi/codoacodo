let clima=document.querySelector('#clima')
const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Rosario';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3ec3075513msh14254a197eee22ep119ec5jsn0a0571d35fca',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
}

function traerApi() {


    fetch(url,options)
        .then(res => res.json())
        .then(data => {
            clima.innerHTML = `
            <img src="${data.current.condition.icon}"<img>
            <p>Clima en ${data.location.name}: ${data.current.temp_c} ºC</p>
            
         `
        })
}
traerApi()