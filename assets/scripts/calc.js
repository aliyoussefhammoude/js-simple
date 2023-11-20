const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculatee() {
    try {
        const result = customEval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function customEval(expression) {
    // Simple parser and calculator for addition, subtraction, multiplication, and division
    const tokens = expression.match(/\d+|\+|\-|\*|\//g);
    let result = parseInt(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const operand = parseInt(tokens[i + 1]);

        if (operator === '+') {
            result += operand;
        } else if (operator === '-') {
            result -= operand;
        } else if (operator === '*') {
            result *= operand;
        } else if (operator === '/') {
            if (operand === 0) {
                throw new Error('Division by zero is not allowed');
            }
            result /= operand;
        }
    }

    return result;
}
