
let outputValue = document.querySelector('#output-value');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');

let displayValue = '';
let pendingValue;
let evalStringArray = [];

function getOutput() {
    return outputValue.innerText;   
}

function printOutput(num) {
    outputValue.innerText = num;
}


for(let i=0;i<numbers.length;i++) {
    numbers[i].addEventListener('click', function(){
        let output = getOutput();
        output = output + this.id;
        printOutput(Number(output));
    }
)}

for(let i=0;i<operators.length;i++) {
    operators[i].addEventListener('click', function(){
        let output = getOutput();
        let hundred = 100;
        let newOutput;
        let dec = '.';
        
        if(this.id == "clear") {
            printOutput('');
            evalStringArray = [];
        } 
        
        if (this.id == "backspace" && output.length !== 1) {
            newOutput = output.substring(0, output.length - 1);
            printOutput(newOutput);
        } else {
            printOutput('');
        }
        
        if (this.id == "%" && outputValue.innerText === '') {
            printOutput('');
        } else if (this.id == "%" && outputValue.innerText !== '') {
            let percent = output / hundred;
            printOutput(percent);
        }

        if (this.id == "decimal") {
            let decResult = output;
        if(!output.includes('.')){
                decResult = output + dec;
            }
            return printOutput(decResult);
        }
        
        if (this.id == "/") {
            pendingValue = output;
            evalStringArray.push(pendingValue);
            evalStringArray.push('/');
        }

        if (this.id == "*") {
            pendingValue = output;
            evalStringArray.push(pendingValue);
            evalStringArray.push('*');
        }

        if (this.id == "-") {
            pendingValue = output;
            evalStringArray.push(pendingValue);
            evalStringArray.push('-');
        }

        if (this.id == "+" && output !== '') {
            pendingValue = output;
            evalStringArray.push(pendingValue);
            evalStringArray.push('+');
        }

        if (this.id == "=" && output !== '') {
            evalStringArray.push(output);
            printOutput('');
            const result = eval(evalStringArray.join(''));
            printOutput(result);
            pendingValue = result;
            evalStringArray = [];
        }
        
    })
    }