console.log(a);
var a=5; //undefined due to the problem hoisting 
console.log(a);
let b=10,c=12;
const d=13;
{   
    // let e=14;
    const f=15;
    var g=16;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    // console.log(e);
    f++;
    console.log(f);
    console.log(g);
    
}

//   console.log(e);
//    console.log(f);
   console.log(g);
   