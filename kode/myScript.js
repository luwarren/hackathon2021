const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const endButton = document.getElementById('end-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let currentQuestionIndex
let end_result

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    setNextQuestion()
})
//should pass in result, under path
endButton.addEventListener('click', () => {
    showResult()
})

function startGame() {
    //when clicked, this is called, so hide the button start game
    startButton.classList.add('hide')

    //upon intialise the questions are in hide, so start --> show question
    questionContainerElement.classList.remove('hide')
    currentQuestionIndex = 0
    setNextQuestion()


}

function setNextQuestion() {
    resetState()
    showQuestion(questions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')

        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)

    });

}

function resetState() {
    //don't know if need //clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    //which means its the end
    if (typeof(answer.path) == "string") {
        endButton.innerText = 'Get Result'
        endButton.classList.remove('hide')
    } else {
        currentQuestionIndex = answer.path
        nextButton.classList.remove('hide')
    }   
}

function showResult() {
    path = answer.path
    if (path == "asm") {
        <iframe src="assembly.html" style="border:none;" title="Assembly"></iframe>
    } else if (path == "c") {
        <iframe src="c.html" style="border:none;" title="C"></iframe>
    } else if (path == "cpp") {
        <iframe src="c_plus_plus.html" style="border:none;" title="C++"></iframe>
    } else if (path == "cs") {
        <iframe src="c_sharp.html" style="border:none;" title="C#"></iframe>
    } else if (path == "html") {
        <iframe src="html.html" style="border:none;" title="HTML / CSS"></iframe>
    } else if (path == "java") {
        <iframe src="java.html" style="border:none;" title="Java"></iframe>
    } else if (path == "js") {
        <iframe src="javascript.html" style="border:none;" title="JavaScript"></iframe>
    } else if (path == "m") {
        <iframe src="obj_c.html" style="border:none;" title="Objective-C"></iframe>
    } else if (path == "pl") {
        <iframe src="perl.html" style="border:none;" title="Perl"></iframe>
    } else if (path == "php") {
        <iframe src="php.html" style="border:none;" title="PHP"></iframe>
    } else if (path == "py") {
        <iframe src="python.html" style="border:none;" title="Python"></iframe>
    } else if (path == "rb") {
        <iframe src="ruby.html" style="border:none;" title="Ruby"></iframe>
    } else if (path == "swift") {
        <iframe src="swift.html" style="border:none;" title="Swift"></iframe>
    }
}

const questions = [
    //index 0
    {
        question: 'I want to learn code so I can...',
        answers: [
            {text: 'Design mobile apps', path: 1 /*Apple or Android?*/},
            {text: 'Build websites', path: 5 /*Pretty or stable?*/},
            {text: 'Design video games', path: 7 /*Which engine do you want to use?*/},
            {text: 'Get a job', path: 8 /*Start-up or established?*/},
            {text: 'Learn a new skill', path: 15 /*How invested are you?*/},
            {text: 'Have shouting matches with...', path: 14 /*Have shouting matches with...*/}
        ]
    },

    //index 1
    { // Design mobile apps pathway
        question: 'Apple or Android?',
        answers: [
            {text: 'Apple', path: 3 /*How patient are you?*/},
            {text: 'Android', path: 2 /*Will your app be graphics intensive?*/}
        ]
    },

    //index 2
    { // Answer: Android
        question: 'Will your app be graphics intensive?',
        answers: [
            {text: 'Yes', path: cpp},
            {text: 'No', path: java}
        ]
    },

    //index 3
    { // Answer: Apple
        question: 'How patient are you?',
        answers: [
            {text: 'Extremely', path: 4 /*When do you want to launch?*/},
            {text: 'Not very', path: swift}
        ]
    },

    //index 4
    { // Answer: Apple -> Extremely
        question: 'When do you want to launch?',
        answers: [
            {text: 'Three months or less', path: swift},
            {text: 'As long as it takes', path: m}
        ]
    },

    //index 5
    { // Build websites
        question: 'Pretty or stable?',
        answers: [
            {text: 'Pretty', path: js},
            {text: 'Stable', path: 6 /*Widely used or fast?*/}
        ]
    },

    //index 6
    { // Answer: Stable
        question: 'Widely used or fast?',
        answers: [
            {text: 'Widely used', path: java},
            {text: 'Fast', path: ruby}
        ]

    },

    //index 7
    { // Design video games
        question: 'Which engine do you want to use?',
        answers: [
            {text: 'My own', path: cpp},
            {text: 'Unreal Engine', path: cpp},
            {text: 'Unity', path: cs}
        ]
    },

    //index 8
    { // Get a job
        question: 'Start-up or established?',
        answers: [
            {text: 'Start-up', path: 9 /*I consider myself a...*/},
            {text: 'Established', path: 11 /*Do you like dinosaurs?*/}
        ]
    },

    //index 9
    { // Answer: Start-up
        question: 'I consider myself a...',
        answers: [
            {text: 'Numbers guy', path: 10 /*Are you interested in backend development?*/},
            {text: 'Designer', path: 11 /*How artistic?*/}
        ]
    },

    //index 10
    { // Answer : Startup -> Numbers guy
        question: 'Are you interested in backend development?',
        answers: [
            {text: 'Yes', path: py},
            {text: 'No', path: js}
        ]
    },

    //index 11
    { // Answer: Startup -> Designer
        question: 'How artistic?',
        answers: [
            {text: 'I have a good eye', path: js},
            {text: 'The next Da Vinci', path: html}
        ]
    },

    //index 11
    { // Answer: Established
        question: 'Do you like dinosaurs?',
        answers: [
            {text: 'Yes', path: php},
            {text: 'No', path: 12 /*Are you interested in mobile programming?*/}
        ]
    },

    //index 12
    { // Answer: Established -> No
        question: 'Are you interested in mobile programming?',
        answers: [
            {text: 'Yes', path: m},
            {text: 'No', path: 13 /*Windows or Linux?*/}
        ]
    },

    //index 13
    { // Answer: Established -> No -> No
        question: 'Windows or Linux?',
        answers: [
            {text: 'Windows', path: cs},
            {text: 'Linux', path: java}
        ]
    },

    //index 14
    { // Have shouting matches with...
        question: 'Have shouting matches with...',
        answers: [
            {text: 'A compiler', path: c},
            {text: 'Regular expressions', path: pl},
            {text: 'The hardware', path: asm}
        ]
    },

    //index 15
    { // Learn a new skill
        question: 'How invested are you?',
        answers: [
            {text: 'A little', path: html},
            {text: 'Very', path: 16}
        ]
    },

    //index 16
    { // Answer: Learn a new skill -> Very
        question: 'Pick a word, any word.',
        answers: [
            {text: 'Simple', path: py},
            {text: 'Versatile', path: js},
            {text: 'Community', path: rb}
        ]
    }
]