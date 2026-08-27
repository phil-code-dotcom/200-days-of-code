/*
Build a student management system having 5 obsects in an array of students with the name, age and score
1. Iterate and display each student information
2. Search for a student named Sarah and display her info
3. Find all students who scored 80 and above
4. Sort and arrange the students from the highest to the lowest score.
5. Sort the students from youngest to oldest.
6. Use these methods: forEach(), find(), filter(), sort()
*/

const students = [
 { name: "Promise", age: 20, score: 85 },
 { name: "David", age: 18, score: 72 },
 { name: "Sarah", age: 22, score: 91 },
 { name: "Michael", age: 19, score: 64 },
 { name: "John", age: 21, score: 78 }
];

console.log("STUDENTS INFORMATION");
students.forEach(student => console.log(`NAME: ${student.name}, AGE: ${student.age}, SCORE: ${student.score}`));

const findStudent = students.find(student => student.name === "Sarah");
console.log(`\nSTUDENT SARAH`);
console.log(findStudent);

const eightyAndAbove = students.filter(student => student.score >= 80);
console.log(`\nSTUDENTS WHO SCORED 80 AND ABOVE`);
eightyAndAbove.forEach(student => console.log(`NAME: ${student.name}, AGE: ${student.age}, SCORE: ${student.score}`));

const fromHighestToLowest = students.sort((a, b) => b.score - a.score);
console.log(`\nSTUDENTS FROM HIGHEST TO LOWEST`);
fromHighestToLowest.forEach(student => console.log(`NAME: ${student.name}, AGE: ${student.age}, SCORE: ${student.score}`));

const fromYoungToOld = students.sort((a, b) => a.age - b.age);
console.log(`\nSTUDENTS FROM YOUNGEST TO OLDEST`);
fromYoungToOld.forEach(student => console.log(`NAME: ${student.name}, AGE: ${student.age}, SCORE: ${student.score}`));

console.log(`\nSTUDENTS FROM HIGHEST TO LOWEST`);
fromHighestToLowest.forEach(student => console.log(`NAME: ${student.name}, AGE: ${student.age}, SCORE: ${student.score}`));