let result = document.getElementById('answer');
let calculationFormula = document.getElementById('display-formula');


result.addEventListener('keydown', function(event) {
    let key = event.key;
    if (/[0-9+\-*/.=]/.test(key)) { // Allow only numbers, operators, and decimal point
        insertToExpression(key);
    } else if (key === 'Enter') { // Calculate result when Enter key is pressed
        calculateAnswer();
    } else if (key === 'Backspace') { // Delete last character when Backspace key is pressed
        deleteOneByOne();
    } else {
        event.preventDefault();
    }
});

function insertToExpression(value) {
    calculationFormula.textContent += value;
}

function insertNumber(number) {
    result.value += number;
}

function insertOperator(operator) {
    result.value += operator;
}

function deleteOneByOne() {
    let formula = calculationFormula.textContent;
    calculationFormula.textContent = formula.slice(0, -1);
    result.value = formula.slice(0, -1);
}

function clearAll() {
    result.value = '';
    calculationFormula.innerHTML = '';
}

function calculateAnswer() {
    try {
        let formula = result.value;
        calculationFormula.textContent = formula;
        let calculatedAnswer = eval(formula);
        calculationFormula.textContent = calculatedAnswer;
    } catch (error) {
        calculationFormula.textContent = 'Error';
    }

}