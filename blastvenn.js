

var svgContainer = d3.select("body").append("svg")
  .attr("width", 500)
  .attr("height", 500).append("g").attr("transform", "translate(-173.5,-785.7)");
var ellipse1 = svgContainer.append("g")
  .attr("transform", "translate(479 1024)")
  .append("ellipse")
  .attr("transform", "rotate(-40)")
  .attr("fill", "#6fff05")
  .attr("rx", 187.33333)
  .attr("ry", 115.33333);
var ellipse2 = svgContainer.append("g")
  .attr("transform", "translate(407 938)")
  .append("ellipse")
  .attr("transform", "rotate(-40)")
  .attr("fill", "#ff6405")
  .attr("rx", 187.33333)
  .attr("ry", 115.33333);
var ellipse3 = svgContainer.append("g")
  .attr("transform", "translate(410 938)")
  .append("ellipse")
  .attr("transform", "rotate(40)")
  .attr("fill", "#0525ff")
  .attr("rx", 187.33333)
  .attr("ry", 115.33333);
var ellipse4 = svgContainer.append("g")
  .attr("transform", "translate(338 1024)")
  .append("ellipse")
  .attr("transform", "rotate(40)")
  .attr("fill", "#1e1e1e")
  .attr("rx", 187.33333)
  .attr("ry", 115.33333);
