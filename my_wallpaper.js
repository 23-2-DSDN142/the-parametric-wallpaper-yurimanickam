//this program makes extensive use of randomised modifiers, so not every set of settings will recreate the exact same result.
//however, there are more than enough parameters that do not rely on randomisation to make determenistic wallpapers when needed.

//my parameters
let randomHeight = false; // make the heights of the platforms have variability
let heightRandomness = 1.5; //variability of tha random height
let platformHeight = 125; //adjust the height the platform spawns at.
let platformThickness = 11;
let platformDepth = 30; //how tall the ellipse is in relation to its width, adjusting depth

let beamOffset = 40;
let beamWidth = 10;
//structure variables, 40 on beamOffset makes the beams line up.

let mood = "mix"; //muted, pastel, mix
let carVariation = 0.6; //variation between colours
let randomCar = true; //random distrobution of cars
let carDistro = 0.7; //how many cars spawn when random

let moveCarX = 0;
let moveCarY = 0;
let scaleCarX = 1;
let scaleCarY = 1;

//wheel alterations
let wheelWidth = 22;
let rimSize = 0.5;
let suspensionHeight = 0;
let tiresX = 0;
let spokeWidth = 20;
let spokeStroke = 0.2;

//clouds
//warning, as higher clouddensity increasing calculation time, and may crash if too high.
let clouds = true;
let cloudDensity = 2;
let cloudParticleSize = 0.4;

let globalX = 1;
let globalY = 1;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print


  //Grid settings
  pWallpaper.grid_settings.cell_width = 200; //use 214.14 for A3, 200 for ninewp
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 100; //0 for A3, 100 for ninewp
}



/////////////////////////////////////////////////////////////////////////////////////////////////

//Global Variables
let pHeight = 200 - platformHeight;
let carScaleConst = 1.05;
let x = 100; //global x


//used www,realtimecolors.com to get good accent tones ect
let redPal = ["#9b2e2e", "#973e0a", "#30383a", "#3b4d4f", "#280B0B", "#414849", "#3b4d4f", "#280B0B",
  "#280B0B", "#d19825", "#280B0B", "#3b4d4f", "#b6831e", "#181717", "#4c566b", "#262726",
  "#757977", "#9b2e2e", "#647b81", "#280B0B", "#b6831d", "#9b2e2e", "#b38219"
];
//colours for the cars, in arrays for customisability and abberation

let bluePal = ["#3c81b9", "#393040", "#aa521e", "#333438", "#1e4d68", "#47525c", "#233747", "#393040",
  "#393040", "#14394b", "#393040", "#2f3741", "#266d8b", "#171718", "#6b564c", "#262726",
  "#777975", "#3c81b9", "#322f38", "#393040", "#0d3041", "#3c81b9", "#1c3770"
];


let redPastelPal = ["#FF6B6B", "#FF9E7C", "#98C9A3", "#738A94", "#E99497", "#A4BBC2", "#EAC5B5", "#A4BBC2",
  "#A4BBC2", "#F0D876", "#A4BBC2", "#738A94", "#D0B04A", "#44403F", "#6B7C8A", "#564B57",
  "#7B8D8D", "#FF6B6B", "#98C9A3", "#A4BBC2", "#D0B04A", "#FF6B6B", "#D29D49"
];


let bluePastelPal = ["#66b2de", "#4E6A80", "#B5CCD2", "#899DA2", "#4E7CA6", "#6E8490", "#4A6B87", "#4E6A80",
  "#4E6A80", "#8FB5C7", "#4E6A80", "#899DA2", "#A89F3D", "#393937", "#56646E", "#403F45",
  "#6C7878", "#66b2de", "#B5CCD2", "#4E6A80", "#A89F3C", "#66b2de", "#9B8E57"
];


let activeCol = [];
//clouds array
let cloud = [];
let shadow = false;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function wallpaper_background() {
  background("#aed0dd");
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //transforming everything at once for ease of use
  push();
  translate(0, 0);
  scale(globalX, globalY);
  symbols();
  pop();
}

function symbols() {
  //randHi is used around this, it is simply another variable for a random Height.
  //the weighting between the colour combos
  if (random(0, 1) < carVariation && mood == "muted") {
    activeCol = redPal;
  }
  else if (random(0, 1) > carVariation && mood == "muted") {
  activeCol = bluePal;
}
  

if (random(0, 1) < carVariation && mood == "pastel") {
  activeCol = redPastelPal;
}
  else if (random(0, 1) > carVariation && mood == "pastel") {
activeCol = bluePastelPal;
}
  if (mood == "mix") {
    arrayMix = [redPal, bluePal, redPastelPal, bluePastelPal];
  activeCol = random(arrayMix);
}

  //randomHeight stuff
  if (randomHeight == true) {
    randHi = pHeight + random(-10 * heightRandomness, 10 * heightRandomness);
  } else {
    randHi = pHeight;
  }

  //generating the clouds and their ranoms anew every time
  let cloudRand = random(1, 1.5)
  let cloudPos = random(20, 180);
  let cloudPos2 = random(20, 180);
  if (random() < 1 && clouds == true) {
    push();
    generateCloud(cloudRand, cloudPos, cloudPos2);
    drawCloud();
    pop();
  }

  //structures, unhindered
  beamBottom(randHi);
  platform(randHi, shadow);
  beamTop(randHi);

  //couldve used elif but this just split things a bit better mentally
  if (random(0, 1) < carDistro && randomCar == true) {
    push();
    rearWing(activeCol)
    carBody(activeCol);
    drawTires(randHi);
    frontWing(randHi, activeCol);
    shadow = true;
    pop();
  } else {
    shadow = false;
  }

  if (randomCar == false) {
    rearWing(activeCol)
    carBody(activeCol);
    drawTires(randHi);
    frontWing(randHi, activeCol);
    shadow = true;
  }
}

function drawTires(randHi) {
  tires(randHi);
  wheel(randHi, 51, -9);
  wheel(randHi, 134, -9);
}

//these are inspired, but not derivative from https://openprocessing.org/sketch/1829701
//its a bit janky but it works for the purpose and is simple enough to follow
function generateCloud(cloudRand, pos, sop) {
  cloud = [];
  noStroke();
  let cloudX = pos;
  let cloudY = sop;
  let cloudWidth = random(25 * cloudRand, 50 * cloudRand); // Adjust width range
  let cloudHeight = random(10 * cloudRand, 25 * cloudRand); // height range
  let numEllipses = 500 * cloudDensity; // no of cloud particles
  let numBoundEllipses = 8; // bound ellipses
  let cloudShade = random(180, 255);
  let cloudTransparency = random(0, 30);

  for (let i = 0; i < numBoundEllipses; i++) {
    let boundsWidth = cloudWidth * random(0.8, 1.2); // Width of the bounds ellipse
    let boundsHeight = boundsWidth * random(0.6, 0.8 * cloudRand); // Height of the bounds ellipse
    let xOffset = random(-cloudWidth / 2, cloudWidth / 2);
    let yOffset = random(-cloudHeight / 2, cloudHeight / 2);
    let boundX = cloudX + xOffset;
    let boundY = cloudY + yOffset;
    cloud.push({
      x: boundX,
      y: boundY,
      cloudWidth: boundsWidth,
      cloudHeight: boundsHeight,
      numEllipses,
      cloudShade,
      cloudTransparency
    });
  }
}

function drawCloud() {
  for (let i = 0; i < cloud.length; i++) {
    let {
      x,
      y,
      cloudWidth,
      cloudHeight,
      numEllipses,
      cloudShade,
      cloudTransparency
    } = cloud[i];
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

function beamBottom(pHeight) {
  noStroke();
  fill("#e24646");
  let beamCenterXLeft = x - 10 - beamOffset;
  let beamCenterXRight = x + 10 + beamOffset;
  let beamHeight = (200 - pHeight) * 10;

  for (let i = 0; i < beamHeight; i++) {
    let yPos = 200 + 0.1 * -i;
    //shades of grey
    let shade = random(60, 80);
    fill(shade);
    //draw shapes
    ellipse(beamCenterXRight, yPos, beamWidth, beamWidth / platformDepth);
    ellipse(beamCenterXLeft, yPos, beamWidth, beamWidth / platformDepth);
  }
}

function platform(pHeight, shadow) {
  noStroke();
  let repet = platformThickness * 5
  for (let i = 0; i < repet; i++) {
    //stacking, creating the same texture as before
    let yPos = pHeight + platformThickness + 0.2 * -i;
    let shade = random(60, 100);
    //adding a blue tinge to the platform?
    fill(shade);
    ellipse(x, yPos, 180, 180 / platformDepth);
  }
  fill("#867a7a");
  ellipse(x, pHeight, 180, 180 / platformDepth);
  fill("#1f1c1c3b");
  ellipse(x, pHeight, 150 * scaleCarX, 140 * scaleCarY / platformDepth);
  //upper platform stays a uniform colour throughout iterations, althought this is an easy enough change if needed
}

function beamTop(pHeight) {
  noStroke();
  fill("#000000");
  let beamCenterXLeft = x - 10 - beamOffset;
  let beamCenterXRight = x + 10 + beamOffset;
  let beamHeight = 2 + pHeight * 10;
  for (let i = 0; i < beamHeight; i++) {
    let yPos = pHeight + 0.1 * -i;
    let shade = random(60, 80);
    fill(shade);
    ellipse(beamCenterXRight, yPos, beamWidth, beamWidth / platformDepth);
    ellipse(beamCenterXLeft, yPos, beamWidth, beamWidth / platformDepth);
  }
}

function carBody(activeCol) {
  push();
  translate(16 + moveCarX, pHeight - 47 - moveCarY);
  scale(carScaleConst * scaleCarX, carScaleConst * scaleCarY);
  //global translators

  //Main Body Part
  //coordinates copied and refactored off svg files
  fill(activeCol[0]);
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
  fill(activeCol[1]);
  beginShape();
  vertex(144.35, 40.86);
  vertex(129.1, 33.65);
  bezierVertex(126.81, 35.92, 125.2, 39.09, 125.05, 43.29);
  vertex(129.77, 43.29);
  vertex(144.36, 40.86);
  endShape();

  //Front WingTip Behind
  fill(activeCol[2]);
  beginShape();
  vertex(116.98, 34.97);
  vertex(116.98, 43.29);
  vertex(124.94, 43.29);
  bezierVertex(125.42, 41.37, 125.88, 39.44, 126.33, 37.51);
  vertex(116.98, 34.97);
  endShape();

  //Front WingTip Front
  fill(activeCol[3]);
  beginShape();
  vertex(137.08, 40.43);
  vertex(126.34, 37.51);
  bezierVertex(125.41, 39.48, 125.16, 41.42, 124.95, 43.29);
  vertex(137.66, 43.29);
  vertex(137.08, 40.43);
  endShape();

  //Big Round Shading Bitte
  fill(activeCol[4]);
  beginShape();
  vertex(20.91, 43.15);
  vertex(20.91, 43.29);
  vertex(89.35, 43.29);
  bezierVertex(68.96, 26.53, 41.15, 25.66, 20.91, 43.15);
  endShape();

  //Curvy Big Shading Bitte
  fill(activeCol[5]);
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
  fill(activeCol[6]);
  beginShape();
  vertex(94.11, 28.92);
  bezierVertex(94.11, 26.31, 95.66, 24.2, 97.57, 24.2);
  vertex(94.01, 24.2);
  bezierVertex(92.1, 24.2, 90.55, 26.31, 90.55, 28.92);
  bezierVertex(90.55, 29.45, 90.87, 29.63, NaN, 32.48);
  bezierVertex(NaN, 32.48, NaN, 32.05, NaN, 31.52);
  endShape();

  //Air Intake Behind
  fill(activeCol[7]);
  beginShape();
  vertex(84.74, 21.24);
  vertex(54.38, 21.24);
  bezierVertex(53.96, 21.24, 53.91, 22.09, 54.34, 22.16);
  vertex(80.08, 26.81);
  bezierVertex(82.55, 27.26, 84.75, 24.64, 84.75, 21.24);
  vertex(84.75, 21.24);
  endShape();

  //Engine Intake
  fill(activeCol[8]);
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
  fill(activeCol[9]);
  beginShape();
  vertex(66.08, 5.29);
  vertex(67.32, 5.29);
  vertex(67.32, 15.84);
  vertex(66.08, 15.84);
  vertex(66.08, 5.29);
  endShape();

  //RV Mirror
  fill(activeCol[10]);
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
  fill(activeCol[11]);
  beginShape();
  vertex(89.35, 43.29);
  vertex(80.62, 38.88);
  bezierVertex(80.09, 38.61, 79.51, 38.58, 78.96, 38.79);
  vertex(67.26, 43.29);
  vertex(89.34, 43.29);
  endShape();


  //BodyVent1
  fill(activeCol[12]);
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
  ellipse(51 + tiresX, -9 - suspensionHeight, wheelWidth);
  ellipse(134 + tiresX, -9 - suspensionHeight, wheelWidth);

  fill("#4c566b");
  ellipse(51 + tiresX, -9 - suspensionHeight, wheelWidth * rimSize);
  ellipse(134 + tiresX, -9 - suspensionHeight, wheelWidth * rimSize);
  pop();
}

function wheel(pHeight, wheelX, wheelY) {
  //draw the beziercurved wheel(sadly detail is lost but still.)
  push();
  translate(0 + moveCarX, pHeight - 0 + moveCarY);
  scale(carScaleConst * scaleCarX, carScaleConst * scaleCarY);
  angleMode(RADIANS); //spent way too long on this

  let numSpokes = 30;
  let spokeLength = 8 * rimSize;
  let circleRadius = 2;
  let gradientIntensity = 0.7;

  let centerX = wheelX + tiresX;
  let centerY = wheelY - suspensionHeight;
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
    //calcualte the control points of the spokes, going in a circle
    // Draw the gradiented spoke
    noFill();
    for (let t = 0; t <= 1; t += 0.01) {
      let w = bezierPoint(innerX, cx1, cx2, outerX, t);
      let e = bezierPoint(innerY, cy1, cy2, outerY, t);
      //fillSpokes, plus gradient towards the outer edges which ended up not being utilised
      let gradientColor = lerpColor(color("#928682"), color("#2a2b2e"), t * gradientIntensity);
      stroke(gradientColor);
      strokeWeight(spokeStroke);
      point(w, e);
    }
  }
  pop();
}

function rearWing(activeCol) {
  push();
  translate(16 + moveCarX, pHeight - 47 - moveCarY);
  scale(carScaleConst * scaleCarX, carScaleConst * scaleCarY);
  //Wing Top Part
  fill(activeCol[17]);
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
  rect(10, 20, 20, 15);

  //Wing Bottom Part
  fill(activeCol[18]);
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
  fill(activeCol[19]);
  beginShape();
  vertex(0, 3.39);
  vertex(14.12, 3.39);
  vertex(14.12, 10.04);
  vertex(0, 10.04);
  vertex(0, 3.39);
  endShape();

  //WingSticker
  fill(activeCol[20]);
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

function frontWing(pHeight, activeCol) {
  push();
  translate(16 + moveCarX, pHeight - 47 - moveCarY);
  scale(carScaleConst * scaleCarX, carScaleConst * scaleCarY);

  //FrontWing Top
  fill(activeCol[21]);
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
  fill(activeCol[22]);
  beginShape();
  vertex(136.12, 44.33);
  bezierVertex(136.12, 44.33, 154.72, 35.81, 155.79, 43.66);
  bezierVertex(155.79, 43.66, 140.52, 46.39, 136.12, 44.33);
  endShape();
  pop();
}
