// ColoredPoint.js (c) 2012 matsuda
// Vertex shader program
var VSHADER_SOURCE = `
  precision mediump float;
  attribute vec4 a_Position;
  attribute vec2 a_UV;
  varying vec2 v_UV;
  uniform mat4 u_ModelMatrix;
  uniform mat4 u_GlobalRotateMatrix;
  uniform mat4 u_ViewMatrix;
  uniform mat4 u_ProjectionMatrix;
  void main() {
    gl_Position = u_ProjectionMatrix * u_ViewMatrix * u_GlobalRotateMatrix * u_ModelMatrix * a_Position;
    v_UV = a_UV;
    // /u_ProjectionMatrix * u_ViewMatrix * 
  }`

// Fragment shader program
var FSHADER_SOURCE = `
  precision mediump float;
  varying vec2 v_UV;
  uniform vec4 u_FragColor;
  uniform sampler2D u_Sampler0;
  uniform int u_whichTexture;
  void main() {
  if(u_whichTexture == -2){
    gl_FragColor = u_FragColor;
    }
  else if(u_whichTexture == -1){
    gl_FragColor = vec4(v_UV, 1.0, 1.0);
    }
  else if(u_whichTexture == 0){
    gl_FragColor = texture2D(u_Sampler0, v_UV);
    }
  else{
    gl_FragColor = vec4(1,.2,.2,1);
    }
  } `

// Global Variables
let canvas;
let gl;
let a_Position;
let a_UV;
let u_FragColor;
let u_ModelMatrix;
let u_ProjectionMatrix;
let u_ViewMatrix;
let u_GlobalRotateMatrix;
let u_Sampler0;
let u_whichTexture;

function setupWebGL(){
  canvas = document.getElementById('webgl');

  // Get the rendering context for WebGL
  //gl = getWebGLContext(canvas);
  gl = canvas.getContext("webgl", {preserveDrawingBuffer: true});
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }
  gl.enable(gl.DEPTH_TEST);
}

function connectVariablesToGLSL(){
   if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to intialize shaders.');
    return;
  }

  // // Get the storage location of a_Position
  a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if (a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return;
  }

  a_UV = gl.getAttribLocation(gl.program, 'a_UV');
  if (a_Position < 0) {
    console.log('Failed to get the storage location of a_UV');
    return;
  }

  // Get the storage location of u_FragColor
  u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
  if (!u_FragColor) {
    console.log('Failed to get the storage location of u_FragColor');
    return;
  }

  u_Sampler0 = gl.getUniformLocation(gl.program, 'u_Sampler0');
  u_whichTexture = gl.getUniformLocation(gl.program, 'u_whichTexture');

  u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');
  if (!u_ModelMatrix) {
    console.log('Failed to get the storage location of u_ModelMatrix');
    return;
  }

  u_ViewMatrix = gl.getUniformLocation(gl.program, 'u_ViewMatrix');
  if (!u_ModelMatrix) {
    console.log('Failed to get the storage location of u_ViewMatrix');
    return;
  }

  u_ProjectionMatrix = gl.getUniformLocation(gl.program, 'u_ProjectionMatrix');
  if (!u_ModelMatrix) {
    console.log('Failed to get the storage location of u_ProjectionMatrix');
    return;
  }

  u_GlobalRotateMatrix = gl.getUniformLocation(gl.program, 'u_GlobalRotateMatrix');
  if (!u_GlobalRotateMatrix) {
    console.log('Failed to get the storage location of u_GlobalRotateMatrix');
    return;
  }

  /*var identityM = new Matrix4();
  gl.uniformMatrix4fv(u_ModelMatrix, false, identityM.elements);*/
}

function initTextures(){


var image = new Image(); // Create an image object

// Register the event handler to be called on loading an image
image.onload = function(){ loadTexture(image); };
//Tell the browser to load an image
image.src = 'Mario.png';

return true;
}

function loadTexture(image){ 
var texture = gl.createTexture(); 
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1); // Flip the image's y axis
// Enable the texture unit 0
gl.activeTexture(gl.TEXTURE0);
// Bind the texture object to the target
gl.bindTexture(gl.TEXTURE_2D, texture);

// Set the texture parameters
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
// Set the texture image
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);

// Set the texture unit 0 to the sampler
gl.uniform1i(u_Sampler0, 0);

//gl.drawArrays(gl.TRIANGLE_STRIP, 0, n); // Draw a rectangle
}

const POINT = 0;
const TRIANGLE = 1;
const CIRCLE = 2;

let g_selectedColor = [1.0, 1.0, 1.0, 1.0];
//let g_selectSize = 10.0;
let g_selectSegment = 10;
let g_selectedType =POINT;
let snap = document.getElementById('snapButton');
let g_snap = false;
let g_erase = false;
let g_selectedAngle = 0;
let g_LeftArmRotate = 0;
let g_LeftPawRotate = -3.5;
let g_RightArmRotate = 0;
let g_RightPawRotate = -3.5;
let g_LeftThighRotate = 0;
let g_RightThighRotate = 0;
let g_LeftFootRotate = 0;
let g_RightFootRotate = 0;
let g_Animation = false;
let g_GlobalAngleX = 0;
let g_GlobalAngleY = 0;
let g_Poke = false;
let g_PokeStartTime = 0;
function addFunctionForHtmlUI(){
  /*document.getElementById('red').onclick = function() {g_selectedColor = [1.0, 0.0, 0.0, 1.0];};
  document.getElementById('green').onclick = function() {g_selectedColor = [0.0, 1.0, 0.0, 1.0];};
  document.getElementById('pointButton').onclick = function() {g_selectedType = POINT; g_erase = false;};
  document.getElementById('triangleButton').onclick = function() {g_selectedType = TRIANGLE; g_erase = false;};
  document.getElementById('circleButton').onclick = function () {g_selectedType = CIRCLE; g_erase = false;};
  document.getElementById('snapButton').onclick = function() {
    if(g_snap == false){
      snap.style.backgroundColor = "green";
      g_snap = true;
    }
    else{
      snap.style.backgroundColor = "red";
      g_snap = false;
    }
  };

  document.getElementById('eraseButton').onclick = function () {g_erase = true;};

  document.getElementById('redSlide').addEventListener('mouseup', function() {g_selectedColor[0] = this.value/100;});
  document.getElementById('greenSlide').addEventListener('mouseup', function() {g_selectedColor[1] = this.value/100;});
  document.getElementById('blueSlide').addEventListener('mouseup', function() {g_selectedColor[2] = this.value/100;});
  document.getElementById('clear').onclick = function() {g_shapeList = []; renderAllShapes();};*/
  document.getElementById('animationOn').onclick = function() {g_Animation = true;};
  document.getElementById('animationOff').onclick = function() {g_Animation = false;};

  document.getElementById('leftArmSlide').addEventListener('mousemove', function() {g_LeftArmRotate = this.value; renderAllShapes();});
  document.getElementById('leftPawSlide').addEventListener('mousemove', function() {g_LeftPawRotate = this.value; renderAllShapes();});
  document.getElementById('rightArmSlide').addEventListener('mousemove', function() {g_RightArmRotate = this.value; renderAllShapes();});
  document.getElementById('rightPawSlide').addEventListener('mousemove', function() {g_RightPawRotate = this.value; renderAllShapes();});
  document.getElementById('leftThighSlide').addEventListener('mousemove', function() {g_LeftThighRotate = this.value; renderAllShapes();});
  document.getElementById('rightThighSlide').addEventListener('mousemove', function() {g_RightThighRotate = this.value; renderAllShapes();});
  document.getElementById('leftFootSlide').addEventListener('mousemove', function() {g_LeftFootRotate = this.value; renderAllShapes();});
  document.getElementById('rightFootSlide').addEventListener('mousemove', function() {g_RightFootRotate = this.value; renderAllShapes();});

  document.getElementById('angleSlide').addEventListener('mousemove', function() {g_selectedAngle = this.value; renderAllShapes();});

}

let camera= new Camera();;
function main() {
  // Retrieve <canvas> element
  
  setupWebGL();

  connectVariablesToGLSL();

  addFunctionForHtmlUI();

  // Register function (event handler) to be called on a mouse press
  canvas.onmousedown = click;

  canvas.onmousemove = function (ev) {
  if (ev.buttons == 1) {  // left mouse held
    let [x, y] = convertCoordinatesEventToGL(ev);

    g_GlobalAngleY = x * 180;   // horizontal movement → Y rotation
    g_GlobalAngleX = y * 180;   // vertical movement → X rotation

    renderAllShapes();
  }
  };

  canvas.onmouseup = function () {prevx = null; prevy = null;};

  document.onkeydown = keydown;

  initTextures();

  // Specify the color for clearing <canvas>
  gl.clearColor(0.0, 0.0, 1.0, 1.0);

  // Clear <canvas>
  //gl.clear(gl.COLOR_BUFFER_BIT);

  //renderAllShapes();
  requestAnimationFrame(tick);
}

var g_startTime = performance.now()/1000;
var g_seconds = performance.now()/1000 - g_startTime;

function tick(){
  g_seconds = performance.now()/1000 - g_startTime;

  updateAnimationAngles();

  renderAllShapes();

  requestAnimationFrame(tick);
}

let g_pokeOffsetY = 0;
let g_pokeSpin = 0;

function updateAnimationAngles(){
  if(g_Animation){
    g_LeftArmRotate = 30*Math.sin(g_seconds);
    g_RightArmRotate = 30*Math.sin(g_seconds + Math.PI);
    g_LeftPawRotate = -10*Math.sin(g_seconds);
    g_RightPawRotate = -10*Math.sin(g_seconds + Math.PI);
    g_LeftThighRotate = 30*Math.sin(g_seconds - 0.2);
    g_RightThighRotate = 30*Math.sin(g_seconds + Math.PI - 0.2);
    g_LeftFootRotate = -10*Math.sin(g_seconds - 0.2);
    g_RightFootRotate = -10*Math.sin(g_seconds + Math.PI - 0.2);
  }
  if (g_Poke) {
    let t = g_seconds - g_PokeStartTime;

    // upward motion (slow float)
    g_pokeOffsetY = t * 0.2;  

    // vertical spin (Y axis)
    g_pokeSpin = t * 180;  

    // stop after 2 seconds (optional)
    if (t > 2) {
      g_Poke = false;
      g_pokeOffsetY = 0;
      g_pokeSpin = 0;
    }
  }
}


var g_shapeList = [];
/*var g_points = [];  // The array for the position of a mouse press
var g_colors = [];  // The array to store the color of a point
var g_sizes = [];*/

function clearCanvas(){
  g_shapeList = [];
  renderAllShapes();
}

const threshold = 0.043;

function click(ev) {

  let [x,y] = convertCoordinatesEventToGL(ev); 

  if (ev.shiftKey) {
    g_Poke = true;
    g_PokeStartTime = g_seconds; // start timer
    return;
  }
  
  if(g_erase == true){
    for(let i = g_shapeList.length-1; i>=0; i--){
      let shape = g_shapeList[i]
      let dx = shape.position[0] - x;
      let dy = shape.position[1] - y;

      let dis = Math.sqrt(dx*dx + dy*dy);

      if(dis<=threshold){
        g_shapeList.splice(i,1);
      }
    }
    
  }
  

  // Store the coordinates to g_points array
  /*g_points.push([x, y]);
  g_colors.push([g_selectedColor[0], g_selectedColor[1], g_selectedColor[2], g_selectedColor[3]]);
  g_sizes.push(g_selectSize);*/
  // Store the coordinates to g_points array
  /*if (x >= 0.0 && y >= 0.0) {      // First quadrant
    g_colors.push([1.0, 0.0, 0.0, 1.0]);  // Red
  } else if (x < 0.0 && y < 0.0) { // Third quadrant
    g_colors.push([0.0, 1.0, 0.0, 1.0]);  // Green
  } else {                         // Others
    g_colors.push([1.0, 1.0, 1.0, 1.0]);  // White
  }*/
  renderAllShapes();
}

function convertCoordinatesEventToGL(ev){
  var x = ev.clientX; // x coordinate of a mouse pointer
  var y = ev.clientY; // y coordinate of a mouse pointer
  var rect = ev.target.getBoundingClientRect();

  x = ((x - rect.left) - canvas.width/2)/(canvas.width/2);
  y = (canvas.height/2 - (y - rect.top))/(canvas.height/2);

  return([x,y]);
}

function keydown(ev){
  if(ev.keyCode == 65){
    camera.left();
  }

  else if(ev.keyCode == 68){
    camera.right();
  }

  else if(ev.keyCode == 87){
    console.log(g_eye);
    camera.forward();
  }

  else if(ev.keyCode == 83){
    camera.back();
  }

  else if(ev.keyCode == 81){
    camera.panLeft();
  }
  else if(ev.keyCode == 69){
    camera.panRight();
  }
}

let g_eye = [camera.eye.elements[0], camera.eye.elements[1], camera.eye.elements[2]];
let g_at = [camera.at.elements[0], camera.at.elements[1], camera.at.elements[2]];
let g_up = [camera.up.elements[0], camera.up.elements[1], camera.up.elements[2]];


function renderAllShapes(){
  var baseMatrix = new Matrix4();

// apply poke animation
  baseMatrix.translate(0, g_pokeOffsetY, 0);
  baseMatrix.rotate(g_pokeSpin, 0, 1, 0);
  let startTime = performance.now();
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  var projMat = new Matrix4();
  projMat.setPerspective(50, canvas.width/canvas.height, .1, 100);
  gl.uniformMatrix4fv(u_ProjectionMatrix, false, projMat.elements);

  var viewMat = new Matrix4();
  viewMat.setLookAt(camera.eye.elements[0], camera.eye.elements[1], camera.eye.elements[2],
  camera.at.elements[0], camera.at.elements[1], camera.at.elements[2],
  camera.up.elements[0], camera.up.elements[1], camera.up.elements[2]);
  gl.uniformMatrix4fv(u_ViewMatrix, false, viewMat.elements);

  var globalRotMat = new Matrix4()
  globalRotMat.rotate(g_GlobalAngleY, 0, 1, 0); // left/right
  globalRotMat.rotate(g_GlobalAngleX, 1, 0, 0); // up/down
  gl.uniformMatrix4fv(u_GlobalRotateMatrix, false, globalRotMat.elements);

  var body = new Cube();
  body.matrix = new Matrix4(baseMatrix)
  body.color = [0.83,0.64,0.33,1.0];
  body.matrix.translate(-.25,-.25,0.6);
  body.matrix.rotate(-90,1,0,0);
  body.matrix.scale(0.45,1,.45);
  body.render();

  var tail = new Cylinder(20);
  tail.matrix = new Matrix4(baseMatrix)
  tail.color = [0.83,0.64,0.33,1.0];
  tail.matrix.translate(-.0,-.4,1.05);
  tail.matrix.rotate(-45,1,0,0);
  tail.matrix.scale(0.05,0.7,.05);
  tail.render();

  var tailEnd = new Cube();
  tailEnd.matrix = new Matrix4(baseMatrix);
  tailEnd.color = [0.0,0.0,0.0,1.0];
  tailEnd.matrix.translate(-.05,-.5,1.1);
  tailEnd.matrix.rotate(-45,1,0,0);
  tailEnd.matrix.scale(0.1,0.1,.1);
  tailEnd.render();

  var leftShoulder = new Cube();
  leftShoulder.matrix = new Matrix4(baseMatrix);
  leftShoulder.color = [0.8,0.6,0.33,1.0];
  leftShoulder.matrix.translate(0.0,-0.35,-0.46);
  leftShoulder.matrix.rotate(g_LeftArmRotate/10,1,0,0);
  //leftShoulder.matrix.rotate(30*Math.sin(g_seconds)/10,1,0,0);
  leftShoulder.matrix.scale(0.23,.23,.23);
  leftShoulder.render();

  var rightShoulder = new Cube();
  rightShoulder.matrix = new Matrix4(baseMatrix);
  rightShoulder.color = [0.8,0.6,0.33,1.0];
  rightShoulder.matrix.translate(-0.3,-0.35,-0.46);
  rightShoulder.matrix.rotate(g_RightArmRotate/10,1,0,0);
  //rightShoulder.matrix.rotate(30*Math.sin(g_seconds + Math.PI)/10,1,0,0);
  rightShoulder.matrix.scale(0.23,.23,.23);
  rightShoulder.render();

  var leftArm = new Cube();
  leftArm.matrix = new Matrix4(baseMatrix);
  leftArm.color = [0.8,0.6,0.33,1.0];
  leftArm.matrix.translate(0.0,-0.3,-0.17);
  leftArm.matrix.rotate(g_LeftArmRotate,1,0,0);
  //leftArm.matrix.rotate(30*Math.sin(g_seconds),1,0,0);
  leftArm.matrix.rotate(170,-1,0,0);
  var leftArmJoint = new Matrix4(leftArm.matrix);
  leftArm.matrix.scale(0.23,0.55,.23);
  leftArm.render();

  var rightArm = new Cube();
  rightArm.matrix = new Matrix4(baseMatrix);
  rightArm.color = [0.8,0.6,0.33,1.0];
  rightArm.matrix.translate(-0.3,-0.3,-0.17);
  rightArm.matrix.rotate(g_RightArmRotate,1,0,0);
  //rightArm.matrix.rotate(30*Math.sin(g_seconds + Math.PI),1,0,0);
  rightArm.matrix.rotate(170,-1,0,0);
  var rightArmJoint = new Matrix4(rightArm.matrix);
  rightArm.matrix.scale(0.23,0.55,.23);
  rightArm.render();

  var leftPaw = new Cube();
  leftPaw.color = [0.8,0.6,0.33,1.0];
  leftPaw.matrix = new Matrix4(leftArmJoint);
  leftPaw.matrix.translate(0.0,0.54,0.05);
  leftPaw.matrix.rotate(g_LeftPawRotate,1,0,0);
  //leftPaw.matrix.rotate(-10*Math.sin(g_seconds),1,0,0);
  leftPaw.matrix.scale(0.23,0.12,0.23);
  leftPaw.render();

  var rightPaw = new Cube();
  rightPaw.color = [0.8,0.6,0.33,1.0];
  rightPaw.matrix = new Matrix4(rightArmJoint);
  rightPaw.matrix.translate(0.0,0.54,0.05);
  rightPaw.matrix.rotate(g_RightPawRotate,1,0,0);
  //rightPaw.matrix.rotate(-10*Math.sin(g_seconds + Math.PI),1,0,0);
  rightPaw.matrix.scale(0.23,0.12,0.23);
  rightPaw.render();

  var leftThigh = new Cube();
  leftThigh.matrix = new Matrix4(baseMatrix);
  leftThigh.color = [0.8,0.6,0.33,1.0];
  leftThigh.matrix.translate(-0.03,-0.15,0.55);
  leftThigh.matrix.rotate(g_LeftThighRotate,1,0,0);
  //leftThigh.matrix.rotate(30*Math.sin(g_seconds -0.2),1,0,0);
  leftThigh.matrix.rotate(200,-1,0,0);
  var leftThighJoint = new Matrix4(leftThigh.matrix);
  leftThigh.matrix.scale(0.26,0.402,.26);
  leftThigh.render();

  var leftLeg = new Cube();
  leftLeg.color = [0.8,0.6,0.33,1.0];
  leftLeg.matrix = new Matrix4(leftThighJoint);
  leftLeg.matrix.translate(0.05,0.3,-0.0);
  leftLeg.matrix.rotate(15,1,0,0);
  var leftLegJoint = new Matrix4(leftLeg.matrix);
  leftLeg.matrix.scale(0.15,0.4,0.2);
  leftLeg.render();

  var leftFoot = new Cube();
  leftFoot.color = [0.8,0.6,0.33,1.0];
  leftFoot.matrix = new Matrix4(leftLegJoint);
  leftFoot.matrix.translate(-0.01,0.4,0.05);
  leftFoot.matrix.rotate(g_LeftFootRotate,1,0,0);
  //leftFoot.matrix.rotate(-10*Math.sin(g_seconds - 0.2),1,0,0);
  leftFoot.matrix.scale(0.2,0.12,0.23);
  leftFoot.render();
  
  var rightThigh = new Cube();
  rightThigh.matrix = new Matrix4(baseMatrix);
  rightThigh.color = [0.8,0.6,0.33,1.0];
  rightThigh.matrix.translate(-0.25,-0.15,0.55);
  rightThigh.matrix.rotate(g_RightThighRotate,1,0,0);
  //rightThigh.matrix.rotate(30*Math.sin(g_seconds + Math.PI -0.2),1,0,0);
  rightThigh.matrix.rotate(200,-1,0,0);
  var rightThighJoint = new Matrix4(rightThigh.matrix);
  rightThigh.matrix.scale(0.26,0.402,.26);
  rightThigh.render();

  var rightLeg = new Cube();
  rightLeg.color = [0.8,0.6,0.33,1.0];
  rightLeg.matrix = new Matrix4(rightThighJoint);
  rightLeg.matrix.translate(0.05,0.3,-0.0);
  rightLeg.matrix.rotate(15,1,0,0);
  var rightLegJoint = new Matrix4(rightLeg.matrix);
  rightLeg.matrix.scale(0.15,0.4,0.2);
  rightLeg.render();

  var rightFoot = new Cube();
  rightFoot.color = [0.8,0.6,0.33,1.0];
  rightFoot.matrix = new Matrix4(rightLegJoint);
  rightFoot.matrix.translate(-0.03,0.4,0.05);
  rightFoot.matrix.rotate(g_RightFootRotate,1,0,0);
  //rightFoot.matrix.rotate(-10*Math.sin(g_seconds + Math.PI - 0.2),1,0,0);
  rightFoot.matrix.scale(0.2,0.12,0.23);
  rightFoot.render();

  var head = new Cube();
  head.matrix = new Matrix4(baseMatrix);
  head.color = [0.83,0.64,0.33,1.0];
  head.matrix.translate(-0.275,0.0,-0.6);
  head.matrix.rotate(0,0,0,1);
  head.matrix.scale(0.5,.5,.3);
  head.render();

  var snout = new Cube();
  snout.matrix = new Matrix4(baseMatrix);
  snout.color = [0.83,0.64,0.33,1.0];
  snout.matrix.translate(-0.151,0.0,-0.8);
  snout.matrix.rotate(0,0,0,1);
  snout.matrix.scale(0.25,.25,.25);
  snout.render();

  var nose = new Cube();
  nose.matrix = new Matrix4(baseMatrix);
  nose.color = [0.0,0.0,0.0,1.0];
  nose.matrix.translate(-0.076,0.2,-0.822);
  nose.matrix.rotate(0,0,0,1);
  nose.matrix.scale(0.1,.05,.0);
  nose.render();

  var rightEye = new Cube();
  rightEye.matrix = new Matrix4(baseMatrix);
  rightEye.color = [0.0,0.0,0.0,1.0];
  rightEye.matrix.translate(-0.2,0.255,-0.65);
  rightEye.matrix.rotate(0,0,0,1);
  rightEye.matrix.scale(0.05,.05,.05);
  rightEye.render();

  var leftEye = new Cube();
  leftEye.matrix = new Matrix4(baseMatrix);
  leftEye.color = [0.0,0.0,0.0,1.0];
  leftEye.matrix.translate(0.08,0.255,-0.65);
  leftEye.matrix.rotate(0,0,0,1);
  leftEye.matrix.scale(0.05,.05,.05);
  leftEye.render();

  var leftEar = new Cube();
  leftEar.matrix = new Matrix4(baseMatrix);
  leftEar.color = [0.83,0.64,0.33,1.0];
  leftEar.matrix.translate(0.15,0.4,-0.6);
  leftEar.matrix.rotate(0,0,0,1);
  leftEar.matrix.scale(0.18,.18,.18);
  leftEar.render();

  var rightEar = new Cube();
  rightEar.matrix = new Matrix4(baseMatrix);
  rightEar.color = [0.83,0.64,0.33,1.0];
  rightEar.matrix.translate(-0.4,0.4,-0.6);
  rightEar.matrix.rotate(0,0,0,1);
  rightEar.matrix.scale(0.18,.18,.18);
  rightEar.render();

  var mane1 = new Cube();
  mane1.matrix = new Matrix4(baseMatrix);
  mane1.color = [0.59,0.29,0.0,1.0];
  mane1.matrix.translate(-0.32,-0.1,-0.45);
  mane1.matrix.rotate(0,0,0,1);
  mane1.matrix.scale(0.6,.6,.3);
  mane1.render();

  //var len = g_points.length;
  /*var len = g_shapeList.length;
  for(var i = 0; i < len; i++) {
    
    g_shapeList[i].render();*/
    /*var xy = g_shapeList[i].position;
    var rgba = g_shapeList[i].color;
    var s = g_shapeList[i].size;

    // Pass the position of a point to a_Position variable
    gl.vertexAttrib3f(a_Position, xy[0], xy[1], 0.0);
    // Pass the color of a point to u_FragColor variable
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

    gl.uniform1f(u_Size, s, 1.0);
    // Draw
    gl.drawArrays(gl.POINTS, 0, 1);*/
  //}
  var duration = performance.now() - startTime;
  sendTextToHtml("fps: " + Math.floor(1000/duration)/10, "fps");
  
}
function sendTextToHtml(text, htmlID){
  var htmlElm = document.getElementById(htmlID);
  htmlElm.innerHTML = text;
}

