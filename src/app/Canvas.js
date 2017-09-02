
export default class Canvas {
	constructor(canvas, props) {
		this.canvas = canvas;
		this.canvas.width = +props.sizeCanvas.width;
		this.canvas.height = +props.sizeCanvas.height;

		this.activePen = props.activePen,
		this.ctx = canvas.getContext('2d');
		this.ctx.lineWidth = props.size;
		this.ctx.strokeStyle = props.color;
		this.ctx.lineCap = "round";
		this.isDrawing = false;
	}

	changeColor(target){
		this.ctx.strokeStyle = target.dataset.color;
		this.activePen = target;
	}

	changeSizePen(size){
		this.ctx.lineWidth = size
	}

	startDrawing(e) {
		this.isDrawing = true;
	
		this.ctx.beginPath();
		this.ctx.moveTo(e.pageX - this.canvas.offsetLeft, e.pageY - this.canvas.offsetTop);
	}

	draw(e){
		if (this.isDrawing == true)
		{
		  	var x = e.pageX - this.canvas.offsetLeft;
			var y = e.pageY - this.canvas.offsetTop;
			
			this.ctx.lineTo(x, y);
			this.ctx.stroke();
		}
	}

	stopDrawing(e){
		this.isDrawing = false;

		console.log( this.canvas );
		console.log( this.ctx );
	}
	
	changeWidthCanvas(width){
		var oldimg = this.ctx.getImageData(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		
		this.canvas.width = width;
		
		this.ctx.putImageData(oldimg, 0, 0, 0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		
	}
	changeHeightCanvas(height){
		var oldimg = this.ctx.getImageData(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

		this.canvas.height = height;
		
		this.ctx.putImageData(oldimg, 0, 0, 0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

	}

	clearCanvas() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	saveCanvas() {
		console.log('qweqweqw');
		console.log( this.ctx.path );
		console.log( this.canvas.toDataURL() );
	}


}


