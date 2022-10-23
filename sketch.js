/*
This is inspired by Andy Warhol's style.
The three sliders at the bottom are the RGB components of the background color of each image
Altering the slider will change the background colors of each rectangle division.
*/


//declaring the variables to use in the code
let img;      //the image to display
let sect = 4; //number of rows and columns
let redHue, greenHue, blueHue; //the sliders for RGB

function preload(){
  img = loadImage('photo2.png'); //loading the photo
}


function setup() {
  createCanvas(400, 500);
  
  // Setting up the slider for selecting the colors
  buttonRedSlider = createButton('Red');
  redSlider = createSlider(0, 255, 255, 1);
  buttonGreenSlider = createButton('Green');
  greenSlider = createSlider(0, 255, 255, 1);
  buttonBlueSlider = createButton('Blue');
  blueSlider = createSlider(0, 255, 255, 1);
}//end of setup()

function draw() {  
  //Capturing the value of each slider
  redHue   = redSlider.value();
  greenHue = greenSlider.value();
  blueHue  = blueSlider.value();
  // console.log(redHue, greenHue, blueHue);
  
  // For each row and column, create the rectangle, fill in the colors, and the loaded picture
  for(i=0; i<sect; i++){      //row
    for (j=0; j<sect; j++){   //column
      noStroke();             //no border
      fill(redHue-50*i, greenHue-50*j, blueHue-50*i);  //manipulating the background color, the number 50 is random and could be altered. A lower value will decrease the difference among color.
      rect(i*width/sect,j*height/sect,width/sect, height/sect); //creating rectangles
      image(img, i*width/sect, j*height/sect, width/sect, height/sect); //loading the image
    }//end of loop j
  }//end of loop i
}//end of function draw