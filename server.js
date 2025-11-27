const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

app.use(bodyParser.text({ type: "application/xml" }));

app.post("/companies", async (req, res) => {
    console.log("🚀 Received XML Body:\n", req.body);

    res.setHeader("Content-Type", "application/xml");
    return res.send(req.body);  
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on PORT", PORT));