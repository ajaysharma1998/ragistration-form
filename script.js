const form = document.getElementById('registrationForm');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 


    if (passwordInput.value !== confirmPasswordInput.value) {
        alert('Passwords do not match!');
        return;
    }

    form.submit();
});