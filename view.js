function View () {
	this.width = 600
	this.height = 600
}

View.prototype.appendD3 = function() {
	this.svg = d3.select("body")
		.append("svg")
		.attr("width", this.width)
		.attr("height", this.height);
};

View.prototype.plotData = function(data) {
	console.log(data)
	this.svg.selectAll("circle")
	   .data(data)
	   .enter()
	   .append("circle")
	   .attr("cx", function(d) {
	   		return (d["x"] * 30)
	   })
	   .attr("cy", function(d) {
	   		return (d["y"] * 30)
	   })
	   .attr("r", 5)
	   .attr("fill", function(d){
	   		if(d["type"] == "centroid") {
			   	console.log(d)
	   			return "black"
	   		} else {
	   			return "red"
	   		}
	   });
};


