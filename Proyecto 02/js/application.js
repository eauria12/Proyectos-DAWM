
window.onload = function () {

  let url = "https://api.jikan.moe/v4/anime"

  fetch(url)
    .then(response => response.json())
    .then(obj => {

      let data = obj['data']
      for (let i = 0; i < data.length; i++) {
        let name = data[i].title
        let episodes = data[i].episodes
        let duration = data[i].duration
        let status = data[i].status
        let rating = data[i].rating
        let rank = data[i].rank
        let genres = data[i].genres
        /*let lineaGenres 
        for(let j = 0; j < genres.length; j++){
          lineaGenres = genres[i].name+lineaGenres
        }*/
      
        //const fila = "<tr><td>" + name + "</td><td>" + episodes + "</td><td>" + duration + "</td><td>" + status + "</td><td>" + rating + "</td><td>" + rank + "</td><td>" + genres + "</td></tr>";
        const fila =`<tr>
                      <td>${name}</td>
                      <td class="text-center">${episodes}</td>
                      <td class="text-center">${duration}</td>
                      <td class="text-center">
                        <div class="rating">${status}</div>
                      </td>
                      <td class="text-center">${rating}</td>
                      <td class="text-center">${rank}</td>
                      <td class="text-center">${genres}</td>
                      </tr>
                      `
        let body = document.createElement("tr");
        body.innerHTML = fila;
        document.getElementById("bodyTable-Api").appendChild(body);
      }

    })
    .catch(error => {
      document.getElementById('respuesta').innerHTML = JSON.stringify(error.message)
    })
}