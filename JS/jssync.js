function register(){
    waitforfiveseconds();
    console.log('regiter end');
}
function sendEmail(){
    waitforfiveseconds();
    console.log('send email end ');

}

function login(){
    waitforfiveseconds();
    console.log('login end');

}
function getData(){
    waitforfiveseconds();
    console.log('get data end ');

}
function displayData(){
    waitforfiveseconds();
    console.log('display data end');
}

function waitforfiveseconds(){
    const ms=new Date().getTime()+5000;
    // let ct=new Date().getTime();
    while(new Date().getTime()<ms){
        // ct = new Date().getTime();
    }
}

register();
sendEmail();
login();
getData();
displayData();
console.log('call other application');
