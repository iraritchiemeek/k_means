function Centroid (argument) {
	this.centroid = []
	this.clusters = ["red", "blue"]
}

Centroid.prototype.randCentroid = function() {
	for (var i = 0; i < 2; i++){
	    var x = Math.random() * 20
	    var y = Math.random() * 20
	    this.centroid.push({"type": "centroid", "x": x, "y": y, "cluster": this.clusters[randIndex(this.clusters)] })
	}
	console.log(this.centroid)
};