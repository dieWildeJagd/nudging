document.addEventListener('DOMContentLoaded', () => {
    let questionCount = 1;

    const addQuestionButton = document.getElementById('addQuestion') as HTMLButtonElement;
    const questionsContainer = document.getElementById('questionsContainer') as HTMLDivElement;

    addQuestionButton.addEventListener('click', () => {
        questionCount++;
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item', 'mb-3');
        questionDiv.id = `question${questionCount}`;

        questionDiv.innerHTML = `
            <label class="form-label">Question ${questionCount}</label>
            <input type="text" class="form-control mb-2" id="questionInput${questionCount}" required>
            <label class="form-label">Answer</label>
            <input type="text" class="form-control mb-2" id="answerInput${questionCount}" required>
            <button type="button" class="btn btn-danger remove-question">Remove Question</button>
        `;

        questionsContainer.appendChild(questionDiv);

        const removeButton = questionDiv.querySelector('.remove-question') as HTMLButtonElement;
        removeButton.addEventListener('click', () => {
            questionsContainer.removeChild(questionDiv);
        });
    });

    const quizForm = document.getElementById('quizForm') as HTMLFormElement;
    quizForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Implement your form submission logic here
        console.log('Quiz submitted');
    });

    // Add remove functionality to the first question
    const firstRemoveButton = document.querySelector('.remove-question') as HTMLButtonElement;
    firstRemoveButton.addEventListener('click', (event) => {
        const questionDiv = (event.target as HTMLButtonElement).parentElement as HTMLDivElement;
        questionsContainer.removeChild(questionDiv);
    });
});
