const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const endButton = document.getElementById('end-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    //neglected currentQuestionIndex++ , coz if statements below should direct to correct path
    //but might encounter problem for the end result
    setNextQuestion()
})
//should pass in result, under path
endButton.addEventListener('click', (path) => {
    showResult(path)
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
    //path undefined yet
    if (answer.path == 1) {
        //set currentQuestionIndex to path next question

    }
    //else if for all paths

    //this is for the lower "next" button to appear
    
    if (question.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        endButton.innerText = 'Get Result'
        endButton.classList.remove('hide')
    }
    
}

showResult(path) {
    //where warren add all the if statements to result
}

const question = {

}