document.addEventListener('DOMContentLoaded', function () {
    var questionCount = 1;
    var addQuestionButton = document.getElementById('addQuestion');
    var questionsContainer = document.getElementById('questionsContainer');
    addQuestionButton.addEventListener('click', function () {
        questionCount++;
        var questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item', 'mb-3');
        questionDiv.id = "question".concat(questionCount);
        questionDiv.innerHTML = "\n            <label class=\"form-label\">Question ".concat(questionCount, "</label>\n            <input type=\"text\" class=\"form-control mb-2\" id=\"questionInput").concat(questionCount, "\" required>\n            <label class=\"form-label\">Answer</label>\n            <input type=\"text\" class=\"form-control mb-2\" id=\"answerInput").concat(questionCount, "\" required>\n            <button type=\"button\" class=\"btn btn-danger remove-question\">Remove Question</button>\n        ");
        questionsContainer.appendChild(questionDiv);
        var removeButton = questionDiv.querySelector('.remove-question');
        removeButton.addEventListener('click', function () {
            questionsContainer.removeChild(questionDiv);
        });
    });
    var quizForm = document.getElementById('quizForm');
    quizForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Implement your form submission logic here
        console.log('Quiz submitted');
    });
    // Add remove functionality to the first question
    var firstRemoveButton = document.querySelector('.remove-question');
    firstRemoveButton.addEventListener('click', function (event) {
        var questionDiv = event.target.parentElement;
        questionsContainer.removeChild(questionDiv);
    });
});
