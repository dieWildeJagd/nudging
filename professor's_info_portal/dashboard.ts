document.addEventListener('DOMContentLoaded', () => {
    // Mock data
    const studentCount = 42;
    const recentActivities = [
        "Quiz 1 uploaded",
        "Material on AI added",
        "Student John Doe joined the course",
    ];
    const quizQA = [
        { question: "What is AI?", answer: "Artificial Intelligence" },
        { question: "Explain the concept of Machine Learning.", answer: "A subset of AI" },
        // Add more question-answer pairs as needed
    ];

    // Update student count
    const studentCountElement = document.getElementById('studentCount');
    if (studentCountElement) {
        studentCountElement.textContent = studentCount.toString();
    }

    // Update recent activities
    const recentActivitiesElement = document.getElementById('recentActivities');
    if (recentActivitiesElement) {
        recentActivitiesElement.innerHTML = '';
        recentActivities.forEach(activity => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = activity;
            recentActivitiesElement.appendChild(li);
        });
    }

    // Update quiz questions and answers
    const quizQAListElement = document.getElementById('quizQAList');
    if (quizQAListElement) {
        quizQAListElement.innerHTML = '';
        quizQA.forEach(qa => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.innerHTML = `<strong>Q:</strong> ${qa.question} <br><strong>A:</strong> ${qa.answer}`;
            quizQAListElement.appendChild(li);
        });
    }
});
