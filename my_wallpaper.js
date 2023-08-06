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
wheelMethod();
CarTwo();
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
  Push(); // Save the current transformation state
   // Save the current transformation state
  translate(shapeX, shapeY); // Move the shape based on shapeX and shapeY
  fill("#D67070");
  stroke("#D67070");
  beginShape();
  curveVertex(106.06 * scalingFactor, 18.28 * scalingFactor);
  curveVertex(106.06 * scalingFactor, 18.28 * scalingFactor);
  curveVertex(88.66 * scalingFactor, 11.81 * scalingFactor);
  curveVertex(85.63 * scalingFactor, 10.68 * scalingFactor);
  curveVertex(78.82 * scalingFactor, 10.11 * scalingFactor);
  curveVertex(73.74 * scalingFactor, 10.11 * scalingFactor);
  curveVertex(71.78 * scalingFactor, 8.29 * scalingFactor);
  curveVertex(70.07 * scalingFactor, 6.39 * scalingFactor);
  curveVertex(68.19 * scalingFactor, 6.39 * scalingFactor);
  curveVertex(66.2 * scalingFactor, 6.39 * scalingFactor);
  curveVertex(64.42 * scalingFactor, 6.4 * scalingFactor);
  curveVertex(62.7 * scalingFactor, 6.5 * scalingFactor);
  curveVertex(61.36 * scalingFactor, 5.68 * scalingFactor);
  curveVertex(61.09 * scalingFactor, 3.98 * scalingFactor);
  curveVertex(59.13 * scalingFactor, 2.1 * scalingFactor);
  curveVertex(57.14 * scalingFactor, 2.1 * scalingFactor);
  curveVertex(54.87 * scalingFactor, 2.1 * scalingFactor);
  curveVertex(52.9 * scalingFactor, 2.1 * scalingFactor);
  curveVertex(49.26 * scalingFactor, 2.18 * scalingFactor);
  curveVertex(27.61 * scalingFactor, 2.26 * scalingFactor);
  curveVertex(27.57 * scalingFactor, 0.26 * scalingFactor);
  curveVertex(27.57 * scalingFactor, 0 * scalingFactor);
  curveVertex(25.46 * scalingFactor, 0 * scalingFactor);
  curveVertex(0, 9.34 * scalingFactor);
  curveVertex(0, 20.31 * scalingFactor);
  curveVertex(4.39 * scalingFactor, 20.31 * scalingFactor);
  curveVertex(4.39 * scalingFactor, 26.73 * scalingFactor);
  curveVertex(106.68 * scalingFactor, 26.73 * scalingFactor);
  curveVertex(120.39 * scalingFactor, 24.6 * scalingFactor);
  curveVertex(105.08 * scalingFactor, 18.28 * scalingFactor);
  curveVertex(106.06 * scalingFactor, 18.28 * scalingFactor);

  endShape(CLOSE);
  pop();
}

function CarTwo(){
push(); // Save the current transformation state
   // Save the current transformation state
  translate(100, 1); // Move the shape based on shapeX and shapeY
  fill("#D67070");
  stroke("#D67070");
  scale(1,1);
stroke('rgba(0,0,0,0)')
strokeCap(PROJECT);
strokeJoin(MITER);
fill("#ca291c")
globalAlpha = 0.49;
beginShape();
vertex(112.86,28.37);
vertex(89.57,17.560000000000002);
bezierVertex(87.00999999999999,16.480000000000004,84.33999999999999,15.940000000000001,81.66,15.940000000000001);
vertex(68.44,15.940000000000001);
vertex(66.35,13.860000000000001);
bezierVertex(64.19999999999999,11.71,61.599999999999994,10.560000000000002,58.92999999999999,10.560000000000002);
vertex(49.82999999999999,10.560000000000002);
vertex(49.82999999999999,0);
vertex(40.03999999999999,0);
bezierVertex(33.15999999999999,0,26.349999999999994,1.99,20.07999999999999,5.84);
vertex(0,18.18);
vertex(0,30.689999999999998);
vertex(4.67,30.689999999999998);
vertex(4.67,38.01);
vertex(113.52,38.01);
vertex(128.10999999999999,35.58);
vertex(112.85999999999999,28.369999999999997);
endShape();

  pop();
}





