//counter delema problem
//callback chainning
//callback hell
//callback doom
//Pyramid of Doomsday
let err;
function transact(title,callback){
    if(title.toUpperCase()!=title)
    err = new Error("Not in Uppercase");
    callback(err);
    setTimeout
}

    transact("DEALER",(err)=>{
       if(err)
       console.log(err);
       else
        console.log("DEALER has done Transaction"); 
        transact("WHOLESALER",(err)=>{
            if(err)
            console.log(err);
            else
             console.log("WHOLESALER has done Transaction"); 
         })
    })
    //FOR synhronize the solution is call back chainning
    
