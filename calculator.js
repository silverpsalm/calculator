
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
const equalBtn = document.querySelector("button#equals");
const clearBtn = document.querySelector("#clear");
equalBtn.addEventListener("click", () => {performCalc()}); // nested performCalc bc it kept auto firing

operands.forEach( opBtn => {
    opBtn.addEventListener("click", () => {
        userOutput.textContent += opBtn.textContent;
        operand = opBtn.textContent;
        console.log(operand);
    });
});


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

function performCalc() {

    console.log("Equal pressed.");

    if (!num1 || !num2) {
        console.log("One or more numbers doesn't exist!");
    } else {

        // convert numbers from strings to integers:
        let x = Number(num1);
        let y = Number(num2);

        switch(operand) {
            case "+":
                userOutput.textContent = add(x,y);
                console.log("Add funciton should have been performed.");
                break;
            case "-":
                subtract(x,y);
                break;
            case "*":
                multiply(x,y);
                break;
            case "/":
                divide(x,y);
                break;
            }; 
    };
};
