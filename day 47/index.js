/*
Employee Salary Management

You are given:

const employees = [
    { name: "James", age: 25, department: "IT", salary: 120000 },
    { name: "Grace", age: 28, department: "HR", salary: 95000 },
    { name: "Daniel", age: 24, department: "IT", salary: 150000 },
    { name: "Linda", age: 30, department: "Finance", salary: 80000 },
    { name: "Michael", age: 27, department: "IT", salary: 110000 }
];
Instructions
Display each employee's name and salary.
Use if/else to determine whether each employee is a high earner or regular earner.
Salary of 100,000 or above → "High Earner"
Below 100,000 → "Regular Earner"
Create an array containing employees whose salary is 100,000 or above.
Create another array containing salaries below 100,000.
Calculate the total salary.
Create a function called calculateAverageSalary() that returns the average salary.
Display the results.

Hint: Look at methods such as push() and includes().
*/

const employees = [
    { name: "James", age: 25, department: "IT", salary: 120000 },
    { name: "Grace", age: 28, department: "HR", salary: 95000 },
    { name: "Daniel", age: 24, department: "IT", salary: 150000 },
    { name: "Linda", age: 30, department: "Finance", salary: 80000 },
    { name: "Michael", age: 27, department: "IT", salary: 110000 }
];

//To display employee's name and salary
console.log("NAME            SALARY");
for (let i=0; i<employees.length; i++) {
    let earner = function(salary) { 
        if (salary >= 100000){
            return "High Earner";
        } else {
            return "Regular Earner";
        }
    };
    console.log(employees[i].name, "   ", employees[i].salary, earner(employees[i].salary));
}

// Create an array containing employees whose salary is 100,000 or above.
const highSalaries = new Array ();
const lowSalaries = new Array ();
for (let i=0; i<employees.length; i++) {
    if (employees[i].salary >= 100000) {
        highSalaries.push(employees[i]);
    } else {
        lowSalaries.push(employees[i]);
    }
}
console.log();
console.log("Array containing employees whose salary is 100,000 or above", highSalaries);
console.log();
console.log("Array containing employees whose salary is below 100,000", lowSalaries);

// To calculate the total salaries
let totalSalaries = 0;
for (let i=0; i<employees.length; i++) {
    totalSalaries += employees[i].salary;
}
console.log();
console.log("Total Salaries:", totalSalaries);

// Create a function called calculateAverageSalary() that returns the average salary. Display the results.
function calculateAverageSalary(employee_array) {
    let totalSalary = 0;
    for (let i=0; i<employee_array.length; i++) {
        totalSalary += employee_array[i].salary;
    }
    return totalSalary/employee_array.length;
}

console.log();
console.log("The average salary", calculateAverageSalary(employees));
