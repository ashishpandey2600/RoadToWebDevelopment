/*ndefined
let string = "this is a string"
undefined
string
'this is a string'
typeof string
'string'
let badstring1 = This is a test string
VM305:1 Uncaught SyntaxError: Unexpected identifier 'is'
let badstring2 = "This is a test string'
VM364:1 Uncaught SyntaxError: Invalid or unexpected token
let badstring1 = 'You\'ve';
undefined
badstring1
"You've"
"hello welcome to practice
VM627:1 Uncaught SyntaxError: Invalid or unexpected token
"hello welcome to practice"
'hello welcome to practice'
"hello welcome to practice" + "javascript"
'hello welcome to practicejavascript'
"string" +100
'string100'
"19" + "67"
'1967'
19+09
28
let numstring = "123"
undefined
Number(numstring)
123
let y = Number(numstring);
undefined
y
123

y.toString();
'123'
`$(/Hello + Welcome to practice) your Score is 123`
'$(/Hello + Welcome to practice) your Score is 123' */

var favShow = "Game Of Throwns";
console.log(favShow.length) //15

console.log(favShow[0]); //6

console.log(favShow[favShow.length-1]); //s

//returns position of substring
console.log(favShow.indexOf("of")); //5

console.log(favShow.slice(5,7));

var srk = "My Name is Ashish ";
condole.log(srk.toUpperCase());
condole.log(srk.toLowerCase());
