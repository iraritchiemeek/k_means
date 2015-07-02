function randIndex (array) {
	return Math.floor(Math.random() * array.length)
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
}

function mergeObj (objectsArray) {
	var mergedObject = []
	$.each(objectsArray, function(index, object){
		$.each(object, function(index, value){
			mergedObject.push(value)
		})
	})
	return  mergedObject
}