// #############################################################################
// Applications.

function settings() {
  // Window setup and design.
  background(55+brightnessLevel, 60+brightnessLevel, 86+brightnessLevel, 20);
  closeWindowButton.displayer();
  image(closeWindowPic, windowWidth-73, -5, 80, 80);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(40);
  textFont("verdana");
  text("Settings", windowWidth-160, 30);
  // Columns.
  push();
  textSize(23);
  rectMode(CENTER);
  // Column one.
  fill(0, 30);
  rect(windowWidth/2-410, windowHeight/2+50, 400, 650);
  // Column one title.
  fill(255);
  text("General", windowWidth/2-410, windowHeight/2-310);
  // Column two.
  fill(0, 30);
  rect(windowWidth/2, windowHeight/2+50, 400, 650);
  // Column two and three title.
  fill(255);
  text("Wallpapers (Press Key A, B, C, D, E or G)", windowWidth/2+200, windowHeight/2-310);
  // Column three.
  fill(0, 30);
  rect(windowWidth/2+410, windowHeight/2+50, 400, 650);
  pop();
  // Content.
  // 1st column - general - sound and brightness.
  // Sound section.
  push();
  fill(255);
  textSize(25);
  textAlign(CENTER, CENTER);
  text("Volume (Press Key 1 or 2)", windowWidth/2-410, windowHeight/2-150);
  rectMode(CENTER);
  rect(windowWidth/2-410, windowHeight/2-50, 340, 15);
  fill(255, 188, 0);
  // Max area.
  rect(windowWidth/2-230, windowHeight/2-50, 20, 15);
  // Min area.
  fill(220, 20, 60);
  rect(windowWidth/2-575, windowHeight/2-50, 20, 15);
  // Default position - For default volume level.
  fill(30, 144, 255);
  rect(windowWidth/2-450, windowHeight/2-75, 15, 20);
  fill(255);
  textSize(20);
  text("Default", windowWidth/2-450, windowHeight/2-20);
  // Tick mark.
  fill(255);
  rect(tickMarkXPosition, windowHeight/2-75, 20, 20);
  pop();
  // Brightness section.
  push();
  fill(255);
  textSize(25);
  textAlign(CENTER, CENTER);
  text("Brightness (Press Key 3 or 4)", windowWidth/2-410, windowHeight/2+50);
  rectMode(CENTER);
  rect(windowWidth/2-410, windowHeight/2+150, 340, 15);
  fill(255, 188, 0);
  // Max area.
  rect(windowWidth/2-230, windowHeight/2+150, 20, 15);
  // Min area.
  fill(220, 20, 60);
  rect(windowWidth/2-575, windowHeight/2+150, 20, 15);
  // Default position - For default brightness level.
  fill(30, 144, 255);
  rect(windowWidth/2-450, windowHeight/2+125, 15, 20);
  fill(255);
  textSize(20);
  text("Default", windowWidth/2-450, windowHeight/2+180);
  // 2nd Tick mark.
  fill(255);
  rect(tickMark2XPosition, windowHeight/2+125, 20, 20);
  pop();
  // 2nd and 3rd columns - wallpaper images.
  push();
  fill(255);
  textSize(30);
  imageMode(CENTER);
  // Wallpaper check.
  image(wallpaperCheck, checkMarkPositionX, checkMarkPositionY, 80, 80);
  // Option one display.
  image(backgroundPic1, windowWidth/2-60, windowHeight/2-150, 260, 180);
  // Option one key display.
  text("Option", windowWidth/2+135, windowHeight/2-180);
  text("A", windowWidth/2+135, windowHeight/2-130);
  // Option two display.
  image(backgroundPic2, windowWidth/2-60, windowHeight/2+50, 260, 180);
  // Option two key display.
  text("Option", windowWidth/2+135, windowHeight/2+20);
  text("B", windowWidth/2+135, windowHeight/2+70);
  // Option three display.
  image(backgroundPic3, windowWidth/2-60, windowHeight/2+250, 260, 180);
  // Option three key display.
  text("Option", windowWidth/2+135, windowHeight/2+220);
  text("C", windowWidth/2+135, windowHeight/2+270);
  // Option four display.
  image(backgroundPic4, windowWidth/2+350, windowHeight/2-150, 260, 180);
  // Option four key display.
  text("Option", windowWidth/2+545, windowHeight/2-180);
  text("D", windowWidth/2+545, windowHeight/2-130);
  // Option five display.
  image(backgroundPic5, windowWidth/2+350, windowHeight/2+50, 260, 180);
  // Option five key display.
  text("Option", windowWidth/2+545, windowHeight/2+20);
  text("E", windowWidth/2+545, windowHeight/2+70);
  // Option six display.
  image(backgroundPic6, windowWidth/2+350, windowHeight/2+250, 260, 180);
  // Option six key display.
  text("Option", windowWidth/2+545, windowHeight/2+220);
  text("G", windowWidth/2+545, windowHeight/2+270);
  pop();
}

function musicApp() {
  background(0, 30);
  closeWindowButton.displayer();
  image(closeWindowPic, windowWidth-73, -5, 80, 80);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(40);
  textFont("verdana");
  text("Music", windowWidth-140, 30);
  song1Button = new Button(windowWidth/2, windowHeight/2, 90, 90, 102, 0, 51);
  song1Button.displayer();
  image(playButtonImage, windowWidth/2, windowHeight/2, 90, 90);
}
