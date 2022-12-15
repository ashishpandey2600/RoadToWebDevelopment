// //All varbiles are objects.
// let objects = {
//     hello : 'world'

// }
// let lecture = 10;
// let section = 3;
// let title = 'Javascript';

// const course = {
//     lecture : 10,
//     //  key     : value
//    // property - value
//    section : 3,
//    titile : 'Javascript',
//    nodes: {
//     introduction : 'wecomle to js course'
//    },
//    enroll(){
//     console.log('you are successfully enrolled');
//    }
// }
// function enroll()
// {
//     console.log('you are successfully enrolled');

// }
// course.enroll()
// console.log(course.titile)
// console.log(course)//Dynamic nature
// course.price=999 //object is reference  datatype not premitive datatype thats why constant type is redeclared
// // Other ways

// //factory function

// function createCourse(title){
//     return { 
    
//        titile : title,
      
//     }
// }

// const course2 = createCourse("JavaScript");
// course2.enroll="Enrollment is open";
// console.log(course2);

// //Constructor Funtion

// function Course(title){
//     //points to this functioin
//     this.titile = title,
//     this.enroll = function(){
//         console.log('this is constructor function');

//     }
    

// }
// const cours3 = new Course('Javascript');

// console.log(course.constructor)
// console.log(cours3.constructor)

// // course.checkEnrollment = function(){
// //     console.log('30 users are enrolled');

// // }



// // const Course_1 = new Function( 'title',`
// // this title = title,
// // this.enroll = funtion(){
// //     console.log('you are successfully enrolled');}
// // }
// // `)

// //promitive datatype
// let number =10;
// let number_2 = number

// number=15;
// console.log(number);
// console.log(number_2);//pass by value

// //Reference Datatype
// let obj = {number : 10};
// let obj2 = obj;
// obj.number = 15
// console.log(obj);
// console.log(obj2); //pass by reference


//Sprerad operator
const course = {
    title:"Javascript",
    enroll(){
        console.log('you are successfully enrolled');

    }
}
//1.
// const course_1 = { ...course} // copied by spread operator
// course_1.titile= "c++"

// console.log(course_1)
//2.
// const course_1 = Object.assign({},course)
// course_1.title="c++"

// console.log(course_1)

//3.
for(let key in course)
{
    console.log(key, course[key]);
}

//for of loop
const course_1 = {};
for(let key of Object.keys(course)){
    course_1[key] = course[key];
    console.log(key,course_1[key]);
}//output ["title","enroll"]
//

