import Canvas from './Canvas.js';
import '../scss/index.scss';




var pens = document.getElementsByClassName('controls__link');
var colorList = document.getElementsByClassName('color-list')[0];
var activePen;

for(var i = 0; i < pens.length; i++){

	if( pens[i].classList.contains('controls__link-active') ){
		activePen = pens[i];
	}
}

var sizePen = document.getElementById('size-pen');

var widthCanvas = document.getElementById('width-canvas');
var heightCanvas = document.getElementById('height-canvas');

var canvas = document.getElementById('drawingCanvas');
var btnClear = document.getElementById('clear-canvas');
var btnSave = document.getElementById('save-canvas');



const newCanvas = new Canvas( canvas, {
	color: activePen.dataset.color,
	activePen: activePen,
	size: sizePen.value,
	sizeCanvas: {
		width: widthCanvas.value,
		height: heightCanvas.value
	}
});




for(var i = 0; i < pens.length; i++){

	pens[i].onclick = function(e){
		var target = e.target;

		if( target.classList.contains('controls__link-active') ){
			return;
		}

		newCanvas.activePen.classList.remove('controls__link-active');
		
		newCanvas.changeColor( target );

		target.classList.add('controls__link-active');
	}
}

sizePen.onchange = function(e){
	newCanvas.changeSizePen(+e.target.value);
}

widthCanvas.onchange = function(e){
	newCanvas.changeWidthCanvas(+e.target.value);
}

heightCanvas.onchange = function(e){
	newCanvas.changeHeightCanvas(+e.target.value);
}

btnClear.onclick = function(e){
	newCanvas.clearCanvas();
}
btnSave.onclick = function(e){
	newCanvas.saveCanvas();
}


canvas.onmousedown = newCanvas.startDrawing.bind(newCanvas);
canvas.onmouseup = newCanvas.stopDrawing.bind(newCanvas);
canvas.onmouseout = newCanvas.stopDrawing.bind(newCanvas);
canvas.onmousemove = newCanvas.draw.bind(newCanvas);

// console.log( config );
console.log( canvas );


