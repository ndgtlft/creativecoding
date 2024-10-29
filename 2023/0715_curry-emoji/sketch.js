let cs = [];
let curry = [];
let curryNum = 80;

function setup(){
	createCanvas(windowWidth, windowHeight);
	for(let i = 0; i < curryNum; i++){
		curry[i] = {
			x: random(-1000,-500),
			y: random(windowHeight),
			s: random(1,40),
			z: random(0.5,6)
		}
	}
	for(let i = 0; i < curry.length; i++){
		cs[i] = 0;
	}
}

function draw(){
	background("#ffc300");

	for(let i = 0; i < curry.length; i++){
		textSize(800/curry[i].s);
		text("🍛", curry[i].x+cs[i], curry[i].y);
		cs[i] += curry[i].z;

		if(curry[i].x+cs[i] >= windowWidth+300){
			cs[i] = 0;
			curry[i].x = random(-1000,-500); 
			curry[i].y = random(windowHeight);
			curry[i].s = random(1,40);
		}
	}
}