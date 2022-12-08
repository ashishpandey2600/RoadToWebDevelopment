let animal ={//Objects
    name: "Cow",
    legs : 4
}

//Dot Notation
console.log(animal.name);

let legsProp = "legs";
//Bracket Notation
console.log(animal[legsProp]);

//Arrays
let selectBooks = ["The Rudest book","Think and grow rich"];
console.log(selectBooks[1]);
//Prototyping of funtions are always their

function namasteWorld(){
    console.log("Namste Wrold");
}

namasteWorld();

function addition(a,b){
    return a+b;
}
console.log(addition(5,4));