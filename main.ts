function doS(){


    let obj: { x: number, y: number, getSum: () => number };

    // assign value
    obj = {
        x: 10,
        y: 20,
        getSum: function (): number {
            return this.x + this.y;
        }
    };

// call the function getSum()
    console.log("Sum: " + obj.getSum());

}



doS();

