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
let A;
if(gender == 'MALE'){
    A='Mr'
} else(gender=='FEMALE')
{A='Ms'}


confirm(`Hello ${A} ${myName} your age is ${age} confirm to skip this messge`);}
