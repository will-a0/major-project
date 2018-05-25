//---------------------
// auOS
// CS30 Major Project
// William Ahiahonu
//---------------------

// Global variables set to be used later in the code.
let fadeAnimation;
let systemBoot, startup, loadingAlert;
let programState;
let powerOnButton, proceedButton;
let powerOnImage, powerOnPressedImage;
let auOS1, auOS2, auOS3, auOS4, auOS5, auOS6, auOS7, auOS8, auOS9, auOS10;
let osGiphy, bootMusic, errorSound, welcomeMusic;
let userLoginMusicPlayed = false, loginMusic, userLogin, errorSoundPlayed = false,
  welcomeMusicPlayed = false;
let userLoginInput, password, nameInputGiven, nameInputLength, passInputGiven, proceed, userName;
let auosDesktopLogo;

function preload() {
  // All assets.
  powerOnImage = loadImage("assets/poweron.png");
  auOS1 = loadImage("assets/auOS-1.png"), auOS2 = loadImage("assets/auOS-2.png");
  auOS3 = loadImage("assets/auOS-3.png"), auOS4 = loadImage("assets/auOS-4.png");
  auOS5 = loadImage("assets/auOS-5.png"), auOS6 = loadImage("assets/auOS-6.png");
  auOS7 = loadImage("assets/auOS-7.png"), auOS8 = loadImage("assets/auOS-8.png");
  auOS9 = loadImage("assets/auOS-9.png"), auOS10 = loadImage("assets/auOS-10.png");
  bootMusic = loadSound("music/introsong.mp3"), loginMusic = loadSound("music/login.mp3");
  errorSound = loadSound("music/errorsound.mp3"), welcomeMusic = loadSound("music/welcometodesktop.mp3");
  userLogin = loadImage("assets/userlogin.png"), proceed = loadImage("assets/proceed.png");
  auosDesktopLogo = loadImage("assets/auosdesktoplogo.png");
}

function setup() {
  createCanvas(windowWidth+1000, windowHeight+1000);
  fadeAnimation = createGraphics(windowWidth, windowHeight);
  // Set up of appropriate variables.
  systemBoot = new Timer(3000);
  startup = new Timer(5000);
  loadingAlert = new Timer(7000);
  powerOnButton = new Button(windowWidth/2-50, windowHeight/2+150, 100, 100, 0, 0);
  osGiphy = new OSGiphy(windowWidth/2-50, windowHeight/2+150, 100, 100);
  programState = 3;
  bootMusic.setVolume(1.0);
  loginMusic.setVolume(0.5);
  errorSound.setVolume(0.5);
  welcomeMusic.setVolume(1.0);
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
        programState = 3;
      }
    }
  }
  else if (programState === 3) {
    login();
  }
  else if (programState === 4) {
    desktopWelcome();
  }
  else if (programState === 5) {
    desktop();
  }
}

function mousePressed() {
  // Power button mechanism.
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
  if (programState === 3) {
    // Login conditionals.
    if (proceedButton.isClicked()) {
      nameInputGiven = userName.value();
      nameInputLength = userName.value.length;
      passInputGiven = userLoginInput.value();
      if (passInputGiven === password && (nameInputGiven !== "" && nameInputGiven !== " "
      && nameInputGiven !== "  " && nameInputGiven !== "   " && nameInputGiven !== "    "
      && nameInputGiven !== "     " && nameInputGiven !== "      "
      && nameInputGiven !== "       " && nameInputGiven !== "        "
      && nameInputGiven !== "         " && nameInputGiven !== "          ")) {
        userName.remove();
        userLoginInput.remove();
        programState = 4;
        loop();
      }
      else {
        if (errorSoundPlayed === false) {
          errorSound.play();
          errorSoundPlayed = true;
          errorSoundPlayed = false;
        }
        userName.remove();
        userLoginInput.remove();
        login();
      }
    }
  }
}

function introduction() {
  // Introduction.
  osGiphy.updateDisplay();
  push();
  textSize(80);
  textAlign(CENTER, CENTER);
  fill(255, 255, 255, 30);
  textFont("verdana");
  text("auOS", windowWidth/2, windowHeight/2);
  if (loadingAlert.isDone()) {
    textSize(20);
    text("_-|-_", windowWidth/2, windowHeight/2+300);
    text("L O A D I N G . . .", windowWidth/2, windowHeight/2+350);
  }
  pop();
}

function login() {
  if (userLoginMusicPlayed === false) {
    loginMusic.play();
    userLoginMusicPlayed = true;
  }
  // Visual display.
  background(128, 0, 32);
  push();
  rectMode(CENTER);
  fill(255);
  rect(windowWidth/2, windowHeight/2, 500, 500);
  imageMode(CENTER);
  image(userLogin, windowWidth/2, windowHeight/2-110, 200, 200);
  pop();
  textSize(15);
  textAlign(CENTER, CENTER);
  textFont("verdana");
  fill(0);
  text("ENTER USERNAME", windowWidth/2-81, windowHeight/2+5);
  text("ENTER PASSWORD (auos10)", windowWidth/2-43, windowHeight/2+85);

  // Error message.
  if (passInputGiven !== password || nameInputGiven === "") {
    fill(204, 0, 0);
    text("No username, or password entered incorrectly. Please try again.",
      windowWidth/2, windowHeight/2+230);
  }
  else {
    fill(204, 0, 0);
    text("* You must enter a valid username and the correct password *",
      windowWidth/2, windowHeight/2+230);
  }

  // Proceed button.
  proceedButton = new Button(windowWidth/2-25, windowHeight/2+160, 50, 50, 255, 255);
  proceedButton.displayer();
  image(proceed, windowWidth/2-25, windowHeight/2+160, 50, 50);

  // Username.
  userName = createInput("Ahiahonu","text").size(300);
  userName.position(windowWidth/2-150, windowHeight/2+20);
  userName.style("font-size", "30px");

  // Password.
  password = "auos10";
  userLoginInput = createInput("auos10","password").size(300);
  userLoginInput.position(windowWidth/2-150, windowHeight/2+100);
  userLoginInput.style("font-size", "30px");
  userLoginInput.focus();
}

function desktopWelcome() {
  // User welcome screen.
  background(0, 0, 28, 40);
  if (welcomeMusicPlayed === false) {
    welcomeMusic.play();
    welcomeMusicPlayed = true;
  }
  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  textFont("verdana");
  text("Preparing your desktop, " + nameInputGiven, windowWidth/2, windowHeight/2);
  text(".   .   .", windowWidth/2, windowHeight/2+50);
  if (!welcomeMusic.isPlaying()) {
    clear();
    programState = 5;
  }
}

function desktop() {
  // Desktop Design.
  background(128, 0, 32, 20);
  image(auosDesktopLogo, windowWidth-170, windowHeight-100, 150, 80);
  fill(0, 40);
  rect(0, 0, 150, windowHeight);
  textSize(100);
  fill(255, 30);
  text("auOS", windowWidth/2, windowHeight/2);

  // User box.
  push();
  fill(0, 40);
  rectMode(CENTER);
  rect(windowWidth-170, windowHeight/2, 300, 300);
  pop();
  textSize(30);
  fill(255);
  text(nameInputGiven, windowWidth-170, windowHeight/2-110);
  // Date.
  let currentD = day();
  let currentM = month();
  let currentY = year();
  // Date conditionals.
  if (currentD < 10) {
    currentD = "0" + currentD;
  }
  if (currentM < 10) {
    currentM = "0" + currentM;
  }
  // Date display.
  text(currentD + "/" + currentM + "/" + currentY, windowWidth-170, windowHeight/2-60);
  // Clock.
  let clockH = hour();
  let clockM = minute();
  let clockS = second();
  let meridiem = "AM";
  // Clock conditionals.
  if (clockS < 10) {
    clockS = "0" + clockS;
  }
  if (clockM < 10) {
    clockM = "0" + clockM;
  }
  if (clockH > 12) {
    clockH = clockH - 12;
    meridiem = "PM";
  }
  // 0 AM and 0 PM is converted to 12.
  if (clockH === 0) {
    clockH = 12;
  }
  // Clock display.
  text(clockH + ":" + clockM + ":" + clockS + " " + meridiem, windowWidth-170, windowHeight/2-10);
  // Control Panel.

}

function keyPressed() {
  if (key === "f" || key === "F") {
    let fullScreen = fullscreen();
    fullscreen(!fullScreen);
  }
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
