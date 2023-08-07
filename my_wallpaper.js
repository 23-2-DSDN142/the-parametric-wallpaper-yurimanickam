//my variables
let x = 100;//global x and y 
let y = 150;
//structure variables, 40 on beamOffset makes the beams line up.
let platformHeight = 90;
let platformThickness = 20;

let beamOffset = 40;
let beamWidth = 12;




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
  beamBottom();
  platform();
  
  
  beamTop();
  //if (random() < 0.6) {
    //push(); // Save the current transformation state // Move the car body to the tile position // Randomly rotate the car body
    test_WHY();
    //pop(); // Restore the original transformation state
  //}


}

function beamBottom(){
noStroke();
fill("#e24646");
let beamCenterXLeft = x - 10 - beamOffset;//keeps sufficient padding from the sides
let beamCenterXRight = x + 10 + beamOffset;//the +10 is to keep the beam centered

for (let i = 0; i < (platformHeight + platformThickness) * 5; i++) {
  let yPos =  platformHeight - 0.2 * -i;
  //slight colourvar
  let shade = random(60, 90);
  fill(shade);
  //stacked ellipses to give a brushed metal look
  ellipse(beamCenterXRight, yPos, beamWidth, beamWidth/9);
  ellipse(beamCenterXLeft, yPos , beamWidth, beamWidth/9);
}
}

function platform() {
  noStroke();
  for (let i = 0; i < platformThickness; i++) {
      //stacking, creating the same texture as before
      let yPos = platformHeight + platformThickness + 1 * -i;
      // Generate a slightly varied color for each iteration
      let shade = random(60, 100);
      fill(shade,100,100);
      // Draw the ellipse and rectangle for each iteration
      ellipse(x , yPos, 180, 20);
  }
  fill("#867a7a");
  ellipse(x , platformHeight, 180, 20);
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

function test_WHY(){
push();
  translate(100, 100); // Move the shape based on shapeX and shapeY
  fill("#0f0d0d");
  stroke('rgba(0,0,0,0)')
  strokeCap(PROJECT);
  strokeJoin(MITER);
  fill("#ca291c")
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
