
const quizData = [
    {   //question 1
        id: 0,
        question: "What is the opposite of up?",
        a: "down",
        b: "left",
        c: "right",
        d: "AABA",
        e: "none of the above",
        correct: "down",

    },
    {
        id: 1,
        question: "What is the air-speed velocity of an unladen swallow?",
        a: "about 15 miles per hour",
        b: "24 miles per hour",
        c: "A duck...",
        d: "not fast enough",
        e: "irrelevant, it's a dead parrot",
        correct: "24 miles per hour",

    },
    {
        id: 2,
        question: "what is considered to be Shaggy's greatest hit?",
        a: "It wasn't me",
        b: "Angel ft. Rayvon",
        c: "Boombastic",
        d: "that other song with that one guy",
        e: "none of the above",
        correct: "e",
    },
    {
        id: 3,
        question: "if rob schneider and pauly shore entered in a slurpee drinking competition, who would win?",
        a: "rob schneider",
        b: "pauly shore",
        c: "both?",
        d: "none of the above",
        e: "brendan fraser",
        correct: "b",
    },
];

const id = document.getElementById("id")
const quiz = document.getElementById("quiz");
const answerEl = document.querySelectorAll("answer");
const questionEl = document.getElementById("question");
const correctAnswerEl = document.getElementById("correct");
const a_text = document.getElementById("a");
const b_text = document.getElementById("b");
const c_text = document.getElementById("c");
const d_text = document.getElementById("d");
const e_text = document.getElementById("e");
//const submitBtn = document.getElementById("submit");
const startButtonEl = document.getElementById("startButton");
const startPageEl = document.getElementById("startPage");
//restart button added02262023
const endPageEL = document.getElementById("endPage");
const restartButtonEl = document.getElementById("restartButton");
const timerEl = document.getElementById("countdown");
let timerID;
restartButtonEl.addEventListener('click', startPage);  //restartButtonEl.addEventListener('click',startPageEl)
//this is the restart button and I am annoyed.
endPageEL.addEventListener('click', endPage);


function startPage() {
    // console.log('startPage')
    location.reload()
}

let currentQuiz = 0;
let score = 0;
let timeLeft = 60;
//loadQuiz();

function nextQuestion() {
    if (this.innerHTML === quizData[currentQuiz].correct) {
        console.log("Correct")
    } else {
        console.log("Wrong")
        timeLeft -= 10;
    }

    currentQuiz++;
    if (currentQuiz >= quizData.length) {
        endPage();
        console.log("End Page")
    }
    else {
        showQuestion();
    }
}

function showQuestion() {
    // console.log('showQuestion')
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;

};


//start quiz
function loadQuiz() {
    console.log('loadQuiz')
    startPageEl.style.display = "none";
    quiz.style.display = "block";
    timerEl.textContent = timeLeft;
    timerID = setInterval(countdown, 1000);
    a_text.addEventListener("click", nextQuestion);
    b_text.addEventListener("click", nextQuestion);
    c_text.addEventListener("click", nextQuestion);
    d_text.addEventListener("click", nextQuestion);
    e_text.addEventListener("click", nextQuestion);
    showQuestion();
}

function deselectAnswers() {
    answerEl.forEach((answerEl) => (answerEl.checked = false));
}
function getSelected() {
    let answerEls;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answerEl = answerEl.id;
        }
    })
    return answerEl;
}


startButtonEl.addEventListener("click", function () {
    loadQuiz();
});


var mainEl = document.getElementById('main');



// Timer that counts down from 5
function countdown() {

    if (timeLeft <= 0) {
        clearInterval(timerID)
    }
    else {
        timeLeft -= 1;

        timerEl.textContent = timeLeft;
    }
}

//calls endPage function
function endPage() {
    quiz.style.display = "none";
    main.style.display = "none";
    localStorage.setItem("lastScore", timeLeft);
    var userScoreSpan = document.querySelector("#user-score");
    userScoreSpan.textContent = timeLeft;
    endPageEL.style.display = "block";
    timerEl.textContent = timeLeft;
    clearInterval(timerID);
    renderHighscores();
}


//storing high scores NOT FINISHED


var initialsInput = document.querySelector("#initials");
var scoreInput = document.querySelector("#score");
var submitBtn = document.querySelector("#submit");
var msgDiv = document.querySelector("#msg");
var userInitialsSpan = document.querySelector("#user-initials");
var userScoreSpan = document.querySelector("#user-score");

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
    var lastInitials = localStorage.getItem("lastInitials");
    var lastScore = localStorage.getItem("lastScore");

    if (lastInitials !== null) {
        userInitialsSpan.textContent = lastInitials;
        userScoreSpan.textContent = lastScore;
    }
}

var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
function renderHighscores() {
    highscores.sort(function (a, b) { return b.score - a.score });
    highscores.forEach(function (score) {
        var liTag = document.createElement("li");
        console.log(score.initials, "207")
        liTag.textContent = score.initials + " - " + score.score;
        var olEl = document.getElementById("highscores");
        olEl.appendChild(liTag);
    });
}


submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(submitBtn)

    var initials = document.querySelector("#initials").value;
    var score = document.querySelector("#user-score").value;

    if (initials === "") {
        displayMessage("error", "yo dog, you gotta' put in your initials");
    } else if (score === "") {
        displayMessage("error", "score cannot be blank");
    } else {
        displayMessage("success", "Registered successfully", initials, score);

        localStorage.setItem("lastInitials", initials);
        localStorage.setItem("lastScore", score);
        var newScore = { initials: initials, score: score }
        console.log(initials, score)
        highscores.push(newScore);
        localStorage.setItem("highscores", JSON.stringify(highscores));
        console.log(highscores)
    }
});


//-------------------last try for local storage-------------------//
//--------------------------------------------------------------//
//--------------------------------------------------------------//
//--------------------------------------------------------------//
//--------------------------------------------------------------//
const quizData = [
    {
        id: 0,
        question: "What is the opposite of up?",
        options: ["down", "left", "right", "AABA", "none of the above"],
        correct: "down"
    },
    {
        id: 1,
        question: "What is the air-speed velocity of an unladen swallow?",
        options: ["about 15 miles per hour", "24 miles per hour", "A duck...", "not fast enough", "irrelevant, it's a dead parrot"],
        correct: "24 miles per hour"
    },
    {
        id: 2,
        question: "What is considered to be Shaggy's greatest hit?",
        options: ["It Wasn't Me", "Angel ft. Rayvon", "Boombastic", "That other song with that one guy", "none of the above"],
        correct: "none of the above"
    },
    {
        id: 3,
        question: "If Rob Schneider and Pauly Shore entered a slurpee drinking competition, who would win?",
        options: ["Rob Schneider", "Pauly Shore", "Both?", "None of the above", "Brendan Fraser"],
        correct: "Pauly Shore"
    }
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextButton = document.getElementById("nextButton");
const startButton = document.getElementById("startButton");
const endPageEl = document.getElementById("endPage");
const restartButtonEl = document.getElementById("restartButton");
const timerEl = document.getElementById("countdown");
const userScoreSpan = document.getElementById("user-score");

let currentQuiz = 0;
let score = 0;
let timeLeft = 60;
let timerID;

// Initialize the quiz
function initializeQuiz() {
    startButton.addEventListener("click", startQuiz);
    restartButtonEl.addEventListener("click", restartQuiz);
}

// Start the quiz
function startQuiz() {
    startButton.style.display = "none";
    timerEl.textContent = timeLeft;
    timerID = setInterval(countdown, 1000);
    showQuestion();
    quiz.style.display = "block";
}

// Restart the quiz
function restartQuiz() {
    endPageEl.style.display = "none";
    currentQuiz = 0;
    score = 0;
    timeLeft = 60;
    timerEl.textContent = timeLeft;
    userScoreSpan.textContent = "";
    clearInterval(timerID);
    startQuiz();
}

// Show the current question
function showQuestion() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.textContent = currentQuizData.question;
    optionsEl.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
        const optionEl = document.createElement("button");
        optionEl.classList.add("option");
        optionEl.textContent = option;
        optionEl.addEventListener("click", checkAnswer);
        optionsEl.appendChild(optionEl);
    });
}

// Check the selected answer
function checkAnswer() {
    const selectedOption = this.textContent;
    const currentQuizData = quizData[currentQuiz];

    if (selectedOption === currentQuizData.correct) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz >= quizData.length) {
        endQuiz();
    } else {
        showQuestion();
    }
}

// End the quiz and display the score
function endQuiz() {
    clearInterval(timerID);
    userScoreSpan.textContent = score;
    quiz.style.display = "none";
    endPageEl.style.display = "block";
}

// Timer countdown
function countdown() {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 0) {
        endQuiz();
    }
}

// Initialize the quiz on page load
initializeQuiz();
