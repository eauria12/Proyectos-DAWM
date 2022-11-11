
window.onload = function () {
  
  document.getElementById('cargar').addEventListener('click', () => {

    let url = "https://random-d.uk/api/random"

    fetch(url)
      .then(response => response.json())
      .then(obj => {
        document.getElementById('respuesta').innerHTML = JSON.stringify(obj)
      })
      .catch(error => {
        document.getElementById('respuesta').innerHTML = JSON.stringify(error.message)
      })

  })

}