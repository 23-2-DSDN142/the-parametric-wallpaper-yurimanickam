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



function wheelMethod(){
let numSpokes = 40; 
let spokeLength = 100; 
let spokeWidth = 60; 
let startColor, endColor; 

startColor = color("#805757");
endColor = color("#395239"); 
let centerX = width / 2;
let centerY = height / 2;

let angleStep = TWO_PI / numSpokes;

for (let i = 0; i < numSpokes; i++) {
  let angle = i * angleStep;
  let x1 = centerX;
  let y1 = centerY;
  let x2 = centerX + cos(angle) * spokeLength;
  let y2 = centerY + sin(angle) * spokeLength;

  // Calculate the control points for the Bezier curve
  let cx1 = x1 + cos(angle - HALF_PI) * spokeWidth;
  let cy1 = y1 + sin(angle - HALF_PI) * spokeWidth;
  let cx2 = x2 + cos(angle + HALF_PI) * spokeWidth;
  let cy2 = y2 + sin(angle + HALF_PI) * spokeWidth;

  // Calculate the color for the current spoke based on its position in the loop
  let interpValue = i / (numSpokes - 1);
  let currentColor = lerpColors(startColor, endColor, interpValue);

  // Draw the Bezier curve with the interpolated color
  noFill();
  stroke(currentColor);
  strokeWeight(2);
  bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2);
}
}

function lerpColors(startColor, endColor, amount) {
  let startHSL = rgbToHsl(red(startColor), green(startColor), blue(startColor));
  let endHSL = rgbToHsl(red(endColor), green(endColor), blue(endColor));

  let lerpedHSL = [
    lerp(startHSL[0], endHSL[0], amount),
    lerp(startHSL[1], endHSL[1], amount),
    lerp(startHSL[2], endHSL[2], amount)
  ];

  return color(hslToRgb(...lerpedHSL));
}

// Helper function to convert RGB to HSL color space
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    h /= 6;
  }

  return [h, s, l];
}

// Helper function to convert HSL to RGB color space
function hslToRgb(h, s, l) {
  let r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return color(r * 255, g * 255, b * 255);
}


