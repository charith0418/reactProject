 class rectangle{
    constructor (width,height,color){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
 }
    const rect  = new rectangle(4,6,'red');
 
 console.log(rect.getArea());