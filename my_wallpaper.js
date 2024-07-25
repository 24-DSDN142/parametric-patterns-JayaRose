//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
var color1 = "#679624"
var endAngle = 350
var startAngle = 75

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
  arc(150, 50, 80, 40, startAngle, endAngle, PIE);

  fill(39, 92, 13)
  ellipse(100, 100, 80, 40, 6);
  
  fill(49, 140, 4)
  circle(50, 50, 65);


}
