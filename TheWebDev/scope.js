// the scope is by default global
var name = 'Ashish';
function sayName(){
    var marks = 10;
    console.log(name);
}

sayName()
console.log(sayName);

// Global Scope
function first(){
    //Local Scope #1
    var x = 4;
    console.log(x);
    function childOfFirst(){
        var x = 2;
        console.log(x);
        //Local Scope #2
    }
}

first();

//Global Scope
function second(){
   
    //Local Scope #3
}
//global Scope

second();

let x= 10;
{
    let x = 1;
    console.log(x);
}

console.log(x); // x=1 if  var x and x= 10 id let

//Lexical Scope
function Dada(){
    var name = 'Ashish Pandey';
    // likes is not accessible here
    function Papa(){ 
        //name is accessible here
        //likes is not accessible here
        function Beta(){
            //Innermost level if the scope chain
            // name is also accessible here
            var likes = 'Coding';
        } 
        // console.log(likes);
        Beta()
    }
    Papa()
}
Dada()