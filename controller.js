$(window).load(function(){
	var view = new View
	var centroid = new Centroid
	var points = new Points

	var data = points.randData()
	centroid.randCentroid()
	view.appendD3()
	view.scatterPlot(data)
})