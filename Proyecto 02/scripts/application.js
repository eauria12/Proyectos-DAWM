
window.onload = function () {
  
    let url = "https://api.jikan.moe/v4/anime"

    fetch(url)
      .then(response => response.json())
      .then(obj => {

        let data = obj['data']
        for(let i=0; i < data.length; i++){
          let name = data[i].title
          let episodes = data[i].episodes
          let duration = data[i].duration
          let status = data[i].status
          let rating = data[i].rating
          
          let fila="<tr><td>"+name+"</td><td>"+episodes+"</td><td>"+duration+"</td><td>"+status+"</td><td>"+rating+"</td></tr>";

          let body = document.createElement("tr");
          body.innerHTML = fila;
          document.getElementById("bodyTable").appendChild(body);
        }

      })
      .catch(error => {
        document.getElementById('respuesta').innerHTML = JSON.stringify(error.message)
      })
}