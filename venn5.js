var cx = 36;
var cy = -56;
var rx = 160;
var ry = 320;

var ellipseData = [
  { "cx": cx, "cy": cy, "rx": rx, "ry": ry, "fill": "#0000ff", "transform": "rotate(0)" },
  { "cx": cx, "cy": cy, "rx": rx, "ry": ry, "fill": "#0099ff", "transform": "rotate(72)" },
  { "cx": cx, "cy": cy, "rx": rx, "ry": ry, "fill": "#00cc00", "transform": "rotate(144)" },
  { "cx": cx, "cy": cy, "rx": rx, "ry": ry, "fill": "#cc9900", "transform": "rotate(216)" },
  { "cx": cx, "cy": cy, "rx": rx, "ry": ry, "fill": "#ff0000", "transform": "rotate(288)" }
];

var labelData = [
  { "x": 30, "y": -300, "dy": "0.7ex", "font_size": 64, "labeltxt": "A"},
  { "x": 300, "y": -60, "dy": "0.7ex", "font_size": 64, "labeltxt": "B"},
  { "x": 160, "y": 280, "dy": "0.7ex", "font_size": 64, "labeltxt": "C"},
  { "x": -220, "y": 220, "dy": "0.7ex", "font_size": 64, "labeltxt": "D"},
  { "x": -280, "y": -130, "dy": "0.7ex", "font_size": 64, "labeltxt": "E"},
  { "x": 180, "y": -130, "dy": "0.7ex", "labeltxt": "AB"},
  { "x": 40, "y": 230, "dy": "0.7ex", "labeltxt": "AC"},
  { "x": 100, "y": -200, "dy": "0.7ex", "labeltxt": "AD"},
  { "x": -80, "y": -215, "dy": "0.7ex", "labeltxt": "AE"},
  { "x": 190, "y": 125, "dy": "0.7ex", "labeltxt": "BC"},
  { "x": -190, "y": 120, "dy": "0.7ex", "labeltxt": "BD"},
  { "x": 230, "y": 40, "dy": "0.7ex", "labeltxt": "BE"},
  { "x": -60, "y": 220, "dy": "0.7ex", "labeltxt": "CD"},
  { "x": -170, "y": -150, "dy": "0.7ex", "labeltxt": "CE"},
  { "x": -222, "y": 0, "dy": "0.7ex", "labeltxt": "DE"},
  { "x": 90, "y": 150, "dy": "0.7ex", "labeltxt": "ABC"},
  { "x": 148, "y": -153, "dy": "0.7ex", "font_size": 14, "labeltxt": "ABD"},
  { "x": 170, "y": -20, "dy": "0.7ex", "labeltxt": "ABE"},
  { "x": -33, "y": 208, "dy": "0.7ex", "font_size": 14, "labeltxt": "ACD"},
  { "x": -93, "y": -193, "dy": "0.7ex", "font_size": 14, "labeltxt": "ACE"},
  { "x": 20, "y": -180, "dy": "0.7ex", "labeltxt": "ADE"},
  { "x": -120, "y": 120, "dy": "0.7ex", "labeltxt": "BCD"},
  { "x": 190, "y": 100, "dy": "0.7ex", "font_size": 14, "labeltxt": "BCE"},
  { "x": -211, "y": 32, "dy": "0.7ex", "font_size": 14, "labeltxt": "BDE"},
  { "x": -150, "y": -80, "dy": "0.7ex", "labeltxt": "CDE"},
  { "x": -30, "y": 160, "dy": "0.7ex", "labeltxt": "ABCD"},
  { "x": 140, "y": 80, "dy": "0.7ex", "labeltxt": "ABCE"},
  { "x": 120, "y": -100, "dy": "0.7ex", "labeltxt": "ABDE"},
  { "x": -60, "y": -140, "dy": "0.7ex", "labeltxt": "ACDE"},
  { "x": -160, "y": 20, "dy": "0.7ex", "labeltxt": "BCDE"},
  { "x": 0, "y": 0, "dy": "0.7ex", "labeltxt": "ABCDE"}
];


var svgContainer = d3.select("body").append("svg")
  .attr("width", 746)
  .attr("height", 742)
  .attr("viewBox", "-362 -388 746 742");
var ellipses = svgContainer.selectAll("ellipse")
  .data(ellipseData)
  .enter()
  .append("ellipse")
var ellipseAttributes = ellipses
  .attr("cx", function(d) { return d.cx; })
  .attr("cy", function(d) { return d.cy; })
  .attr("rx", function(d) { return d.rx; })
  .attr("ry", function(d) { return d.ry; })
  .attr("transform", function(d) { return d.transform; })
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
