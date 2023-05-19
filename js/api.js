let noticia1 = document.querySelector("#noticias");
        
function traerApi() {
    fetch('https://newsapi.org/v2/everything?q=computadora&apiKey=1c6ea763d4e246f5bebdbd6b52b3f72b')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            noticia1.innerHTML = `
            <h2>Novedades tecnológicas</h2>

            <img src="${data.articles[0].urlToImage}" alt="">
<p>${data.articles[0].title}. Publicado en la fecha: ${data.articles[0].publishedAt}, por ${data.articles[0].author}.</p>
<a href="${data.articles[0].url}">Ir a la novedad</a>
<img src="${data.articles[1].urlToImage}" alt="">
<p>${data.articles[1].title}.</p>
<p>Publicado en la fecha: ${data.articles[1].publishedAt}</p>
<p>por ${data.articles[1].author}</p>
<a href="${data.articles[1].url}">Ir a la novedad</a>

<img src="${data.articles[2].urlToImage}" alt="">
<p>${data.articles[2].title}.</p>
<p>Publicado en la fecha: ${data.articles[2].publishedAt}</p>
<p>por ${data.articles[2].author}</p>
<a href="${data.articles[2].url}">Ir a la novedad</a>

<img src="${data.articles[3].urlToImage}" alt="">
<p>${data.articles[3].title}.</p>
<p>Publicado en la fecha: ${data.articles[3].publishedAt}</p>
<p>por ${data.articles[3].author}</p>
<a href="${data.articles[3].url}">Ir a la novedad</a>

`            })
}
traerApi()