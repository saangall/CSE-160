class Camera{
    constructor(){
        this.eye = new Vector3([-13,0,-14]);
        this.at = new Vector3([0,0,2]);
        this.up = new Vector3([0,1,0]);
    }

    forward(){
        let f = new Vector3();
        f = f.set(this.at);
        f = f.sub(this.eye);
        f = f.normalize();
        f = f.mul(1);
        this.at = this.at.add(f);
        this.eye = this.eye.add(f);
    }
    back(){
        let f = new Vector3();
        f = f.set(this.eye);
        f = f.sub(this.at);
        f = f.normalize();
        f = f.mul(1);
        this.at = this.at.add(f);
        this.eye = this.eye.add(f);
    }
    left(){
        let f = new Vector3();
        f = f.set(this.at);
        f = f.sub(this.eye);
        let s = new Vector3();
        s = Vector3.cross(this.up, f);
        s = s.normalize();
        this.at = this.at.add(s);
        this.eye = this.eye.add(s);
        }
    right(){
        let f = new Vector3();
        f = f.set(this.at);
        f = f.sub(this.eye);
        let s = new Vector3();
        s = Vector3.cross(f, this.up);
        s = s.normalize();
        this.at = this.at.add(s);
        this.eye = this.eye.add(s);
        }
    panLeft(){
        let f = new Vector3();
        f = f.set(this.at);
        f = f.sub(this.eye);
        var rotationMatrix = new Matrix4();
        rotationMatrix.setRotate(5, this.up.elements[0], this.up.elements[1], this.up.elements[2]);
        var f_prime = rotationMatrix.multiplyVector3(f);
        let s = new Vector3();
        s = s.set(this.eye);
        this.at = s.add(f_prime);
    }
    panRight(){
        let f = new Vector3();
        f = f.set(this.at);
        f = f.sub(this.eye);
        var rotationMatrix = new Matrix4();
        rotationMatrix.setRotate(-5, this.up.elements[0], this.up.elements[1], this.up.elements[2]);
        var f_prime = rotationMatrix.multiplyVector3(f);
        let s = new Vector3();
        s = s.set(this.eye);
        this.at = s.add(f_prime);
    }
}