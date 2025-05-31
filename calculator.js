
let add = (a,b) => Math.floor(a + b);
let subtract = (a,b) => a - b;
let multiply = (a,b) => a * b;
let divide = (a,b) => a / b;


let num1 = "";
let operand = "";
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
equalBtn.addEventListener("click", () => {performCalc()}); // nested performCalc bc it kept auto firing
clearBtn.addEventListener("click", () => {clearAll()});

function clearAll() {
    num1 = "";
    operand = "";
    num2 = "";
    userOutput.textContent = "";
};

operands.forEach( opBtn => {
    opBtn.addEventListener("click", () => {
 
    if (opBtn.textContent != "=") {

        if (!num1) {
            alert("Enter a number first.")   
        } else if (num2) {
            performCalc();
            operand = opBtn.textContent;
            userOutput.textContent += operand;
        } else if (!num2 && operand) {
            // if first number exists AND operand already present
            let str = userOutput.textContent;
            userOutput.textContent = str.slice(0,-1);
            operand = opBtn.textContent;
            userOutput.textContent += operand;
        } else {
            // if number 1 exists and NO operand does yet
            console.log("Operand added normally. Default.");
            operand = opBtn.textContent;
            userOutput.textContent += operand; 
        }
    }  
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

        let result;
        
        switch(operand) {
            case "+":
                result = add(x,y);
                console.log("Add funciton should have been performed.");
                break;
            case "-":
                result = subtract(x,y);
                break;
            case "*":
                result = multiply(x,y);
                break;
            case "÷":
                result = divide(x,y);
                break;
            }; 
        
    
        userOutput.textContent = result;
        // if result has decimal:
        num1 = result;
        num2 = "";
        operand = "";
        console.log(`Post-add, num1: ${num1} and num2: ${num2}`);
    };
};
