let calculation = localStorage.getItem('calculator') || '';
document.querySelector('.js-result').innerHTML = calculation;

function calculate(pickedButton) {
    calculation += pickedButton;
    document.querySelector('.js-result').innerHTML = calculation;
    localStorage.setItem('calculator', calculation);
}

function evaluateCalculation() {
    try {
        calculation = eval(calculation);
        document.querySelector('.js-result').innerHTML = calculation;
        localStorage.setItem('calculator', calculation);
    } catch (error) {
        document.querySelector('.js-result').innerHTML = 'Error';
    }
}

function clearCalculation() {
    calculation = '';
    document.querySelector('.js-result').innerHTML = calculation;
    localStorage.setItem('calculator', calculation);
}

document.querySelectorAll('button[data-value]').forEach(button => {
    button.addEventListener('click', () => calculate(button.getAttribute('data-value')));
});

document.querySelector('button[data-equals]').addEventListener('click', evaluateCalculation);

document.querySelector('button[data-clear]').addEventListener('click', clearCalculation);
