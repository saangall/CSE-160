class Cube{
  constructor(){
    this.type = 'cube';
    //this.position = [0.0, 0.0, 0.0];
    this.color = [1.0, 1.0, 1.0, 1.0];
    //this.size = 5.0;
    //this.segments = 10; 
    this.matrix = new Matrix4();
  }

  render(){
    //var xy = this.position;
    var rgba = this.color;
    //var s = this.size;
    //var seg = this.segments;

    // Pass the color of a point to u_FragColor variable
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

    gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

    
    // Draw
    /*var d = s/200.0;
    let angleStep=360/seg;
    for(var angle = 0; angle<360; angle=angle+angleStep){
        let centerPt = [xy[0], xy[1]];
        let angle1 = angle;
        let angle2 = angle+angleStep;
        let vec1 = [Math.cos(angle1*Math.PI/180)*d, Math.sin(angle1*Math.PI/180)*d];
        let vec2 = [Math.cos(angle2*Math.PI/180)*d, Math.sin(angle2*Math.PI/180)*d];
        let pt1 = [centerPt[0]+vec1[0], centerPt[1]+vec1[1]];
        let pt2 = [centerPt[0]+vec2[0], centerPt[1]+vec2[1]];

        drawTriangle([xy[0], xy[1], pt1[0], pt1[1], pt2[0], pt2[1]]);
    }*/
    //gl.uniform4f(u_FragColor, rgba[0] * 9, rgba[1]* 9, rgba[2] * 9, rgba[3]);

    //Cube Front
    drawTriangle3D([0.0,0.0,0.0,   1.0,1.0,0.0,     1.0,0.0,0.0]);
    drawTriangle3D([0.0,0.0,0.0,   0.0,1.0,0.0,     1.0,1.0,0.0]);

    //Cube Top
    drawTriangle3D([0.0,1.0,0.0,   0.0,1.0,1.0,     1.0,1.0,1.0]);
    drawTriangle3D([0.0,1.0,0.0,   1.0,1.0,1.0,     1.0,1.0,0.0]);

    //Cube Bottom
    drawTriangle3D([0.0,0.0,0.0,   0.0,0.0,1.0,     1.0,0.0,1.0]);
    drawTriangle3D([0.0,0.0,0.0,   1.0,0.0,1.0,     1.0,0.0,0.0]);

    //Cube right
    drawTriangle3D([1.0,0.0,0.0,   1.0,1.0,0.0,     1.0,1.0,1.0]);
    drawTriangle3D([1.0,0.0,0.0,   1.0,1.0,1.0,     1.0,0.0,1.0]);

    //Cube left
    drawTriangle3D([0.0,0.0,0.0,   0.0,1.0,0.0,     0.0,1.0,1.0]);
    drawTriangle3D([0.0,0.0,0.0,   0.0,1.0,1.0,     0.0,0.0,1.0]);

    //Cube Back
    drawTriangle3D([0.0,0.0,1.0,   1.0,1.0,1.0,     1.0,0.0,1.0]);
    drawTriangle3D([0.0,0.0,1.0,   0.0,1.0,1.0,     1.0,1.0,1.0]);
  }

}

class Cylinder {
  constructor(segments = 20) {
    this.type = 'cylinder';
    this.color = [1, 1, 1, 1];
    this.matrix = new Matrix4();
    this.segments = segments;
  }

  render() {
    gl.uniform4f(u_FragColor, ...this.color);
    gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

    let angleStep = 360 / this.segments;

    for (let angle = 0; angle < 360; angle += angleStep) {
      let rad1 = angle * Math.PI / 180;
      let rad2 = (angle + angleStep) * Math.PI / 180;

      // Circle points
      let x1 = Math.cos(rad1);
      let z1 = Math.sin(rad1);
      let x2 = Math.cos(rad2);
      let z2 = Math.sin(rad2);

      // -------- TOP FACE (y = 1) --------
      drawTriangle3D([
        0, 1, 0,
        x1, 1, z1,
        x2, 1, z2
      ]);

      // -------- BOTTOM FACE (y = 0) --------
      drawTriangle3D([
        0, 0, 0,
        x2, 0, z2,
        x1, 0, z1
      ]);

      // -------- SIDE WALL (quad = 2 triangles) --------
      drawTriangle3D([
        x1, 0, z1,
        x1, 1, z1,
        x2, 1, z2
      ]);

      drawTriangle3D([
        x1, 0, z1,
        x2, 1, z2,
        x2, 0, z2
      ]);
    }
  }
}