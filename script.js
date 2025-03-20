const quizData = [
    {
        question : "What is the solution to the equation 2x+4 = 6",
        Options: ["10","1","5"],
        Answer: 1
    },
    {
     question:"How many sides does a traingle have",
     Options: ["2","5","3"],
     Answer: 2

    },
    {
        question:"what is the area of a rectangle with length 6 and width 4",
        Options: ["24","20","30"],
        Answer:0
    }
]



let currentQuestionIndex = 0;
let selectedOption = null;

function loadQuestion(){
 
    const questionData = quizData[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const answersContainer = document.getElementById("Answers");

    questionElement.textContent = questionData.question;
    answersContainer.innerHTML = ""

questionData.Options.forEach(option =>{
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");

    btn.onclick = function(){
        selectOption(btn)
    }
    answersContainer.appendChild(btn)

})
   
}
function moveQuestion(){
    if(currentQuestionIndex<quizData.length-1){
        currentQuestionIndex++;
        selectedOption = "null";
        loadQuestion()
    }
    else{
        alert("You Have Completed The Quiz")
    }
}
function selectOption(btn){
const buttons = document.querySelectorAll("#answers button");
buttons.forEach(button => {
    button.style.backgroundColor = ""
})
btn.style.backgroundColor = "red"

}

next.addEventListener("click",moveQuestion)
    
loadQuestion()

