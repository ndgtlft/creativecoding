const colorPallet = ["#004b23","#006400","#007200","#008000","#38b000","#70e000","#9ef01a","#ccff33"];

function setup() {
	createCanvas(w=500, w);
	
	obj = [];
	for(let i = 0; i < 5; i++){
		obj[i] = {
			x:random(w),
			y:random(w),
			color:random(colorPallet),
		}
	}
	background(0);
	strokeWeight(1);
}

function draw() {
	// background(0);
	let moveS = 10;
	for(let i = 0; i < obj.length; i++){
		stroke(random(colorPallet));
		// fill(obj[i].color);
		noFill();
		triangle(obj[i].x, obj[i].y, obj[i].x + 0, obj[i].y + moveS, obj[i].x - moveS, obj[i].y - 0);
		let xNext = obj[i].x + random(-1, 1) * 15;
		let yNext = obj[i].y + random(-1, 1) * 15;	

		obj[i].x = xNext;
		obj[i].y = yNext;
	}
	
}
