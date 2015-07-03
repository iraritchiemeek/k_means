function Points () {
	this.data = []
	this.extremes = []
}

Points.prototype.randData = function() {
	for (var i = 0; i < 50; i++){
	    var x = Math.random() * 20
	    var y = Math.random() * 20
	    this.data.push({"type": "point", "x": x, "y": y, "cluster": null })
	}
	return this.data
};

Points.prototype.getMinMax = function() {
	for (var i in this.data){
		var pointXY = [this.data[i]["x"], this.data[i]["y"]]
		for (var dimension in pointXY){
			if ( ! this.extremes[dimension] )
			{
				this.extremes[dimension] = {min: 1000, max: 0}
			}

			if (pointXY[dimension] < this.extremes[dimension].min)
			{
				this.extremes[dimension].min = pointXY[dimension]
			}

			if (pointXY[dimension] > this.extremes[dimension].max)
			{
				this.extremes[dimension].max = pointXY[dimension]
			}
		}

	}
	console.log(this.extremes)
};
