/*
Instructions

Write a JavaScript program that manages the scores of 5 students in a class using array's of object please.

You are given the following array: [45, 78, 92, 56, 34, 88, 67, 73, 49, 95]; ten students varibles of thier name, age, class, score, attendance 
Display each student name and score in the array. 
Determine Pass or Fail Use if/else to determine whether each score is a pass or fail.
The rules are:
50 and above → "Pass"
Below 50 → "Fail"
Create a new array containing only the students who passed
Create another array containing scores that are 80 or above.
Calculate and display the total of all the scores.

Create another function called:
The function should calculate and return the average score.

Requirements
Your solution must:
Use an array.
Use a function.
Use if/else.
Use at least two different array methods.
Display the results using console.log(). 
*/

const students = [
    {name: "Philip", age: 30, classs: "sss2", score: 45, attendance: false},
    {name: "Perry", age: 20, classs: "sss1", score: 78, attendance: true},
    {name: "Ada Chinyere", age: 40, classs: "sss2", score: 92, attendance: true},
    {name: "Promise", age: 10, classs: "sss3", score: 56, attendance: false},
    {name: "Scarface", age: 18, classs: "sss3", score: 34, attendance: true},
    {name: "Felix Dauda", age: 25, classs: "sss2", score: 88, attendance: false},
    {name: "Max", age: 30, classs: "sss1", score: 67, attendance: false},
    {name: "Seltim", age: 17, classs: "sss1", score: 73, attendance: true},
    {name: "Jojo Vincent", age: 14, classs: "sss2", score: 49, attendance: false},
    {name: "Isn't she", age: 21, classs: "sss3", score: 95, attendance: true}
];

// To display student's info (Student's name and score)
console.log("STUDENT'S DETAILS")
console.log("NAME              SCORE")
for (i=0; i<students.length; i++) {
    let grade = ""
    if (students[i].score > 50) {
        grade = "Pass";
    } else if (students[i].score < 50) {
        grade = "Fail";
    } else {
        grade = "";
    }
    console.log(students[i].name, "      ", students[i].score, grade);
}

// To create a new array for students who passed and another array containing scores that are 80 or above
const studentsPassed = new Array();
const eightyAboveScores = new Array();

for (i=0; i<students.length; i++) {
    if (students[i].score > 50) {
        studentsPassed.push(students[i]);
    }
}
console.log();
console.log("ARRAY OF STUDENTS WHO PASSED");
console.log(studentsPassed);

for (i=0; i<students.length; i++) {
    if (students[i].score > 80) {
        eightyAboveScores.push(students[i].score);
    }
}
console.log();
console.log("ARRAY OF SCORES 80 OR ABOVE");
console.log(eightyAboveScores);

//To calculate and display the total of all scores
let scoreTotal = 0;
for (let x in students) {
    scoreTotal += students[x].score;
}
console.log();
console.log("TOTAL OF ALL SCORES:", scoreTotal);

// Function to calculate and return the average score
function averageCal(students) {
    let scoreTotal = 0;
    let average = 0;
    for (let x in students) {
        scoreTotal += students[x].score;
    }
    average = scoreTotal/students.length;
    return average;
}

// To print the average score
console.log();
console.log("AVERAGE SCORE:", averageCal(students));