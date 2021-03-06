var svgContainer = d3.select("body").append("svg")
  .attr("width", 746)
  .attr("height", 742)

circleData = [
  {"cx": 100, "cy": 180, "r": 70, "fill": "red"},
  {"cx": 180, "cy": 180, "r": 70, "fill": "green"},
  {"cx": 140, "cy": 109, "r": 70, "fill": "blue"}
];

labelData = [
  { "x": 80, "y": 190, "dy": "0.7ex", "font_size": 64, "labeltxt": "A"},
  { "x": 200, "y": 190, "dy": "0.7ex", "font_size": 64, "labeltxt": "B"},
  { "x": 140, "y": 80, "dy": "0.7ex", "font_size": 64, "labeltxt": "C"},
  { "x": 140, "y": 200, "dy": "0.7ex", "labeltxt": "AB"},
  { "x": 100, "y": 135, "dy": "0.7ex", "labeltxt": "AC"},
  { "x": 180, "y": 135, "dy": "0.7ex", "labeltxt": "BC"},
  { "x": 140, "y": 155, "dy": "0.7ex", "labeltxt": "ABC"},
]

var circles = svgContainer.selectAll("circle")
  .data(circleData)
  .enter()
  .append("circle")
var circleAttributes = circles
  .attr("cx", function(d) { return d.cx; })
  .attr("cy", function(d) { return d.cy; })
  .attr("r", function(d) { return d.r; })
  .style("fill", function(d) { return d.fill; });

var text = svgContainer.selectAll("text")
  .data(labelData)
  .enter()
  .append("text")
  .attr("font-family", "sans-serif")
  .attr("text-anchor", "middle")
  .attr("font-size", 16);
var textLabels = text
  .attr("x", function(d) { return d.x; })
  .attr("y", function(d) { return d.y; })
  .attr("dy", function(d) { return d.dy; })
  .attr("font-size", function(d) { return d.font_size; })
  .text(function(d) { return d.labeltxt; });
