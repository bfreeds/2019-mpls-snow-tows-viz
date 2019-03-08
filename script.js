/* global d3 */


d3.json("https://raw.githubusercontent.com/bfreeds/2019-mpls-snow-tows-viz/master/data/snowEmergencies.json")
  .then( data => {
    console.log("topojson", data)
  })