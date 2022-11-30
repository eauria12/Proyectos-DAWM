getBeersByYear = () => {

  let url = "https://api.punkapi.com/v2/beers"

  fetch(url)
      .then(response => response.json())
      .then(beersCatalog => {
          let years = []
          let res = {}
          beersCatalog.forEach(beer => {
              let brewedYear = beer.first_brewed.split("/")[1]
              years.push(brewedYear)
          })

          for (let i = 0; i < years.length; ++i) {
              if (res[years[i]]==null) {
                  res[years[i]] = 0
              }
              res[years[i]]++
          }
          console.log(res)

          let beerxYearMap = new Map(Object.entries(res))
          setBeersByYear(beerxYearMap)
      })
      .catch(console.error)
}

setBeersByYear = (m) => {
  var bxy = document.getElementById("myChart2")
  var myBarChart = new Chart(bxy, {
      type: 'bar',
      data: {
          labels: Array.from(m.keys()),
          datasets: [{
              label: "Beers brewed",
              backgroundColor: "#4e73df",
              hoverBackgroundColor: "#2e59d9",
              borderColor: "#4e73df",
              data: Array.from(m.values()),
          }],
      },
      options: {
          maintainAspectRatio: false,
          layout: {
              padding: {
                  left: 10,
                  right: 25,
                  top: 25,
                  bottom: 0
              }
          },
          legend: {
              display: false
          },
          title: {
            display: true,
            text: ['Total Anime', 'Per Year'],
            align: 'start',
            color: '#171717',
            font: {
              size: 16,
              family: 'Inter',
              weight: '600',
              lineHeight: 1.4
            }
          },
          tooltips: {
              titleMarginBottom: 10,
              titleFontColor: '#6e707e',
              titleFontSize: 14,
              backgroundColor: "rgb(255,255,255)",
              bodyFontColor: "#858796",
              borderColor: '#dddfeb',
              borderWidth: 1,
              xPadding: 15,
              yPadding: 15,
              displayColors: false,
              caretPadding: 10,
          },
      }
  })
}

window.addEventListener('DOMContentLoaded', (event) => {
  getBeersByYear()
})