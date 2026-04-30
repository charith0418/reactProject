this.a = 11;
this.b =22;
const obj = {
    a : 10,
    b :50,
    normalfunction : function(a,b){
        console.log(this.a+this.b);
    },
    arrowfunction : (a,b) =>{
        console.log(this.a+this.b);
    }
}
obj.arrowfunction();
obj.normalfunction();