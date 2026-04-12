function drawKirby(){
    let footr1 = new Triangle_Improved();
    footr1.coordinate1 = [0.25, -0.29];
    footr1.coordinate2 = [0.32, -0.42];
    footr1.coordinate3 = [0.12, -0.35]
    footr1.color = [1.0,0.0,0.0,1.0];
    g_shapeList.push(footr1);

    let footr2 = new Triangle_Improved();
    footr2.coordinate1 = [0.22, -0.46];
    footr2.coordinate2 = [0.32, -0.42];
    footr2.coordinate3 = [0.12, -0.35]
    footr2.color = [1.0,0.0,0.0,1.0];
    g_shapeList.push(footr2);

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

    let s8 = new Triangle_Improved();
    s8.coordinate1 = [-0.23, 0.02];
    s8.coordinate2 = [-0.20, 0.02];
    s8.coordinate3 = [-0.23, 0.00]
    s8.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(s8);

    let s9 = new Triangle_Improved();
    s9.coordinate1 = [-0.20, 0.00];
    s9.coordinate2 = [-0.20, 0.02];
    s9.coordinate3 = [-0.23, 0.00]
    s9.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(s9);

    let s10 = new Triangle_Improved();
    s10.coordinate1 = [-0.20, 0.00];
    s10.coordinate2 = [-0.20, 0.02];
    s10.coordinate3 = [-0.17, 0.00]
    s10.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(s10);

    let s11 = new Triangle_Improved();
    s11.coordinate1 = [-0.20, -0.02];
    s11.coordinate2 = [-0.20, 0.00];
    s11.coordinate3 = [-0.17, -0.02]
    s11.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(s11);

    let s12 = new Triangle_Improved();
    s12.coordinate1 = [-0.17, -0.00];
    s12.coordinate2 = [-0.20, 0.00];
    s12.coordinate3 = [-0.17, -0.02]
    s12.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(s12);

    let s13 = new Triangle_Improved();
    s13.coordinate1 = [-0.17, -0.02];
    s13.coordinate2 = [-0.20, -0.02];
    s13.coordinate3 = [-0.20, -0.04]
    s13.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(s13);

    let s14 = new Triangle_Improved();
    s14.coordinate1 = [-0.20, -0.02];
    s14.coordinate2 = [-0.23, -0.02];
    s14.coordinate3 = [-0.23, -0.04]
    s14.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(s14);

    let s15 = new Triangle_Improved();
    s15.coordinate1 = [-0.20, -0.02];
    s15.coordinate2 = [-0.20, -0.04];
    s15.coordinate3 = [-0.23, -0.04]
    s15.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(s15);

    let s17 = new Triangle_Improved();
    s17.coordinate1 = [-0.23, -0.02];
    s17.coordinate2 = [-0.23, -0.04];
    s17.coordinate3 = [-0.26, -0.04]
    s17.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(s17);


    let g1 = new Triangle_Improved();
    g1.coordinate1 = [0.26, 0.04];
    g1.coordinate2 = [0.23, 0.06];
    g1.coordinate3 = [0.23, 0.04]
    g1.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(g1);

    let g2 = new Triangle_Improved();
    g2.coordinate1 = [0.23, 0.04];
    g2.coordinate2 = [0.2, 0.06];
    g2.coordinate3 = [0.2, 0.04]
    g2.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(g2);
    
    let g3 = new Triangle_Improved();
    g3.coordinate1 = [0.23, 0.04];
    g3.coordinate2 = [0.23, 0.06];
    g3.coordinate3 = [0.2, 0.06]
    g3.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(g3);

    let g4 = new Triangle_Improved();
    g4.coordinate1 = [0.2, 0.04];
    g4.coordinate2 = [0.2, 0.06];
    g4.coordinate3 = [0.17, 0.04]
    g4.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(g4);
    
    let g5 = new Triangle_Improved();
    g5.coordinate1 = [0.17, 0.02];
    g5.coordinate2 = [0.17, 0.04];
    g5.coordinate3 = [0.20, 0.02]
    g5.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(g5);

    let g6 = new Triangle_Improved();
    g6.coordinate1 = [0.17, 0.04];
    g6.coordinate2 = [0.2, 0.04];
    g6.coordinate3 = [0.2, 0.02]
    g6.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(g6);

    let g7 = new Triangle_Improved();
    g7.coordinate1 = [0.17, 0.02];
    g7.coordinate2 = [0.2, 0.02];
    g7.coordinate3 = [0.2, -0.04]
    g7.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(g7);

    let g8 = new Triangle_Improved();
    g8.coordinate1 = [0.17, 0.02];
    g8.coordinate2 = [0.17, -0.04];
    g8.coordinate3 = [0.2, -0.04]
    g8.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(g8);

    let g9 = new Triangle_Improved();
    g9.coordinate1 = [0.23, 0.02];
    g9.coordinate2 = [0.21, 0.02];
    g9.coordinate3 = [0.23, 0.00]
    g9.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(g9);

    let g10 = new Triangle_Improved();
    g10.coordinate1 = [0.21, 0.00];
    g10.coordinate2 = [0.21, 0.02];
    g10.coordinate3 = [0.23, 0.00]
    g10.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(g10);

    let g11 = new Triangle_Improved();
    g11.coordinate1 = [0.26, 0.00];
    g11.coordinate2 = [0.23, 0.02];
    g11.coordinate3 = [0.23, 0.00]
    g11.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(g11);

    let g12 = new Triangle_Improved();
    g12.coordinate1 = [0.26, 0.00];
    g12.coordinate2 = [0.23, 0.02];
    g12.coordinate3 = [0.26, 0.02]
    g12.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(g12);

    let g13 = new Triangle_Improved();
    g13.coordinate1 = [0.26, -0.00];
    g13.coordinate2 = [0.23, -0.02];
    g13.coordinate3 = [0.23, -0.00]
    g13.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(g13);

    let g14 = new Triangle_Improved();
    g14.coordinate1 = [0.26, -0.00];
    g14.coordinate2 = [0.23, -0.02];
    g14.coordinate3 = [0.26, -0.02]
    g14.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(g14);

    let g15 = new Triangle_Improved();
    g15.coordinate1 = [0.26, -0.02];
    g15.coordinate2 = [0.23, -0.04];
    g15.coordinate3 = [0.23, -0.02]
    g15.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(g15);

    let g16 = new Triangle_Improved();
    g16.coordinate1 = [0.26, -0.02];
    g16.coordinate2 = [0.23, -0.04];
    g16.coordinate3 = [0.26, -0.04]
    g16.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(g16);

    let g17 = new Triangle_Improved();
    g17.coordinate1 = [0.23, -0.02];
    g17.coordinate2 = [0.2, -0.04];
    g17.coordinate3 = [0.2, -0.02]
    g17.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(g17);

    let g18 = new Triangle_Improved();
    g18.coordinate1 = [0.23, -0.02];
    g18.coordinate2 = [0.2, -0.04];
    g18.coordinate3 = [0.23, -0.04]
    g18.color = [1.0,0.41,0.38,1.0];
    g_shapeList.push(g18);

    let arm1 = new Triangle_Improved();
    arm1.coordinate1 = [0.23, 0.1];
    arm1.coordinate2 = [0.4, 0.10];
    arm1.coordinate3 = [0.23, 0.4]
    arm1.color = [1.0,0.75,0.79,1.0];
    g_shapeList.push(arm1);

    let arm2 = new Triangle_Improved();
    arm2.coordinate1 = [0.4, 0.4];
    arm2.coordinate2 = [0.4, 0.10];
    arm2.coordinate3 = [0.23, 0.4]
    arm2.color = [1.0,0.75,0.79,1.0];
    g_shapeList.push(arm2);

    let arm2_5 = new Triangle_Improved();
    arm2_5.coordinate1 = [0.39, 0.08];
    arm2_5.coordinate2 = [0.4, 0.10];
    arm2_5.coordinate3 = [0.38, 0.1]
    arm2_5.color = [1.0,0.75,0.79,1.0];
    g_shapeList.push(arm2_5);

    let footl1 = new Triangle_Improved();
    footl1.coordinate1 = [-0.27, -0.14];
    footl1.coordinate2 = [-0.41, -0.27];
    footl1.coordinate3 = [-0.2, -0.44]
    footl1.color = [1.0,0.0,0.0,1.0];
    g_shapeList.push(footl1);

    let footl2 = new Triangle_Improved();
    footl2.coordinate1 = [-0.27, -0.14];
    footl2.coordinate2 = [-0.09, -0.29];
    footl2.coordinate3 = [-0.2, -0.44]
    footl2.color = [1.0,0.0,0.0,1.0];
    g_shapeList.push(footl2);

    let footl3 = new Triangle_Improved();
    footl3.coordinate1 = [-0.41, -0.27];
    footl3.coordinate2 = [-0.32, -0.2];
    footl3.coordinate3 = [-0.42, -0.2];
    footl3.color = [1.0,0.0,0.0,1.0];
    g_shapeList.push(footl3);

    let footl4 = new Triangle_Improved();
    footl4.coordinate1 = [-0.38, -0.15];
    footl4.coordinate2 = [-0.32, -0.2];
    footl4.coordinate3 = [-0.42, -0.2];
    footl4.color = [1.0,0.0,0.0,1.0];
    g_shapeList.push(footl4);

    let footl5 = new Triangle_Improved();
    footl5.coordinate1 = [-0.38, -0.15];
    footl5.coordinate2 = [-0.32, -0.2];
    footl5.coordinate3 = [-0.33, -0.14];
    footl5.color = [1.0,0.0,0.0,1.0];
    g_shapeList.push(footl5);

    let footl6 = new Triangle_Improved();
    footl6.coordinate1 = [-0.27, -0.14];
    footl6.coordinate2 = [-0.32, -0.2];
    footl6.coordinate3 = [-0.33, -0.14];
    footl6.color = [1.0,0.0,0.0,1.0];
    g_shapeList.push(footl6);

    renderAllShapes();
}