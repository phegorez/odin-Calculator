const calculatorScreen = document.getElementById('calculatorScreen')
const topNumber = document.getElementById('topNumber')
const mathOperators = ['+','-', '*', '/', '.']

const inputNumpad = (fromNumpad) => {
    if (mathOperators.includes(fromNumpad)) {
        if (!topNumber.innerText) {
            // If there's no topNumber, set it to the current calculatorScreen value
            topNumber.innerText = calculatorScreen.value
        } else {
            // If there's a topNumber, call operate and update topNumber with the result
            operate()
            topNumber.innerText = eval(topNumber.innerText)
        }
        calculatorScreen.value = '';
    }

    // Update calculatorScreen value based on the clicked button
    calculatorScreen.value = calculatorScreen.value === '0' ? fromNumpad : calculatorScreen.value + fromNumpad
}

const operate = () => {
    topNumber.innerText = eval(topNumber.innerText + calculatorScreen.value)
    calculatorScreen.value = ''
}

const deleteInput = () => {
    calculatorScreen.value = calculatorScreen.value.slice(0, -1)
}

const clearBtn = () => {
    calculatorScreen.value = '0'
    topNumber.innerText = ''
}

window.addEventListener('DOMContentLoaded', () => {
    calculatorScreen.value = '0'
})