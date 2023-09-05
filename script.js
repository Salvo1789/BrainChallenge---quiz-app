const quizData = [
    {
        question: "In quale anno Cristoforo Colombo ha scoperto l'America?",
        a: "1510",
        b: "1492",
        c: "1423",
        d: "1476",
        correct: "b"
    },
    {
        question: "Quale casa automobilistica ha inventato il primo motore a due tempi?",
        a: "Mercedes Benz",
        b: "Fiat",
        c: "Ford",
        d: "Jaguar",
        correct: "a"
    },
    {
        question: "Qual'è l'isola più grande al mondo?",
        a: "Far Oer",
        b: "Australia",
        c: "Madagascar",
        d: "Groenlandia",
        correct: "d"
    },
    {
        question: "Che tipo di strumento è il sassofono?",
        a: "Ad arco",
        b: "A fiato",
        c: "A percussione",
        d: "A tastiera",
        correct: "b"
    },
    {
        question: "Chi è l'autore del libro \"Il ritratto di Dorian Gray\"?",
        a: "Oscar Wilde",
        b: "Victor Hugo",
        c: "Mark Twain",
        d: "William Shakespeare",
        correct: "a"
    },
    {
        question: "Il celebre brand informatico caratterizzato dal logo della mela morsicata.",
        a: "Nokia",
        b: "Samsung",
        c: "Apple",
        d: "IBM",
        correct: "c"
    },
    {
        question: "Che razza di cane è l'animale protagonista de \"Il commissario Rex\"?",
        a: "Mastino Napoletano",
        b: "Chihuahua",
        c: "Doberman",
        d: "Pastore tedesco",
        correct: "d"
    },
    {
        question: "Mediante quale unità di misura viene misurata l'intensità luminosa?",
        a: "Watt",
        b: "Pascal",
        c: "Candela",
        d: "Lumen",
        correct: "c"
    },
    {
        question: "Come si chiama il protagonista del famoso manga \"Dragon Ball\"?",
        a: "Goku",
        b: "Vegeta",
        c: "Saitama",
        d: "Zoro",
        correct: "a"
    }

];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answersList = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

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

function deselectAnswers() {
answersList.forEach((answerEl) => {
    answerEl.checked = false;
    })
}

function getSelected() {
    let answer = undefined;

    answersList.forEach((answerEl) => {
        if (answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener("click",() => {
    const selectedAnswer = getSelected();

    if(selectedAnswer){
        if (selectedAnswer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `
            <h2>Hai risposto correttamente a ${score}/${quizData.length} domande.</h2>
            
            <button onclick="location.reload()">Ritenta</button>
        `;
        }
    }
    }
)