const express = require("express")
const app = express();
const port = 3000;
app.use(express.json());

// dumb way of doing it
/*
app.get("/health-checkup", (req, res) => {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;
    if (username != "komal" || password != "pass") {
        res.status(400).json({ msg: "something up with your inputs" })
        return
    }
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({ msg: "something up with your inputs" })
        return
    }

    res.json({
        msg: "Your kidney is fine"
    })



    // res.send("your heart is healthy");
})
*/
function userMiddleware(req, res, next) {
    if (username != "komal" || password != "pass") {
        res.status(403).json({
            msg: "Incorrect inputs"
        });
    }
    else {
        next();
    }

};
function kidneyMiddleware(req,res,next){
    if (kidneyId != 1 && kidneyId!=2) {
        res.status(403).json({
            msg: "Incorrect inputs"
        });
    }
    else {
        next();
    }
}
app.use(userMiddleware,kidneyMiddleware);
app.post("/health-checkup",(req,res)=>{
    // res.send("your heart is healthy");
    res.json({
        msg:"hii there"
    })
}
)
app.get("/health-checkup",(req,res)=>{
    res.send("your heart is healthy");
}
)
app.listen(port, () => {
    console.log(`app is listening to port ${port}`);
})