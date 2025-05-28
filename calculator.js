
let add = (a,b) => a + b;
let subtract = (a,b) => a - b;
let multiply = (a,b) => a * b;
let divide = (a,b) => a / b;


let num1 = "";
let operand;
let num2 = "";

const userOutput = document.querySelector("#output");
const numBtns = document.querySelectorAll("div#numbers > button");

const operands = document.querySelectorAll("div#operands > button");
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const equalBtn = document.querySelector("#equals");
const clearBtn = document.querySelector("#clear");

operands.forEach( opBtn => {

    opBtn.addEventListener("click", () => {
        userOutput.textContent += opBtn.textContent;
        operand = opBtn.textContent;
        console.log(operand);
    });
});

// print and store operands only. Equals will perform operation.

numBtns.forEach( button => {

    button.addEventListener("click", () => {
        userOutput.textContent += button.textContent;
        if(!operand) {
            num1 += button.textContent;
            console.log(`button added to num1: ${num1}`);
        } else {
            num2 += button.textContent;
            console.log(`button added to num2: ${num2}`);
        }
    });
});

