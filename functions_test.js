const { functionsLib } = require('./functions');


describe("Test Mean,Median,Mode", function () {

    test("mean", function () {
        let nums = [1, 2, 3, 4];
        let mean = functionsLib.findMean(nums)
        expect(mean).toEqual(2.5)
    });

    test("median", function () {
        let nums = [1, 2, 3, 4];
        let median = functionsLib.findMedian(nums)
        expect(median).toEqual(2.5)
    });

    test("mode", function () {
        let nums = [1, 1, 2, 3, 4];
        let mode = functionsLib.findMode(nums)
        expect(mean).toEqual(1)
    });
})