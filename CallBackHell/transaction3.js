let err;
function transact(title,callback){
    let random = Math.floor(Math.random()*100)
    if(title.toUpperCase()!=title)
    {
        err= new Error('Not in upper case')
    }
    setTimeout(()=> callback(err),random)
}
transact('DEALER',(err)=>{
    if(err)
     console.log(err);
    else{
       console.log("DEALER has done transaction");

       transact('RETAILER',(err)=>
       {
           if(err)
           console.log(err);
           else
           console.log("RETAILER has done transaction");
       }); 
    }  
});


