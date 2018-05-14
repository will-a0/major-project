//---------------------
// auOS
// CS30 Major Project
// William Ahiahonu
//---------------------

// Global variables set to be used later in the code.
let fadeAnimation;
let systemBoot, startup, loadingAlert;
let programState;
let powerOnButton;
let powerOnImage, powerOnPressedImage;
let auOS1, auOS2, auOS3, auOS4, auOS5, auOS6, auOS7, auOS8, auOS9, auOS10;
let osGiphy, bootMusic;
let userLoginMusicPlayed = false, loginMusic, userLogin;

function preload() {
  powerOnImage = loadImage("assets/poweron.png");
  auOS1 = loadImage("assets/auOS-1.png"), auOS2 = loadImage("assets/auOS-2.png");
  auOS3 = loadImage("assets/auOS-3.png"), auOS4 = loadImage("assets/auOS-4.png");
  auOS5 = loadImage("assets/auOS-5.png"), auOS6 = loadImage("assets/auOS-6.png");
  auOS7 = loadImage("assets/auOS-7.png"), auOS8 = loadImage("assets/auOS-8.png");
  auOS9 = loadImage("assets/auOS-9.png"), auOS10 = loadImage("assets/auOS-10.png");
  bootMusic = loadSound("music/introsong.mp3"), loginMusic = loadSound("music/login.mp3");
  userLogin = loadImage("assets/userlogin.png");
}

function setup() {
  createCanvas(windowWidth+1000, windowHeight+1000);
  // Set up of appropriate variables.
  systemBoot = new Timer(3000);
  startup = new Timer(5000);
  loadingAlert = new Timer(7000);
  powerOnButton = new Button(windowWidth/2-50, windowHeight/2+150, 100, 100, 0, 0);
  osGiphy = new OSGiphy(windowWidth/2-50, windowHeight/2+150, 100, 100);
  programState = 1;
  bootMusic.setVolume(1.0);
  loginMusic.setVolume(0.7);
}

function draw() {
  noStroke();
  if (programState === 1) {
    // Initial background.
    background(0);
    powerOnButton.displayer();
    image(powerOnImage, windowWidth/2-50, windowHeight/2+150, 100, 100);
  }
  else if (programState === 2) {
    // Introduction begins.
    if (systemBoot.isDone()) {
      background(110, 0, 60, 10);
    }
    if (startup.isDone()) {
      introduction();
      if (!bootMusic.isPlaying()) {
        login();
      }
    }
  }
}

function mousePressed() {
  if (programState === 1) {
    if (mouseIsPressed) {
      if (powerOnButton.isClicked()) {
        bootMusic.play();
        let fullScreen = fullscreen();
        fullscreen(!fullScreen);
        programState = 2;
      }
    }
  }
}

function introduction() {
  osGiphy.updateDisplay();
  push();
  textSize(80);
  textAlign(CENTER, CENTER);
  fill(255, 255, 255, 30);
  textFont("verdana");
  text("auOS", windowWidth/2, windowHeight/2);
  if (loadingAlert.isDone()) {
    textSize(20);
    text("L O A D I N G . . .", windowWidth/2+10, windowHeight/2+350);
  }
  pop();
}

function login() {
  if (userLoginMusicPlayed === false) {
    loginMusic.play();
    userLoginMusicPlayed = true;
  }
  background(128, 0, 32);
  push();
  rectMode(CENTER);
  fill(255);
  rect(windowWidth/2, windowHeight/2, 500, 500);
  imageMode(CENTER);
  image(userLogin, windowWidth/2, windowHeight/2-60, 200, 200);
  pop();
  passwordBar();
}

function passwordBar() {
  let userLoginInput = createInput().size(200);
  userLoginInput.position(windowWidth/2-100, windowHeight/2+50);
  let typingAllowed = createButton();
  typingAllowed.position(input.x + input.width);
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
  displayer() {
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

class OSGiphy {
  constructor(xPos, yPos, width, height) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.next = 1, this.frameDuration1 = 70, this.frameDuration2 = 70, this.frameDuration3 = 70,
    this.frameDuration4 = 70, this.frameDuration5 = 70, this.frameDuration6 = 70,
    this.frameDuration7 = 70, this.frameDuration8 = 70, this.frameDuration9 = 70,
    this.frameDuration10 = 70;
    this.lastTimeFrameChanged = millis();
  }
  updateDisplay() {
    fill(3, 32, 45, 80);
    ellipse(this.xPos+50, this.yPos+50, this.width+40, this.height+40);
    if (this.next === 1) {
      image(auOS1, this.xPos, this.yPos, this.width, this.height);
      if (millis() > this.lastTimeFrameChanged + this.frameDuration1) {
        this.next = 2;
        this.lastTimeFrameChanged = millis();
      }
    }
    if (this.next === 2) {
      image(auOS2, this.xPos, this.yPos, this.width, this.height);
      if (millis() > this.lastTimeFrameChanged + this.frameDuration2) {
        this.next = 3;
        this.lastTimeFrameChanged = millis();
      }
    }
    if (this.next === 3) {
      image(auOS3, this.xPos, this.yPos, this.width, this.height);
      if (millis() > this.lastTimeFrameChanged + this.frameDuration3) {
        this.next = 4;
        this.lastTimeFrameChanged = millis();
      }
    }
    if (this.next === 4) {
      image(auOS4, this.xPos, this.yPos, this.width, this.height);
      if (millis() > this.lastTimeFrameChanged + this.frameDuration4) {
        this.next = 5;
        this.lastTimeFrameChanged = millis();
      }
    }
    if (this.next === 5) {
      image(auOS5, this.xPos, this.yPos, this.width, this.height);
      if (millis() > this.lastTimeFrameChanged + this.frameDuration5) {
        this.next = 6;
        this.lastTimeFrameChanged = millis();
      }
    }
    if (this.next === 6) {
      image(auOS6, this.xPos, this.yPos, this.width, this.height);
      if (millis() > this.lastTimeFrameChanged + this.frameDuration6) {
        this.next = 7;
        this.lastTimeFrameChanged = millis();
      }
    }
    if (this.next === 7) {
      image(auOS7, this.xPos, this.yPos, this.width, this.height);
      if (millis() > this.lastTimeFrameChanged + this.frameDuration7) {
        this.next = 8;
        this.lastTimeFrameChanged = millis();
      }
    }
    if (this.next === 8) {
      image(auOS8, this.xPos, this.yPos, this.width, this.height);
      if (millis() > this.lastTimeFrameChanged + this.frameDuration8) {
        this.next = 9;
        this.lastTimeFrameChanged = millis();
      }
    }
    if (this.next === 9) {
      image(auOS9, this.xPos, this.yPos, this.width, this.height);
      if (millis() > this.lastTimeFrameChanged + this.frameDuration9) {
        this.next = 10;
        this.lastTimeFrameChanged = millis();
      }
    }
    if (this.next === 10) {
      image(auOS10, this.xPos, this.yPos, this.width, this.height);
      if (millis() > this.lastTimeFrameChanged + this.frameDuration10) {
        this.next = 1;
        this.lastTimeFrameChanged = millis();
      }
    }
  }
}
