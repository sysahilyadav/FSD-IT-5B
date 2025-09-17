// .................normal function  without parameter .........................
// function hello(){
//     console.log("hello users!")
// }
// hello();

// .........................normal function  with parameter ......................
/*function hello(user){
    console.log(`hello ${user}`);
}
hello("sahil");
*/
//..........................Normal function with default value...................................
/*function hello(user='Guest'){
    console.log(`hello ${user}`);
}
hello();
*/

//--------------------------- sum of two numbers -----------------------------------
/*
    function sum(a=41,b=5){
    console.log("before return");
    return a+b;
    console.log("after return") // this code is called unreachable code  as it  is written after the return statement 
    

    }

    let a=sum();
    console.log(a);
    
    */

// ----------------------------------without passing the value ----------------------------------

  /*
      function sum(a,b){
    console.log("before return");
    return a+b;
    console.log("after return") // this code is called unreachable code  as it  is written after the return statement 
    

    }

    let a=sum();
    console.log(a); // gives NaN as value is not given 
    */


//----------------------------------ARROW FUNCTION ------------------------------------------
/*
    const hello=()=>console.log("hello abes");  
     hello();                           // this is function expression 

*/
/*
     const add=(a,b)=>a+b;
     console.log(add(1,1515));
*/

//-----------------------------------IIFE:immediately invoked function expression  ---------------------------------------

/*
    ( function(){
            console.log("this is IIFE function example , anonymus function");
        }
    )();
*/

//-------------------------------------CALLBACK FUNCTION------------------------------------------------------------

 /*   const add=(a,b)=>a+b;
   
    function hello(user,callback){
    console.log(`hello ${user}`);
    callback();

    }
    hello('admin',()=>console.log(add(5,10)));            // passing arrow function 
    hello('admin',function(){console.log(add(5,10))});    // passing normal function

*/