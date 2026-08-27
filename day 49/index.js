/*
Problem 4 — Football Players
const players = [
    { name: "John", age: 21, position: "Forward", goals: 12 },
    { name: "Peter", age: 24, position: "Midfielder", goals: 6 },
    { name: "David", age: 19, position: "Forward", goals: 15 },
    { name: "James", age: 26, position: "Defender", goals: 2 },
    { name: "Samuel", age: 22, position: "Forward", goals: 9 }
];
Instructions
Display each player's name and number of goals.
Use if/else:
10 or more goals → "Top Scorer"
Below 10 → "Regular Scorer"
Create an array containing players who scored 10 or more goals.
Create another array containing the scores/goals of players who scored 5 or more goals.
Calculate the total number of goals.
Create calculateAverageGoals() to calculate the average goals.
Display the results.
*/

const players = [
    { name: "John", age: 21, position: "Forward", goals: 12 },
    { name: "Peter", age: 24, position: "Midfielder", goals: 6 },
    { name: "David", age: 19, position: "Forward", goals: 15 },
    { name: "James", age: 26, position: "Defender", goals: 2 },
    { name: "Samuel", age: 22, position: "Forward", goals: 9 }
];

console.log("PLAYERS NAME AND GOALS");
players.forEach(player => {
    let status;
    if (player.goals >= 10) {
        status = "Top scorer";
    } else {
        status = "Regular scorer";
    }
    console.log(`NAME: ${player.name}, GOALS: ${player.goals} -- ${status}`);
});

let scoreTenOrMore = players.filter(player => player.goals >= 10);
console.log("\nPLAYERS WHO SCORED 10 AND ABOVE GOALS");
scoreTenOrMore.forEach(player => {
    console.log(`NAME: ${player.name}, GOALS: ${player.goals}`);
});

// Create another array containing the scores/goals of players who scored 5 or more goals.
let scoreFiveOrMore = new Array();
players.forEach(player => {
    if (player.goals >= 5) {
        scoreFiveOrMore.push(player);
    }    
});
console.log("\nPLAYERS WHO SCORED 5 AND ABOVE");
scoreFiveOrMore.forEach(player => {  
    console.log(`NAME: ${player.name}, GOALS: ${player.goals}`);
});

let totalGoals = players.reduce(((sum, score) => sum + score.goals), 0);
console.log("\nThe total number of goals:" + totalGoals);

function calculateAverageGoals(array) {
    return array.reduce(((sum, score) => sum + score.goals), 0) / array.length;
};

console.log("\nThe Average score:" + calculateAverageGoals(players));