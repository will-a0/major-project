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
  textSize(50);
  // Aestetic Add ons.
  fill(102, 0, 51);
  rect(windowWidth/2-580, windowHeight/2-340, windowWidth/2+530, 90);
  rect(windowWidth/2-580, windowHeight/2+80, windowWidth/2+530, 90);
  // Title one.
  fill(255);
  text("Old Classics", windowWidth/2, windowHeight/2-300);
  // Title two.
  text("Personal Creation", windowWidth/2, windowHeight/2+125);
  // Song titles.
  textSize(26);
  // Song one.
  fill(218, 165, 32);
  text("Introduction - Chicago (1969) - ", windowWidth/2-250, windowHeight/2-195);
  fill(255);
  text("1", windowWidth/2-570, windowHeight/2-195);
  // Song one duration.
  text("Duration: " + round(song1.duration()) + "s - ", windowWidth/2+80, windowHeight/2-195);
  // Song one current time.
  text("Current: " + round(song1.currentTime()) + "s", windowWidth/2+290, windowHeight/2-195);
  // Song two.
  fill(218, 165, 32);
  text("September - Earth, Wind & Fire (1978) - ", windowWidth/2-190, windowHeight/2-85);
  fill(255);
  text("2", windowWidth/2-570, windowHeight/2-85);
  // Song two duration.
  text("Duration: " + round(song2.duration()) + "s - ", windowWidth/2+200, windowHeight/2-85);
  // Song two current time.
  text("Current: " + round(song2.currentTime()) + "s", windowWidth/2+410, windowHeight/2-85);
  // Song three.
  fill(218, 165, 32);
  text("O-o-h Child - The Five Stairsteps (1970) - ", windowWidth/2-185, windowHeight/2+25);
  fill(255);
  text("3", windowWidth/2-570, windowHeight/2+25);
  // Song three duration.
  text("Duration: " + round(song3.duration()) + "s - ", windowWidth/2+215, windowHeight/2+25);
  // Song three current time.
  text("Current: " + round(song3.currentTime()) + "s", windowWidth/2+425, windowHeight/2+25);
  // Song four.
  fill(218, 165, 32);
  text("Entry II - William Ahiahonu (2018) - ", windowWidth/2-220, windowHeight/2+230);
  fill(255);
  text("4", windowWidth/2-570, windowHeight/2+230);
  // Song four duration.
  text("Duration: " + round(song4.duration()) + "s - ", windowWidth/2+145, windowHeight/2+230);
  // Song four current time.
  text("Current: " + round(song4.currentTime()) + "s", windowWidth/2+355, windowHeight/2+230);
  // Instructions.
  textSize(23);
  fill(102, 0, 51);
  rect(0, windowHeight/2+300, windowWidth, windowHeight);
  fill(255);
  text("Volume: key '1' - decrease, key '2' - increase", windowWidth/2, windowHeight/2+325);
  text("Press play buttons to play (or 'p'), 'l (L)' to pause, 's' to stop and reset", windowWidth/2, windowHeight/2+375);
  // Song one.
  song1Button = new Button(windowWidth/2-550, windowHeight/2-240, 80, 80, 102, 0, 51);
  song1Button.displayer();
  image(playButtonImage, windowWidth/2-550, windowHeight/2-240, 80, 80);
  // Song two.
  song2Button = new Button(windowWidth/2-550, windowHeight/2-130, 80, 80, 102, 0, 51);
  song2Button.displayer();
  image(playButtonImage, windowWidth/2-550, windowHeight/2-130, 80, 80);
  // Song three.
  song3Button = new Button(windowWidth/2-550, windowHeight/2-20, 80, 80, 102, 0, 51);
  song3Button.displayer();
  image(playButtonImage, windowWidth/2-550, windowHeight/2-20, 80, 80);
  // Song four.
  song4Button = new Button(windowWidth/2-550, windowHeight/2+185, 80, 80, 102, 0, 51);
  song4Button.displayer();
  image(playButtonImage, windowWidth/2-550, windowHeight/2+185, 80, 80);
}

function keyboardShortcuts() {
  fill(0, 10);
  rect(0, 0, windowWidth, windowHeight);
  push();
  fill(255);
  rectMode(CENTER);
  rect(windowWidth/2, windowHeight/2, 800, 600);
  pop();
  fill(0);
  textSize(30);
  textFont("verdana");
  text("Keyboard Shortcuts", windowWidth/2, windowHeight/2-257);
  textSize(25);
  // General section.
  rect(windowWidth/2-400, windowHeight/2-220, 800, 60);
  fill(255);
  text("General Shortcuts", windowWidth/2, windowHeight/2-190);
  // Volume shortcut.
  fill(0);
  text("Volume: Key '1' - Decrease | Key '2' - Increase", windowWidth/2, windowHeight/2-130);
  // Brightness shortcut.
  text("Brightness: Key '3' - Decrease | Key '4' - Increase", windowWidth/2, windowHeight/2-70);
  // Music section.
  rect(windowWidth/2-400, windowHeight/2-40, 800, 60);
  fill(255);
  text("Music Shortcuts", windowWidth/2, windowHeight/2-10);
  // Play, pause and stop shortcuts.
  fill(0);
  text("Key 'p' - Play | Key 'l (L)' - Pause | Key 's' - Stop", windowWidth/2, windowHeight/2+50);
  // Other music shortcuts that are avaliable only out of the music app and game.
  fill(240, 240, 240);
  rect(windowWidth/2-400, windowHeight/2+80, 800, 60);
  fill(0);
  text("Only avaliable outside of the music app and game:", windowWidth/2, windowHeight/2+110);
  textSize(22);
  text("Key '5+p' - Song 1 | Key '6+p' - Song 2", windowWidth/2-165, windowHeight/2+177);
  text("Key '7+p' - Song 3 | Key '8+p' - Song 4", windowWidth/2-165, windowHeight/2+217);
  // Elaboration on how to use the combination above.
  fill(220, 220, 220);
  rect(windowWidth/2+85, windowHeight/2+150, 300, 100);
  fill(0);
  text("Press desired key first,", windowWidth/2+235, windowHeight/2+177);
  text("then 'p' to play", windowWidth/2+235, windowHeight/2+217);
  // Close the window.
  textSize(20);
  fill(220, 220, 220);
  rect(windowWidth/2-393, windowHeight/2+261, 120, 30);
  fill(0);
  text("X - Close", windowWidth/2-335, windowHeight/2+275);
}
