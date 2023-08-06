//your parameter variables go here!
let x = 100;
let y = 150;
let platformHeight = 10;
let beamOffset = 40;
let beamWidth = 15;

function setup_wallpaper(pWallpaper) {
pWallpaper.output_mode(DEVELOP_GLYPH  ); //GRID_WALLPAPER// //DEVELOP_GLYPH\\
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
carBody();
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
  let scalingFactor = 1.20;
  let shapeX = 100; // Initial X position of the shape
  let shapeY = 100; // Initial Y position of the shape

   // Save the current transformation state
  translate(shapeX, shapeY); // Move the shape based on shapeX and shapeY
  fill("#D67070");
  stroke("#D67070");
  
  beginShape();
  curveVertex(106.06 * scalingFactor, 18.28 * scalingFactor);
  curveVertex(106.06 * scalingFactor, 18.28 * scalingFactor);

  endShape(CLOSE);
  pop();
}

