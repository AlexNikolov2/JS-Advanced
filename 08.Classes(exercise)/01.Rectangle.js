class Rectangle{
    constructor(width, height, color){
        color = color[0].toUpperCase() + color.substring(1);
        [this.width,this.height,this.color]= [width, height, color];
        
    }
    calcArea(){
        return this.width * this.height;
    }
    

}
let rect = new Rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());


