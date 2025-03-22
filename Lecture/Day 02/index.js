//Hello World print korlam
console.log('Hello World!');

//Opeator:-
// 1. Arithmetic Operator: +, -, *, /, % (modulus), ** (exponantiation), ++ (increment operator), -- (decrement operator)
let a=10;                        // a++=a+1 & a--=a-1 (it needs only 1 variable)
let b=20;                        // ++ & -- are unary operator
let c=a+b;
console.log("a= ",a, "b= ",b);
console.log(c);
//or
console.log("a + b = ", a + b );
console.log("a - b = ", a - b );
console.log("a * b = ", a * b );
console.log("a / b = ", a / b );
console.log("a % b = ", a % b ); //modulus mane vagses debe
console.log("a ** b = ", a ** b ); //exponantiation mane a^b

//unary operator:-
console.log("a++ = ", a++ ); //increment operator
console.log("a-- = ", a-- ); //decrement operator
//or
a++;                    // a++ = post increment
console.log("a+", a);   // ++a = pre increment
console.log("a-", a);   // a-- = post decrement
                        // --a = pre decrement

console.log("a++ = ", a++ ); //ei obdhi purono value asbe
console.log("a= ", a); // ekhan theke new bere jaoa value asbe

console.log("--a = ", --a ); //age minus ta hobe then value asbe
console.log("a= ", a); // tai ekhane value elo

// 2. Assignment Operator: =, +=, -=, *=, /=, %=, **=
let x=10;
let y=20;
console.log("x= ", x, "y= ", y);
x+=y;   // x+=y means x=x+y  // (+) ar (=) er moddhe gap hbe na
console.log("x+=y= ", x);
x-=y;   // x-=y means x=x-y
console.log("x-=y= ", x);
x*=y;   // x*=y means x=x*y
console.log("x*=y= ", x);
x/=y;   // x/=y means x=x/y
console.log("x/=y= ", x);
x%=y;   // x%=y means x=x%y
console.log("x%=y= ", x);
x**=y;  // x**=y means x=x**y
console.log("x**=y= ", x);

// 3. Comparison Operator: ==, ===, !=, !==, >, <, >=, <=
let m=10;
let n=20;
console.log("m= ", m, "n= ", n);
console.log("m==n: ", m==n); // == mane equal
console.log("m===n: ", m===n); // === mane strictly equal
console.log("m!=n: ", m!=n); // != mane not equal
console.log("m!==n: ", m!==n); // !== mane strictly not equal
console.log("m>n: ", m>n); // > mane greater than
console.log("m<n: ", m<n); // < mane less than
console.log("m>=n: ", m>=n); // >= mane greater than equal
console.log("m<=n: ", m<=n); // <= mane less than equal

// 4. Logical Operator: && (logical and), || (logical or), ! (logical not)
let p=true;
let q=false;
console.log("p= ", p, "q= ", q);
console.log("p && q: ", p && q); // && mane and
console.log("p || q: ", p || q); // || mane or
console.log("!p: ", !p); // ! mane not

//otherwise
let r=10;
let s=20;
let cond1 = r<s;
let cond2 = r==s;
console.log("cond1 && cond2 = ",cond1 && cond2); 

//logical or er kaj holo jodi 1 ta true thake tahole true return korbe
//jodi 2 ta false thake tahole false return korbe

//logical not er kaj holo jodi true thake tahole false return korbe
//jodi false thake tahole true return korbe..... puro ulto kore dey
// logical not needs only 1 variable
let o=6;
let l=5;
console.log("!(6<5): ", !(o<l)); //true //ulte dilo
