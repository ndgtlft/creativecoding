const colorPallet = ["#9b5de5","#f15bb5","#fee440","#00bbf9","#00f5d4"];

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	obj = [];
	for(let i = 0; i < 20; i++){
		obj[i] = {
			x:round(random(windowWidth/4)) * 4,
			y:round(random(windowHeight/4)) * 4,
			color:"#606520",
			// sign:round(random(0,1)),
		}
	}
	background("#ccdc5f");
	strokeWeight(1);
}

function draw() {
	// background(0);
	let rectW = 4;
	let rectH = 4;
	// let moveS = 10;
	let xNext = 0;
	let yNext = 0;

	for(let i = 0; i < obj.length; i++){
		let sign = round(random(0,1));
		stroke(obj[i].color);
		fill(obj[i].color);

		rect(obj[i].x, obj[i].y, rectW, rectH);

		// xNext = obj[i].x + round(random(-1, 1)) * 8;

		if(sign == 0){
			xNext = obj[i].x + round(random(-1, 1)) * 6;
			yNext = obj[i].y;	
		}else{
			xNext = obj[i].x;
			yNext = obj[i].y + round(random(-1, 1)) * 6;	
		}

		if(xNext < 0){
			xNext = 0;
		}else if(xNext > windowWidth){
			xNext = windowWidth;
		}
		
		if(yNext < 0){
			yNext = 0;
		}else if(yNext > windowHeight){
			yNext = windowHeight;
		}

		obj[i].x = xNext;
		obj[i].y = yNext;
	}
	
}
