//-----------------------------------
// auOS (Operating System Simulation)
// William Ahiahonu
// CS30 Major Project
// Mr. D. Schellenberg
// June 15, 2018
//-----------------------------------

// Global variables set to be used later in the code.
let systemBoot, startup, loadingAlert, bootMusicPlayed = false; // last variable in this row only used for shutdown.
let programState, powerSwitch;
let powerOnButton, proceedButton;
let powerOnImage, powerOnPressedImage;
let auOS1, auOS2, auOS3, auOS4, auOS5, auOS6, auOS7, auOS8, auOS9, auOS10;
let osGiphy, bootMusic, errorSound, welcomeAndLogoutMusic, volumeCheckSound;
let userLoginMusicPlayed = false, loginMusic, userLogin, errorSoundPlayed = false,
  welcomeAndLogoutMusicPlayed = false, volumeSoundPlayed = false;
let userLoginInput, password, nameInputGiven, nameInputLength, passInputGiven, proceed, userName, namePlaceHolder;
// Button picture variables.
let logoutPic, settingsPic, musicPic, keyboardPic, stickmanButtonPic, paintPic, closeWindowPic;
// Button variables.
let settingsButton, powerOffButton, logoutButton, musicAppButton, keyBoardShortCutsButton, stickmanGameButton, paintAppButton,
  closeWindowButton;
// Wallpaper colour variables.
let backgroundR, backgroundG, backgroundB, buttonR, buttonG, buttonB, backgroundPic1, backgroundPic2, backgroundPic3,
  backgroundPic4, backgroundPic5, backgroundPic6, wallpaperCheck, checkMarkPositionX, checkMarkPositionY;
// Volume and brightness setting variable.
let volumeLevel = 0.5, tickMarkXPosition, brightnessLevel = 0, tickMark2XPosition;
// Music app song variables.
let song1, song2, song3, song4, playButtonImage;
let song1Button, song2Button, song3Button, song4Button, songChoice;

// Stickman game global variables.
let stickman, collisionDetector;
let stickmanStandState, stickmanJumpState, stickmanRunState1, stickmanRunState2,
  stickmanRunState3, stickmanRunState4;
let obstacleX, obstacleSpeed, obstacleState, obstacleStateArray = [1, 2, 3, 4], lavaImage;
let gameState, score, highScore;
let gameMusic;

// #############################################################################
// Assests preloaded.
function preload() {
  // All assets.
  powerOnImage = loadImage("assets/poweron.png");
  auOS1 = loadImage("assets/auOS-1.png"), auOS2 = loadImage("assets/auOS-2.png");
  auOS3 = loadImage("assets/auOS-3.png"), auOS4 = loadImage("assets/auOS-4.png");
  auOS5 = loadImage("assets/auOS-5.png"), auOS6 = loadImage("assets/auOS-6.png");
  auOS7 = loadImage("assets/auOS-7.png"), auOS8 = loadImage("assets/auOS-8.png");
  auOS9 = loadImage("assets/auOS-9.png"), auOS10 = loadImage("assets/auOS-10.png");
  bootMusic = loadSound("music/introsong.mp3"), loginMusic = loadSound("music/login.mp3");
  errorSound = loadSound("music/errorsound.mp3"), welcomeAndLogoutMusic = loadSound("music/welcometodesktop.mp3");
  volumeCheckSound = loadSound("music/volumechecksound.mp3");
  userLogin = loadImage("assets/userlogin.png"), proceed = loadImage("assets/proceed.png");
  logoutPic = loadImage("assets/logoutpic.png"), settingsPic = loadImage("assets/settingspic.png");
  musicPic = loadImage("assets/musicpic.png"), keyboardPic = loadImage("assets/keyboard.png");
  stickmanButtonPic = loadImage("assets/stickmanbuttonpic.png"), paintPic = loadImage("assets/paintpic.png");
  closeWindowPic = loadImage("assets/closewindowpic.png");
  backgroundPic1 = loadImage("assets/wallpaper1.png"), backgroundPic2 = loadImage("assets/wallpaper2.png");
  backgroundPic3 = loadImage("assets/wallpaper3.png"), backgroundPic4 = loadImage("assets/wallpaper4.png");
  backgroundPic5 = loadImage("assets/wallpaper5.png"), backgroundPic6 = loadImage("assets/wallpaper6.png");
  wallpaperCheck = loadImage("assets/wallpapercheck.png");
  song1 = loadSound("music/introduction.mp3"), song2 = loadSound("music/september.mp3");
  song3 = loadSound("music/oohchild.mp3"), song4 = loadSound("music/entryii.mp3");
  playButtonImage = loadImage("assets/playimage.png");

  // Stickman game assets.
  stickmanStandState = loadImage("gameassets/stickman_stand.png");
  stickmanJumpState = loadImage("gameassets/stickman_jump.png");
  stickmanRunState1 = loadImage("gameassets/stickman_run1.png");
  stickmanRunState2 = loadImage("gameassets/stickman_run2.png");
  stickmanRunState3 = loadImage("gameassets/stickman_run3.png");
  stickmanRunState4 = loadImage("gameassets/stickman_run4.png");
  lavaImage = loadImage("gameassets/lavaimage.png");
  gameMusic = loadSound("gameassets/hightops.mp3");
}
// #############################################################################
// Setup.
function setup() {
  // Canvas that fits the entire screen based on the screen size of the device.
  createCanvas(windowWidth, windowHeight);
  // Set up of appropriate variables.
  systemBoot = new Timer(3000);
  startup = new Timer(5000);
  loadingAlert = new Timer(7000);
  powerOnButton = new Button(windowWidth/2-50, windowHeight/2+150, 100, 100, 0, 0, 0);
  closeWindowButton = new Button(windowWidth-65, 0, 70, 70, 102, 0, 51);
  osGiphy = new OSGiphy(windowWidth/2-50, windowHeight/2+150, 100, 100);
  programState = "boot";
  bootMusic.setVolume(0.3);
  loginMusic.setVolume(0.2);
  errorSound.setVolume(0.2);
  welcomeAndLogoutMusic.setVolume(0.4);
  // Wallpaper variables.
  backgroundR = 128, backgroundG = 0, backgroundB = 32;
  buttonR = 51, buttonG = 0, buttonB = 25;
  // Wallpaper check mark setup position.
  checkMarkPositionX = -10;
  checkMarkPositionY = 0;
  // Name place holder.
  namePlaceHolder = "";
  // Password value.
  password = "auos10";
  // Music app song volume levels.
  song1.setVolume(volumeLevel);
  song2.setVolume(volumeLevel+0.7);
  song3.setVolume(volumeLevel+0.3);
  song4.setVolume(volumeLevel+0.7);
  // Music app song choice set to 0 initially.
  songChoice = 0;
  // Volume tick mark.
  tickMarkXPosition = windowWidth/2-450;
  // Brightness tick mark.
  tickMark2XPosition = windowWidth/2-450;
  // Stickman game setup tools.
  // Game music volume setup.
  gameMusic.setVolume(volumeLevel);
  // Stickman display and behaviour class.
  stickman = new StickmanCharacter(150);
  // Collision Detection class, which includes the appearance and behaviour of the obstacles.
  collisionDetector = new CollisionDetection(150);
  // Obstacle movement and appearance changes - William.
  obstacleX = windowWidth/2;
  obstacleSpeed = 15;
  obstacleState = 1;
  // Controls for gameover screen and actual game.
  gameState = 0;
  // game and highscore control.
  score = 0;
  highScore = 0;
  // Checking for a local storage value from the last time played, else
  // the value is set beginning with the first game played.
  if (!localStorage.getItem("highscore")) {
    // Set the highscore.
    setHighScore();
  }
  else {
    // Retrieve the highscore if it already exists.
    getHighScore();
  }
}
// #############################################################################
// Program display.
function draw() {
  noStroke();
  // OS functionality states.
  if (programState === "boot") {
    // Initial background.
    background(0);
    powerOnButton.displayer();
    image(powerOnImage, windowWidth/2-50, windowHeight/2+150, 100, 100);
  }
  // Once boot is done, actual program runs.
  if (programState !== "boot") {
    // Program only runs in fullscreen.
    if (fullscreen()) {
      powerSwitch = "on";
      if (programState === "power on") {
        // Introduction begins.
        if (systemBoot.isDone()) {
          background(110, 0, 60, 10);
        }
        if (startup.isDone()) {
          introduction();
          if (!bootMusic.isPlaying()) {
            programState = "login";
          }
        }
      }
      // All the different states at which differnt events occur.
      else if (programState === "login") {
        login();
      }
      else if (programState === "desktop welcome") {
        desktopWelcome();
      }
      else if (programState === "desktop") {
        desktop();
      }
      else if (programState === "shutdown1") {
        shutdownConditionals();
      }
      else if (programState === "shutdown2") {
        shutdown();
      }
      else if (programState === "logout1") {
        logoutConditionals();
      }
      else if (programState === "logout2") {
        logout();
      }
      else if (programState === "settings") {
        settings();
      }
      else if (programState === "music app") {
        musicApp();
      }
      else if (programState === "keyboard shortcuts") {
        keyboardShortcuts();
      }
      else if (programState === "game app") {
        if (gameState === 1) {
          gameIntro();
        }
        if (gameState === 2) {
          // Stickman game function, containing all of the components of it.
          stickManGame();
        }
        else if (gameState === 3) {
          // If stickman hits an obstacle, game over.
          gameOverConditionals();
        }
      }
    }
    // If program is not in fullscreen, it clears from the page and a notification
    // is given to go back into fullscreen.
    else {
      clear();
      powerSwitch = "off";
      fill(0, 30);
      textSize(30);
      textFont("verdana");
      textAlign(CENTER, CENTER);
      text("auOS runs in fullscreen only. 'F' to fullscreen.", windowWidth/2, windowHeight/2);
    }
  }
  // Program automatically reloads as a way to shut down to be started again.
  if (programState === "shutdown2" && !bootMusic.isPlaying()) {
    // Fullscreen is turned off to allow reload to happen.
    if (fullscreen()) {
      let fullScreen = fullscreen();
      fullscreen(!fullScreen);
      window.location.reload(true);
    }
    else {
      window.location.reload(true);
    }
  }
}
// #############################################################################
// Functionality.

// Mouse mechanism for functionality.
function mousePressed() {
  // Power button mechanism.
  if (programState === "boot") {
    if (mouseIsPressed) {
      if (powerOnButton.isClicked()) {
        bootMusic.play();
        let fullScreen = fullscreen();
        fullscreen(!fullScreen);
        programState = "power on";
      }
    }
  }
  if (programState === "login") {
    // Login conditionals. Login only takes certain conditionals in order to act like
    // a typical OS login screen.
    if (proceedButton.isClicked()) {
      // Values of input are set to variables to use in conditioanls.
      nameInputGiven = userName.value();
      nameInputLength = userName.value().length;
      passInputGiven = userLoginInput.value();
      // Password must be correct, username can be no longer than 8 characters, spaces without
      // letters are not accepted.
      if (passInputGiven === password && (nameInputGiven !== "" && nameInputGiven !== " "
      && nameInputGiven !== "  " && nameInputGiven !== "   " && nameInputGiven !== "    "
      && nameInputGiven !== "     " && nameInputGiven !== "      "
      && nameInputGiven !== "       " && nameInputGiven !== "        ") && nameInputLength <= 8) {
        // Remove inputs to continue on to next part of the program.
        userName.remove();
        userLoginInput.remove();
        // When logging out, the name of the last user will be present within the username box.
        namePlaceHolder = nameInputGiven;
        programState = "desktop welcome";
        // Ensures continued draw looping for program progression and animations.
        loop();
      }
      else {
        // Error sound played if anything is invalid in login screen.
        if (errorSoundPlayed === false) {
          errorSound.play();
          errorSoundPlayed = true;
          errorSoundPlayed = false;
        }
        // Inputs removed and replaced with new, blank inputs when login() is called again.
        userName.remove();
        userLoginInput.remove();
        login();
      }
    }
  }
  // Main portion for all button mechanisms to surf through different features in
  // the program.
  if (programState === "desktop") {
    if (powerOffButton.isClicked()) {
      programState = "shutdown1";
    }
    else if (logoutButton.isClicked()) {
      programState = "logout1";
    }
    else if (settingsButton.isClicked()) {
      clear();
      programState = "settings";
    }
    else if (musicAppButton.isClicked()) {
      clear();
      programState = "music app";
    }
    else if (keyBoardShortCutsButton.isClicked()) {
      programState = "keyboard shortcuts";
    }
    else if (stickmanGameButton.isClicked()) {
      clear();
      gameState = 1;
      score = 0;
      gameMusic.loop();
      programState = "game app";
    }
    else if (paintAppButton.isClicked()) {
      // Tony's paint code (modified by me), has been uploaded to github, so
      // when the paint app button is pressed, the paint app opens in a new tab.
      // This is the result of not having enough time to hard code the program into
      // auOS, however this serves as a type of "online" paint.
      window.open("https://will-a0.github.io/tony-alphapaint/");
    }
  }
  // Conditionals for playing music in music app when the play buttons are clicked.
  // Songs play when appropriate (not when others are or when game music is playing).
  if (programState === "music app") {
    // Play song one.
    if (song1Button.isClicked() && !song1.isPlaying()) {
      if (song2.isPlaying()) {
        song2.stop();
      }
      else if (song3.isPlaying()) {
        song3.stop();
      }
      else if (song4.isPlaying()) {
        song4.stop();
      }
      song1.play();
      // Variable used for the keyboard shortcut mechanism to play music.
      songChoice = 1;
    }
    // Play song two.
    if (song2Button.isClicked() && !song2.isPlaying()) {
      if (song1.isPlaying()) {
        song1.stop();
      }
      else if (song3.isPlaying()) {
        song3.stop();
      }
      else if (song4.isPlaying()) {
        song4.stop();
      }
      song2.play();
      songChoice = 2;
    }
    // Play song three.
    if (song3Button.isClicked() && !song3.isPlaying()) {
      if (song1.isPlaying()) {
        song1.stop();
      }
      else if (song2.isPlaying()) {
        song2.stop();
      }
      else if (song4.isPlaying()) {
        song4.stop();
      }
      song3.play();
      songChoice = 3;
    }
    // Play song four.
    if (song4Button.isClicked() && !song4.isPlaying()) {
      if (song1.isPlaying()) {
        song1.stop();
      }
      else if (song2.isPlaying()) {
        song2.stop();
      }
      else if (song3.isPlaying()) {
        song3.stop();
      }
      song4.play();
      songChoice = 4;
    }
  }
  // When the close window button in the top right corner is pressed, the user is taken from
  // that feature back to the desktop. This section also accounts for game music as well.
  if (programState !== "desktop" && closeWindowButton.isClicked() && gameState !== 2) {
    if (gameMusic.isPlaying()) {
      gameMusic.stop();
    }
    clear();
    programState = "desktop";
  }
}

// Responsible for intro at startup screen.
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
    text("L O A D I N G . . .", windowWidth/2+10, windowHeight/2+350);
  }
  pop();
}
// Responsible for login screen.
function login() {
  // Login music plays only once, thanks to the boolean variable, userLoginMusicPlayed.
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
  text("ENTER USERNAME (8 Chars. Max)", windowWidth/2-23, windowHeight/2+5);
  text("ENTER PASSWORD (auos10)", windowWidth/2-43, windowHeight/2+85);
  welcomeAndLogoutMusicPlayed = false;

  // Error messages given if anything entered in the login screen is invalid.
  if (passInputGiven !== password || nameInputGiven === "") {
    fill(204, 0, 0);
    text("Currently no username, or password was entered incorrectly.",
      windowWidth/2, windowHeight/2+230);
  }
  else {
    fill(204, 0, 0);
    text("* You must enter a valid username and the correct password *",
      windowWidth/2, windowHeight/2+230);
  }

  // Setup of proceed button on the login screen.
  proceedButton = new Button(windowWidth/2-25, windowHeight/2+160, 50, 50, 255, 255, 255);
  proceedButton.displayer();
  image(proceed, windowWidth/2-25, windowHeight/2+160, 50, 50);

  // Setup of username input on login screen.
  userName = createInput(namePlaceHolder,"text").size(300);
  userName.position(windowWidth/2-150, windowHeight/2+20);
  userName.style("font-size", "30px");

  // Setup of password input on login screen.
  userLoginInput = createInput("","password").size(300);
  userLoginInput.position(windowWidth/2-150, windowHeight/2+100);
  userLoginInput.style("font-size", "30px");
  userLoginInput.focus();
}
// Responsible for welcome user to desktop before the desktop appears.
function desktopWelcome() {
  background(0, 0, 28, 40);
  // Welcome music onyl plays once, thanks to the boolean variable, welcomeAndLogoutMusicPlayed.
  if (welcomeAndLogoutMusicPlayed === false) {
    welcomeAndLogoutMusic.play();
    welcomeAndLogoutMusicPlayed = true;
  }
  // User welcome screen.
  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  textFont("verdana");
  text("Preparing your desktop, " + nameInputGiven, windowWidth/2, windowHeight/2);
  text(".   .   .", windowWidth/2, windowHeight/2+50);
  if (!welcomeAndLogoutMusic.isPlaying()) {
    // After music is done playing, user is taken to the main desktop.
    clear();
    programState = "desktop";
  }
}
// Responsible for main desktop.
function desktop() {
  // Desktop Design.
  background(backgroundR+brightnessLevel, backgroundG+brightnessLevel, backgroundB+brightnessLevel, 20);
  fill(0, 30);
  // Side Dock.
  rect(0, 0, 150, windowHeight);
  textSize(100);
  fill(255, 30);
  text("auOS", windowWidth/2, windowHeight/2);
  textSize(30);
  text("version 0.9.0", windowWidth/2, windowHeight/2+70);

  // User box components.
  push();
  fill(0, 30);
  rectMode(CENTER);
  rect(windowWidth-170, windowHeight/2+250, 300, 250);
  pop();
  textSize(25);
  fill(255);
  text(nameInputGiven, windowWidth-170, windowHeight/2+165);
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
  text(currentD + "/" + currentM + "/" + currentY, windowWidth-170, windowHeight/2+215);
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
  text(clockH + ":" + clockM + ":" + clockS + " " + meridiem, windowWidth-170, windowHeight/2+265);
  // Setup of Control Panel buttons (bottom right in desktop screen).
  settingsButton = new Button(windowWidth-240, windowHeight/2+305, 45, 45, 102, 0, 51);
  powerOffButton = new Button(windowWidth-190, windowHeight/2+305, 45, 45, 102, 0, 51);
  logoutButton = new Button(windowWidth-140, windowHeight/2+305, 45, 45, 102, 0, 51);
  // Side Dock Buttons (Vertical strip on left side containing apps).
  musicAppButton = new Button(24, windowHeight/2-230, 100, 100, 102, 0, 51);
  keyBoardShortCutsButton = new Button(24, windowHeight/2-110, 100, 100, 102, 0, 51);
  stickmanGameButton = new Button(24, windowHeight/2+10, 100, 100, 102, 0, 51);
  paintAppButton = new Button(24, windowHeight/2+130, 100, 100, 102, 0, 51);
  // Settings button display.
  settingsButton.displayer();
  image(settingsPic, windowWidth-248, windowHeight/2+298, 60, 60);
  // Power off button display.
  powerOffButton.displayer();
  image(powerOnImage, windowWidth-190, windowHeight/2+305, 45, 45);
  // Logout button display.
  logoutButton.displayer();
  image(logoutPic, windowWidth-135, windowHeight/2+310, 35, 35);
  // Side Dock Button Display.
  textSize(20);
  // Music app button display with text.
  musicAppButton.displayer();
  image(musicPic, 24, windowHeight/2-230, 100, 100);
  text("Music", 75, windowHeight/2-110);
  // City scene button display with text.
  keyBoardShortCutsButton.displayer();
  image(keyboardPic, 24, windowHeight/2-110, 100, 100);
  text("Shortcuts", 75, windowHeight/2+10);
  // Stickman game button display with text.
  stickmanGameButton.displayer();
  image(stickmanButtonPic, 24, windowHeight/2+10, 100, 100);
  text("Game", 75, windowHeight/2+130);
  // Paint app button display with text.
  paintAppButton.displayer();
  image(paintPic, 24, windowHeight/2+130, 100, 100);
  text("External", 75, windowHeight/2+250);
  text("Online", 75, windowHeight/2+275);
  text("Paint", 75, windowHeight/2+300);
}
// Responsible for asking user to shutdown or not.
function shutdownConditionals() {
  // Display of the pop up.
  fill(0, 10);
  rect(0, 0, windowWidth, windowHeight);
  push();
  fill(255);
  rectMode(CENTER);
  rect(windowWidth/2, windowHeight/2, 400, 200);
  pop();
  fill(0);
  textSize(30);
  textFont("verdana");
  text("Shut down auOS?", windowWidth/2, windowHeight/2-40);
  text("O - Yes | X - No", windowWidth/2, windowHeight/2+40);
}
// Responsible for shutting down the program.
function shutdown() {
  background(110, 0, 60, 10);
  // All music is stopped if playing to allow for proper shutdown.
  if (song1.isPlaying()) {
    song1.stop();
  }
  if (song2.isPlaying()) {
    song2.stop();
  }
  if (song3.isPlaying()) {
    song3.stop();
  }
  if (song4.isPlaying()) {
    song4.stop();
  }
  // Music from startup is played again as shutdown music.
  if (bootMusicPlayed === false) {
    bootMusic.play();
    bootMusicPlayed = true;
  }
  // The rest of the shut down display.
  osGiphy.updateDisplay();
  push();
  textSize(80);
  textAlign(CENTER, CENTER);
  fill(255, 255, 255, 30);
  textFont("verdana");
  text("auOS", windowWidth/2, windowHeight/2);
  textSize(20);
  text("_-|-_", windowWidth/2, windowHeight/2+300);
  text("S H U T T I N G  D O W N . . .", windowWidth/2+10, windowHeight/2+350);
}
// Responsible for asking user to logout or not.
function logoutConditionals() {
  // Display of the pop up.
  fill(0, 10);
  rect(0, 0, windowWidth, windowHeight);
  push();
  fill(255);
  rectMode(CENTER);
  rect(windowWidth/2, windowHeight/2, 400, 200);
  pop();
  fill(0);
  textSize(30);
  textFont("verdana");
  text("Logout of auOS?", windowWidth/2, windowHeight/2-40);
  text("O - Yes | X - No", windowWidth/2, windowHeight/2+40);
  welcomeAndLogoutMusicPlayed = false;
}
// Responible for logging out.
function logout() {
  background(0, 0, 28, 40);
  // All music is stopped if playing to allow for proper logout.
  if (song1.isPlaying()) {
    song1.stop();
  }
  if (song2.isPlaying()) {
    song2.stop();
  }
  if (song3.isPlaying()) {
    song3.stop();
  }
  if (song4.isPlaying()) {
    song4.stop();
  }
  // Music for welcome is played as music for logout.
  if (welcomeAndLogoutMusicPlayed === false) {
    welcomeAndLogoutMusic.play();
    welcomeAndLogoutMusicPlayed = true;
  }
  // The rest of the logout display.
  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  textFont("verdana");
  text("Logging out. Good bye, " + nameInputGiven, windowWidth/2, windowHeight/2);
  text(".   .   .", windowWidth/2, windowHeight/2+50);
  if (!welcomeAndLogoutMusic.isPlaying()) {
    // Program goes back to login screen after music is done playing and
    // the userLoginMusicPlayed variable is set to false to allow the sound to play again.
    userLoginMusicPlayed = false;
    programState = "login";
  }
}

// #############################################################################
// Resize Canvas when switching to fullscreen and vice versa.
function windowResized() {
  if (programState !== "login") {
    resizeCanvas(windowWidth, windowHeight);
  }
}
// Keyboard mechanism for functionality.
function keyPressed() {
  // Full screen mechanism if needed.
  if (key === "f" || key === "F") {
    let fullScreen = fullscreen();
    fullscreen(!fullScreen);
  }
  if (programState === "settings") {
    // Settings - Wallpaper conditionals.
    if (key === "a" || key === "A") {
      // Background changes using rgb shifting.
      backgroundR = 128, backgroundG = 0, backgroundB = 32;
      buttonR = 51, buttonG = 0, buttonB = 25;
      // Change position of check mark.
      checkMarkPositionX = windowWidth/2+135;
      checkMarkPositionY = windowHeight/2-80;
    }
    else if (key === "b" || key === "B") {
      // Background changes using rgb shifting.
      backgroundR = 0, backgroundG = 54, backgroundB = 142;
      buttonR = 0, buttonG = 21, buttonB = 56;
      // Change position of check mark.
      checkMarkPositionX = windowWidth/2+135;
      checkMarkPositionY = windowHeight/2+120;
    }
    else if (key === "c" || key === "C") {
      // Background changes using rgb shifting.
      backgroundR = 188, backgroundG = 103, backgroundB = 0;
      buttonR = 71, buttonG = 39, buttonB = 0;
      // Change position of check mark.
      checkMarkPositionX = windowWidth/2+135;
      checkMarkPositionY = windowHeight/2+320;
    }
    else if (key === "d" || key === "D") {
      // Background changes using rgb shifting.
      backgroundR = 118, backgroundG = 17, backgroundB = 219;
      buttonR = 44, buttonG = 1, buttonB = 89;
      // Change position of check mark.
      checkMarkPositionX = windowWidth/2+545;
      checkMarkPositionY = windowHeight/2-80;
    }
    else if (key === "e" || key === "E") {
      // Background changes using rgb shifting.
      backgroundR = 0, backgroundG = 88, backgroundB = 132;
      buttonR = 0, buttonG = 35, buttonB = 53;
      // Change position of check mark.
      checkMarkPositionX = windowWidth/2+545;
      checkMarkPositionY = windowHeight/2+120;
    }
    else if (key === "g" || key === "G") {
      // Background changes using rgb shifting.
      backgroundR = 160, backgroundG = 157, backgroundB = 0;
      buttonR = 62, buttonG = 61, buttonB = 0;
      // Change position of check mark.
      checkMarkPositionX = windowWidth/2+545;
      checkMarkPositionY = windowHeight/2+320;
    }
  }
  if (programState === "desktop" || programState === "settings" || programState === "music app" ||
  programState === "keyboard shortcuts" || programState === "game app") {
    // Settings - Sound and brightness conditionals.
    // Volume decrease - for sounds AFTER login screen.
    if (keyCode === 49) {
      if (volumeLevel > 0) {
        // Volume variable and everything else controlled by it changes based on desired
        // volume level.
        volumeLevel -= 0.095;
        tickMarkXPosition -= 20;
        song1.setVolume(volumeLevel);
        song2.setVolume(volumeLevel+0.7);
        song3.setVolume(volumeLevel+0.3);
        song4.setVolume(volumeLevel+0.7);
        gameMusic.setVolume(volumeLevel);
      }
      // Volume sound in settings to know the loudness level.
      if (programState !== "music app" && programState !== "desktop" && programState !== "game app") {
        volumeCheckSound.setVolume(volumeLevel);
        // Volume sound plays once every time the approprate key is pressed.
        if (volumeSoundPlayed === false) {
          volumeCheckSound.play();
          volumeSoundPlayed = true;
        }
        volumeSoundPlayed = false;
      }
    }
    // Volume increase - for sounds AFTER login screen.
    else if (keyCode === 50) {
      if (volumeLevel < 1.5) {
        // Volume variable and everything else controlled by it changes based on desired
        // volume level.
        volumeLevel += 0.095;
        tickMarkXPosition += 20;
        song1.setVolume(volumeLevel);
        song2.setVolume(volumeLevel+0.7);
        song3.setVolume(volumeLevel+0.3);
        song4.setVolume(volumeLevel+0.7);
        gameMusic.setVolume(volumeLevel);
      }
      // Volume sound in settings to know the loudness level.
      if (programState !== "music app" && programState !== "desktop" && programState !== "game app") {
        volumeCheckSound.setVolume(volumeLevel);
        // Volume sound plays once every time the approprate key is pressed.
        if (volumeSoundPlayed === false) {
          volumeCheckSound.play();
          volumeSoundPlayed = true;
        }
        volumeSoundPlayed = false;
      }
    }
    // Brightness conditionals.
    // Brightness variable and everything else controlled by it changes based on desired
    // brightness level. The variable, brightnessLevel, is added to the rbg values of the
    // various backgrounds in the program in order to darken or lighten them.
    else if (keyCode === 51) {
      if (brightnessLevel > -120) {
        brightnessLevel -= 20;
        tickMark2XPosition -= 20;
      }
    }
    else if (keyCode === 52) {
      if (brightnessLevel < 220) {
        brightnessLevel += 20;
        tickMark2XPosition += 20;
      }
    }
  }
  if (programState === "desktop" || programState === "settings" || programState === "keyboard shortcuts") {
    // Song choice keyboard short cut - avaliable only when not in music app (already button for this) or gaming apps.
    if (keyCode === 53) {
      if (song2.isPlaying()) {
        song2.stop();
      }
      else if (song3.isPlaying()) {
        song3.stop();
      }
      else if (song4.isPlaying()) {
        song4.stop();
      }
      songChoice = 1;
    }
    if (keyCode === 54) {
      if (song1.isPlaying()) {
        song1.stop();
      }
      else if (song3.isPlaying()) {
        song3.stop();
      }
      else if (song4.isPlaying()) {
        song4.stop();
      }
      songChoice = 2;
    }
    if (keyCode === 55) {
      if (song1.isPlaying()) {
        song1.stop();
      }
      else if (song2.isPlaying()) {
        song2.stop();
      }
      else if (song4.isPlaying()) {
        song4.stop();
      }
      songChoice = 3;
    }
    if (keyCode === 56) {
      if (song1.isPlaying()) {
        song1.stop();
      }
      else if (song2.isPlaying()) {
        song2.stop();
      }
      else if (song3.isPlaying()) {
        song3.stop();
      }
      songChoice = 4;
    }
  }
  if (programState === "music app" || programState === "desktop" ||
  programState === "settings" || programState === "keyboard shortcuts") {
    // Stop all music from playing when key "s" is pressed.
    if (key === "s" || key === "S") {
      if (song1.isPlaying()) {
        song1.stop();
      }
      else if (song2.isPlaying()) {
        song2.stop();
      }
      else if (song3.isPlaying()) {
        song3.stop();
      }
      else if (song4.isPlaying()) {
        song4.stop();
      }
    }
    // Pause music.
    if (key === "l" || key === "L") {
      if (song1.isPlaying()) {
        song1.pause();
      }
      else if (song2.isPlaying()) {
        song2.pause();
      }
      else if (song3.isPlaying()) {
        song3.pause();
      }
      else if (song4.isPlaying()) {
        song4.pause();
      }
    }
    // Keyboard shortcut to play music.
    if (key === "p" || key === "P") {
      if (songChoice === 1) {
        song1.play();
      }
      else if (songChoice === 2) {
        song2.play();
      }
      else if (songChoice === 3) {
        song3.play();
      }
      else if (songChoice === 4) {
        song4.play();
      }
    }
  }
  // Close keyboard shortcuts list.
  if (programState === "keyboard shortcuts") {
    if (key === "x" || key === "X") {
      clear();
      programState = "desktop";
    }
  }
  // Move to the next page in the game app.
  if (programState === "game app") {
    if (gameState === 1) {
      if (key === "o" || key === "O") {
        gameState = 2;
      }
    }
  }
  // Shut down.
  if (programState === "shutdown1" && powerSwitch === "on") {
    // Shut down conditionals.
    if (key === "o" || key === "O") {
      clear();
      programState = "shutdown2";
    }
    else if (key === "x" || key === "X") {
      clear();
      programState = "desktop";
    }
  }
  // Log out.
  if (programState === "logout1" && powerSwitch === "on") {
    // Log out conditionals.
    if (key === "o" || key === "O") {
      programState = "logout2";
    }
    else if (key === "x" || key === "X") {
      clear();
      programState = "desktop";
    }
  }
}
// #############################################################################
// Classes.

// Timer for timing events at the beginning and during the program.
class Timer {
  constructor(waitTime) {
    // Setup variables for the timer.
    this.waitTime = waitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }
  // Ability to reset timer - although it is not used in the program.
  reset(newWaitTime) {
    this.waitTime = newWaitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }
  // When timer is done, something can be set to happen. This is used for the fading
  // in of different screens at startup.
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
  constructor(x, y, buttonWidth, buttonHeight, onFillR, onFillG, onFillB) {
    // Conditionals for buttons to be operated.
    this.buttonWidth = buttonWidth;
    this.buttonHeight = buttonHeight;
    this.leftSide = x;
    this.topSide = y;
    this.rightSide = this.leftSide + this.buttonWidth;
    this.bottomSide = this.topSide + this.buttonHeight;
    this.onFillR = onFillR;
    this.onFillG = onFillG;
    this.onFillB = onFillB;
  }
  // When mouse is within the button, the button can be activated.
  displayer() {
    fill(0, 1);
    if (mouseX >= this.leftSide && mouseX <= this.rightSide && mouseY >= this.topSide && mouseY <= this.bottomSide) {
      fill(this.onFillR, this.onFillG, this.onFillB);
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
// This class controls the gif at the startup and shut down screen of the program.
class OSGiphy {
  constructor(xPos, yPos, width, height) {
    // Positioning of the gif and the time it takes move through each frame is set up.
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
    // Multiple separate frames of images are quickly worked through constantly to create the
    // gif effect.
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
