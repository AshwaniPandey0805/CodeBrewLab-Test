// Question 02

const students = [
    {name : "Alice", score : 85},
    {name : "Bob", score : 60},
    {name : "Charlie", score : 92},
    {name : "David", score : 75}
]


function getHighScores(student, value){
    let highScorers = student.filter(obj => obj.score > value)
    return highScorers;
}


const result02 = getHighScores(students, 70);
console.log(result02)