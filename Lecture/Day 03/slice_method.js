//String methods
let str = "0987654321"
console.log(str.slice (1,3)) //returns part of string

// Concatenation
let str1 = "Gourab";
let str2 = "Biswas";
let result = str1.concat(str2); // joins str2 with str1
console.log(result);
//or
let strA = "Gourab";
let strB = "Biswas";
let resultA = strA + strB; // joins strB with strA
console.log(resultA);
//or
console.log(strA + strB); // joins strB with strA

//replace function die string er kono akta character change kora jay ba value take find kora jay
let strC = "Gourab";
console.log(strC.replace( "Gourab", "RIK" )); //replace Gourab with RIK
console.log(strC.replace( "G", "S" )); //only ekta character change korbe


//Character at method
let strD = "i love javascript";
console.log(strD.charAt( 8)) //8 number sthane kon variable ta ache seta amader dekhabe 

  