
let name=prompt("Please Enter Your Name");
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
let A;
if(gender == 'Male'){
    A='Mr'
} else{A='Ms'}


confirm(`Hello ${A} ${name} your age is ${age} confirm to skip this messge`);
