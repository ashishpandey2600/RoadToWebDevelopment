//All varbiles are objects.
let objects = {
    hello : 'world'

}
let lecture = 10;
let section = 3;
let title = 'Javascript';

const course = {
    lecture : 10,
    //  key     : value
   // property - value
   section : 3,
   titile : 'Javascript',
   nodes: {
    introduction : 'wecomle to js course'
   },
   enroll(){
    console.log('you are successfully enrolled');
   }
}
function enroll()
{
    console.log('you are successfully enrolled');

}
course.enroll()
console.log(course.titile)
console.log(course)//Dynamic nature
course.price=999 //object is reference  datatype not premitive datatype thats why constant type is redeclared
// Other ways

//factory function

function createCourse(title){
    return { 
    
       titile : title,
      
    }
}

const course2 = createCourse("JavaScript");
course2.enroll="Enrollment is open";
console.log(course2);

//Constructor Funtion

function Course(title){
    //points to this functioin
    this.titile = title,
    this.enroll = function(){
        console.log('this is constructor function');

    }
    

}
const cours3 = new Course('Javascript');

console.log(course.constructor)
console.log(cours3.constructor)

// course.checkEnrollment = function(){
//     console.log('30 users are enrolled');

// }
