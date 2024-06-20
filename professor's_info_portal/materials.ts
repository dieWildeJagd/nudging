document.addEventListener('DOMContentLoaded', () => {
    const materialsForm = document.getElementById('materialsForm') as HTMLFormElement;

    materialsForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Implement your form submission logic here
        console.log('Materials submitted');
    });
});
