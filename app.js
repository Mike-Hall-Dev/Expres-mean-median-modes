const express = require('express');
const ExpressError = require('./expressError');
const functionsLib = require('./functions');

const app = express();

app.use(express.json());


function checkIfEmpty(numString) {
    if (numString.length === 0) {
        throw new ExpressError("Nums are required", 400);
    }
}

function checkIfNum(nums) {
    nums = nums.split(',');
    for (num of nums) {
        if (isNaN(num)) {
            throw new ExpressError(`${num} is not a number`, 400);
        }
    }
}

app.get("/mean", (req, res, next) => {
    try {
        numbers = req.query['nums'];
        checkIfEmpty(numbers);
        checkIfNum(numbers);
        numbers = functionsLib.stringToNumArray(numbers)
        mean = functionsLib.findMean(numbers)
        res.json({ response: { operation: "mean", value: `${mean}` } })
    } catch (e) {
        next(e)
    }
})

app.get("/median", (req, res, next) => {
    try {
        numbers = req.query['nums'];
        checkIfEmpty(numbers);
        checkIfNum(numbers);
        numbers = functionsLib.stringToNumArray(numbers)
        median = functionsLib.findMedian(numbers)
        res.json({ response: { operation: "median", value: `${median}` } })
    } catch (e) {
        next(e)
    }
})

app.get("/mode", (req, res, next) => {
    try {
        numbers = req.query['nums'];
        checkIfEmpty(numbers);
        checkIfNum(numbers);
        numbers = functionsLib.stringToNumArray(numbers)
        mode = functionsLib.findMode(numbers)
        res.json({ response: { operation: "mode", value: `${mode}` } })
    } catch (e) {
        next(e)
    }
})

// Error handler
app.use(function (err, req, res, next) {
    let status = err.status || 500;
    let message = err.msg;

    // set the status and alert the user
    return res.status(status).json({
        error: { message, status }
    });
});

app.listen(3000, () => {
    console.log('App on port 3000')
});