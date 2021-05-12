const quizData = [
    {
        question: 'How old is Elon Musk?',
        a: "36",
        b: "42",
        c: "47",
        d: "49",
        correct: "d"
    }, {
        question: "Who is the president of USA?",
        a: "Barack Obama",
        b: "Donald Trump",
        c: "Joe Biden",
        d: "Hillary Clinton",
        correct: "c"
    }, {
        question: "How many planets are in the solar system?",
        a: "12",
        b: "8",
        c: "7",
        d: "9",
        correct: "b"
    }, {
        question: "What ocean is between EU and NA?",
        a: "Indian",
        b: "Pacific",
        c: "Arctic",
        d: "Atlantic",
        correct: "d"
    }
];
const answers = document.querySelectorAll("input");
const questionEl = document.querySelector("#question");
const quiz = document.querySelector(".quiz-container");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submit = document.querySelector("button");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function getSelected() {

    let answerEl = undefined;

    answers.forEach((answer) => {
        if (answer.checked) {
            answerEl = answer.id;
        }
    });
    return answerEl;
}
function deselectAnswers() {
    answers.forEach((answer) => {
        if (answer.checked) {
            answer.checked = false;
        }
    });
}
submit.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You have scored ${score} out of ${quizData.length} questions</h2>
             <button onclick="location.reload();">Retry</button>`;
        }
    }

})