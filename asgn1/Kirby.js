function drawKirby(){
    let body = new Circle();
    body.position = [0.0,0.0];
    body.color = [1.0,0.75,0.79,1.0];
    body.size = 80.0;
    body.segments = 20;
    g_shapeList.push(body);

    let mouth1 = new Triangle_Improved();
    mouth1.coordinate1 = [-0.06, -0.03];
    mouth1.coordinate2 = [0.06, -0.03];
    mouth1.coordinate3 = [0.06, -0.06]
    mouth1.color = [0.0,0.0,0.0,1.0];
    g_shapeList.push(mouth1);

    let mouth2 = new Triangle_Improved();
    mouth2.coordinate1 = [-0.06, -0.03];
    mouth2.coordinate2 = [0.06, -0.06];
    mouth2.coordinate3 = [-0.06, -0.06]
    mouth2.color = [0.0,0.0,0.0,1.0];
    g_shapeList.push(mouth2);

    let tongue1 = new Triangle_Improved();
    tongue1.coordinate1 = [-0.06, -0.06];
    tongue1.coordinate2 = [0.00, -0.06];
    tongue1.coordinate3 = [-0.06, -0.09]
    tongue1.color = [1.0,0.0,0.0,1.0];
    g_shapeList.push(tongue1);

    let tongue2 = new Triangle_Improved();
    tongue2.coordinate1 = [-0.06, -0.09];
    tongue2.coordinate2 = [0.00, -0.06];
    tongue2.coordinate3 = [-0.03, -0.11]
    tongue2.color = [1.0,0.0,0.0,1.0];
    g_shapeList.push(tongue2);

    let tongue3 = new Triangle_Improved();
    tongue3.coordinate1 = [-0.03, -0.11];
    tongue3.coordinate2 = [0.00, -0.06];
    tongue3.coordinate3 = [0.03, -0.11]
    tongue3.color = [1.0,0.0,0.0,1.0];
    g_shapeList.push(tongue3);

    let tongue4 = new Triangle_Improved();
    tongue4.coordinate1 = [0.06, -0.09];
    tongue4.coordinate2 = [0.00, -0.06];
    tongue4.coordinate3 = [0.03, -0.11]
    tongue4.color = [1.0,0.0,0.0,1.0];
    g_shapeList.push(tongue4);

    let tongue5 = new Triangle_Improved();
    tongue5.coordinate1 = [0.06, -0.06];
    tongue5.coordinate2 = [0.00, -0.06];
    tongue5.coordinate3 = [0.06, -0.09]
    tongue5.color = [1.0,0.0,0.0,1.0];
    g_shapeList.push(tongue5);

    let mouth3 = new Triangle_Improved();
    mouth3.coordinate1 = [-0.06, -0.06];
    mouth3.coordinate2 = [0.00, -0.06];
    mouth3.coordinate3 = [-0.06, -0.078]
    mouth3.color = [0.0,0.0,0.0,1.0];
    g_shapeList.push(mouth3);

    let mouth4 = new Triangle_Improved();
    mouth4.coordinate1 = [0.06, -0.06];
    mouth4.coordinate2 = [0.00, -0.06];
    mouth4.coordinate3 = [0.06, -0.078]
    mouth4.color = [0.0,0.0,0.0,1.0];
    g_shapeList.push(mouth4);

    let eye_21 = new Triangle_Improved();
    eye_21.coordinate1 = [0.06, 0.075];
    eye_21.coordinate2 = [0.06, 0.25];
    eye_21.coordinate3 = [0.1, 0.075]
    eye_21.color = [0.0,0.0,0.0,1.0];
    g_shapeList.push(eye_21);

    let eye_22 = new Triangle_Improved();
    eye_22.coordinate1 = [0.06, 0.25];
    eye_22.coordinate2 = [0.1, 0.25];
    eye_22.coordinate3 = [0.1, 0.075]
    eye_22.color = [0.0,0.0,0.0,1.0];
    g_shapeList.push(eye_22);

    let eye_23 = new Triangle_Improved();
    eye_23.coordinate1 = [0.06, 0.2];
    eye_23.coordinate2 = [0.06, 0.16];
    eye_23.coordinate3 = [0.1, 0.16]
    eye_23.color = [1.0,1.0,1.0,1.0];
    g_shapeList.push(eye_23);

    let eye_24 = new Triangle_Improved();
    eye_24.coordinate1 = [0.06, 0.2];
    eye_24.coordinate2 = [0.1, 0.2];
    eye_24.coordinate3 = [0.1, 0.16]
    eye_24.color = [1.0,1.0,1.0,1.0];
    g_shapeList.push(eye_24);

    let eye_11 = new Triangle_Improved();
    eye_11.coordinate1 = [-0.06, 0.075];
    eye_11.coordinate2 = [-0.06, 0.25];
    eye_11.coordinate3 = [-0.1, 0.075]
    eye_11.color = [0.0,0.0,0.0,1.0];
    g_shapeList.push(eye_11);

    let eye_12 = new Triangle_Improved();
    eye_12.coordinate1 = [-0.06, 0.25];
    eye_12.coordinate2 = [-0.1, 0.25];
    eye_12.coordinate3 = [-0.1, 0.075]
    eye_12.color = [0.0,0.0,0.0,1.0];
    g_shapeList.push(eye_12);

    let eye_13 = new Triangle_Improved();
    eye_13.coordinate1 = [-0.06, 0.2];
    eye_13.coordinate2 = [-0.06, 0.16];
    eye_13.coordinate3 = [-0.1, 0.16]
    eye_13.color = [1.0,1.0,1.0,1.0];
    g_shapeList.push(eye_13);

    let eye_14 = new Triangle_Improved();
    eye_14.coordinate1 = [-0.06, 0.2];
    eye_14.coordinate2 = [-0.1, 0.2];
    eye_14.coordinate3 = [-0.1, 0.16]
    eye_14.color = [1.0,1.0,1.0,1.0];
    g_shapeList.push(eye_14);

    let s1 = new Triangle_Improved();
    s1.coordinate1 = [-0.17, 0.04];
    s1.coordinate2 = [-0.2, 0.06];
    s1.coordinate3 = [-0.2, 0.04]
    s1.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(s1);

    let s2 = new Triangle_Improved();
    s2.coordinate1 = [-0.23, 0.04];
    s2.coordinate2 = [-0.2, 0.06];
    s2.coordinate3 = [-0.2, 0.04]
    s2.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(s2);
    
    let s3 = new Triangle_Improved();
    s3.coordinate1 = [-0.23, 0.04];
    s3.coordinate2 = [-0.23, 0.06];
    s3.coordinate3 = [-0.2, 0.06]
    s3.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(s3);

    let s4 = new Triangle_Improved();
    s4.coordinate1 = [-0.23, 0.04];
    s4.coordinate2 = [-0.23, 0.06];
    s4.coordinate3 = [-0.26, 0.04]
    s4.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(s4);
    
    let s5 = new Triangle_Improved();
    s5.coordinate1 = [-0.23, 0.02];
    s5.coordinate2 = [-0.23, 0.04];
    s5.coordinate3 = [-0.26, 0.02]
    s5.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(s5);

    let s6 = new Triangle_Improved();
    s6.coordinate1 = [-0.23, 0.04];
    s6.coordinate2 = [-0.26, 0.04];
    s6.coordinate3 = [-0.26, 0.02]
    s6.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(s6);

    let s7 = new Triangle_Improved();
    s7.coordinate1 = [-0.23, 0.02];
    s7.coordinate2 = [-0.26, 0.02];
    s7.coordinate3 = [-0.23, 0.00]
    s7.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(s7);


    renderAllShapes();
}