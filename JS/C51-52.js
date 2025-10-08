let student = {
    name: "Laura",
    grades: [5, 4, 3]
};

let avg = student.grades.reduce((a, b) => a + b) / student.grades.length;
console.log(avg);