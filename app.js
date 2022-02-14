//generate pin
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('displayPin').value = pin;
}
//key pad pins
document.getElementById('keypad').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('displayNumb');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
        const calcInput = document.getElementById('displayNumb');
        const previousNumb = calcInput.value;
        const newNumb = previousNumb + number;
        calcInput.value = newNumb;
    }
})

function submit() {
    const count = document.getElementById('tryCount');
    const prevCountNumber = parseInt(count.innerText);
    const newCountNumber = prevCountNumber - 1;


    if (newCountNumber >= 0) {
        const generatePin = document.getElementById('displayPin').value;
        const typePin = document.getElementById('displayNumb').value;
        const success = document.getElementById('notify-pass');
        const fail = document.getElementById('notify-fail');

        if (generatePin == typePin) {
            success.style.display = "block";
            fail.style.display = "none";
            document.getElementById('tryText').style.display = "none";

        } else {
            document.getElementById('displayNumb').value = '';
            document.getElementById('tryText').style.display = "block";
            if (newCountNumber == 0) {
                count.innerText = "No";
            } else {
                count.innerText = newCountNumber;
            }
            fail.style.display = "block";
            success.style.display = "none";
        }
    }

}