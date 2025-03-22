//Student grade card
// 80-100 -> A
// 70-79 -> B 
// 60-69 -> C
// 50-59 -> D
// 0-49 -> F
let score = prompt('Enter a number:'); 
console.log(score);
if ( score >= 80 && name <= 100) {
    console.log(score, 'A');
    alert ('A');
}
else if ( score >= 70 && name <= 79) {
    console.log(score, 'B');
    alert ('B');
}
else if ( score >= 60 && name <= 69) {
    console.log(score, 'C');
    alert ('C');
}
else if ( score >= 50 && name <= 59) {
    console.log(score, 'D');
    alert ('D');
}
else if ( score >= 0 && name <= 49) {
    console.log(score, 'F');
    alert ('F');
}