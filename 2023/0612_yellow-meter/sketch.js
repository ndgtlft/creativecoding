const colorPallet = ["#C1121F","#119E09","#2071a4"];
let radiusW = 50;
let radiusH = 50;
let ballChangeW = -18;
let ballChangeH = 30;
let resetC = 0;
let reverseC = false;
let x = 0;
let xs = 30;
let lineC = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#ffe519");
	noFill();	
	colorC = random(colorPallet);
}

function draw() {
	if(reverseC == false){
		stroke(colorC);
		strokeWeight(1.5);
		noFill();
		ellipse(windowWidth/2, windowHeight/2, radiusW, radiusH);

		if(radiusW > windowWidth-50){
			ballChangeW *= -1;
			resetC++;
			colorC = random(colorPallet);
		} else if(radiusW < 10){
			ballChangeW *= -1;
			colorC = random(colorPallet);
		  }

		if(radiusH > windowHeight/2-50){
			ballChangeH *= -1;
		} else if(radiusH < 10){
			ballChangeH *= -1;
		  }

		if(resetC == 2){
			reverseC = true;
		}

		radiusH += ballChangeH;
		radiusW += ballChangeW;	
	}

	if(reverseC == true){
		stroke("#ffe519");
		strokeWeight(20);

	if(lineC == 0){
		line(x, 0, x, windowHeight);
		x += xs;
		} else if(lineC == 1){
			line(x+20, 0, x+20, windowHeight);
			x += xs;
			}

	if(x > windowWidth){
		lineC += 1;
		x = 0;
	}		

	if(lineC == 2){
		lineC = 0;
		x = 0;
		reverseC = false;
		resetC = 0;
		radiusH = 50;
		radiusW = 50;
		colorC = random(colorPallet);
		}
	}
}

function mousePressed(){
	colorC = random(colorPallet);
}
