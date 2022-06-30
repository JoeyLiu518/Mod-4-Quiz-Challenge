// To start lets create all the global variables we will use

var score = 0 //Keeps track of score
var timeleft = 10 // Timer
var timer = document.querySelector("#timer") //  Grabs element from HTML
var question = document.querySelector("question") // Grabs element from HTML
var qtext = document.querySelector("#qtext") // Grabs element from HTML
var option = document.querySelectorAll("#option") // Grabs element from HTML
var start = document.querySelector("#start")
var optionA = document.querySelector("A") // Grabs element from HTML
var optionB = document.querySelector("B") // Grabs element from HTML
var optionC = document.querySelector("C") // Grabs element from HTML
var optionD = document.querySelector("D") // Grabs element from HTML
var submit = document.querySelector("submit")

// Variables for each question and the choices
var question1 = {
    questionText: "What color is the sky?" ,
    A: "1. Pink" , 
    B: "2. Orange" ,
    C: "3. Purple",
    D: "4. Blue",
} // Answer Blue

var question2 = {
    questionText: "What is Seattle's football team called?" ,
    A: "1. Lions" , 
    B: "2. Rams" ,
    C: "3. Seahawks",
    D: "4. 49ers",
} // Answer Seahawks

var question3 = {
    questionText: "What is Michigan State University's logo?" ,
    A: "1. Spartans" , 
    B: "2. Leprechauns" ,
    C: "3. Wolverines",
    D: "4. Hawkeyes",
} // Answer Spartans
var done = {
    questionText:"Congrats, you have finished the quiz."
}

var qArray = [question1, question2, question3] ; 
var qArrayIndex = 0 ;

// We will create the functions for our quiz

function displayQuestion (){
    question.textContent = qArray[qArrayIndex].questionText;
    optionA.textContent = qArray[qArrayIndex].A ;
    optionB.textContent = qArray[qArrayIndex].B ;
    optionC.textContent = qArray[qArrayIndex].C ;
    optionD.textContent = qArray[qArrayIndex].D ;
 
} // This function should change the question and multiple choice answers each time


function countdown (){
    var countdownstart = setInterval( function(){
        timeleft --
        if (timeleft === 0){
            clearInterval(countdownstart)
        }
        timer.textContent = `Time Left: ${countdownstart} start`
    }, 1000)
} // This function is the timer for each question

// Changes the cards after each question
start.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        displayQuestion
        if (qArrayIndex < qArray.length) {
            qArrayIndex++
        } else{
            score = 
            
        }
    }
})

// This function stops the page from refreshing
submit.addEventListener("click", function (event) {
    event.preventDefault()

})

