function verPassword() {
    const password = document.querySelector('#password');
    const tipo = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', tipo);
}