const express = require ("express");
const { json } = require("stream/consumers");
const app = express();

const port = 3005;
app.use(express.json());
// function isOldEnough(age){
//     if(age>=14)
//     return true;
//     return false;
// }
function isOldEnoughMiddleware(req,res,next){
    const age = req.age;
    if(age>=14){
        next();
    }else{
        res.status(403).json({
            msg:"access denied as your age is low"
        })
    }
}
function ticketchecker(req,res,next){
    const ticket = req.body.ticket;
    if(ticket=='free'){
        next();
    }else{
        res.status(403).send("access denied");
    }
}
// app.use(ticketchecker);
app.use(isOldEnoughMiddleware);
app.get("/ride1",(req,res)=>{
    res.json({
        msg:"you rode the first ride"
});
   
})


app.get("/ride2",(req,res)=>{
    res.json({
        msg:"you rode the 2nd ride"
});
})
app.get("/ride3",(req,res)=>{
    res.send("you rode the 3rd ride");
})

app.listen(`${port}`,(req,res)=>{
    console.log(`running at port ${port}`);
})