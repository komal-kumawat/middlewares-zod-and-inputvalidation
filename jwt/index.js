const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());
// In memory database
const All_users = [
    {
        username:"komal@gmail.com",
        password:"1782",
        name:"komal"
    },
    {
        username:"rajat@gmail.com",
        password:"1782",
        name:"rajat"
    },
    {
        username:"kuldeep@gmail.com",
        password:"1782",
        name:"kuldeep"
    }
];
function userExists(username,password){
    // const userexists = false;
    for(let i=0;i<All_users.length;i++){
        if(All_users[i].username == username && All_users[i].password==password){
            // userexists = true;
            return true;
        }
    }
    return false;
}
app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"user does not exist",
        });
    }
    var token = jwt.sign({username:username},jwtPassword);
    return res.json({
        token,
    });

});

app.get("/users",(req,res)=>{
    const token = req.headers.authorization;
    const decoded = jwt.verify(token,jwtPassword);
        const username = decoded.username;
        res.json({
            users:All_users.filter((value)=>{
                if(value.username!=username )
                return true;
            return false;
            })
        })
    // try{
    //     const decoded = jwt.verify(token,jwtPassword);
    //     const username = decoded.username; 
    // }
    // catch(err){
    //     return res.status(403).json({
    //         msg:"invalid token"
    //     });
    // }
});

app.listen(3000,()=>{
    console.log("running at port 3000");
})

