//---------------------
// auOS
// CS30 Major Project
// William Ahiahonu
//---------------------

// Global variables set to be used later in the code.
let fadeAnimation;
let systemBoot;
let programState;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Set up of appropriate variables.
  fadeAnimation = createGraphics(windowWidth, windowHeight);
  systemBoot = new Timer(3000);
  programState = 1;
}

function draw() {
  if (programState === 1) {
    // Initial background.
    background(0);
  }
  else if (programState === 2) {
    // Background fades in after 3 seconds.
    if (systemBoot.isDone()) {
      background(110, 0, 60, 10);
      //introduction();
    }
  }
}

function mousePressed() {
  if (programState === 1) {
    if (mouseIsPressed) {
      let fullScreen = fullscreen();
      fullscreen(!fullScreen);
      programState = 2;
    }
  }
}

function introduction() {

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
  constructor(x, y, buttonWidth, buttonHeight) {
    this.buttonWidth = buttonWidth;
    this.buttonHeight = buttonHeight;
    this.leftSide = x;
    this.topSide = y;
    this.rightSide = this.leftSide + this.buttonWidth;
    this.bottomSide = this.topSide + this.buttonHeight;
  }
  display() {
    fill(0);
    if (mouseX >= this.leftSide && mouseX <= this.rightSide && mouseY >= this.topSide && mouseY <= this.bottomSide) {
      fill(125);
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
