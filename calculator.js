const answer = document.getElementById("answer");

function appendToDisplay(val) {
    answer.value += val;
}

function clearDisplay() {
    answer.value = "";
}

function calculate() {
    const expression = answer.value;
    if(!expression) return;

    localStorage.setItem('pendingCalc', expression);
    window.location.href="form.html";
}
/*function appendToDisplay(input) {
    answer.value += input;
}

*/

//  function calculate() {
//      answer.value = eval(answer.value);
//  }

// function goToForm() {
//     const expression = documentGetElementById('answer').value;
//     localStorage.setItem('pendingCalc', expression);

//     window.location.href = 'form.html';
// }

window.addEventListener('DOMContentLoaded', () => {
    const paymentDone = localStorage.getItem('paymentDone');
    const expression = localStorage.getItem('pendingCalc');

    if(paymentDone === 'true' && expression) {
        try {
            let result = Function('return ' + expression)();
            // alert("Success");
            answer.value = result;
        } catch {
            answer.value = 'Error';
        }

        localStorage.removeItem('pendingCalc');
        localStorage.removeItem('paymentDone');
    }
});