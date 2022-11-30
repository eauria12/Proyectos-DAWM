filterTableType = () => {

  let url = "https://api.jikan.moe/v4/anime"

  //GENERO
  fetch(url)
    .then(response => response.json())
    .then(obj => {
      let data = obj['data']
      let array = ["All"]
      for (let i = 0; i < data.length; i++) {
        let type = data[i].type
        array.push(type)
      }

      const dataArr = [... new Set(array)];

      for (let i = 0; i < dataArr.length; i++) {
        let body = document.createElement("option");
        body.innerHTML = dataArr[i];
        document.getElementById("lista").appendChild(body);

      }

      let filterSelector = document.querySelector('#lista')
      filterSelector.addEventListener('change', event => {
        // Variables
        //let dropdown, table, rows, cells, country, filter;
        let dropdown = document.getElementById("lista")
        let table = document.getElementById("myTable")
        let rows = table.getElementsByTagName("tr")
        const filter = (filterSelector.options[filterSelector.selectedIndex].text)

        // Loops through rows and hides those with countries that don't match the filter
        for (let row of rows) { // `for...of` loops through the NodeList
          let cells = row.getElementsByTagName("td")
          let type = cells[2]; // gets the 2nd `td` or nothing
          // if the filter is set to 'All', or this is the header row, or 2nd `td` text matches filter
          if (filter == "All" || !type|| (filter == type.textContent)) {
            row.style.display = ""; // shows this row
          }
          else {
            row.style.display = "none"; // hides this row
          }
        }
      })
    })
    .catch(error => {
      document.getElementById('respuesta').innerHTML = JSON.stringify(error.message)
    })

}

filterTableYear = () => {

  let url = "https://api.jikan.moe/v4/anime"

  //GENERO
  fetch(url)
    .then(response => response.json())
    .then(obj => {
      let data = obj['data']
      let array = ["All"]
      for (let i = 0; i < data.length; i++) {
        let type = data[i].year
        array.push(type)
      }

      const dataArr = [... new Set(array)];

      for (let i = 0; i < dataArr.length; i++) {
        let body = document.createElement("option");
        body.innerHTML = dataArr[i];
        document.getElementById("listaYear").appendChild(body);

      }

      let filterSelector = document.querySelector('#listaYear')
      filterSelector.addEventListener('change', event => {
        // Variables
        //let dropdown, table, rows, cells, country, filter;
        let dropdown = document.getElementById("listaYear")
        let table = document.getElementById("myTable")
        let rows = table.getElementsByTagName("tr")
        const filter = (filterSelector.options[filterSelector.selectedIndex].text)

        // Loops through rows and hides those with countries that don't match the filter
        for (let row of rows) { // `for...of` loops through the NodeList
          let cells = row.getElementsByTagName("td")
          let year = cells[6]; // gets the 2nd `td` or nothing
          // if the filter is set to 'All', or this is the header row, or 2nd `td` text matches filter
          if (filter == "All" || !year || (filter == year.textContent)) {
            row.style.display = ""; // shows this row
          }
          else {
            row.style.display = "none"; // hides this row
          }
        }
      })
    })
    .catch(error => {
      document.getElementById('respuesta').innerHTML = JSON.stringify(error.message)
    })

}

var btn = document.getElementById("btn-dropdown");
var nav = document.getElementById("genres-drop");
var nav2 = document.getElementById("genres-drop2");

btn.addEventListener('click', () => {
  if (nav.style.display == "none" || nav2.style.display == "none") {
    nav.style.display = "block";
    nav2.style.display = "block";
  } else {
    nav.style.display = "none";
    nav2.style.display = "none";
  }
});


window.addEventListener('DOMContentLoaded', (event) => {
  filterTableType()
  filterTableYear()
})


/*filterTable = () => {

  let url = "https://api.jikan.moe/v4/anime"

  //GENERO
  fetch(url)
    .then(response => response.json())
    .then(obj => {
      let data = obj['data']
      let array = ["All"]
      for (let i = 0; i < data.length; i++) {
        let genres = Object.values(data[i].genres)
        for (let j = 0; j < genres.length; j++) {
          let listaG = Object.values(genres[j])
          let nameG = Object.values(listaG)[2]
          array.push(nameG)
        }
      }

      const dataArr = [... new Set(array)];

      for (let i = 0; i < dataArr.length; i++) {
        let body = document.createElement("option");
        body.innerHTML = dataArr[i];
        document.getElementById("lista").appendChild(body);

      }

      let filterSelector = document.querySelector('#lista')
      filterSelector.addEventListener('change', event => {
        // Variables
        //let dropdown, table, rows, cells, country, filter;
        let dropdown = document.getElementById("lista")
        let table = document.getElementById("myTable")
        let rows = table.getElementsByTagName("tr")
        const n = (filterSelector.options[filterSelector.selectedIndex].text)

        // Loops through rows and hides those with countries that don't match the filter
        for (let row of rows) { // `for...of` loops through the NodeList
          let cells = row.getElementsByTagName("td")
          let country = cells[6]; // gets the 2nd `td` or nothing
          // if the filter is set to 'All', or this is the header row, or 2nd `td` text matches filter
          let fila1 = country.textContent.split(" , ")
          let num = 0 
          for(let i=0; i < fila1.length; i++) {
            if(n == fila1[i]){
              num += 1
            }else {
              num += 0
            }
          }

          if (num==1) {
            row.style.display = ""; // shows this row 
          } else {
            row.style.display = "none";
          }
        }
      })



    })
    .catch(error => {
      document.getElementById('respuesta').innerHTML = JSON.stringify(error.message)
    })

}

var btn = document.getElementById("btn-dropdown");
var nav = document.getElementById("genres-drop");

btn.addEventListener('click', () => {
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
});*/



/*window.addEventListener('DOMContentLoaded', (event) => {
  filterTable()
})


/*
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


const filteredDataByGenre = (animeArr, value) => {
  return animeArr.filter((a) => a.genres.some((g) => g.name === value));
};
exports.filteredDataByGenre = filteredDataByGenre;


const builTableBody = (animeArr) => {
  (0, exports.emptyHTML)("table-body");
  Array.from(animeArr).forEach((a) => {
      var _a;
      const genres = (_a = a.genres) === null || _a === void 0 ? void 0 : _a.map((g) => g.name).join(", ");
      const html_anime = `
<tr>
  <td>${a.title}</td>
  <td class="text-center">${a.episodes}</td>
  <td class="text-center">${a.status}</td>
  <td class="text-center">${a.score}</td>
  <td class="text-center">${a.rank}</td>
  <td class="text-center">${a.type}</td>
  <td class="text-center">${genres}</td>
</tr>
`;
      (0, exports.buildHTML)("table-body", html_anime);
  });
};
exports.builTableBody = builTableBody;


const addEventListenerToDropdownGenre = (animes) => {
  const genreDropdown = document.querySelector("#lista");
  genreDropdown === null || genreDropdown === void 0 ? void 0 : genreDropdown.addEventListener("click", (e) => {
      const target = e.target;
      const selected = target === null || target === void 0 ? void 0 : target.value;
      (0, exports.emptyHTML)("bodyTable-Api");
      if (selected === "All") {
          (0, exports.builTableBody)(animes);
      }
      else {
          const filtered = (0, exports.filteredDataByGenre)(animes, selected);
          (0, exports.builTableBody)(filtered);
      }
  });
};
exports.addEventListenerToDropdownGenre = addEventListenerToDropdownGenre;

const addAllListeners = (animes) => {
  let modAnimes = animes;
  (0, exports.addEventListenerToDropdownGenre)(modAnimes);
};
exports.addAllListeners = addAllListeners;*/