const express= require('express')
const app= express()
const port =process.env.port || 3412 ;
app.get("/",(req,res)=>{
    res.status(200).send("first project");
})
//name route
app.get('/name',(req,res)=>{
    res.status(200).send("Naol Lemessa Ayana");
})
//hobbey route
app.get('/hobby',(req,res)=>{
    // my  hobbey object
    const funnymoment={
        reading:["tuseday with morey","atomic habit","lon walk to free dom"],
        football:["Arsenal","barcelona"],
        sport:["football","basketball"]
    }
    if (Object.keys(funnymoment).length===0){
      res.status(400).json({error:'there is no hobby'})
    }
      
    else{
        res.status(200).json(funnymoment)
    }  ;

})
//dream route
app.get('/dream',(req,res)=>{
    res.status(200).send("the only way out is through")
})
//listening
app.listen(port,(err)=>{
    if (err){
        console.log("error");
    }
    console.log(`the surverer is running on http://localhost:${port}`);
})
