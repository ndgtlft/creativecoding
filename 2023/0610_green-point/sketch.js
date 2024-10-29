const colorPallet = ["#004b23","#006400","#007200","#008000","#38b000","#70e000","#9ef01a","#ccff33"];

function setup() {
	createCanvas(w=500, w);

	obj = [];
	for(let i = 0; i < 3000; i++){
		obj[i] = {
			x:random(w), y:random(w), color:random(colorPallet)
		}
	}
	background(0);
	strokeWeight(0.1);
}

function draw() {
	for(let i = 0; i < obj.length; i++){
		stroke(obj[i].color);
		let x_next = obj[i].x + random(-1, 1) * 5;
		let y_next = obj[i].y + random(-1, 1) * 5;
		line(obj[i].x, obj[i].y, x_next, y_next);

		obj[i].x = x_next;
		obj[i].y = y_next;
	}
}
