class Camera{
    constructor(){
        this.eye = new Vector3([0,0,3]);
        this.at = new Vector3([0,0,-100]);
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
        var f = this.at.sub(this.eye);
        var rotationMatrix = new Matrix4();
        rotationMatrix.setRotate(0.5, this.up.x, this.up.y, this.up.z);
        var f_prime = rotationMatrix.multiplyVector3(f);
        this.at = this.eye.add(f_prime);
    }
    panRight(){
        var f = this.at.sub(this.eye);
        var rotationMatrix = new Matrix4();
        rotationMatrix.setRotate(-0.5, this.up.x, this.up.y, this.up.z);
        var f_prime = rotationMatrix.multiplyVector3(f);
        this.at = this.eye.add(f_prime);
    }
}