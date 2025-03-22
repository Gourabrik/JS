//strings
let str ="Gourab";
console.log(str);
str.length; //6
console.log(str.length);
console.log(str[0]); //G //[] er moddhe index dite hbe
console.log(str[1]); //o
console.log(str[6]); //undefined

///Template literals
let sentence=`This is a special string`;
console.log(sentence);
console.log (typeof sentence); //string


let obj ={
    item: "pen",
    price: 24,
};
console.log("the cost of",obj.item,"is",obj.price, "rupees");


//now using template literals
console.log(`the cost of ${obj.item} is ${obj.price} rupees`);
//template literals use korar jonno `` use korte hbe, number highlight holo na 
// ${expression} er moddhe variable dite hbe...... etake bole place holder
//this is called string interpolation

let specialsentence=`This is a special string ${1+2+3}`;
console.log(specialsentence);

//Escape characters
console.log("Apna \nCollege"); // \n mane new line
console.log("Apna \tCollege"); // \t mane tab er moto space debe
let yt="Apna\tCollege";
console.log(yt.length);

//upper case and lower case
let name="      Gourab  Biswas   BW     ";
let newname =name.toUpperCase();
console.log(newname);
//or 2 line ba1 line e likha jabe
console.log(name.toUpperCase());
console.log(name.toLowerCase());
c(name.trim()); //trim mane dui side er space gulo remove korbe
//JavaScript string are immutable





