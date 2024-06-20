document.addEventListener('DOMContentLoaded', function () {
    var questionCount = 1;
    var addQuestionButton = document.getElementById('addQuestion');
    var questionsContainer = document.getElementById('questionsContainer');
    addQuestionButton.addEventListener('click', function () {
        questionCount++;
        var questionDiv = document.createElement('div');
        questionDiv.classList.add('mb-3');
        var questionLabel = document.createElement('label');
        questionLabel.classList.add('form-label');
        questionLabel.setAttribute('for', "question".concat(questionCount));
        questionLabel.textContent = "Question ".concat(questionCount);
        var questionInput = document.createElement('input');
        questionInput.type = 'text';
        questionInput.classList.add('form-control');
        questionInput.id = "question".concat(questionCount);
        questionInput.required = true;
        var answerLabel = document.createElement('label');
        answerLabel.classList.add('form-label');
        answerLabel.setAttribute('for', "answer".concat(questionCount));
        answerLabel.textContent = 'Answer';
        var answerInput = document.createElement('input');
        answerInput.type = 'text';
        answerInput.classList.add('form-control');
        answerInput.id = "answer".concat(questionCount);
        answerInput.required = true;
        questionDiv.appendChild(questionLabel);
        questionDiv.appendChild(questionInput);
        questionDiv.appendChild(answerLabel);
        questionDiv.appendChild(answerInput);
        questionsContainer.appendChild(questionDiv);
    });
    var quizForm = document.getElementById('quizForm');
    quizForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Implement your form submission logic here
        console.log('Quiz submitted');
    });
});
