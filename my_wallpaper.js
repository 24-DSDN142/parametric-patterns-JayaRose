//Variables

var color1 = "#890bb3" //light green
var color2 = "#7a063e" //dark green
var color3 = "#a8150d" //swamp green
var color4 = "#d17008" //light swamp green
var color5 = "#0a0af7" //dark swamp green

// light green

var LightGreenEndAngle = 345
var LightGreenStartAngle = 0

// dark green

var DarkGreenEndAngle = 345
var DarkGreenStartAngle = 0

//Swamp green

var SwampGreenEndAngle = 345
var SwampGreenStartAngle = 0

//Light Swamp Green

var LightSwampGreenStartingAngle = 45
var LightSwampGreenEndAngle = 0

//Dark Swamp Green

var DarkSwampGreenStartAngle = 45
var DarkSwampGreenEndAngle = 0

var size = 65 //any number between 25 and 65

var whiteline = "#99f09f"


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 50;
}

function wallpaper_background() {
  background(45, 188, 227); // Blue
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  strokeWeight(1)

  

  let x1 = 150;
  let y1 = 50;

  let x2 = 100;
  let y2 = 100;

  let x3 = 50;
  let y3 = 50;

  let x4 = 50;
  let y4 = 170;

  let x5 = 145;
  let y5 = 145;

  stroke(132, 181, 62)
  fill(color1)
  arc(x1, y1, size, size, LightGreenStartAngle, LightGreenEndAngle, PIE);

  stroke(27, 61, 12)
  fill(color2)
  arc(x2, y2, size, size, DarkGreenStartAngle, DarkGreenEndAngle, PIE);

  stroke(37, 112, 4)
  fill(color3)
  arc(x3, y3, size, size, SwampGreenStartAngle, SwampGreenEndAngle, PIE);

  stroke(79, 138, 54)
  fill(color4)
  arc(x4, y4, size, size, LightSwampGreenStartingAngle, LightSwampGreenEndAngle, PIE);

  stroke(50, 102, 28)
  fill(color5)
  arc(x5, y5, size, size, DarkSwampGreenStartAngle, DarkSwampGreenEndAngle, PIE);

  if (size > 40) {
    strokeWeight(2)
  }

  stroke(whiteline)
  noFill() //highlight
  arc(x1, y1, size * 0.8, size * 0.8, 50, 180)

  stroke(whiteline)
  noFill() // highlight
  arc(x2, y2, size * 0.8, size * 0.8, 50, 180)

  stroke(whiteline)
  noFill() //highlight
  arc(x3, y3, size * 0.8, size * 0.8, 50, 180)

  stroke(whiteline)
  noFill() //highlight
  arc(x4, y4, size * 0.8, size * 0.8, 50, 180)

  stroke(whiteline)
  noFill() //highlight
  arc(x5, y5, size * 0.8, size * 0.8, 50, 180)
}