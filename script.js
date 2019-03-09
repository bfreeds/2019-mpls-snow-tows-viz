/* global d3 */
/* global topojson */

// general variables
var w = 600
var h = 600

d3.json("https://raw.githubusercontent.com/bfreeds/2019-mpls-snow-tows-viz/master/data/snowEmergencies.json")
  .then( data => {
    // get individual geojsons for each snow emergency from the combined topojson
    var towsArmatage = topojson.feature(data, data.objects.armatage)
    var towsYale = topojson.feature(data, data.objects.yale)
    var towsQuincy = topojson.feature(data, data.objects.quincy)
  
    // NAD83 / Minnesota Central (EPSG:26992)
    var projection = d3.geoConicConformal()
      .parallels([45 + 37 / 60, 47 + 3 / 60])
      .rotate([94 + 15 / 60, 0])
      .fitSize([w, h], towsArmatage) // switch this out for a basemap layer when available
  
    var path = d3.geoPath(projection)
    
    // create svg
    var svg = d3.select("#viz")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
    
    
    // draw the three emergency layers
    // TODO:  there must be a simpler way to do this...
    var o = 1 // opacity var makes it easier to change all three layers at once
    var r = 2 // same for radii
    
    // draw circles for armatage tows
    svg.selectAll(".armatage").data(towsArmatage.features)
      .enter()
      .append("circle")
      .attr("class", "tows armatage")
      .attr("cx", d => projection(d.geometry.coordinates)[0])
      .attr("cy", d => projection(d.geometry.coordinates)[1])
      .attr("r", r)
      .attr("opacity", o)
    
     svg.selectAll(".yale").data(towsYale.features)
      .enter()
      .append("circle")
      .attr("class", "tows yale")
      .attr("cx", d => projection(d.geometry.coordinates)[0])
      .attr("cy", d => projection(d.geometry.coordinates)[1])
      .attr("r", r)
      .attr("opacity", o)
  
     svg.selectAll(".quincy").data(towsQuincy.features)
      .enter()
      .append("circle")
      .attr("class", "tows quincy")
      .attr("cx", d => projection(d.geometry.coordinates)[0])
      .attr("cy", d => projection(d.geometry.coordinates)[1])
      .attr("r", r)
      .attr("opacity", o)
})