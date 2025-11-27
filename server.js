const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

app.use(bodyParser.text({ type: "application/xml" }));

app.post("/companies", async (req, res) => {
    console.log("Received body:", req.body);

    res.setHeader("Content-Type", "application/xml");
    return res.send(req.body);
});

app.listen(3000, () => console.log("Running on https://vartopia-api.onrender.com/"));