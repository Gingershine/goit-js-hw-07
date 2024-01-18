const userNameInput = document.querySelector('#name-input');
const userNameOutput = document.querySelector('#name-output');

userNameInput.addEventListener('input', event => {
    if (userNameOutput.textContent = event.currentTarget.value.trim()) {
    userNameOutput.textContent = event.currentTarget.value
    } else {
      userNameOutput.textContent = 'Anonymous';
}
});
