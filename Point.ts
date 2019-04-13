export class Point {

    constructor(private x?: number,private y?: number){
    }

    get X(){
        return this.x;
    }

    set X(x: number){
        if (x < 0)
             throw new Error('value cannot be less than zero');
        this.x = x;
    }

    draw() {

        console.log("drawing point ("+ this.x + "," + this.y+")")
    }

}
