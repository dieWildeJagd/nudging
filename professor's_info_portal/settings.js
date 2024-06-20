document.addEventListener('DOMContentLoaded', function () {
    var settingsForm = document.getElementById('settingsForm');
    settingsForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var nameInput = document.getElementById('professorName');
        var emailInput = document.getElementById('professorEmail');
        var passwordInput = document.getElementById('professorPassword');
        var name = nameInput.value;
        var email = emailInput.value;
        var password = passwordInput.value;
        // Implement your form submission logic here
        console.log('Settings saved', { name: name, email: email, password: password });
        // Example of setting values back to input fields after save
        nameInput.value = name;
        emailInput.value = email;
        passwordInput.value = password;
    });
});
