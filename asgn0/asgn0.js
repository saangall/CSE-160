// DrawTriangle.js (c) 2012 matsuda
function main() {  
  // Retrieve <canvas> element
  var canvas = document.getElementById('example');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 

  // Get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');

  // Draw a blue rectangle
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set color to blue
  ctx.fillRect(0, 0, canvas.width, canvas.height);        // Fill a rectangle with the color
}

function handleDrawEvent(){
  main();
  let v1x = document.getElementById('vector1x').value;
  let v1y = document.getElementById('vector1y').value;
  let v1 = new Vector3([v1x, v1y, 0]);
  //let v1 = new Vector3([2.5, 2.5, 0]);
  console.log("Yooooo");
  drawVector(v1, 'red');

  let v2x = document.getElementById('vector2x').value;
  let v2y = document.getElementById('vector2y').value;
  let v2 = new Vector3([v2x, v2y, 0]);
  console.log("Sup");
  drawVector(v2, 'blue');
}

function drawVector(v, color){
  var canvas = document.getElementById('example');
  var ctx = canvas.getContext('2d');
  ctx.strokeStyle = color;
  let cx = canvas.width/2;
  let cy = canvas.height/2;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(cx + (v.elements[0] * 20), cy - (v.elements[1] * 20));
  ctx.stroke();
}
