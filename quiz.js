const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const qImg = document.getElementById("questionImage");

const question = document.getElementById("question");

const counter = document.getElementById("counter");

const timeGauge = document.getElementById("timeGauge");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scoreContainer");

let questions = [
    {
question : "What does HTML stand for?",
imgSrc : "img/html.png",
choiceA : "Hyper Text Markup Language",
choiceB : "Hyperlinks and Text Markup Language",
choiceC : "Home Tool Markup Language",
correct : "A"
    },
    {
question : "What new turbo does Garrett make?",
imgSrc : "img/turbo.png",
choiceA : "Slow spooling",
choiceB : "Billet core",
choiceC : "No boost valve",
correct : "B"
    }
];

let lastQuestionIndex = question.length -1;
let runningQuestionIndex = 0;

function renderQuestion(){
    let q = questions[runningQuestionIndex];
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

function progressRender(){
    for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}
function answerIsCorrect(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "green"
}
function answerIsWrong(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "red"
}

const questionTime = 10; //10 seconds for every question
const gaugeWidth = 150; //counter gauge width of 15px a second
let count = 0; // counter starts at 0
const gaugeProgressUnit = gaugeWidth/questionTime; // this divids the two

function counterRender(){
    if(count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = gaugeProgressUnit * count + "px";
        count++;

    }
    else{
count = 0;
answerIsWrong();
if(runningQuestionIndex < lastQuestionIndex){
    
}
    }
}