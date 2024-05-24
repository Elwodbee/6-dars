
function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}


function calculator() {
    let operation = prompt("Amalni tanlang (+, -, *, /):");
    let num1 = parseFloat(prompt("  Birinchi sonni kiriting:"));
    let num2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));

    let result;

    switch (operation) {
        case '+':
            Javob = add(num1, num2);
            break;
        case '-':
            Jvob = subtract(num1, num2);
            break;
        case '*':
            Javob = multiply(num1, num2);
            break;
        case '/':
            Javob = divide(num1, num2);
            break;
        default:
            Javob = "topilmadi";
    }

    console.log(`Javob: ${Javob}`);
}
alert


calculator();


