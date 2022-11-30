
window.onload = function () {

  let url = "https://api.jikan.moe/v4/anime"

  fetch(url)
    .then(response => response.json())
    .then(obj => {

      let data = obj['data']
      for (let i = 0; i < data.length; i++) {
        let name = data[i].title
        let episodes = data[i].episodes
        let type = data[i].type
        let status = data[i].status
        let score = data[i].score
        let rank = data[i].rank
        let year = data[i].year
        let nameG = ""
        let genres = Object.values(data[i].genres)
        for (let j = 0; j < genres.length; j++) {
          let listaG = Object.values(genres[j])
          if(j == 0){
            nameG += " " + Object.values(listaG)[2] 
          } else {
            nameG += " , " + Object.values(listaG)[2] 
          }
        }
        if (status != "Currently Airing") {
          const fila = `<tr>
                      <td>${name}</td>
                      <td>${episodes}</td>
                      <td>${type}</td>
                      <td>
                        <div class="rating">${status}</div>
                      </td>
                      <td>${score}</td>
                      <td>${rank}</td>
                      <td>${year}</td>
                      <td>${nameG}</td>
                      </tr>
                      `
          let body = document.createElement("tr");
          body.innerHTML = fila;
          document.getElementById("bodyTable-Api").appendChild(body);
        } else {
          const fila1 = `<tr>
                      <td>${name}</td>
                      <td>${episodes}</td>
                      <td>${type}</td>
                      <td>
                        <div class="ratingAp">${status}</div>
                      </td>
                      <td>${score}</td>
                      <td>${rank}</td>
                      <td>${year}</td>
                      <td>${nameG}</td>
                      </tr>
                      `
          let body = document.createElement("tr");
          body.innerHTML = fila1;
          document.getElementById("bodyTable-Api").appendChild(body);
        }
      }

    })
    .catch(error => {
      document.getElementById('respuesta').innerHTML = JSON.stringify(error.message)
    })
}

