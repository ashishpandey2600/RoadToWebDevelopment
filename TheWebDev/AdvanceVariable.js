
//Hoisting  - Memory allocation before code execution

sayhello();
console.log(k);
function sayhello(){
    console.log("hello world");
}
var v = [1,"Ashish Pandey",3];
var k = 2;


console.log("For loop starts");
for(let i=0;i<3;++i)
{
    console.log(v[i]);
}