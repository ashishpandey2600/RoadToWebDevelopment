let PromiseToGetGoodMarks = new Promise((resolve,reject)=>{
    let isGoodMarks=false;//false or true
    if(isGoodMarks){
        resolve('Bike');
    }
    else{
        reject('Quarantine')
    }
});

PromiseToGetGoodMarks.then((fromResolve)=>{
    console.log("Hey I got " + fromResolve);
})
.catch((fromReject)=>{
    console.log("hey I got "+ fromReject);
})