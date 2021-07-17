const questions = [
    {
        question: 'I want to learn code so I can...',
        answers: [
            {text: 'Design mobile apps', correct: /*Apple or Android?*/},
            {text: 'Build websites', correct: /*Pretty or stable?*/},
            {text: 'Design video games', correct: /*Which engine do you want to use?*/},
            {text: 'Get a job', correct: /*Start-up or established?*/},
            {text: 'Learn a new skill', correct: /*How invested are you?*/},
            {text: 'Have shouting matches with...', correct: /*Have shouting matches with...*/}
        ]
    },
    { // Design mobile apps pathway
        question: 'Apple or Android?',
        answers: [
            {text: 'Apple', correct: /*How patient are you?*/},
            {text: 'Android', correct: /*Will your app be graphics intensive?*/}
        ]
    },
    { // Answer: Android
        question: 'Will your app be graphics intensive?',
        answers: [
            {text: 'Yes', correct: C++},
            {text: 'No', correct: Java}
        ]
    },
    { // Answer: Apple
        question: 'How patient are you?',
        answers: [
            {text: 'Extremely', correct: /*When do you want to launch?*/},
            {text: 'Not very', correct: Swift}
        ]
    },
    { // Answer: Apple -> Extremely
        question: 'When do you want to launch?',
        answers: [
            {text: 'Three months or less', correct: Swift},
            {text: 'As long as it takes', correct: Objective-C}
        ]
    },
    { // Build websites
        question: 'Pretty or stable?',
        answers: [
            {text: 'Pretty', correct: JavaScript},
            {text: 'Stable', correct: /*Widely used or fast?*/}
        ]
    },
    { // Answer: Stable
        question: 'Widely used or fast?',
        answers: [
            {text: 'Widely used', correct: Java},
            {text: 'Fast', correct: Ruby}
        ]

    },
    { // Design video games
        question: 'Which engine do you want to use?',
        answers: [
            {text: 'My own', correct: C++},
            {text: 'Unreal Engine', correct: C++},
            {text: 'Unity', correct: C#}
        ]
    },
    { // Get a job
        question: 'Start-up or established?',
        answers: [
            {text: 'Start-up', correct: /*I consider myself a...*/},
            {text: 'Established', correct: /*Do you like old things?*/}
        ]
    },
    { // Answer: Start-up
        question: 'I consider myself a...',
        answers: [
            {text: 'Numbers guy', correct: /*Are you interested in backend development?*/},
            {text: 'Designer', correct: /*How artistic?*/}
        ]
    },
    { // Answer : Startup -> Numbers guy
        question: 'Are you interested in backend development?',
        answers: [
            {text: 'Yes', correct: Python},
            {text: 'No', correct: JavaScript}
        ]
    },
    { // Answer: Startup -> Designer
        question: 'How artistic?',
        answers: [
            {text: 'I have a good eye', correct: JavaScript},
            {text: 'The next Da Vinci', correct: HTML/CSS}
        ]
    },
    { // Answer: Established
        question: 'Do you like dinosaurs?',
        answers: [
            {text: 'Yes', correct: PHP},
            {text: 'No', correct: /*Are you interested in mobile programming?*/}
        ]
    },
    { // Answer: Established -> No
        question: 'Are you interested in mobile programming?',
        answers: [
            {text: 'Yes', correct: Objective-C},
            {text: 'No', correct: /*Windows or Linux?*/}
        ]
    },
    { // Answer: Established -> No -> No
        question: 'Windows or Linux?',
        answers: [
            {text: 'Windows', correct: C#},
            {text: 'Linux', correct: Java}
        ]
    },
    { // Have shouting matches with...
        question: 'Have shouting matches with...',
        answers: [
            {text: 'A compiler', correct: C},
            {text: 'Regular expressions', correct: Perl},
            {text: 'The hardware', correct: Assembly}
        ]
    },
    { // Learn a new skill
        question: 'How invested are you?',
        answers: [
            {text: 'A little', correct: HTML/CSS},
            {text: 'Very', correct:/*Pick a word, any word.*/}
        ]
    },
    { // Answer: Learn a new skill -> Very
        question: 'Pick a word, any word.',
        answers: [
            {text: 'Simple', correct: Python},
            {text: 'Versatile', correct: JavaScript},
            {text: 'Community', correct: Ruby}
        ]
    }
]