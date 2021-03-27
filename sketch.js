function setup() {
  var mx = 2;
  createCanvas(210 * mx, 297 * mx, SVG);
  background(255);
  noFill();
  stroke(150);
  strokeWeight(0.25)
  var centerX = width * 0.5;
  var centerY = height * 0.5;
  var count = 200;
  
  for(var j = 0; j < count; j++) {
    var jr = j / count
    var rX = jr * centerX
    var rY = jr * centerY
    beginShape();
    for(var i = 0; i < count; i++) {
      var ir = i / count
      var offset = .5 * noise(
        1.2 * sin(TAU * ir), 
        1.024 * sin(TAU * jr)
      )
      vertex(
        centerX + rX * (1 + offset) * cos( TAU * ir),
        centerY + rY * (1 + offset) * sin( TAU * ir)
      )
    }
    endShape(CLOSE);
  }
  // save()
}