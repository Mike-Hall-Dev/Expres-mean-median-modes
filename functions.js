function stringToNumArray(numString) {
    numStrings = numString.split(',')
    nums = []
    for (num of numStrings) {
        num = Number(num)
        nums.push(num)
    }
    return nums;
}

function findMean(numberList) {
    let total = 0;
    for (number of numberList) {
        number = Number(number)
        total += number;
    }
    mean = total / numberList.length
    return Number(mean.toFixed(1))
}

function findMedian(numbersList) {
    const mid = Math.floor(numbersList.length / 2);
    const nums = [...numbersList].sort((a, b) => a - b);
    return numbersList.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

function findMode(numbersList) {
    let max = 0;
    let counts = {};
    for (let i = 0; i < numbersList.length; i++) {
        counts[numbersList[i]] = (counts[numbersList[i]] + 1) || 1;
    }
    for (const [key, value] of Object.entries(counts)) {
        if (value > max) {
            max = key
        }
    }
    return Number(max);
}

module.exports = {
    stringToNumArray: stringToNumArray,
    findMean: findMean,
    findMedian: findMedian,
    findMode: findMode
};