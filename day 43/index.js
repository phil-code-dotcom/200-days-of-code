
const studentArray = ["KIlingdang", 30, "sss1", true];

function studentDetails (studentArray) {
    console.log("FULL STUDENT INFO");
    console.log(studentArray);
};

function studentDetailsPart (studentArray) {
    console.log("STUDENTS PART INFO");
    console.log("Students name:", studentArray[0]);
    console.log("Students age:", studentArray[1]);
    console.log("Students class:", studentArray[2]);
};

studentDetails(studentArray);
console.log();
studentDetailsPart(studentArray);