//Primitive datatypes(7 types)
//Non primitive datatypes(Objects)

//Primitive datatypes:
//1. Number(numerical value)
let age = 25;
console.log(age);
let price = 100.50;
console.log(price);
//2. String
let name = "John Doe";
console.log(name);
//3. Boolean(true or false)
let isPaid = true;
console.log(isPaid);
isFollow = true;
console.log(isFollow);
//4. Undefined
let x; //karon x er value set kora hoini
console.log(x);
//5. Null
let y = null; //karon y er value set kora hoini
console.log(y); //absence of an object value
//6. BigInt
let bigInt = 1234567890;
console.log(bigInt);
//7. Symbol
let sym1 = Symbol("foo");
console.log(sym1);

//Non primitive dataty
//1. Object:
let student = {      //let ba const dilei hobe
    name: "John Doe",
    age: 25,
    isPaid: true  //name age er moto ba diker gulo key hisebe use kora hobe
                  //ar dan diker gulo value hisebe use kora hobe
};
console.log(student);
// Output: { name: 'John Doe', age: 25, isPaid: true }
console.log(student.name);
// Output: John Doe
console.log(student["age"]); // third bracket lagale upore quotes gulo dite hbe
// Output: 25

student["age"]= student["age"]+1;
console.log(student["age"]); // age ta 1 barano holo
student["name"]="Rahul dev";
console.log(student["name"]); // name ta change kora holo

//***Constant variable er value change kora jabe na sudhu constant object er key change kora jabe