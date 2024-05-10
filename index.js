const express=require('express');
const PORT=3000;
const app=express();

app.use(express.static('public'));

app.listen(PORT,(req,res)=>{
    console.log(`Server is Running on Port :${PORT}`);
})