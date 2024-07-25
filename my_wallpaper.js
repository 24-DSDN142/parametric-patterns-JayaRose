//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

var color1 = "#679624"
var color2 =  "#275c0d"
var color3 = "#4a6b02"
// light green

var LightGreenEndAngle = 340
var LightGreenStartAngle = 0

// dark green

var DarkGreenEndAngle = 330
var DarkGreenStartAngle = 0

//Swamp green

var SwampGreenEndAngle = 320
var SwampGreenStartAngle = 0

var LightSwampGreenStartingAngle = 45
var LightSwampGreenEndAngle = 0

var DarkSwampGreenStartAngle = 45
var DarkSwampGreenEndAngle =  0

var size = random(25, 60);

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(27, 83, 105); // Blue
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  let x = random(50, 150);
    let y = random(50, 150);
    let size = random(25, 60); // Random size between 40 and 80
 
  fill(color1)
  arc(150, 50, size, size, LightGreenStartAngle, LightGreenEndAngle, PIE);

  fill(color2)
  arc(100, 100, size, size, DarkGreenStartAngle, DarkGreenEndAngle, PIE);
  
  fill(color3)
  arc(50, 50, size, size, SwampGreenStartAngle, SwampGreenEndAngle, PIE);

  fill(138, 184, 2)
  arc(50, 170, size, size, LightSwampGreenStartingAngle, LightSwampGreenEndAngle, PIE);

  fill(39, 66, 5)
  arc(145, 145, size, size, DarkSwampGreenStartAngle, DarkSwampGreenEndAngle, PIE);

 
}
