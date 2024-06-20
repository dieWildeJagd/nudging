document.addEventListener('DOMContentLoaded', () => {
    const settingsForm = document.getElementById('settingsForm') as HTMLFormElement;

    settingsForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nameInput = document.getElementById('professorName') as HTMLInputElement;
        const emailInput = document.getElementById('professorEmail') as HTMLInputElement;
        const passwordInput = document.getElementById('professorPassword') as HTMLInputElement;

        const name = nameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;

        // Implement your form submission logic here
        console.log('Settings saved', { name, email, password });

        // Example of setting values back to input fields after save
        nameInput.value = name;
        emailInput.value = email;
        passwordInput.value = password;
    });
});
