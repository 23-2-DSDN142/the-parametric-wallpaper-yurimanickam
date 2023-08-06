//your parameter variables go here!
let x = 100;
let y = 150;
let platformHeight = 10;
let beamOffset = 40;
let beamWidth = 15;

function setup_wallpaper(pWallpaper) {
pWallpaper.output_mode(GRID_WALLPAPER  ); //GRID_WALLPAPER// //DEVELOP_GLYPH\\
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(true); //set this to false when you're ready to print


  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}


function wallpaper_background() {
  background("#9bd6fd"); //background colour is
}


function my_symbol() { // Do not rename this function. Treat this similarly to a Draw function
beamBottom();
platform();

beamTop();
if (random() < 0.6) {
  push(); // Save the current transformation state // Move the car body to the tile position // Randomly rotate the car body
  carBody();
  pop(); // Restore the original transformation state
}


}


function platform() {

  noStroke();
  for (let i = 0; i < platformHeight; i++) {
      // Calculate the y position for each iteration
      let yPos = y+platformHeight + 1 * -i;
      // Generate a slightly varied color for each iteration
      let shade = random(60, 100);
      fill(shade,100,100);
      // Draw the ellipse and rectangle for each iteration
      ellipse(x, yPos, 180, 20);
  }
  fill("#867a7a");
  ellipse(x, y, 180, 20);
}

function beams() {
  noStroke();
  fill("#000000");
  let beamCenterXLeft = x - 10 - beamOffset; 
  let beamCenterXRight = x + 10 + beamOffset; 
  let beamWidth = 10; // Width of the beam
  let beamHeight = 150; // Height of the beam, from the middle of the ellipse to the top of the canvas


  // Draw the left beam as a rectangle using rect()
  rect(beamCenterXLeft - beamWidth / 2, y, beamWidth, -beamHeight);


  // Draw the right beam as a rectangle using rect()
  rect(beamCenterXRight - beamWidth / 2, y, beamWidth, -beamHeight);




  ellipse(beamCenterXRight, y, beamWidth, beamWidth/9);
  ellipse(beamCenterXLeft, y, beamWidth, beamWidth/9);
}

function bottomBeams() {
  fill("#000000");
  noStroke();
  let beamOffset = 40; // The offset off the center
  let beamCenterXLeft = x - 10 - beamOffset;
  let beamCenterXRight = x + 10 + beamOffset;
  let beamWidth = 10 ; // Use the same width as in the beams() function
  let beamHeightB = 50;


  rect(beamCenterXLeft - beamWidth / 2, 200, beamWidth, -beamHeightB);
  rect(beamCenterXRight - beamWidth / 2, 200, beamWidth, -beamHeightB);
}

function beamTop() {
  noStroke();
  fill("#e24646");
  let beamCenterXLeft = x - 10 - beamOffset; 
  let beamCenterXRight = x + 10 + beamOffset; 
  let beamHeight = 1500/2 +2; // Height of the beam, from the middle of the ellipse to the top of the canvas

  for (let i = 0; i < beamHeight; i++) {
    let yPos = y + 0.2 * -i;
    // Generate a slightly varied color for each iteration
    let shade = random(60, 90);
    fill(shade);
    // Draw the ellipse and rectangle for each iteration
    ellipse(beamCenterXRight, yPos, beamWidth, beamWidth/9);
    ellipse(beamCenterXLeft, yPos, beamWidth, beamWidth/9);
}
}

function beamBottom(){
    noStroke();
  fill("#e24646");
  let beamCenterXLeft = x - 10 - beamOffset; 
  let beamCenterXRight = x + 10 + beamOffset; 
  let beamHeight = 500/2; // Height of the beam, from the middle of the ellipse to the top of the canvas

  for (let i = 0; i < beamHeight; i++) {
    let yPos = y + 0.2 * -i;
    // Generate a slightly varied color for each iteration
    let shade = random(60, 90);
    fill(shade);
    // Draw the ellipse and rectangle for each iteration
    ellipse(beamCenterXRight, yPos+50, beamWidth, beamWidth/9);
    ellipse(beamCenterXLeft, yPos+50, beamWidth, beamWidth/9);
}
}

function carBody(){
  let scalingFactor = 1.50;
  let shapeX = 40; // Initial X position of the shape
  let shapeY = 110; // Initial Y position of the shape
  push(); // Save the current transformation state
   // Save the current transformation state
  translate(shapeX, shapeY);
  scale(1.5,1.5) // Move the shape based on shapeX and shapeY
  fill("#D67070");
  stroke("#D67070");
  beginShape();
  vertex(112.86, 28.37);
  vertex(89.57, 17.56);
  bezierVertex(87.01, 16.48, 84.34, 15.94, 81.66, 15.94);
  vertex(68.44, 15.94);
  vertex(66.35, 13.86);
  bezierVertex(64.2, 11.71, 61.6, 10.56, 58.93, 10.56);
  vertex(49.83, 10.56);
  vertex(49.83, 0);
  vertex(40.04, 0);
  bezierVertex(33.16, 0, 26.35, 1.99, 20.08, 5.84);
  vertex(0, 18.18);
  vertex(0, 30.69);
  vertex(4.67, 30.69);
  vertex(4.67, 38.01);
  vertex(113.52, 38.01);
  vertex(128.11, 35.58);
  vertex(112.86, 28.37);

  endShape(CLOSE);
  pop();
}

function cd() {
  push(); // Save the current transformation state
  translate(0, 0); // Move the shape based on shapeX and shapeY
  fill(202, 41, 28, 125); // Set the fill color with transparency (125 is the alpha value)
  noStroke(); // Disable stroke for this shape
  beginShape();
  vertex(112.86, 28.37);
  vertex(89.57, 17.56);
  bezierVertex(87.01, 16.48, 84.34, 15.94, 81.66, 15.94);
  vertex(68.44, 15.94);
  vertex(66.35, 13.86);
  bezierVertex(64.2, 11.71, 61.6, 10.56, 58.93, 10.56);
  vertex(49.83, 10.56);
  vertex(49.83, 0);
  vertex(40.04, 0);
  bezierVertex(33.16, 0, 26.35, 1.99, 20.08, 5.84);
  vertex(0, 18.18);
  vertex(0, 30.69);
  vertex(4.67, 30.69);
  vertex(4.67, 38.01);
  vertex(113.52, 38.01);
  vertex(128.11, 35.58);
  vertex(112.86, 28.37);
  endShape(CLOSE);
  pop();
}


function test_WHY(){
  let shapeX = 100; // Initial X position of the shape
  let shapeY = 100; // Initial Y position of the shape
  push(); // Save the current transformation state
   // Save the current transformation state
  translate(shapeX, shapeY); // Move the shape based on shapeX and shapeY
  fill("#0f0d0d");
  stroke("#141212");
  beginShape();
  vertex(112.86, 28.37);
  vertex(89.57, 17.56);
  bezierVertex(87.01, 16.48, 84.34, 15.94, 81.66, 15.94);
  vertex(68.44, 15.94);
  vertex(66.35, 13.86);
  bezierVertex(64.2, 11.71, 61.6, 10.56, 58.93, 10.56);
  vertex(49.83, 10.56);
  vertex(49.83, 0);
  vertex(40.04, 0);
  bezierVertex(33.16, 0, 26.35, 1.99, 20.08, 5.84);
  vertex(0, 18.18);
  vertex(0, 30.69);
  vertex(4.67, 30.69);
  vertex(4.67, 38.01);
  vertex(113.52, 38.01);
  vertex(128.11, 35.58);
  vertex(112.86, 28.37);

  endShape(CLOSE);
  pop();
}


