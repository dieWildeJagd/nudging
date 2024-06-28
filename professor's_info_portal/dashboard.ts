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

    // Utility function to create list items
    const createListItem = (content, className = 'list-group-item') => {
        const li = document.createElement('li');
        li.className = className;
        li.innerHTML = content;
        return li;
    };

    // Update student count
    const studentCountElement = document.getElementById('studentCount');
    if (studentCountElement) {
        studentCountElement.textContent = studentCount.toString();
    }

    // Update recent activities
    const recentActivitiesElement = document.getElementById('recentActivities');
    if (recentActivitiesElement) {
        const activitiesFragment = document.createDocumentFragment();
        recentActivitiesElement.innerHTML = ''; // Clear existing content
        recentActivities.forEach(activity => {
            activitiesFragment.appendChild(createListItem(activity));
        });
        recentActivitiesElement.appendChild(activitiesFragment);
    }

    // Update quiz questions and answers
    const quizQAListElement = document.getElementById('quizQAList');
    if (quizQAListElement) {
        const qaFragment = document.createDocumentFragment();
        quizQAListElement.innerHTML = ''; // Clear existing content
        quizQA.forEach(qa => {
            const content = `<strong>Q:</strong> ${qa.question} <br><strong>A:</strong> ${qa.answer}`;
            qaFragment.appendChild(createListItem(content));
        });
        quizQAListElement.appendChild(qaFragment);
    }
});
