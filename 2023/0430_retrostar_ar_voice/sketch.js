let gif;
let sound;

function preload() {
  gif = loadGif('september.gif');
	sound = loadSound("ohima.mp3");
}
function setup() {
  createARCanvas(1280, 1280);
	clear();
}
function draw() {
  if (gif.loaded()) {
    image(gif, 0, 0, 1280, 1280);
  }
}

function mouseClicked() {
  if (sound.isPlaying()) {
    sound.stop();
  } else {
    sound.play();
  }
}