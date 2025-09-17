function register(){
    return new Promise((resolve,reject)=> {setTimeout(()=>{
       console.log('register end');
       resolve();
    },5000)
}
    )
   
}
function sendEmail(){
    return new Promise((resolve,reject)=>{setTimeout(()=>{
       console.log('send email end');
       resolve();
    },3000)

    })
     
    
}
function login(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
       console.log('login end');
       reject("this i  not done");

    },1000)
    

    })
   
}
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log('get data end');
      resolve();
    },2000)
    })
    
   
}
function displayData(){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log('display Data End')
    },4000)
   })
    
}
//callback Hell

/*
register(()=>{
           sendEmail(()=>{
                      login(()=>{
                            getData(()=>{
                                displayData();
                            });
                      });
           });
});
*/
// promise 
/*
register()
.then(sendEmail)
.then(login)
.then(getData)
.then(displayData)
.catch((err)=>{
    console.log("error"+err);})
.finally(()=>{
    console.log('inside finally');})
console.log('call other application');
*/

// async-await 
async function f1(){
    try{
    await register();
    await sendEmail();
    await login();
    await getData();
    await displayData();
    }
    catch(err){console.log("error:" +err);

    }

}

f1();