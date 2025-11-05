function appendChar(char) {
    document.getElementById('display').value += char;
}

function clearDisplay() {
document.getElementById('display').value = '';
}

function deleteChar() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

fucntion calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}