//A promise is a javascript object

//A promise in js is like in real life

//Father to his Son:


// Contract: To ensure that a promise is always fulfilled,
// a contract is WritableStreamDefaultController.applyA contract contains sonditions like real world contract

//1. Assertion
//2. Rewards- Resolve
//3. Punishment - reject
//4.Contract


let PromiseToGetGoodMarks = new Promise((resolve,reject)=>{
    //assertion
    let isScoredGood = true;

    if(isScoredGood){
        resolve('Bike');
    }
    else{
        reject('Quarantine');
    }
});
PromiseToGetGoodMarks.then((fromResolve)=>{
    console.log('Hey I Got '+fromResolve);

})
.catch((fromReject)=>{
    console.log('Hey I Got '+fromReject);
})