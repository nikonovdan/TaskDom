const email = document.getElementById('email');
const checkbox = document.getElementById('remember');
const button = document.getElementById('btn');

email.value = "mail@mail.ru";
email.disabled = true;
checkbox.checked = true;

button.textContent = 'Войти'