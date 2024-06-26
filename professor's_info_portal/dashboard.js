document.addEventListener('DOMContentLoaded', function () {
    // Mock data
    var studentCount = 42;
    var recentActivities = [
        "Quiz 1 uploaded",
        "Material on AI added",
        "Student John Doe joined the course",
    ];
    var quizQA = [
        { question: "What is AI?", answer: "Artificial Intelligence" },
        { question: "Explain the concept of Machine Learning.", answer: "A subset of AI" },
        // Add more question-answer pairs as needed
    ];
    // Update student count
    var studentCountElement = document.getElementById('studentCount');
    if (studentCountElement) {
        studentCountElement.textContent = studentCount.toString();
    }
    // Update recent activities
    var recentActivitiesElement = document.getElementById('recentActivities');
    if (recentActivitiesElement) {
        recentActivitiesElement.innerHTML = '';
        recentActivities.forEach(function (activity) {
            var li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = activity;
            recentActivitiesElement.appendChild(li);
        });
    }
    // Update quiz questions and answers
    var quizQAListElement = document.getElementById('quizQAList');
    if (quizQAListElement) {
        quizQAListElement.innerHTML = '';
        quizQA.forEach(function (qa) {
            var li = document.createElement('li');
            li.classList.add('list-group-item');
            li.innerHTML = "<strong>Q:</strong> ".concat(qa.question, " <br><strong>A:</strong> ").concat(qa.answer);
            quizQAListElement.appendChild(li);
        });
    }
});
