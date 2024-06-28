document.addEventListener('DOMContentLoaded', function () {
    let questionCount = 1;
    const addQuestionButton = document.getElementById('addQuestion');
    const questionsContainer = document.getElementById('questionsContainer');
    const quizForm = document.getElementById('quizForm');

    // Function to create a question block
    const createQuestionBlock = (count) => `
        <div class="question-item mb-3" id="question${count}">
            <label class="form-label">Question ${count}</label>
            <input type="text" class="form-control mb-2" id="questionInput${count}" required>
            <label class="form-label">Answer</label>
            <input type="text" class="form-control mb-2" id="answerInput${count}" required>
            <button type="button" class="btn btn-danger remove-question">Remove Question</button>
        </div>
    `;

    // Event listener to add questions
    addQuestionButton.addEventListener('click', function () {
        questionCount++;
        const fragment = document.createDocumentFragment();
        const div = document.createElement('div');
        div.innerHTML = createQuestionBlock(questionCount);
        fragment.appendChild(div.firstElementChild);  // Append the new question div
        questionsContainer.appendChild(fragment);
    });

    // Event delegation for removing questions
    questionsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-question')) {
            const questionDiv = event.target.closest('.question-item');
            questionsContainer.removeChild(questionDiv);
        }
    });

    // Event listener for form submission
    quizForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Implement your form submission logic here
        console.log('Quiz submitted');
    });
});
