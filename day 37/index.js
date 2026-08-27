/*
Create a JavaScript program that evaluates a student's age, score, attendance and check which class is h.

Use only the concepts you've taught so far:

Arithmetic operators
Comparison operators
Logical operators (&&, ||, !)
if
else if
else
switch
*/

let name = "John";
let age = 15;
let score = 40;
let attendance = false;
let classes = "sss1";

let name2 = "Philip Gonzalez";
let age2 = 16;
let score2 = 60;
let attendance2 = true;
let classes2 = "sss2";

let name3 = "Promise Ken";
let age3 = 19;
let score3 = 69;
let attendance3 = false;
let classes3 = "sss1";

let name4 = "Snr Dev Max";
let age4 = 20;
let score4 = 100;
let attendance4 = true;
let classes4 = "sss3";

console.log("Student 1 Info");
console.log("Student's name: " + name);
if (age < 18) {
    console.log("Your age is", age, "You are a kid mehnnn!!!!!");
} else if (age >= 18) {
    console.log("Your age is", age, "Yaron ya yi girma");
} else {
    console.log("Sorry, you don't have an age");
}

if ((score <= 100) && (score >= 70)) {
    console.log("Your score is", score, "--A")
}
else if ((score > 60) && (score <= 69)) {
    console.log("Your score is", score, "--B")
}
else if ((score > 50) && (score <= 60)) {
    console.log("Your score is", score, "--C")
}
else if ((score > 45) && (score <= 50)) {
    console.log("Your score is", score, "--D")
}
else if ((score >= 40) && (score <= 45)) {
    console.log("Your score is", score, "--E")
} else if ((score >= 0) && (score < 40)) {
    console.log("Your score is", score, "--F")
} else {
    console.log("You don't have a score in our range of 100");
}

if (attendance == true) {
    console.log("You have a good attendance score");
} else if (attendance == false) {
    console.log("You have a bad attendance score");
} else {
    console.log("You do not have an attendance...Baba dodge class");
}

switch (classes) {
    case "sss1":
        console.log("You are in SS1....JJC kowai");
        break;
    case "sss2":
        console.log("You are in SS2....Shege middle man");
        break;
    case "sss3":
        console.log("You are in SS3....Tor masu dagan shoulder");
        break;
    default:
        console.log("Oga you no get class for SSS...go sleep joooorrrrr!!!");
}

console.log();

console.log("Student 2 Info");
console.log("Student's name: " + name2);
if (age2 < 18) {
    console.log("Your age is", age2, "You are a kid mehnnn!!!!!");
} else if (age2 >= 18) {
    console.log("Your age is", age2, "Yaron ya yi girma");
} else {
    console.log("Sorry, you don't have an age");
}

if ((score2 <= 100) && (score2 >= 70)) {
    console.log("Your score is", score2, "--A")
}
else if ((score2 > 60) && (score2 <= 69)) {
    console.log("Your score is", score2, "--B")
}
else if ((score2 > 50) && (score2 <= 60)) {
    console.log("Your score is", score2, "--C")
}
else if ((score2 > 45) && (score2 <= 50)) {
    console.log("Your score is", score2, "--D")
}
else if ((score2 >= 40) && (score2 <= 45)) {
    console.log("Your score is", score2, "--E")
} else if ((score2 >= 0) && (score2 < 40)) {
    console.log("Your score is", score2, "--F")
} else {
    console.log("You don't have a score in our range of 100");
}

if (attendance2 == true) {
    console.log("You have a good attendance score");
} else if (attendance2 == false) {
    console.log("You have a bad attendance score");
} else {
    console.log("You do not have an attendance...Baba dodge class");
}

switch (classes2) {
    case "sss1":
        console.log("You are in SS1....JJC kowai");
        break;
    case "sss2":
        console.log("You are in SS2....Shege middle man");
        break;
    case "sss3":
        console.log("You are in SS3....Tor masu dagan shoulder");
        break;
    default:
        console.log("Oga you no get class for SSS...go sleep joooorrrrr!!!");
}

console.log();

console.log("Student 3 Info");
console.log("Student's name: " + name3);
if (age3 < 18) {
    console.log("Your age is", age3, "You are a kid mehnnn!!!!!");
} else if (age3 >= 18) {
    console.log("Your age is", age3, "Yaron ya yi girma");
} else {
    console.log("Sorry, you don't have an age");
}

if ((score3 <= 100) && (score3 >= 70)) {
    console.log("Your score is", score3, "--A")
}
else if ((score3 > 60) && (score3 <= 69)) {
    console.log("Your score is", score3, "--B")
}
else if ((score3 > 50) && (score3 <= 60)) {
    console.log("Your score is", score3, "--C")
}
else if ((score3 > 45) && (score3 <= 50)) {
    console.log("Your score is", score3, "--D")
}
else if ((score3 >= 40) && (score3 <= 45)) {
    console.log("Your score is", score3, "--E")
} else if ((score3 >= 0) && (score3 < 40)) {
    console.log("Your score is", score3, "--F")
} else {
    console.log("You don't have a score in our range of 100");
}

if (attendance3 == true) {
    console.log("You have a good attendance score");
} else if (attendance3 == false) {
    console.log("You have a bad attendance score");
} else {
    console.log("You do not have an attendance...Baba dodge class");
}

switch (classes3) {
    case "sss1":
        console.log("You are in SS1....JJC kowai");
        break;
    case "sss2":
        console.log("You are in SS2....Shege middle man");
        break;
    case "sss3":
        console.log("You are in SS3....Tor masu dagan shoulder");
        break;
    default:
        console.log("Oga you no get class for SSS...go sleep joooorrrrr!!!");
}

console.log();

console.log("Student 4 Info");
console.log("Student's name: " + name4);
if (age4 < 18) {
    console.log("Your age is", age4, "You are a kid mehnnn!!!!!");
} else if (age >= 18) {
    console.log("Your age is", age4, "Yaron ya yi girma");
} else {
    console.log("Sorry, you don't have an age");
}

if ((score4 <= 100) && (score4 >= 70)) {
    console.log("Your score is", score4, "--A")
}
else if ((score4 > 60) && (score4 <= 69)) {
    console.log("Your score is", score4, "--B")
}
else if ((score4 > 50) && (score4 <= 60)) {
    console.log("Your score is", score4, "--C")
}
else if ((score4 > 45) && (score4 <= 50)) {
    console.log("Your score is", score4, "--D")
}
else if ((score4 >= 40) && (score4 <= 45)) {
    console.log("Your score is", score4, "--E")
} else if ((score4 >= 0) && (score4 < 40)) {
    console.log("Your score is", score4, "--F")
} else {
    console.log("You don't have a score in our range of 100");
}

if (attendance4 == true) {
    console.log("You have a good attendance score");
} else if (attendance4 == false) {
    console.log("You have a bad attendance score");
} else {
    console.log("You do not have an attendance...Baba dodge class");
}

switch (classes4) {
    case "sss1":
        console.log("You are in SS1....JJC kowai");
        break;
    case "sss2":
        console.log("You are in SS2....Shege middle man");
        break;
    case "sss3":
        console.log("You are in SS3....Tor masu dagan shoulder");
        break;
    default:
        console.log("Oga you no get class for SSS...go sleep joooorrrrr!!!");
}

console.log();