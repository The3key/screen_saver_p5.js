var cx = prompt("whats your width?");
var cy = prompt("whats your hight?");
var floppymode = prompt("do you want to have a sesure?")
var eb = 10
var x = 1;
var xvol = 4;
var y = 1;
var yvol = 4;
var bounce = 0;
function setup() {
  createCanvas(cx, cy);
}

function draw() {
  
  if(floppymode == 'yes'||floppymode == 'Yes'||floppymode == 'sure'){
    background(Math.floor(Math.random()*300),Math.floor(Math.random()*300),Math.floor(Math.random()*300))
  }
  background(200)
  if(x <= 0){
    xvol -= xvol*2;
    bounce += 1;
    fill(Math.floor(Math.random()*300),Math.floor(Math.random()*300),Math.floor(Math.random()*300))
  }
  if(y <= 0){
    yvol -= yvol*2;
    bounce += 1; fill(Math.floor(Math.random()*300),Math.floor(Math.random()*300),Math.floor(Math.random()*300))
  }
  if(x >= cx - 40){
    xvol -= xvol*2;
    bounce += 1;
 fill(Math.floor(Math.random()*300),Math.floor(Math.random()*300),Math.floor(Math.random()*300))
  }
  if(y >= cy - 40){
    yvol -= yvol*2;
    bounce += 1;
 fill(Math.floor(Math.random()*300),Math.floor(Math.random()*300),Math.floor(Math.random()*300))
  }
  square(x,y,40);
  x += xvol;
  y += yvol;
  var checkx = false
  var checky = false
  if(bounce == eb&&cx > cy&&checky == false&&checkx == false){
    eb += 10
    xvol -= 2
    yvol -= 2
    checky = true
  }
  if(bounce == eb&&cx < cy&&checky == false&&checkx == false){
    eb += 10
    xvol += 2
    yvol += 2
    checky = true
  }
  if(checkx == true&&bounce == eb){
    xvol -= 2
    yvol -= 2
  } 
  if(checky == true&&bounce == eb){
    xvol += 2
    yvol += 2
  }
  c = text(bounce,cx -(cx/1.8),cy-(cy/2));
  noStroke(c)
  textSize(cx + cy/2);
  if(xvol == 0&&yvol==0){
    xvol += 4
    yvol += 4
  }
}
