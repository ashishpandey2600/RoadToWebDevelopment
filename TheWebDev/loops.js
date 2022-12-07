/*
Types of Loops in java:-

1. for 

2. do...while

3. while

4. for...in 

5. For...of


*/ 
for(let x=0;x<5;x++)
console.log("Namaste Worl");

let x=0;
do{
    console.log("Namaste world in do");
    x++;
}while(x<4);

x=5;
while(x--)
{
    console.log("Namaste world in while");

}

//for...in

let animal = {
name : "Zebra",
leg : 4
};

for(let key in animal){
    console.log(key);//console.log(keey,animal(key));
}

//Arrays
let names = ["Rahul","Neha","Ashish","Rishabh"];
for(let index in names)
{
    console.log(index);
}

//For of loop

for(let name of names){
    console.log(name);
}



