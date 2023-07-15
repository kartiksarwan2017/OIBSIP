var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

var operand1 = 0;
var operand2 = null;
var operator = null;

// Check if the given value is an operator (+, -, *, /)
function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

// Iterate through all the buttons
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();

        // If the clicked button is an operator
        if (isOperator(value)) {
            operator = value;
            operand1 = parseFloat(text);
            display.textContent = "";
        }
        // If the clicked button is "AC" (all clear), reset the display
        else if (value == "ac") {
            display.textContent = "";
        }
        // If the clicked button is "+/-" (change sign), toggle the sign of the operand
        else if (value == "sign") {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.textContent = operand1;
        }
        // If the clicked button is ".", add a decimal point to the number if it doesn't already have one
        else if (value == ".") {
            if (text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        }
        // If the clicked button is "%", divide the number by 100 to get the percentage
        else if (value == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1
        }
        // If the clicked button is "=", perform the calculation and display the result
        else if (value == "=") {
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        }
        // If none of the above conditions are met, append the clicked button value to the display
        else {
            display.textContent += value;
        }
    });
}
