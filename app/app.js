const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("I'm inside docker! I'm testing for changes");
});

const port = 3000;

app.listen(port, () => {
    console.log(`Express listening at port:${port}`);
});