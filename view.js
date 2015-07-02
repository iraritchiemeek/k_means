function View () {
	this.width = 400
	this.height = 400
}

View.prototype.appendD3 = function() {
	this.svg = d3.select("body")
		.append("svg")
		.attr("width", this.width)
		.attr("height", this.height);
};

View.prototype.scatterPlot = function(data) {
	this.svg.selectAll("circle")
	   .data(data)
	   .enter()
	   .append("circle")
	   .attr("cx", function(d) {
	   		return (d["x"] * 20)
	   })
	   .attr("cy", function(d) {
	   		return (d["y"]*20)
	   })
	   .attr("r", 5)
	   .attr("background-color", "grey")
};


