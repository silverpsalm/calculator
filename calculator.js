
let add = (a,b) => a + b;
let subtract = (a,b) => a - b;
let multiply = (a,b) => a * b;
let divide = (a,b) => a / b;

let num1 = "";
let operand = "";
let num2 = "";

const userOutput = document.querySelector("#output");
const numBtns = document.querySelectorAll("button.digit");
const operands = document.querySelectorAll("div#operands > button");
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const equalBtn = document.querySelector("#equals");
const clearBtn = document.querySelector("#clear");
const decimalBtn = document.querySelector("button#decimal");
const backBtn = document.querySelector("button#back");
equalBtn.addEventListener("click", () => {performCalc()}); // nested performCalc bc it kept auto firing
clearBtn.addEventListener("click", () => {clearAll()});

backBtn.addEventListener("click", () => {
    let arr = userOutput.textContent;
    userOutput.textContent = arr.slice(0,-1);

    if(!operand && !num2) {
        let fixOne = num1.slice(0,-1);
        num1 = fixOne;
    } else if (operand && !num2) {
        operand = "";
    } else {
        let fixTwo = num2.slice(0,-1);
        num2 = fixTwo;
    }
});

function clearAll() {
    num1 = "";
    operand = "";
    num2 = "";
    userOutput.textContent = "";
};

operands.forEach( opBtn => {
    opBtn.addEventListener("click", () => {
        let outputLength = userOutput.textContent.length;
        console.log(`outputLength: ${outputLength}`);
        // sets calculated result to num1 if an operator is clicked
        if(!num1 && userOutput.textContent && opBtn.textContent != "=") {
            num1 = userOutput.textContent;
            console.log(`our num1: ${num1}`);
        }
        //         if(!num1 && !num2 && !operand && userOutput.textContent != 0) {
        //     num1 = userOutput.textContent;
        //     console.log(`Ouur new code to repopulate num1.
        //         num1: ${num1}
        //         num2: ${num2}
        //         operand: ${operand}`);
        // }


    if (opBtn.textContent != "=") {

        // populate num1 with result if it exists

        if (!num1) {
            alert("Enter a number first.") ;  
        } else if (num2) {
            performCalc();
            operand = opBtn.textContent;
            userOutput.textContent += operand;
        } else if (num1 && !num2 && operand) {
            // if first number exists AND operand already present
            let str = userOutput.textContent;
            userOutput.textContent = str.slice(0,-1);
            operand = opBtn.textContent;
            userOutput.textContent += operand;
        } else {
            // if number 1 exists and NO operand does yet
            operand = opBtn.textContent;
            userOutput.textContent += operand; 
        }
    }  
    });
});


numBtns.forEach( button => {

    button.addEventListener("click", () => {

        // clear calculated result after a digit click
        if (!num1 && !operand) {
            userOutput.textContent = "";
        } else if (!num1 && operand) {
            // a fix for chained calculations on non-equal button press
            let newOne = userOutput.textContent;
            num1 = newOne.slice(0,-1);
        }

        userOutput.textContent += button.textContent;

        if(!operand) {
            num1 += button.textContent;
        } else {
            num2 += button.textContent;
        }
    });
});

function performCalc() {
    console.log("Equal pressed.");


    if (!num1 || !num2) {
        console.log("One or more numbers doesn't exist!");
    } else {

        let x = Number(num1);
        let y = Number(num2);

        if (y == 0) {
            alert("No dividing by zero... ");
            num2 = "";
        } else {

            let result;

            switch(operand) {
                case "+":
                result = add(x,y);
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
        
        // if result has decimal:
        if (hasDecimal(result)) { 
            result = result.toFixed(4);
            userOutput.textContent = result;
            console.log("decimal found so result was just rounded.")

        } else {
        userOutput.textContent = result;
            console.log("decimal wasn't found so result added as is")

        }

        num1 = "";
        num2 = "";
        operand = "";
        }
    };
};

// check if result is a whole number or not:
function hasDecimal(x) {
    if (x % 1 == 0) {
        return false;
        console.log("has a decimal");
    } else {
        return true;
        console.log("no decimal found!");
    }   
}


decimalBtn.addEventListener("click", () => {
    let dec = ".";
    
        // clear calculated result after a click
        if(!num1) {
            userOutput.textContent = "";
        } 

        if(!operand && !decCheck(num1)) {
            num1 += dec;
            userOutput.textContent += dec;

        } else if(num1 && operand && !decCheck(num2)) {
            num2 += dec;
            userOutput.textContent += dec;
        } else {
            console.log("Multiple decimal points? Amateur.")
        }

    });

// check user input for presence of decimal:
function decCheck(x) {
    let decRegex = /\./;
    if(decRegex.test(x)) {
            return true;
        } else {
            return false;
        }
    }