document.addEventListener('DOMContentLoaded', function () {
    var materialsForm = document.getElementById('materialsForm');
    materialsForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Implement your form submission logic here
        console.log('Materials submitted');
    });
});
