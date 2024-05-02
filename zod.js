const express = require("express");
const app = express();
const zod = require("zod");
const port = 3002;
const schema = zod.array(zod.number());
/*const schema = zod.object({
    email:zod.string(),
    password:zod.string(),
    country:zod.literal("IN").or(zod.literal("US")),
    kidneys:zod.array(zod.number())
})
*/
app.use(express.json());
app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg:"invalid input"
        })
    }
    else{
    res.send({
        response
    })
}
});

app.listen(`${port}`, () => {
    console.log(`listening to port ${port}`);
})