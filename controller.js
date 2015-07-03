$(window).load(function(){
	var view = new View
	var centroid = new Centroid
	var points = new Points
	view.appendD3()

	var fillerData = points.randData()
	var centroids = centroid.randCentroid()
	var dataArray = [fillerData, centroids]

	points.getMinMax()
	view.plotData(mergeObj(dataArray))
})