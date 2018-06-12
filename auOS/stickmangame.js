// #############################################################################
// Stickman game.

function gameIntro() {
  // Stop all songs from the music app when in the game app
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
  // Game title and instructions.
  background(50, 0, 30, 20);
  closeWindowButton.displayer();
  image(closeWindowPic, windowWidth-73, -5, 80, 80);
  fill(102, 0, 51);
  push();
  rectMode(CENTER);
  rect(windowWidth/2, windowHeight/2-245, 400, 200)
  pop();
  fill(255);
  textSize(80);
  textFont("verdana");
  text("Run", windowWidth/2, windowHeight/2-280);
  textSize(30);
  text("version 2.0.0", windowWidth/2, windowHeight/2-200);
  textSize(60);
  text("Instructions", windowWidth/2-260, windowHeight/2+30);
  textSize(30);
  text("| Right Arrow - Move |", windowWidth/2+240, windowHeight/2-50);
  text("| Up Arrow - Small Jump |", windowWidth/2+240, windowHeight/2+30);
  text("| X - Big Jump |", windowWidth/2+240, windowHeight/2+110);
  textSize(300);
  text("[", windowWidth/2, windowHeight/2);
  textSize(30);
  text("Press 'o' to continue", windowWidth/2, windowHeight/2+260);
}
function stickManGame() {
  // Background.
  background(216+brightnessLevel, 191+brightnessLevel, 216+brightnessLevel);
  // Collision Detector (Hitbox) also containing the obstacles.
  // Set to follow the stickman's movements. Hitbox is hidden.
  collisionDetector.newPositionAndSurfaceDetection();
  collisionDetector.jump(-7.8);
  // Reveal the obstacles at the approriate times.
  collisionDetector.obstacles();
  // Surface of the game.
  fill(0);
  rect(0, 696, windowWidth, windowHeight);
  // Stickman Character appearance, movement and behaviour.
  stickman.updateDisplay();
  stickman.newPositionAndSurfaceDetection();
  stickman.jump(-7.8);
  // Tracking the score.
  scoreTracker();
  // Disabling spacebar functionality so the window does not scroll up or down
  // when the spacebar is pressed.
  window.onkeydown = function killSpaceBar() {
    return !(keyCode === 32);
  };
  // Function to disable the ability to scroll.
  function disableScrolling() {
    window.scrollTo(0, 0);
  }
  // Adding listener to disable scrolling.
  window.addEventListener("scroll", disableScrolling);
}
function scoreTracker() {
  // Display for score and highscore within the game.
  push();
  textSize(50);
  fill(0);
  push();
  textFont("impact");
  textAlign(CENTER);
  text("Score: " + score + " m", windowWidth/2, 70);
  text("High Score: " + highScore + " m", windowWidth/2, 150);
  pop();
}
// Function to set local storage value to highscore in the game.
function setHighScore() {
  localStorage.setItem("highscore", score);
}
// Function to get local storage value if possible.
function getHighScore() {
  highScore = localStorage.getItem("highscore");
}
// Function to remove local storage value, if you can't beat the highscore :)
function keyTyped() {
  if (key === "c") {
    localStorage.removeItem("highscore");
  }
}
function gameOverConditionals() {
  // Display final score after stickman is dead.
  background(0);
  closeWindowButton.displayer();
  image(closeWindowPic, windowWidth-73, -5, 80, 80);
  push();
  fill(255);
  textSize(90);
  textAlign(CENTER);
  textFont("impact");
  fill("red");
  text("YOU DIED!", windowWidth/2, windowHeight/2);
  fill("gold");
  textSize(40);
  text("Final Score: " + score + " m", windowWidth/2, windowHeight/2+70);
  text("High Score: " + highScore + " m", windowWidth/2, windowHeight/2+140);
  textSize(30);
  fill(255);
  text("Press 'r' to restart", windowWidth/2, windowHeight/2+250);
  pop();
  // Obstacles are pushed to the end of the screen opposite of the stickman
  // before the game is rerun to give the player time to react.
  obstacleX = windowWidth;
  // Change...
  if(keyIsDown(82)) { // key r
    gameState = 2;
    score = 0;
  }
}

class StickmanCharacter {
  constructor(objectX) {
    this.width = width;
    this.height = height;
    this.objectX = objectX;
    this.objectY = 654;
    this.velocityY = 0;
    this.gravity = 0.3;
    this.gravitySpeed = 0;
    this.stickmanStanding = true;
    this.runningState = 1, this.frameDuration1 = 60 , this.frameDuration2 = 60,
    this.frameDuration3 = 60, this.frameDuration4 = 60;
    this.lastTimeFrameChanged = millis();
  }
  updateDisplay() {
    noStroke();
    if (this.objectY < 654) {
      push();
      imageMode(CENTER);
      image(stickmanJumpState, this.objectX+30, this.objectY, 480, 380);
      pop();
    }
    else if (!this.objectY < 654 && this.stickmanStanding === true) {
      push();
      imageMode(CENTER);
      image(stickmanStandState, this.objectX, this.objectY-25, 70, 150);
      pop();
    }
    if (keyIsDown(39) && !keyIsDown(38) && this.gravitySpeed === 0) { //39 - right arrow
      this.stickmanStanding = false;

      if (this.runningState === 1) {
        push();
        imageMode(CENTER);
        image(stickmanRunState1, this.objectX-20, this.objectY-10, 120, 125);
        pop();
        if (millis() > this.lastTimeFrameChanged + this.frameDuration1) {
          this.runningState = 2;
          this.lastTimeFrameChanged = millis();
        }
      }
      if (this.runningState === 2) {
        push();
        imageMode(CENTER);
        image(stickmanRunState2, this.objectX-20, this.objectY-10, 100, 125);
        pop();
        if (millis() > this.lastTimeFrameChanged + this.frameDuration2) {
          this.runningState = 3;
          this.lastTimeFrameChanged = millis();
        }
      }
      if (this.runningState === 3) {
        push();
        imageMode(CENTER);
        image(stickmanRunState3, this.objectX-20, this.objectY-16, 80, 135);
        pop();
        if (millis() > this.lastTimeFrameChanged + this.frameDuration3) {
          this.runningState = 4;
          this.lastTimeFrameChanged = millis();
        }
      }
      if (this.runningState === 4) {
        push();
        imageMode(CENTER);
        image(stickmanRunState4, this.objectX-30, this.objectY-10, 120, 125);
        pop();
        if (millis() > this.lastTimeFrameChanged + this.frameDuration4) {
          this.runningState = 1;
          this.lastTimeFrameChanged = millis();
        }
      }
    }
    else {
      this.stickmanStanding = true;
    }
  }
  newPositionAndSurfaceDetection() {
    this.gravitySpeed += this.gravity;
    this.objectY += this.velocityY + this.gravitySpeed;
    if (this.objectY > 654) {
      this.objectY = 654;
      this.gravitySpeed = 0;
    }
  }
  jump(negativeNumericalValue) {
    if (keyIsDown(38) && this.objectY > 639) { //up arrow
      stickman.gravity = negativeNumericalValue;
    }
    else if (keyIsDown(88) && this.objectY > 639) { //key x
      stickman.gravity = negativeNumericalValue-2;
    }
    else {
      stickman.gravity = 0.8;
    }
  }
}
class CollisionDetection {
  constructor(objectX) {
    this.width = width;
    this.height = height;
    this.objectX = objectX;
    this.objectY = 654;
    this.velocityY = 0;
    this.gravity = 0.3;
    this.gravitySpeed = 0;
  }
  updateDisplay() {
    //fill("grey");
    // Hitbox.
    rect(this.objectX-36, this.objectY-92, 60, 150);
  }
  newPositionAndSurfaceDetection() {
    this.gravitySpeed += this.gravity;
    this.objectY += this.velocityY + this.gravitySpeed;
    if (this.objectY > 654) {
      this.objectY = 654;
      this.gravitySpeed = 0;
    }
  }
  jump(negativeNumericalValue) {
    if (keyIsDown(38) && this.objectY > 639) { //up arrow
      collisionDetector.gravity = negativeNumericalValue;
    }
    else if (keyIsDown(88) && this.objectY > 639) { //key x
      collisionDetector.gravity = negativeNumericalValue-2;
    }
    else {
      collisionDetector.gravity = 0.8;
    }
  }
  obstacles() {
    //Obstacle 1.
    if (obstacleState === 1) {
      this.obstacleOccurance =
      collideRectCircle(this.objectX-36, this.objectY-92, 60, 150, obstacleX, 590, 240);
      fill("grey");
      ellipse(obstacleX, 580, 240);
    }
    //Obstacle 2.
    else if (obstacleState === 2) {
      this.obstacleOccurance =
      collideRectCircle(this.objectX-36, this.objectY-92, 60, 150, obstacleX, 580, 230, 50);
      fill("grey");
      triangle(obstacleX-60, 570, obstacleX-88, 470, obstacleX-116, 570);
      triangle(obstacleX+27, 570, obstacleX-1, 460, obstacleX-29, 570);
      triangle(obstacleX+117, 570, obstacleX+89, 470, obstacleX+61, 570);
      push();
      fill("black");
      rectMode(CENTER);
      rect(obstacleX, 580, 240, 50);
      pop();
      fill(0);
      rect(obstacleX-120, 605, 40, 100);
      rect(obstacleX-20, 605, 40, 100);
      rect(obstacleX+80, 605, 40, 100);
    }
    //Obstacle 3.
    else if (obstacleState === 3) {
      this.obstacleOccurance =
      collideRectRect(this.objectX-36, this.objectY-92, 60, 150, obstacleX-150, 655, 300, 100);
      this.obstacleOccurance3 =
      collideRectRect(this.objectX-36, this.objectY-92, 60, 150, obstacleX-200, 290, 400, 100);
      fill(0);
      rect(obstacleX-200, 315, 400, 100);
      fill("red");
      rect(obstacleX-150, 655, 300, 100);
      push();
      imageMode(CENTER);
      image(lavaImage, obstacleX, 700, 300, 90);
      pop();
      fill(0);
      rect(obstacleX-200, 655, 50, 90);
      rect(obstacleX+150, 655, 50, 90);
    }
    // Obstacle 4.
    else if (obstacleState === 4) {
      this.obstacleOccurance =
      collideRectRect(this.objectX-36, this.objectY-92, 60, 150, obstacleX, 500, 500, 20);
      push();
      translate(obstacleX, 400);
      rotate(millis() / 100);
      fill(0);
      rectMode(CENTER);
      rect(0, 0, 300, 20);
      pop();
      push();
      fill(0);
      rect(obstacleX-20, 400, 40, 700);
      fill("red");
      ellipseMode(CENTER);
      ellipse(obstacleX, 400, 40);
      pop();
    }
    if (keyIsDown(39)) {
      obstacleX -= obstacleSpeed;
      if (score > highScore) {
        setHighScore();
        highScore = score;
      }
      if (frameCount % 5 === 0) {
        score ++;
      }
    }
    if (obstacleX <= -120) {
      obstacleX = windowWidth;
      obstacleState = obstacleStateArray[Math.floor(Math.random() * obstacleStateArray.length)];
    }
    if (this.obstacleOccurance || this.obstacleOccurance3) {
      gameState = 3;
    }
  }
}
