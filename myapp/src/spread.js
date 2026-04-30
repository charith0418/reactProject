const arr1 =[10,20,30];
const arr2 =[40,50,60];

const arr3=[...arr1,...arr2];
console.log(arr3);


function sum(a,b,c){
    console.log(a+b+c);
}

const arr4 = [1,2,5];
const obj = {one:5,two:10,three:15};

sum(...arr4);
sum(...Object.values(obj));


const arr5 =[1,2,3,4,5];
let sum1 =0;
for(let i=0;i<arr5.length;i++){
    sum1 = sum1 + arr5[i];
}
console.log(sum1);