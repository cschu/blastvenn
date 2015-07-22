var rx = 187.33333;
var ry = 115.33333;

var ellipseData = [
  { "rx": rx, "ry": ry, "fill": "#6fff05", "transform": "translate(479 1024) rotate(-40)" },
  { "rx": rx, "ry": ry, "fill": "#ff6405", "transform": "translate(407 938) rotate(-40)" },
  { "rx": rx, "ry": ry, "fill": "#0525ff", "transform": "translate(410 938) rotate(40)" },
  { "rx": rx, "ry": ry, "fill": "#1e1e1e", "transform": "translate(338 1024) rotate(40)" }
];

var labelData = [
  { "x": 600, "y": 950, "dy": "0.7ex", "font_size": 64, "labeltxt": "A"},
  { "x": 510, "y": 825, "dy": "0.7ex", "font_size": 64, "labeltxt": "B"},
  { "x": 310, "y": 825, "dy": "0.7ex", "font_size": 64, "labeltxt": "C"},
  { "x": 220, "y": 950, "dy": "0.7ex", "font_size": 64, "labeltxt": "D"},
  { "x": 550, "y": 895, "dy": "0.7ex", "labeltxt": "AB"},
  { "x": 530, "y": 1020, "dy": "0.7ex", "labeltxt": "AC"},
  { "x": 410, "y": 1120, "dy": "0.7ex", "labeltxt": "AD"},
  { "x": 410, "y": 870, "dy": "0.7ex", "labeltxt": "BC"},
  { "x": 290, "y": 1020, "dy": "0.7ex", "labeltxt": "BD"},
  { "x": 270, "y": 895, "dy": "0.7ex", "labeltxt": "CD"},
  { "x": 490, "y": 945, "dy": "0.7ex", "labeltxt": "ABC"},
  { "x": 350, "y": 1060, "dy": "0.7ex", "labeltxt": "ABD"},
  { "x": 470, "y": 1060, "dy": "0.7ex", "labeltxt": "ACD"},
  { "x": 330, "y": 945, "dy": "0.7ex", "labeltxt": "BCD"},
  { "x": 410, "y": 995, "dy": "0.7ex", "labeltxt": "ABCD"}
];

var svgContainer = d3.select("body").append("svg")
  .attr("width", 746)
  .attr("height", 742)
  .append("g")
  .attr("transform", "translate(-173.5,-785.7)");
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
