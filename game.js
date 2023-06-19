const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));

var currentQuestion = {};
var answers = true;

var questions = [
    {
        question: 'Inside what HTML element would you put JavaScript?',
        choice1: '<Js>',
        choice2: '<javaScript>',
        choice3: '<script>',
        choice4: '<coffee>',
        answer: 3,
    },
    {
        question: 'How would you create a function in JavaScript?',
        choice1: 'call function',
        choice2: '#function',
        choice3: 'function myFunction',
        choice4: '[Function ()]',
        answer: 3,
    },
    {
        question: 'How would you write comments for both one line and multi lines in JavaScript?',
        choice1: '// & /*',
        choice2: '<--&//',
        choice3: '// works for both instances',
        choice4: '!i&||',
        answer: 1,
    },
    {
        question: 'Which operator is used to assign a value to a variable?',
        choice1: 'var',
        choice2: '*',
        choice3: 'let',
        choice4: '=',
        answer: 4,
    },
    {
        question: 'Which of the following is the correct example of camel case?',
        choice1: 'CamelCase',
        choice2: 'camelCase',
        choice3: 'CaMeLcAsE',
        choice4: 'cAmElCaSe',
        answer: 2,
    },
];

const MAX_QUESTIONS = 5;

startGame = () => {
    let questionCounter = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

const startButton = document.getElementById('startButton');
startButton.addEventListener('click', startGame);

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return;
    }

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    answers = true;
};



