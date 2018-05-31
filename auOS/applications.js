// #############################################################################
// Applications.

function settings() {
  // Window setup and design.
  background(55, 60, 86, 20);
  closeWindowButton = new Button(windowWidth-65, 0, 70, 70, 55, 60, 86, 102, 0, 51);
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
  // Column two.
  fill(0, 30);
  rect(windowWidth/2, windowHeight/2+50, 400, 650);
  // Column two title.
  fill(255);
  text("Wallpapers (Press Key A, B, or C)", windowWidth/2, windowHeight/2-310);
  // Column three.
  fill(0, 30);
  rect(windowWidth/2+410, windowHeight/2+50, 400, 650);
  // Colomn three title.
  fill(255);
  pop();
  // Content.
  // Middle column - wallpaper images.
  push();
  fill(255);
  textSize(30);
  imageMode(CENTER);
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
  pop();

  // Wallpaper Colour Options.
  //128, 0, 32 - Default.
  // - Buttons - 51, 0, 25.
  //0, 54, 142 - 2nd option.
  // - Buttons - 0, 21, 56.
  //188, 103, 0 - 3rd option.
  // - Buttons - 71, 39, 0.
}
