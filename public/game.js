const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "When did Bojack first work with Diane?",
        choice1: "To help him with business stuff.",
        choice2: "To ghost write his memoir.",
        choice3: "To act as a character consultant on Secretariat.",
        choice4: "Bojack never worked with Diane.",
        answer: 2,
    },
    {
        question: "Which of the following is NOT a name?",
        choice1: "Bread.",
        choice2: "Jurj.",
        choice3: "Lernernerner DiCarpricorn",
        choice4: "Bojack.",
        answer: 4,
    }, 
    {
        question: "Among Princess Carolyn's lovers, who DID NOT have an on screen kiss with her?",
        choice1: "Bojack.",
        choice2: "Cooper.",
        choice3: "Juda.",
        choice4: "Rutabaga.",
        answer: 3,
    }, 
    {
        question: "“Na-na-na-la-la-la-la special moment. Executive producer ______.”",
        choice1: "Rich Correll.",
        choice2: "Garry Marshall.",
        choice3: "Robert Evans.",
        choice4: "Angela Diaz.",
        answer: 2,
    },
    {
        question: "What breakfast item did Todd make Bojack on the first morning he stayed at Bojack's?",
        choice1: "Pancakes.",
        choice2: "French Toast.",
        choice3: "Hashbrowns.",
        choice4: "Waffles.",
        answer: 3,
    },
    {
        question: "On which of Mr. Peanutbutter's cinematic appearances did Bojack NOT make a TV appearance?",
        choice1: "Peanutbutter and Jelly.",
        choice2: "HollyWoo Stars and Celebrities! What do they know? Do they know things? Let's find out!",
        choice3: "Birthday Dad.",
        choice4: "Mr. Peanutbutter's House.",
        answer: 4,
    },
    {
        question: "Which of these is in HollyHock's last name?",
        choice1: "Xiong.",
        choice2: "Robertson.",
        choice3: "Fonzerelli.",
        choice4: "leQuack.",
        answer: 3,
    },
    {
        question: "What color was the taffy at the taffy factory in “Fish Out of Water”?",
        choice1: "Pink.",
        choice2: "Blue.",
        choice3: "Green.",
        choice4: "Purple.",
        answer: 1,
    },
    {
        question: "Which characters were NOT voiced by someone who appeared on The Office?",
        choice1: "Mr. Peanutbutter.",
        choice2: "Kyle.",
        choice3: "Season 1&2 Secretariat.",
        choice4: "Bojack.",
        answer: 1,
    },
    {
        question: "What is the first name of the actor who played Goober?",
        choice1: "Goobert.",
        choice2: "Richie.",
        choice3: "Reggie.",
        choice4: "Ricky.",
        answer: 2,
    },
    {
        question: "What was the drug that Diane took the night she learned she was pregnant?",
        choice1: "Molly.",
        choice2: "Shrooms.",
        choice3: "Acid.",
        choice4: "Gush.",
        answer: 4,
    },
    {
        question: "Which food-plate-person combo from the dinner is INCORRECTLY matched?",
        choice1: "Herb: peanuts.",
        choice2: "Sarah Lynn: plate of pills.",
        choice3: "Corduroy Jackson Jackson: a lemon.",
        choice4: "Secretariat: fried eggs.",
        answer: 2,
    },
    {
        question: "When did Diane first meet Bojack?",
        choice1: "As Bojack's memoirist.",
        choice2: "As Mr. Peanutbutter's date at Bojack's annual Halloween party.",
        choice3: "As a character consultant on Secretariat.",
        choice4: "Diane and Bojack start out on the show as old friends.",
        answer: 2,
    },
    {
        question: "Among these, who was DIRECTLY invited to Pickles and Mr. Peanutbutter's surprise wedding?",
        choice1: "Greg.",
        choice2: "Eduardo.",
        choice3: "Vance Waggoner.",
        choice4: "Diane.",
        answer: 1,
    },
    {
        question: "Who, according to Bojack explicitly, was invited to the Santa Fe Boat Show?",
        choice1: "Kings.",
        choice2: "Dukes.",
        choice3: "Presidents.",
        choice4: "Character actress Margo Martindale.",
        answer: 1,
    },
    {
        question: "All of these were said by Beatrice EXCEPT:",
        choice1: "“You come by it honestly, the ugliness inside.”",
        choice2: "“God gave you two ears and me only the one mouth after all.”",
        choice3: "“You know what your problem is? You want to think of yourself as the good guy.”",
        choice4: "“I don't find you boring. Just the things you choose to talk about.”",
        answer: 3,
    },
    {
        question: "What famous person on the show was actually voiced by the real life person?",
        choice1: "Paul McCartney.",
        choice2: "Derek Jeter.",
        choice3: "Cameron Crowe.",
        choice4: "J D Salinger.",
        answer: 1,
    },
    {
        question: "Which of the following was NOT something Todd was responsible for?",
        choice1: "Taking away the original party spot for Christina's quinceanera.",
        choice2: "Starting a prison riot.",
        choice3: "Giving Mr. Peanutbutter the idea to buy all the spaghetti strainers.",
        choice4: "Breaking Bojack's bed the first time.",
        answer: 3,
    },
    {
        question: "Who was originally hired for the lead on Mr. Peanutbutter's House.?",
        choice1: "Mr. Peanutbutter.",
        choice2: "Bojack Horseman.",
        choice3: "Vance Waggoner.",
        choice4: "Vincent D'Onofrio.",
        answer: 4,
    },
    {
        question: "Which extra character was voiced by Paul F. Tompkins?",
        choice1: "Marv.",
        choice2: "The Albino Rhino Gyno.",
        choice3: "Diane's father.",
        choice4: "All of these were voiced by Paul F Tompkins.",
        answer: 4
    }
];

const SCORE_POINTS = 5;
const MAX_QUESTIONS = 20;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

// Pulling new questions

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {

        return window.location.assign('end.html');
    }

// Updating progress bar

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

// Shuffling questions

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

// Scoring questions

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

        }, 1000);
    });
});

// Overall scoring

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
    localStorage.setItem('mostRecentScore', score);
}

startGame();