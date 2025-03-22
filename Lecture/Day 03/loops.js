// for loop
///Print 1 to 5
for (let i=1 ; i<=5; i++) { // initialization, stopping, increment or updation
    console.log("Gourab");         //i++ er jaigay i=i+1 likhleo eki kaj hbe
} //5 bar nam ta print hbe   i=1  1<=5  true  print 1  i=2  2<=5  true  print 2  i=3  3<=5  true  print 3  i=4  4<=5  true  print 4  i=5  5<=5  true  print 5  i=6  6<=5  false  loop stop
console.log("Loop has ended");

// Calculate sum of 1 to 5
let sum = 0;
for (let i=1; i<=5; i++) {
    sum = sum + i;
}
console.log("sum = ", sum);
console.log("Loop has ended");

for (let i=1 ; i<=5; i++) {
    console.log("i = ", i);
}
//now
for (var i=1 ; i<=5; i++) {
    console.log("i = ", i);
}
console.log( i); //6 // var dile loop er baireo je 6 chilo setao print hbe
 // but never use var in loop

//while loop
//Print 1 to 5
let q = 1;
while(q<=5){
    console.log("q = ", i);
    q++;
}

//do while loop
let p = 1; 
do {
    console.log("p = ", p);
    p++;
}
while(p<=5);

//for of loop  //helps us to put loop condition in  stings and arrays
let str = "Gourab";
let size=0;
for (let G of str) { //G is a variable or iterator --> character by character print hbe
    console.log("g = ", G);
    size++;
}
console.log("size = ", size); //size janie debe

//for in loop

let student={
    name: "Gourab",
    age: 24,
    dept: "CSE"
};
for (let key in student) {
    console.log("key", key, "value=" , student[key]);
}

for (let i=1 ; i<=100; i++) {
    console.log("i = ", i);
    if (i%2===0) {
        console.log("Even number = ", i);
    }
    else {
        console.log("Odd number = ", i);
    }
}

//break and continue
