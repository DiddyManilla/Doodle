var mouseButtonDown = false;
function getMousePos(event) {
	var rect = $("#canvas")[0].getBoundingClientRect();
	return {
		x: event.pageX - rect.left,
		y: event.pageY - rect.top
	}
}
$(document).ready(function() {

	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');
	context.fillStyle = "#ffffff";
	context.fillRect(0, 0, canvas.width * 2, canvas.height);
	
	$("#canvas").on('mousedown', () => mouseButtonDown = true);
	$("#canvas").on('mouseup', () => mouseButtonDown = false);
	
	$("#canvas").on('mousemove', function(event) {
		if (mouseButtonDown) {
			context.fillStyle = "#000000";
			var mousePos = getMousePos(event);
			context.fillRect(mousePos.x, mousePos.y, 10, 10);
		}
	});
});