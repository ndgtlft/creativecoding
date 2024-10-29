// made in chatGPT custom
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 1);
    frameRate(30);
}

function draw() {
    // 背景を時間経過で変化させる
    let hueValue = frameCount % 360;
    background(hueValue, 85, 45, 0.1);  // 徐々に透明にしてトレイル効果を追加

    // ラインの色をランダムにする
    stroke(random(360), 100, 100);
    strokeWeight(random(1, 5));  // 太さもランダムにする

    // ラインをフレームごとに少しずつ動かす
    let offsetX = random(-10, 10);
    let offsetY = random(-10, 10);

    line(0, height/2 + offsetY, width/6 + offsetX, height/6 + offsetY);
    line(width/6 + offsetX, height/6 + offsetY, width/5 + offsetX, height/5 + offsetY);
    line(width/5 + offsetX, height/5 + offsetY, width/3 + offsetX, height/1.3 + offsetY);
    line(width/3 + offsetX, height/1.3 + offsetY, width/2.5 + offsetX, height/1.2 + offsetY);
    line(width/2.5 + offsetX, height/1.2 + offsetY, width/1.8 + offsetX, height/4 + offsetY);
    line(width/1.8 + offsetX, height/4 + offsetY, width/1.7 + offsetX, height/4.1 + offsetY);
    line(width/1.7 + offsetX, height/4.1 + offsetY, width/1.5 + offsetX, height/1.5 + offsetY);
    line(width/1.5 + offsetX, height/1.5 + offsetY, width/1.3 + offsetX, height/1.2 + offsetY);
    line(width/1.3 + offsetX, height/1.2 + offsetY, width/1.2 + offsetX, height/1.1 + offsetY);
    line(width/1.2 + offsetX, height/1.1 + offsetY, width/1.15 + offsetX, height/1.11 + offsetY);
    line(width/1.15 + offsetX, height/1.11 + offsetY, width/1.05 + offsetX, height/1.5 + offsetY);
    line(width/1.05 + offsetX, height/1.5 + offsetY, width + offsetX, height/2 + offsetY);
}

// made in ndgtlft

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     colorMode(HSB,360,100,100,1);
//     background(200,85,45,1);
// }

// function draw() {
//     line(0, height/2, width/6, height/6);
//     line(width/6, height/6, width/5, height/5);
//     line(width/5, height/5, width/3, height/1.3);
//     line(width/3, height/1.3, width/2.5, height/1.2);
//     line(width/2.5, height/1.2, width/1.8, height/4);
//     line(width/1.8, height/4, width/1.7, height/4.1);
//     line(width/1.7, height/4.1, width/1.5, height/1.5);
//     line(width/1.5, height/1.5, width/1.3, height/1.2);
//     line(width/1.3, height/1.2, width/1.2, height/1.1);
//     line(width/1.2, height/1.1, width/1.15, height/1.11);
//     line(width/1.15, height/1.11, width/1.05, height/1.5);
//     line(width/1.05, height/1.5, width, height/2);
// }