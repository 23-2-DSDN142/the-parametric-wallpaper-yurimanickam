//my variables
let x = 100;//global x and y 
//structure variables, 40 on beamOffset makes the beams line up.

let randomHeight = false // make the heights of the platforms have variability
let heightRandomness = 1; //variability of tha random height
let platformHeight = 60;//adjust the height the platform spawns at.
let platformThickness = 20;
let platformDepth = 15;//how tall the ellipse is in relation to its width, adjusting depth

let beamOffset = 40;
let beamWidth = 12;





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
  background("#9bd6fd");
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
  carFloor(pHeight);

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
  translate(20, -46.5 + pHeight);
  scale(carScaleConst,carScaleConst);
  //translate the elements all at once, or individually?
  fill("#0f0d0d");
  fill("#ca291c")
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
  translate(21, 121);
  scale(1.2, 1.2);

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
}




