$(document).ready(function() {
	
var mouseButtonDown = false;
var penSize = $("#size").val();
var penColor = $("#color").val();
var shape = $(getCheckedRadio("shape")).closest("p").text();

function getCheckedRadio(name) {
	var radios = document.getElementsByName(name);
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			return radios[i];
		}
	}
}
function getOptions() {
	penSize = $("#size").val();
	penColor = $("#color").val();
	shape = $(getCheckedRadio("shape")).closest("p").text();
}
function getMousePos(event) {
	var rect = $("#canvas")[0].getBoundingClientRect();
	return {
		x: event.pageX - rect.left,
		y: event.pageY - rect.top
	}
}

var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
context.fillStyle = "#ffffff";
context.fillRect(0, 0, canvas.width, canvas.height);
context.fillStyle = "#000000";
	
$("#canvas").on('mousedown', (e) => {mouseButtonDown = true; e.preventDefault();});
$("body").on('mouseup', () => mouseButtonDown = false);
$("#canvas").on('mousemove mousedown', function(event) {
	event.preventDefault();
	if (mouseButtonDown) {
		getOptions();
		penSize = $("#size").val();
		var mousePos = getMousePos(event);
		context.fillStyle = penColor;
		context.beginPath();
		if (shape === "Square") {
			context.rect(mousePos.x - penSize / 2, mousePos.y - penSize / 2, penSize, penSize);
		} else {
			context.arc(mousePos.x, mousePos.y, penSize / 2, 0, 2 * Math.PI);
		}
		context.fill();
	}
});


});