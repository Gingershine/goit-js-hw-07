const userNameInput = document.querySelector('#name-input');
const userNameOutput = document.querySelector('#name-output');

userNameInput.addEventListener('input', event => {
    userNameOutput.textContent = event.currentTarget.value.trim()
    ? event.currentTarget.value.trim()
    : 'Anonymous';
});
