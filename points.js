function Points () {
	this.data = []
}

Points.prototype.randData = function() {
	for (var i = 0; i < 100; i++){
	    var x = Math.random() * 20
	    var y = Math.random() * 20
	    this.data.push({"type": "point", "x": x, "y": y, "cluster": null })
	}
	console.log(this.data)
};