const express = require('express')
const app = express();
app.get("/",(req,res)=>{
    res.send("hello ")
})
app.get("/add",(req,res)=>{
    let {a:firstNumber ,b : secondNumber} = req.query;
    let sum =  parseInt(a)+parseInt(b);
    res.send({sum})
})
app.listen(3000)
