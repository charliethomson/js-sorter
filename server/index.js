
const express = require("express");
const algorithms = require("./algorithms");
const app = express();
const port = 8088;


// Render Frontend
app.get("/", (req, res) => {
    res.send(manager);
});

app.get("/test", (req, res) => {
    let sorter = new algorithms.BubbleSorter();
    let results = [];
    let result = sorter.step([4, 1, 2, 3, 5, 2]);
    while (!result.ok) {
        let moved = result.items[result.result[1]];
        console.log(`${moved} moved from ${result.result[0]} to ${result.result[1]}`);
        results.push(result);
        result = sorter.step(result.items);
    }
    res.send(result);
});

// Api Routes
app.post("/api/with/:algorithm", (req, res) => {
    let algo = req.params.algorithm;
    if (false) {//(!isValidAlgorithm(algo)) { // if invalid algorithm:
        res.json({ error: `Unrecognized sorting algorithm ${algo}` });
        res.status(500);
    } else {
        manager.algorithm = algo;
        res.json({ success: algo });
        res.status(200);
        console.log(`Successfully set algorithm -> ${manager.algorithm}`);
    }
});

app.get("/api/step", (req, res) => { });

app.get("/api/check", (req, res) => { });


app.listen(port, () => {
    console.log(`Listening on ${port}`);
});