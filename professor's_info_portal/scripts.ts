document.addEventListener('DOMContentLoaded', () => {
    let questionCount = 1;
    
    const addQuestionButton = document.getElementById('addQuestion') as HTMLButtonElement;
    const questionsContainer = document.getElementById('questionsContainer') as HTMLDivElement;
    
    addQuestionButton.addEventListener('click', () => {
        questionCount++;
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('mb-3');
        
        const questionLabel = document.createElement('label');
        questionLabel.classList.add('form-label');
        questionLabel.setAttribute('for', `question${questionCount}`);
        questionLabel.textContent = `Question ${questionCount}`;
        
        const questionInput = document.createElement('input');
        questionInput.type = 'text';
        questionInput.classList.add('form-control');
        questionInput.id = `question${questionCount}`;
        questionInput.required = true;
        
        const answerLabel = document.createElement('label');
        answerLabel.classList.add('form-label');
        answerLabel.setAttribute('for', `answer${questionCount}`);
        answerLabel.textContent = 'Answer';
        
        const answerInput = document.createElement('input');
        answerInput.type = 'text';
        answerInput.classList.add('form-control');
        answerInput.id = `answer${questionCount}`;
        answerInput.required = true;
        
        questionDiv.appendChild(questionLabel);
        questionDiv.appendChild(questionInput);
        questionDiv.appendChild(answerLabel);
        questionDiv.appendChild(answerInput);
        
        questionsContainer.appendChild(questionDiv);
    });

    const quizForm = document.getElementById('quizForm') as HTMLFormElement;
    quizForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Implement your form submission logic here
        console.log('Quiz submitted');
    });
});
