function clearDisplay() {
    const display = document.querySelector('.display');
    display.value = '';
}

function appendToDisplay(value) {
    const display = document.querySelector('.display');
    display.value += value;
}

function calculate() {
    const display = document.querySelector('.display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}