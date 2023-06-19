const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));

var currentQuestion = {};
var answers = true;
var questionCounter = 0;

var questions = [
    {
        question: 'Inside what HTML element would you put JavaScript?',
        choiceA: '<Js>',
        choiceB: '<javaScript>',
        choiceC: '<script>',
        choiceD: '<coffee>',
        answer: 'C',
    },
    {
        question: 'How would you create a function in JavaScript?',
        choiceA: 'call function',
        choiceB: '#function',
        choiceC: 'function myFunction()',
        choiceD: '[Function ()]',
        answer: 'C',
    },
    {
        question: 'How would you write comments for both one line and multi lines in JavaScript?',
        choiceA: '// & /*',
        choiceB: '<--&//',
        choiceC: '// works for both instances',
        choiceD: '!i&||',
        answer: 'A',
    },
    {
        question: 'Which operator is used to assign a value to a variable?',
        choiceA: 'var',
        choiceB: '*',
        choiceC: 'let',
        choiceD: '=',
        answer: 'D',
    },
    {
        question: 'Which of the following is the correct example of camel case?',
        choiceA: 'CamelCase',
        choiceB: 'camelCase',
        choiceC: 'CaMeLcAsE',
        choiceD: 'cAmElCaSe',
        answer: 'B',
    },
];

const MAX_QUESTIONS = 5;
let availableQuestions = []

startGame = () => {
    questionCounter = 0;
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



