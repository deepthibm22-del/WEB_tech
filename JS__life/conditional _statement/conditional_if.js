// if_statement

let age=20
if (age>=18){
    console.log("you are eligible to vote")

}

// if-else statement

let age=2
if (age>=18){
    console.log("you are eligible to vote");
}
else{
    console.log("get lost");
}

// else-if ladder

let marks=35
if(marks>=90){
    console.log("Grade A+");
}
else if(marks>=80){
    console.log("Grade A");
}
else if(marks>=70){
    console.log("Grade B+");
}
else if(marks>=60){
    console.log("Grade B");
}
else if(marks>=50){
    console.log("Grade C+");
}
else if(marks>=40){
    console.log("Grade C");
}
else if(marks>=30){
    console.log("Pass");
}
else{
    console.log("Fail gone case");
}

// number positive or negative
let num=-10
if (num<0){
    console.log("negative number");

}
else if(num==0){
    console.log("its a zero");
}
else if(num>0){
    console.log("positive number");
}

// greatest number among 2
let a=10
let b=10
if (a<b){
    console.log("a is less than b");
}
else if(a>b){
    console.log("a is greater than b");
}
else if(a==b){
    console.log("equal");
}


// greatest amoung 3
let a = 30
let b = 30
let c = 30
if (a == b && b == c) {
    console.log("all are equal");
}
else if (a >= b && a >= c) {
    console.log(a, "is greater");
}
else if (b >= a && b >= c) {
    console.log(b, "is greater");
}
else if (c >= a && c >= b) {
    console.log(c, " is greater");
}

// switch statement--->switch()

let days =9
switch (days) {
    case 1 + 0: console.log("Monday");
        break;
    case 2: console.log("Tuesday");
        break;
    case 3: console.log("Wednesday");
        break;
    case 4: console.log("Thursday");
        break;
    case 5: console.log("Friday");
        break;
    case 6: console.log("Saturday");
        break;
    case 7: console.log("Sunday");
        break;
    default:
        console.log("Invalid input");
}

// ternery condition

let flag = false
let result = flag ? "Logged-in" : "log out"
console.log(result);

let age = 7
console.log(age > 21 ? "Welcome to party" : "get lost");


let marks = 55
console.log((marks > 90) ? "grade A" :
    (marks > 75) ? "grade b" :
        (marks > 55) ? "grade c" : "fail");


let n = 45;
let result = n % 3 == 0 && n % 5 == 0
    ? "Divisible by both"
    : "Not divisible by both";
console.log(result);


//greatest of three numbers using ternary operatorl
let a = 12;
let b = 8;
let c = 20;
let result = a < b ? (a < c ? a : c) : (b < c ? b : c);
console.log(result);


let n = -10;
let result = n > 0 ? "Positive" : n < 0 ? "Negative" : "Zero";
console.log(result);

let a = 10;
let b = 10;
let result = a == b
    ? ((a + b) % 2 == 0 ? "Equal and Sum is Even" : "Equal but Sum is Odd")
    : "Not Equal";

console.log(result);

let n = 8;
let result = n % 2 == 0 ? "Even" : "Odd";
console.log(result);




