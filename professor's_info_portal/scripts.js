document.addEventListener('DOMContentLoaded', function () {
    let questionCount = 1;
    const addQuestionButton = document.getElementById('addQuestion');
    const questionsContainer = document.getElementById('questionsContainer');
    const quizForm = document.getElementById('quizForm');

    // Function to create a question block
    const createQuestionBlock = (count) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'mb-3';
        
        questionDiv.innerHTML = `
            <label class="form-label" for="question${count}">Question ${count}</label>
            <input type="text" class="form-control" id="question${count}" required>
            <label class="form-label mt-2" for="answer${count}">Answer</label>
            <input type="text" class="form-control" id="answer${count}" required>
        `;
        return questionDiv;
    };

    // Event listener to add questions
    addQuestionButton.addEventListener('click', function () {
        questionCount++;
        const fragment = document.createDocumentFragment();
        fragment.appendChild(createQuestionBlock(questionCount));
        questionsContainer.appendChild(fragment);
    });

    // Event listener for form submission
    quizForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Implement your form submission logic here
        console.log('Quiz submitted');
    });
});
