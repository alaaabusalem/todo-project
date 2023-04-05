'use strict'
let myName=prompt("Please Enter Your Name");
let gender=prompt("Enter Your gender");
gender=gender.toUpperCase();


    if (gender !== 'MALE' && gender !=='FEMALE'){
        gender=prompt("Please Enter a correct gender MALE or FEMALE");
        gender=gender.toUpperCase();
    
    }


let age=prompt("Please Enter Your age");
if(age<= 0){
    age=prompt("Your age is less than or equall Zero!! Enter your correct age");
}
let showWelcomingMsg=confirm('Do you want to show a welcoming message?');
if(showWelcomingMsg){

if(gender == 'MALE'){
    alert(`Hello Mr ${myName} your age is ${age} confirm to skip this messge`);
} else if(gender=='FEMALE')
{alert(`Hello Ms ${myName} your age is ${age} confirm to skip this messge`);}
else {alert(`Hello ${myName} your Gender is undefind and your age is ${age} confirm to skip this messge`);}

}

                           ////// LAB 06 ////

 let like=prompt("do you like our websit?? (answer Yes/No)");
 let simple= prompt("do our websit very simple??? (answer Yes/No)");
 let develop= prompt("should we have to develop our websit as soon as possible?? (answer Yes/No)");
 
 alert(` hiii ${like} ${simple} ${develop}`);
 like= checkAnswer(like);
simple= checkAnswer(simple);
develop=checkAnswer(develop);
const answerArray=[like,simple,develop];


function checkAnswer(answer){
    if (answer.toUpperCase() !== 'YES' && answer.toUpperCase() !=='NO'){
        
      return "invalid";
    }
     else {return (answer.toUpperCase());}
}
console.log(answerArray);

