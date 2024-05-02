const express = require("express");
const app = express();
const zod = require("zod");
const port = 3001;
app.use(express.json());
app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    if (!kidneys) {
        res.json({
            msg: "wrong inputs"
        })
    } else {
        const kidneyLength = kidneys.length;

        res.send(`you have ${kidneyLength} kidneys`);
    }
});

app.use((err, req, res, next) => {
    res.json({
        msg: "Sorry something went wrong"
    })
})
app.listen(`${port}`, () => {
    console.log(`listening to port ${port}`);
})