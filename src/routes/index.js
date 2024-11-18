const express= require('express')
const app= express()
const port =process.env.port || 3412 ;
app.get("/",(req,res)=>{
    res.send("welcome");
})
app.get('/name',(req,res)=>{
    res.send("Naol Lemessa Ayana");
})
app.get('/hobby',(req,res)=>{
    // my  hobbey object
    const funnymoment={
        reading:["tuseday with morey","atomic habit","lon walk to free dom"],
        football:["Arsenal","barcelona"],
        sport:["football","basketball"]
    }
    res.json(funnymoment);

})
app.get('/dream',(req,res)=>{
    res.send("the only way out is through")
})

app.listen(port,(err)=>{
    if (err){
        console.log("error");
    }
    console.log(`the surverer is running on http://localhost:${port}`);
})
