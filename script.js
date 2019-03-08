/* global d3 */


const snowEmergencies = [
  {
    name: "quincy",
    startDate: "2019-01-28",
    stopDate: "2019-01-30",
    url: "https://opendata.arcgis.com/datasets/9cdebb43979247f79c003e85874f0dc0_0.geojson"
  },
  {
    name: "yale",
    startDate: "2019-02-20",
    stopDate: "2019-02-22",
    url: "https://opendata.arcgis.com/datasets/e9ff65d83e744cce9ee6555ba5850449_0.geojson"
  },
  {
    name: "armatage",
    startDate: "2019-02-24",
    stopDate: "2019-02-26",
    url: "https://opendata.arcgis.com/datasets/e58926289dda4ecc97d5534bab700241_0.geojson"
  }
];

// snowEmergencies.forEach((emergency) => {
//   d3.json(emergency.url).then(d => console.log(emergency.name, d))
// })
function getData() {
}
Promise.all([
    d3.json(snowEmergencies[0].url),
    d3.json(snowEmergencies[1].url),
    d3.json(snowEmergencies[2].url)
]).then(function(allData) {
    console.log(allData);
});