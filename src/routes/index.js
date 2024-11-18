const express= require('express')
const app= express()
const port =process.env.port || 3412 ;

app.get('/',(req,res)=>{
    res.send("naola");
})
app.listen(port,(err)=>{
    if (err){
        console.log("error");
    }
    console.log(`the surverer is running on http://localhost:${port}`);
})
