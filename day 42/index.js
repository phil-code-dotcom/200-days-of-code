/*
In our educational systems today teachers often evaluate student performances by assigning grades according to the average of marks obtained by a student through the semester. The grading system has levels such as A,B,C , etc., each representing a range of scores. Automating the process not only saves time but also ensures accuracy and consistency in the grading process.
*/

// I am using the javascript array method called reduce()

const studentMarks = [80,100, 50,40,30, 60];
const average = studentMarks.reduce((sum,mark) => sum + mark, 0) / studentMarks.length;

let grade;
if (average >= 90) { 
    grade = "A";
} else if (average >= 75) { 
    grade = "B";
} else if (average >= 60) {
    grade = "C";
} else { 
    grade = "F";
}

console.log("Average score:" ,average)
console.log("Grade:", grade)