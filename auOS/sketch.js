//---------------------
// auOS
// CS30 Major Project
// William Ahiahonu
//---------------------

// Global variables set to be used later in the code.
let fadeAnimation;
let systemBoot, startup;
let programState;
let powerOnButton;
let powerOnImage, powerOnPressedImage;

function preload() {
  powerOnImage = loadImage("assets/poweron.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Set up of appropriate variables.
  fadeAnimation = createGraphics(windowWidth, windowHeight);
  systemBoot = new Timer(3000);
  startup = new Timer(5000);
  powerOnButton = new Button(windowWidth/2-50, windowHeight/2+150, 100, 100, 0, 0);
  programState = 1;
}

function draw() {
  noStroke();
  if (programState === 1) {
    // Initial background.
    background(0);
    powerOnButton.display();
    image(powerOnImage, windowWidth/2-50, windowHeight/2+150, 100, 100);
  }
  else if (programState === 2) {
    // Introduction begins.
    if (systemBoot.isDone()) {
      background(110, 0, 60, 10);
    }
    if (startup.isDone()) {
      introduction();
    }
  }
}

function mousePressed() {
  if (programState === 1) {
    if (mouseIsPressed) {
      if (powerOnButton.isClicked()) {
        let fullScreen = fullscreen();
        fullscreen(!fullScreen);
        programState = 2;
      }
    }
  }
}

function introduction() {
  push();
  // fill(0, 0, 0, 30);
  // rectMode(CENTER);
  // rect(windowWidth/2, windowHeight/2, windowWidth, 100);
  textSize(80);
  textAlign(CENTER, CENTER);
  fill(255, 255, 255, 30);
  textFont("verdana");
  text("auOS", windowWidth/2, windowHeight/2);
  pop();
}

function introductionImage() {
  
}

// Timer for timing events at the beginning and during the program.
class Timer {
  constructor(waitTime) {
    this.waitTime = waitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }
  reset(newWaitTime) {
    this.waitTime = newWaitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }
  isDone() {
    if (millis() >= this.finishTime) {
      return true;
    }
    else {
      return false;
    }
  }
}

// Buttons for the program.
class Button {
  constructor(x, y, buttonWidth, buttonHeight, offFill, onFill) {
    this.buttonWidth = buttonWidth;
    this.buttonHeight = buttonHeight;
    this.leftSide = x;
    this.topSide = y;
    this.rightSide = this.leftSide + this.buttonWidth;
    this.bottomSide = this.topSide + this.buttonHeight;
    this.offFill = offFill;
    this.onFill = onFill;
  }
  display() {
    fill(this.offFill);
    if (mouseX >= this.leftSide && mouseX <= this.rightSide && mouseY >= this.topSide && mouseY <= this.bottomSide) {
      fill(this.onFill);
    }
    rect(this.leftSide, this.topSide, this.buttonWidth, this.buttonHeight);
  }

  isClicked() {
    if (mouseIsPressed && mouseX >= this.leftSide && mouseX <= this.rightSide && mouseY >= this.topSide && mouseY <= this.bottomSide) {
      return true;
    }
    else {
      return false;
    }
  }
}
