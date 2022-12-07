let cleanKitchen = new Promise((resole,reject)=>{
    let isClean = false;
    if(isclean)
        resolve("kitchen is clean");
   else
   reject("kitchen unclean");
        
})

cleanKitchen
.then((resoleved)=>{
    console.log(resoleved + "You'll get an Ice-Cream")
    return new Promise()
})
.catch((rejected)=>{
    console.log(rejected+"You'll not get your reward")
})
