const quizData = [
    {
        question: "Who is the author of The Verger?",
        a: " R. K. Narayan",
        b: "William Somerset Maugham",
        c: "Charles Dickens",
        d: "Leo Tolstoy",
        correct: "b",
    },
    {
        question: "What is the full name of the verger?",
        a: "Albert Thomas Edward Foreman",
        b: "Edward George Smith",
        c: "Albert Frederick James",
        d: "Thomas Henry Foreman",
        correct: "a",
    },
    {
        question: "What is the title or position held by Foreman at the church?",
        a: "Priest",
        b: "Sexton",
        c: "Verger ",
        d: "Bishop",
        correct: "c",
    },
    {
        question: "In which church does Foreman work?",
        a: "St. Paul’s",
        b: " St. Andrew’s",
        c: "St. Peter’s, Neville Square",
        d: "St. Mary’s",
        correct: "c",
    },
	 {
        question: "How long had Foreman been working at the church?",
        a: "10 years",
        b: " 16 years",
        c: " 20 years",
        d: "25 years",
        correct: "c",
    },
	 {
        question: "Why was the verger called to the vestry?",
        a: "To be praised",
        b: "To be promoted",
        c: " To be told to resign",
        d: "To be scolded",
        correct: "c",
    },
	 {
        question: "Why was Foreman asked to resign?",
        a: "He was stealing",
        b: " He was illiterate",
        c: " He was rude",
        d: "He was late",
        correct: "b",
    },
	 {
        question: "Who was the new vicar of the church?",
        a: "A stern man from the north",
        b: " A foreign priest",
        c: "The bishop’s son",
        d: "A young graduate",
        correct: "a",
    },
	 {
        question: "What was the attitude of the new vicar towards Foreman?",
        a: "Friendly",
        b: " Sympathetic",
        c: " Authoritative and rigid",
        d: "Encouraging",
        correct: "c",
    },
	 {
        question: "How did the verger react to being dismissed?",
        a: "He cried",
        b: "He begged",
        c: "He quietly accepted it",
        d: "He got angry",
        correct: "c",
    },
    {
        question: "What did Foreman decide to do after leaving the church?",
        a: "Open a tea shop",
        b: "Open a tobacconist’s shop",
        c: "Start preaching",
        d: "Look for another church job",
        correct: "b",
    },
    {
        question: "Where did Foreman open his first shop?",
        a: "East London",
        b: "West End",
        c: "South Kensington",
        d: "Oxford",
        correct: "b",
    },
    {
        question: "What kind of business did Foreman start?",
        a: "Tailoring",
        b: "Grocery",
        c: "Tobacco and sweets",
        d: "Bookstore",
        correct: "c",
    },
    {
        question: "How did he choose the location of his first shop?",
        a: "Randomly",
        b: "Through a friend",
        c: "Saw an area with no such shop",
        d: "Inherited it",
        correct: "c",
    },
    {
        question: "What made his business successful?",
        a: "His hard work",
        b: "His honesty",
        c: "The right location",
        d: "Advertising",
        correct: "c",
    },
    {
        question: "How many shops did he eventually own?",
        a: "5",
        b: "7",
        c: "10",
        d: "12",
        correct: "c",
    },
    {
        question: "What habit did Foreman continue even after becoming rich?",
        a: "Wearing the verger’s robe",
        b: "Visiting church every day",
        c: "Walking instead of driving",
        d: "Reading newspapers",
        correct: "c",
    },
    {
        question: "How did Foreman manage his business finances?",
        a: "With the help of his wife",
        b: "By hiring an accountant",
        c: "By learning maths",
        d: "By using trial and error",
        correct: "b",
    },
    {
        question: "What did the bank manager suggest to Foreman?",
        a: "To start a chain",
        b: "To buy stocks",
        c: "To invest in land",
        d: "To put his money in a bank account",
        correct: "d",
    },
    {
        question: "How much did Foreman have in cash and securities?",
        a: "£20,000",
        b: "£25,000",
        c: "£30,000",
        d: "£40,000",
        correct: "c",
    },
    {
        question: "What shocked the bank manager?",
        a: "Foreman’s attire",
        b: "Foreman being illiterate",
        c: "Foreman’s business skills",
        d: "Foreman’s wealth",
        correct: "b",
    },
    {
        question: "What did the bank manager say when he learned Foreman couldn't read?",
        a: "You must learn!",
        b: "Unbelievable!",
        c: "What would you be if you had been literate?",
        d: "How did you survive?",
        correct: "c",
    },
    {
        question: "What was Foreman’s witty reply?",
        a: "I’d still be a verger.",
        b: "I’d be jobless.",
        c: "I’d be a vicar.",
        d: "I’d be poor.",
        correct: "a",
    },
    {
        question: "What does the story mainly highlight?",
        a: "Religious hypocrisy",
        b: "Power of education",
        c: "Practical wisdom over formal education",
        d: "Class differences",
        correct: "c",
    },
    {
        question: "The tone of the story can best be described as:",
        a: "Tragic",
        b: "Ironic",
        c: "Comic",
        d: "Dramatic",
        correct: "b",
    }
	
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d


}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})