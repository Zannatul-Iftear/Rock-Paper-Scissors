let choices = document.querySelectorAll(".gameButton");
let imgYourPick = document.querySelector("#yourPick");
let imgComputerPick = document.querySelector("#computerPick");
let comparisonText = document.querySelector("#comparisonText");
let resultText = document.querySelector("#resultText");
let yourScoreText = document.querySelector("#yourScore");
let computerScoreText = document.querySelector("#computerScore");

let resultsContainer = document.querySelector("#resultsContainer");

resultsContainer.style.visibility='hidden';
resultsContainer.style.height='0px';

let yourPick="";
let computerPick="";
let options=["rock","paper","scissors"];
let result="";

let yourScore=0;
let computerScore=0;

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        resultsContainer.style.visibility='visible';
        resultsContainer.style.height='fit-content';

        computerPick=options[Math.floor(Math.random()*3)];
        yourPick=choice.id;

        findResult(yourPick,computerPick);
    });
});

const findResult = (yourPick,computerPick) => {
    if(yourPick=="rock")
    {
        if(computerPick=="rock") result="draw";
        else if(computerPick=="paper") result="lose";
        else result="win";
    }
    if(yourPick=="paper")
    {
        if(computerPick=="rock") result="win";
        else if(computerPick=="paper") result="draw";
        else result="lose";
    }
    if(yourPick=="scissors")
    {
        if(computerPick=="rock") result="lose";
        else if(computerPick=="paper") result="win";
        else result="draw";
    }
    showResult(yourPick,computerPick,result);
}

const showResult = (yourPick,computerPick,result) => {
    imgYourPick.src="img/"+yourPick+".png";
    imgComputerPick.src="img/"+computerPick+".png";
    if(result=="win"){
        comparisonText.innerText=">";
        resultText.innerText="You Win!";
        comparisonText.style.color="#46c531";
        resultText.style.backgroundColor="#46c531";
    }
    else if(result=="lose"){
        comparisonText.innerText="<";
        resultText.innerText="You Lose!";
        comparisonText.style.color="#c43232";
        resultText.style.backgroundColor="#c43232";
    }
    else{
        comparisonText.innerText="=";
        resultText.innerText="Draw!";
        comparisonText.style.color="darkslateblue";
        resultText.style.backgroundColor="darkslateblue";
    }
    updateScore(result);
}

const updateScore = (result) => {
    if(result=="win") {
        yourScore++;
        yourScoreText.innerText=yourScore;
    }
    if(result=="lose") {
        computerScore++;
        computerScoreText.innerText=computerScore;
    }
}