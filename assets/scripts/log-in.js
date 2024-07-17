const customerIdInput = document.forms['login-form']['cx-id'];

customerIdInput.addEventListener('input', () => {
    if (customerIdInput.value.length === 3 || customerIdInput.value.length === 11) customerIdInput.value += '-';
});