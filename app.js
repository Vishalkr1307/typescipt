"use strict";
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + " " + num2;
    }
}
add(1, 3);
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var btn = document.querySelector("button");
btn.addEventListener('click', () => {
    var numA = num1.value;
    var numB = num2.value;
    var result = add(numA, numB);
    printResult({
        val: result,
        timestamp: new Date()
    });
    var result2 = add("1", "2");
    printResult({
        val: result2,
        timestamp: new Date()
    });
});
var resultArray = [];
var testResult = [];
function printResult(resObj) {
    if (typeof resObj.val == "string") {
        testResult.push(resObj.val);
    }
    else if (typeof resObj.val == "number") {
        resultArray.push(resObj.val);
    }
}
const newPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res({
            name: "success",
        });
    }, 100);
});
newPromise.then((res) => {
    console.log(Object.keys(res));
});
