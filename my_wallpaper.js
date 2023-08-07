//my variables
let x = 100;//global x and y 
//structure variables, 40 on beamOffset makes the beams line up.

let randomHeight = false // make the heights of the platforms have variability
let heightRandomness = 1; //variability of tha random height
let platformHeight = 100;//adjust the height the platform spawns at.
let platformThickness = 20;
let platformDepth = 15;//how tall the ellipse is in relation to its width, adjusting depth

let beamOffset = 40;
let beamWidth = 12;


let moveCarX = 0;
let moveCarY = 0;
let scaleCarX = 0;
let scaleCarY = 0;

let wingPitch = 0;


//Global Variables
let pHeight = 200 - platformHeight;
let carScaleConst = 1.2;


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
  background("#8ca1af");
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  if (randomHeight == true) {
    randHi = pHeight + random(-10 * heightRandomness, 10 * heightRandomness);
  } else {
    randHi = pHeight;
  }
  beamBottom(randHi);
  platform(randHi);
  beamTop(randHi);
  //if (random() < 0.6) {
    //push(); 
    carBody(randHi);
    //pop(); // Restore the original transformation state
  //}
  carShades(pHeight)
  carFloor(pHeight);
  spoiler(pHeight);
  carHighlights(pHeight);
  rearWing(pHeight);
  

}


//precursor statement for easier input interaction


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

function carBody(pHeight){
push();
  translate(20 + moveCarX, -46.5 + pHeight + moveCarY);
  scale(carScaleConst + scaleCarX, carScaleConst + scaleCarY);
  //translate the elements all at once, or individually?
  fill("#0f0d0d");
  fill("#ac3d29")
  beginShape();
  vertex(112.86,28.37);
  vertex(89.57,17.56);
  bezierVertex(87.01,16.48,84.34,15.94,81.66,15.94);
  vertex(68.44,15.94);
  vertex(66.35,13.86);
  bezierVertex(64.2,11.71,61.6,10.56,58.93,10.56);
  vertex(49.83,10.56);
  vertex(49.83,0);
  vertex(40.034,0);
  bezierVertex(33.16,0,26.35,1.99,20.08,5.84);
  vertex(0,18.18);
  vertex(0,30.69);
  vertex(4.67,30.69);
  vertex(4.67,38.01);
  vertex(113.52,38.01);
  vertex(128.11,35.58);
  vertex(112.86,28.37);
  endShape();
pop();
}

function carFloor(pHeight) {
  push();
  translate(21 + moveCarX, pHeight - 18.86 + moveCarY);
  scale(carScaleConst + scaleCarX, carScaleConst + scaleCarY);

  //wing left
  fill("#647b81");
  beginShape();
  vertex(99.74, 6.82);
  vertex(99.74, 15.14);
  vertex(107.70, 15.14);
  bezierVertex(108.18, 13.22, 108.64, 11.29, 109.09, 9.36);
  vertex(99.74, 6.82);
  endShape();

  //wing right
  fill("#3b4d4f");
  beginShape();
  vertex(119.83, 12.28);
  vertex(109.09, 9.36);
  bezierVertex(108.16, 11.33, 107.91, 13.27, 107.70, 15.14);
  vertex(120.41, 15.14);
  vertex(119.83, 12.28);
  endShape();
  
  //main floor curve
  fill("#647b81");
  beginShape();
  vertex(93.78, 4.68);
  vertex(82.95, 4.68);
  bezierVertex(76.80, 4.68, 70.66, 5.57, 64.65, 7.34);
  vertex(57.38, 9.48);
  bezierVertex(51.37, 11.25, 45.23, 12.14, 39.08, 12.14);
  vertex(39.08, 12.14);
  bezierVertex(28.22, 12.14, 17.46, 9.36, 7.36, 3.95);
  vertex(0, 0);
  vertex(0, 15.14);
  vertex(92.88, 15.14);
  vertex(93.78, 4.68);
  endShape();

  //coolshade, shark fin
  fill("#3b4d4f");
  beginShape();
  vertex(72.10, 15.14);
  vertex(63.37, 10.73);
  bezierVertex(62.84, 10.46, 62.26, 10.43, 61.71, 10.64);
  vertex(50.01, 15.14);
  vertex(72.09, 15.14);
  endShape();
  pop();

  //lil wingtip tpye of thing.
  fill("#30363686");
  push();
  translate(150.3 + moveCarX, pHeight - 12.55 + moveCarY);
  scale(carScaleConst + scaleCarX, carScaleConst + scaleCarY);
  beginShape();
  vertex(19.31,7.21);
  vertex(4.05,0);
  bezierVertex(1.77,2.27,0.15,5.44,0,9.64);
  vertex(4.72,9.64);
  vertex(19.31,7.21);
  endShape();
  pop();
}



function americasTestCar(pHeight) {
  push();
  translate(21 + moveCarX, pHeight - 18.86 + moveCarY);
  scale(carScaleConst + scaleCarX, carScaleConst + scaleCarY);

  pop();
}

function spoiler(pHeight) {
  push();
  fill("#af1a1a")
  //front spoiler parts
  translate(155 + moveCarX, pHeight - 7 + moveCarY);
  rotate(wingPitch);
  scale(carScaleConst + scaleCarX, carScaleConst + scaleCarY);
  beginShape();
  vertex(22.02,4.8);
  vertex(22.02,2.69);
  bezierVertex(22.02,1.2,21.13,-0.01,20.04,-0.01);
  vertex(1.09,-0.01);
  bezierVertex(0.22,0,0.3,1.54,0,2.66);
  vertex(2.35,5.48);
  bezierVertex(6.27,7.4,17.83,5.29,22.02,4.81);
  endShape();
  pop();

  //HIghlight
  push();
  fill("#cc7511")

  translate(157.5 + moveCarX, pHeight - 5.5 + moveCarY);
  rotate(wingPitch);
  scale(carScaleConst + scaleCarX, carScaleConst + scaleCarY);
  beginShape();
  vertex(19.67,3.32);
  bezierVertex(19.67,3.32,4.4,6.05,0,3.99);
  bezierVertex(0,3.99,18.6,-4.53,19.67,3.32);
  endShape()
  pop();
}


function carShades() {
push();
  translate(25.5 + moveCarX, pHeight - 42 + moveCarY);
  scale(carScaleConst + scaleCarX, carScaleConst + scaleCarY);

  fill("#72291c");
  beginShape();
  vertex(0, 34.18);
  vertex(0, 34.32);
  vertex(68.44, 34.32);
  bezierVertex(48.05, 17.56, 20.24, 16.69, 0, 34.18);
  endShape();
  
  fill("#72291c");
  beginShape();
  vertex(63.83, 12.27);
  vertex(33.47, 12.27);
  bezierVertex(33.05, 12.27, 33.00, 13.12, 33.43, 13.19);
  vertex(59.17, 17.84);
  bezierVertex(61.64, 18.29, 63.84, 15.67, 63.84, 12.27);
  vertex(63.84, 12.27);
  endShape();
  
  fill("#72291c");
  beginShape();
  vertex(45.17, 6.87);
  vertex(19.03, 6.87);
  bezierVertex(18.43, 6.87, 18.27, 5.75, 18.82, 5.44);
  vertex(19.38, 5.12);
  bezierVertex(25.31, 1.74, 31.69, 0.00, 38.13, 0.00);
  vertex(45.16, 0.00);
  vertex(45.16, 6.87);
  endShape();
  
  fill("#72291c");
  beginShape();
  vertex(72.90, 12.27);
  vertex(70.98, 9.80);
  bezierVertex(69.86, 8.36, 68.39, 7.56, 66.85, 7.56);
  vertex(66.05, 7.56);
  bezierVertex(65.47, 7.56, 65.01, 8.20, 65.01, 8.98);
  vertex(65.01, 8.98);
  bezierVertex(65.01, 9.76, 65.48, 10.40, 66.05, 10.40);
  vertex(68.72, 10.40);
  vertex(70.14, 12.27);
  vertex(72.90, 12.27);
  endShape();


  fill("#fbb833")
  rect(45,-3.9,2,10.8)
  fill("#fbb833")
  beginShape();
  vertex(0,10.52);
  vertex(4.88,10.52);
  vertex(4.88,13.48);
  bezierVertex(4.88,14.35,4.17,15.05,3.3099999999999996,15.05);
  vertex(1.5699999999999996,15.05);
  bezierVertex(0.71,15.06,0,14.35,0,13.48);
  vertex(0,10.52);
  endShape();
pop();
}

function carHighlights(pHeight) {
  push();
  translate(21 + moveCarX, pHeight - 18.86 + moveCarY);
  scale(carScaleConst + scaleCarX, carScaleConst + scaleCarY);

  pop();
}
function rearWing(pHeight) {
  push();
  translate(21 + moveCarX, pHeight - 18.86 + moveCarY);
  scale(carScaleConst + scaleCarX, carScaleConst + scaleCarY);

  pop();
}
