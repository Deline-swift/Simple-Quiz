const Answers = [
    {
        question : "What is the solution to the equation 2x+4 = 6",
        Option: ["10","1","5"],
        Answer: 1
    },
    {
     question:"How many sides does a traingle have",
     Option: ["2","5","3"],
     Answer: 2

    },
    {
        question:"what is the area of a rectangle with length 6 and width 4",
        Option: ["24","20","30"],
        Answer:0
    }
]
let currentQuestionIndex = 0;

function loadQuestion() {
    const question = Answers[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;

    const answerButtons = document.querySelectorAll('.answer');
    answerButtons.forEach((button, index) => {
        button.innerText = question.Option[index];
    });
}
function nextQuestion() {

    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        alert("You've completed the quiz!");
        currentQuestionIndex = 0; 
    }

    loadQuestion(); 
}