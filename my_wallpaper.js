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

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(44, 154, 209); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
 
  fill(color1)
  arc(150, 50, 80, 40, LightGreenStartAngle, LightGreenEndAngle, PIE);

  fill(color2)
  arc(100, 100, 80, 40, DarkGreenStartAngle, DarkGreenEndAngle, PIE);
  
  fill(color3)
  arc(50, 50, 65, 65, SwampGreenStartAngle, SwampGreenEndAngle, PIE);


}
