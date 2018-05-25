//tsc --target es5 properties.ts-> compile this file using this command, mentioning the target as es5
class Point{
    constructor(private x?:number, private y?:number){

    }

    draw(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    get X(){
        return this.x;
    }

    set X(value: number){
        if(value < 0)
            throw new Error('value cannot be less than 0');
        this.x=value;
    }
}

let point= new Point(1,2);
//let x= point.getX();
//point.setX(10);
let x= point.X;
point.X =10;
point.draw();


