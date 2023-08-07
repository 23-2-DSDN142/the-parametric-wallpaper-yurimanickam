//my variables
let x = 100;//global x

let randomHeight = false; // make the heights of the platforms have variability
let heightRandomness = 1; //variability of tha random height
let platformHeight = 50;//adjust the height the platform spawns at.
let platformThickness = 15;
let platformDepth = 20;//how tall the ellipse is in relation to its width, adjusting depth

let beamOffset = 40;
let beamWidth = 12;
//structure variables, 40 on beamOffset makes the beams line up.

let carColour = "red"; // mix, red, yellow, blue
let randomCar = false;
let moveCarX = 0;
let moveCarY = 0;
let scaleCarX = 1;
let scaleCarY = 1;

let wheelWidth = 23;
let rimSize = 0.7;
let suspensionHeight = 0;
let tiresX = 0;
let spokeWidth = 10;



//Global Variables
let pHeight = 200 - platformHeight;
let carScaleConst = 1.05;

//clouds array
let clouds = true;
let cloud = [];
let cloudDensity = 0.5;
let cloudParticleSize = 0.5;

let redCars = ["#ec3a2e", "#ca291c", "#647b81", "#3b4d4f", "#ca291c", "#647b81", "#3b4d4f", "#ca291c",
               "#ca291c", "#fbb833", "#ca291c", "#3b4d4f", "#fbb833", "#181717", "#4c566b", "#262726",
               "#757977", "#ec3a2e", "#647b81", "#ca291c", "#fbb833", "#ec3a2e", "#c6c62a" ];
let blueCars = [];
let yellowCars = [];
let activeColour = [];

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;

}

function wallpaper_background() {
  background("#8fb4cc");
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  if (randomHeight == true) {
    randHi = pHeight + random(-10 * heightRandomness, 10 * heightRandomness);
  } else {
    randHi = pHeight;
  }

  let cloudRand = random(1,1.5)
  let cloudPos = random(20, 180);
  let cloudPos2 = random(20, 180);
    if (random() < 1 && clouds == true) {
    push(); 
    generateCloud(cloudRand, cloudPos, cloudPos2);
    drawCloud();
    pop();
  }

  beamBottom(randHi);
  platform(randHi);
  beamTop(randHi);

  if (random(0,1) < 0.5 && randomCar == true) {
    push(); 
    rearWing()
    carBody(randHi);
    drawTires(randHi);
    frontWing(randHi);
    pop();
  }else {

  }
  if (randomCar  == false)  {
  rearWing()
  carBody(randHi);
  drawTires(randHi);
  frontWing(randHi);
  }
}


function drawTires(randHi) {
  tires(randHi);
  wheel(randHi, 51, -9);
  wheel(randHi, 134, -9);
}

function generateCloud(cloudRand, pos, sop) {
  cloud = [];
  noStroke();
  let cloudX = pos;
  let cloudY = sop;
  let cloudWidth = random(25*cloudRand, 50*cloudRand); // Adjust width range
  let cloudHeight = random(10*cloudRand, 25*cloudRand); // height range
  let numEllipses = 500 * cloudDensity; // no of cloud particles
  let numBoundEllipses = 8; // bound ellipses
  let cloudShade = random(150, 200);
  let cloudTransparency = random(0, 30);
  
  for (let i = 0; i < numBoundEllipses; i++) {
    let boundsWidth = cloudWidth * random(0.8, 1.2); // Width of the bounds ellipse
    let boundsHeight = boundsWidth * random(0.6, 0.8*cloudRand); // Height of the bounds ellipse
    let xOffset = random(-cloudWidth / 2, cloudWidth / 2);
    let yOffset = random(-cloudHeight / 2, cloudHeight / 2);
    let boundX = cloudX + xOffset;
    let boundY = cloudY + yOffset;
    cloud.push({ x: boundX, y: boundY, cloudWidth: boundsWidth, cloudHeight: boundsHeight, numEllipses, cloudShade, cloudTransparency });
  }
}

function drawCloud() {
  for (let i = 0; i < cloud.length; i++) {
    let { x, y, cloudWidth, cloudHeight, numEllipses, cloudShade, cloudTransparency } = cloud[i];
    fill(cloudShade, cloudTransparency);
    for (let j = 0; j < numEllipses; j++) {
      let angle = map(j, 0, numEllipses, 0, TWO_PI); // spread around centre
      let radiusX = random(cloudWidth / 2); //keep within bounds. half width, height
      let radiusY = random(cloudHeight / 2);
      let ellipseX = x + radiusX * cos(angle);
      let ellipseY = y + radiusY * sin(angle);
      let ellipseSize = random(1, 15 * cloudParticleSize); // Adjust the size range of ellipses
      ellipse(ellipseX, ellipseY, ellipseSize);
    }
  }
}

function beamBottom(pHeight){
  noStroke();
  fill("#e24646");
  
  let beamCenterXLeft = x - 10 - beamOffset;
  let beamCenterXRight = x + 10 + beamOffset;
  let beamHeight = (200 - pHeight) * 5; 


  for (let i = 0; i < beamHeight; i++) {
    let yPos = 200 + 0.2 * -i;
    //shades of grey
    let shade = random(60, 90);
    fill(shade);
     //draw shapes
    ellipse(beamCenterXRight, yPos, beamWidth, beamWidth/platformDepth);
    ellipse(beamCenterXLeft, yPos, beamWidth, beamWidth/platformDepth);
}
}

function platform(pHeight) {
  noStroke();
  for (let i = 0; i < platformThickness; i++) {
      //stacking, creating the same texture as before
      let yPos = pHeight + platformThickness + 1 * -i;
      
      let shade = random(60, 100);
      //adding a blue tinge to the platform?
      fill(shade,100,100, 180);
      ellipse(x , yPos, 180, 180/platformDepth);
  }
  fill("#867a7a");
  ellipse(x , pHeight, 180, 180/platformDepth);
  fill("#1a171779");
  ellipse(x , pHeight, 150 * scaleCarX, 140 * scaleCarY/platformDepth);
  //upper platform stays a uniform colour throughout iterations, althought this is an easy enough change if needed
}

function beamTop(pHeight) {
  noStroke();
  fill("#000000");
  let beamCenterXLeft = x - 10 - beamOffset;
  let beamCenterXRight = x + 10 + beamOffset;
  let beamHeight = 2 + pHeight * 5; 


  for (let i = 0; i < beamHeight; i++) {
    let yPos = pHeight + 0.2 * -i;
    let shade = random(60, 90);
    fill(shade);
    ellipse(beamCenterXRight, yPos, beamWidth, beamWidth/platformDepth);
    ellipse(beamCenterXLeft, yPos, beamWidth, beamWidth/platformDepth);
}
}

function carBody() {
  push();
  translate(16 + moveCarX, pHeight - 47 - moveCarY);
  scale(carScaleConst * scaleCarX, carScaleConst * scaleCarY);
  //global translators

  
  //Main Body Part
  //coordinates copied and refactored off svg files
  fill("#ec3a2e");
  beginShape();
  vertex(129.1, 33.65);
  vertex(105.81, 22.84);
  bezierVertex(103.25, 21.77, 100.58, 21.22, 97.9, 21.22);
  vertex(84.68, 21.22);
  vertex(82.59, 19.14);
  bezierVertex(80.44, 16.99, 77.84, 15.84, 75.17, 15.84);
  vertex(66.07, 15.84);
  vertex(66.07, 5.29);
  vertex(56.28, 5.29);
  bezierVertex(49.4, 5.29, 42.59, 7.28, 36.32, 11.13);
  vertex(16.23, 23.46);
  vertex(16.23, 35.97);
  vertex(20.9, 35.97);
  vertex(20.9, 43.29);
  vertex(125.03, 43.29);
  bezierVertex(125.18, 39.09, 126.8, 35.92, 129.08, 33.65);
  endShape();
  
  //Front WingTip Overlay
  fill("#ca291c");
  beginShape();
  vertex(144.35, 40.86);
  vertex(129.1, 33.65);
  bezierVertex(126.81, 35.92, 125.2, 39.09, 125.05, 43.29);
  vertex(129.77, 43.29);
  vertex(144.36, 40.86);
  endShape();
  
  //Front WingTip Behind
  fill("#647b81");
  beginShape();
  vertex(116.98, 34.97);
  vertex(116.98, 43.29);
  vertex(124.94, 43.29);
  bezierVertex(125.42, 41.37, 125.88, 39.44, 126.33, 37.51);
  vertex(116.98, 34.97);
  endShape();
  
  //Front WingTip Front
  fill("#3b4d4f");
  beginShape();
  vertex(137.08, 40.43);
  vertex(126.34, 37.51);
  bezierVertex(125.41, 39.48, 125.16, 41.42, 124.95, 43.29);
  vertex(137.66, 43.29);
  vertex(137.08, 40.43);
  endShape();
  
  //Big Round Shading Bitte
  fill("#ca291c");
  beginShape();
  vertex(20.91, 43.15);
  vertex(20.91, 43.29);
  vertex(89.35, 43.29);
  bezierVertex(68.96, 26.53, 41.15, 25.66, 20.91, 43.15);
  endShape();
  
  //Curvy Big Shading Bitte
  fill("#647b81");
  beginShape();
  vertex(111.03, 32.83);
  vertex(100.2, 32.83);
  bezierVertex(94.05, 32.83, 87.91, 33.72, 81.9, 35.49);
  vertex(74.63, 37.63);
  bezierVertex(68.62, 39.4, 62.48, 40.29, 56.33, 40.29);
  vertex(56.33, 40.29);
  bezierVertex(45.47, 40.29, 34.71, 37.51, 24.61, 32.1);
  vertex(17.25, 28.15);
  vertex(17.25, 43.29);
  vertex(110.13, 43.29);
  vertex(111.03, 32.83);
  endShape();
  
  //Air Intake
  fill("#3b4d4f");
  beginShape();
  vertex(94.11, 28.92);
  bezierVertex(94.11, 26.31, 95.66, 24.2, 97.57, 24.2);
  vertex(94.01, 24.2);
  bezierVertex(92.1, 24.2, 90.55, 26.31, 90.55, 28.92);
  bezierVertex(90.55, 29.45, 90.87, 29.63, NaN, 32.48);
  bezierVertex(NaN, 32.48, NaN, 32.05, NaN, 31.52);
  endShape();
  
  //Air Intake Behind
  fill("#ca291c");
  beginShape();
  vertex(84.74, 21.24);
  vertex(54.38, 21.24);
  bezierVertex(53.96, 21.24, 53.91, 22.09, 54.34, 22.16);
  vertex(80.08, 26.81);
  bezierVertex(82.55, 27.26, 84.75, 24.64, 84.75, 21.24);
  vertex(84.75, 21.24);
  endShape();
  
  //Engine Intake
  fill("#ca291c");
  beginShape();
  vertex(66.08, 15.84);
  vertex(39.94, 15.84);
  bezierVertex(39.34, 15.84, 39.18, 14.72, 39.73, 14.41);
  vertex(40.29, 14.09);
  bezierVertex(46.23, 10.71, 52.61, 8.97, 59.05, 8.97);
  vertex(66.08, 8.97);
  vertex(66.08, 15.84);
  endShape();

  //Intake Cover
  fill("#fbb833");
  beginShape();
  vertex(66.08, 5.29);
  vertex(67.32, 5.29);
  vertex(67.32, 15.84);
  vertex(66.08, 15.84);
  vertex(66.08, 5.29);
  endShape();
  
  //RV Mirror
  fill("#ca291c");
  beginShape();
  vertex(93.82, 21.24);
  vertex(91.9, 18.77);
  bezierVertex(90.78, 17.33, 89.31, 16.53, 87.77, 16.53);
  vertex(86.97, 16.53);
  bezierVertex(86.39, 16.53, 85.93, 17.17, 85.93, 17.95);
  vertex(85.93, 17.95);
  bezierVertex(85.93, 18.73, 86.4, 19.37, 86.97, 19.37);
  vertex(89.64, 19.37);
  vertex(91.06, 21.24);
  vertex(93.82, 21.24);
  endShape();
  
  
  //SharkFin
  fill("#3b4d4f");
  beginShape();
  vertex(89.35, 43.29);
  vertex(80.62, 38.88);
  bezierVertex(80.09, 38.61, 79.51, 38.58, 78.96, 38.79);
  vertex(67.26, 43.29);
  vertex(89.34, 43.29);
  endShape();
  
  //BodyVent1
  fill("#fbb833");
  beginShape();
  vertex(42.1, 15.81);
  vertex(46.98, 15.81);
  vertex(46.98, 18.77);
  bezierVertex(46.98, 19.64, 46.27, 20.34, 45.41, 20.34);
  vertex(43.67, 20.34);
  bezierVertex(42.8, 20.34, 42.1, 19.63, 42.1, 18.77);
  vertex(42.1, 15.81);
  endShape();
  
  pop();
}


function tires(pHeight) {
  push();
  translate(0 + moveCarX, pHeight - 0 + moveCarY);
  scale(carScaleConst * scaleCarX, carScaleConst * scaleCarY);
  //draw the tires and the inner rim
  fill("#181717");
  ellipse(51 + tiresX, -9, wheelWidth);
  ellipse(134 + tiresX, -9, wheelWidth);

  fill("#4c566b");
  ellipse(51 + tiresX, -9, wheelWidth *  rimSize);
  ellipse(134 + tiresX, -9, wheelWidth * rimSize);
  pop();
}

function wheel(pHeight, wheelX, wheelY) {
  //draw the beziercurved wheel(sadly detail is lost but still.)
  push();
  translate(0 + moveCarX, pHeight - 0 + moveCarY);
  scale(carScaleConst * scaleCarX, carScaleConst * scaleCarY);
  angleMode(RADIANS);//spent way too long on this
  let numSpokes = 30;
  let spokeLength = 8 * rimSize;
  let circleRadius = 2;
  let gradientIntensity = 3;

  let centerX = wheelX + tiresX; 
  let centerY = wheelY; 

  let angleStep = TWO_PI / numSpokes;

  for (let i = 0; i < numSpokes; i++) {
    let angle = i * angleStep;

    let innerX = centerX + cos(angle) * circleRadius;
    let innerY = centerY + sin(angle) * circleRadius;
    let outerX = centerX + cos(angle) * (circleRadius + spokeLength);
    let outerY = centerY + sin(angle) * (circleRadius + spokeLength);

    let cx1 = innerX + cos(angle - HALF_PI) * spokeWidth;
    let cy1 = innerY + sin(angle - HALF_PI) * spokeWidth;
    let cx2 = outerX + cos(angle + HALF_PI) * spokeWidth;
    let cy2 = outerY + sin(angle + HALF_PI) * spokeWidth;

    // Draw the gradiented spoke

    noFill();
    for (let t = 0; t <= 1; t += 0.01) {
      let w = bezierPoint(innerX, cx1, cx2, outerX, t);
      let e = bezierPoint(innerY, cy1, cy2, outerY, t);

      let gradientColor = lerpColor(color("#262726"), color("#757977"), t * gradientIntensity);
      stroke(gradientColor);
      strokeWeight(0.1);
      point(w, e);
    } 
  }
  pop();
}

function rearWing(){
  push();
  translate(16 + moveCarX, pHeight - 47 - moveCarY);
  scale(carScaleConst * scaleCarX, carScaleConst * scaleCarY);
    //Wing Top Part
    fill("#ec3a2e");
    beginShape();
    vertex(18.79, 0);
    vertex(1.23, 0);
    bezierVertex(0.55, 0, 0, 0.75, 0, 1.67);
    vertex(0, 15.85);
    bezierVertex(4.14, 18.74, 8.33, 21.54, 12.21, 24.92);
    vertex(12.21, 24.49);
    bezierVertex(12.23, 24.02, 12.39, 23.57, 12.65, 23.27);
    vertex(19.58, 15.29);
    bezierVertex(19.86, 14.97, 20.02, 14.5, 20.02, 14.01);
    vertex(20.02, 1.67);
    bezierVertex(20.02, 0.75, 19.47, 0, 18.79, 0);
    endShape();
    rect(10,20,20,15);
    
    //Wing Bottom Part
    fill("#647b81");
    beginShape();
    vertex(0, 29.32);
    bezierVertex(0, 30.06, 0.35, 30.71, 0.87, 30.92);
    vertex(10.43, 34.85);
    bezierVertex(11.2, 35.17, 11.99, 34.4, 12.01, 33.3);
    vertex(12.21, 24.92);
    bezierVertex(8.33, 21.54, 4.14, 18.74, 0, 15.85);
    vertex(0, 29.32);
    endShape();

     //WingStripe
  fill("#ca291c");
  beginShape();
  vertex(0, 3.39);
  vertex(14.12, 3.39);
  vertex(14.12, 10.04);
  vertex(0, 10.04);
  vertex(0, 3.39);
  endShape();
  
  //WingSticker
  fill("#fbb833");
  beginShape();
  vertex(13.22, 3.39);
  vertex(16.52, 3.39);
  vertex(17.31, 4.18);
  vertex(17.31, 9.25);
  vertex(16.52, 10.04);
  vertex(13.22, 10.04);
  vertex(12.43, 9.25);
  vertex(12.43, 4.18);
  vertex(13.22, 3.39);
  endShape();
  pop();
}

function frontWing(pHeight){
  push();
  translate(16 + moveCarX, pHeight - 47 - moveCarY);
  scale(carScaleConst * scaleCarX, carScaleConst * scaleCarY);

  //FrontWing Top
  fill("#ec3a2e");
  beginShape();
  vertex(155.79, 43.66);
  vertex(155.79, 41.55);
  bezierVertex(155.79, 40.06, 154.9, 38.85, 153.81, 38.85);
  vertex(134.86, 38.85);
  bezierVertex(133.99, 38.85, 134.07, 40.39, 133.77, 41.51);
  vertex(136.12, 44.33);
  bezierVertex(140.04, 46.25, 151.6, 44.14, 155.79, 43.66);
  endShape();


  //FrontWing Bottom
  fill("#f0bc13");
  beginShape();
  vertex(136.12, 44.33);
  bezierVertex(136.12, 44.33, 154.72, 35.81, 155.79, 43.66);
  bezierVertex(155.79, 43.66, 140.52, 46.39, 136.12, 44.33);
  endShape();

  pop();
}
