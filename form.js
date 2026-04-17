document.querySelector('[name="expiry"]').addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ''); // numbers lang to
    
if(value.length >= 3) {
    value = value.slice(0, 2) + '/' + value.slice(2, 4);  
}
e.target.value = value;
});

document.getElementById('paymentForm').addEventListener('submit', (e) => {
    e.preventDefault();

    localStorage.setItem('paymentDone', 'true');

    window.location.href = 'index.html';
});
    
