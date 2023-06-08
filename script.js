// Quiz data
const quizData = [
    {
        question: "What is 'hello' in French?",
        options: ["Bonjour", "Merci", "Au revoir", "Oui"],
        answer: "Bonjour"
    },
    {
        question: "How do you say 'goodbye' in French?",
        options: ["Bonjour", "Merci", "Au revoir", "Oui"],
        answer: "Au revoir"
    },
    {
        question: "What is 'thank you' in French?",
        options: ["Bonjour", "Merci", "Au revoir", "Oui"],
        answer: "Merci"
    }
];

// Quiz variables
let currentQuestion = 0;
let score = 0;

// DOM elements
const questionElement = document.getElementById('question');
const optionElements = document.querySelectorAll('.option');
const submitButton = document.getElementById('submit');

// Load question and options
function loadQuestion() {
    const quizItem = quizData[currentQuestion];
    questionElement.textContent = quizItem.question;

    for (let i = 0; i < optionElements.length; i++) {
        const option = optionElements[i].querySelector('span');
        option.textContent = quizItem.options[i];
    }
}

// Check user's answer
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const userAnswer = selectedOption.parentElement.querySelector('span').textContent;

        if (userAnswer === quizData[currentQuestion].answer) {
            score++;
        }

        // Disable options after answering
        optionElements.forEach(option => {
            option.querySelector('input').disabled = true;
        });

        submitButton.disabled = true;

        // Delay before loading the next question
        setTimeout(nextQuestion, 1000);
    }
}

// Load the next question or display the final score
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
        resetOptions();
    } else {
        showScore();
    }
}

// Display the final score
function showScore() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `<h2>Your score: ${score}/${quizData.length}</h2>`;
}

// Reset options
function resetOptions() {
    optionElements.forEach(option => {
        const input = option.querySelector('input');
        input.checked = false;
        input.disabled = false;
    });

    submitButton.disabled = false;
}

// Event listener for submit button
submitButton.addEventListener('click', checkAnswer);

// Load the first question
loadQuestion();

// Check user's answer
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const userAnswer = selectedOption.parentElement.querySelector('span').textContent;

        if (userAnswer === quizData[currentQuestion].answer) {
            score++;
            selectedOption.parentElement.classList.add('correct');
        } else {
            selectedOption.parentElement.classList.add('wrong');
        }

        // Disable options after answering
        optionElements.forEach(option => {
            option.querySelector('input').disabled = true;
        });

        submitButton.disabled = true;

        // Delay before loading the next question
        setTimeout(nextQuestion, 1000);
    }
}
