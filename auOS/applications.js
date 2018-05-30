// #############################################################################
// Applications.

function settings() {
  // Window setup and design.
  background(55, 60, 86, 20);
  closeWindowButton.displayer();
  image(closeWindowPic, windowWidth-73, -5, 80, 80);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(50);
  textFont("verdana");
  text("Settings", windowWidth/2, 60);
  // Columns.
  fill(0, 30);
  push();
  rectMode(CENTER);
  rect(windowWidth/2-410, windowHeight/2+50, 400, 650);
  rect(windowWidth/2, windowHeight/2+50, 400, 650);
  rect(windowWidth/2+410, windowHeight/2+50, 400, 650);
  pop();
  // Content.
}
