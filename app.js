//1
let userScore = 0;
let compScore = 0;

//2
const choices = document.querySelectorAll(".choice")
//8
const msg = document.querySelector("#msg")

//9
userScorePara = document.querySelector("#user-score")
compScorePara = document.querySelector("#comp-score")


//5
const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx] 
}
//6
const drawGame = () =>{
    msg.innerText = "Game was draw"
    // msg.style.backgroundColor = " rgb(244, 205, 205)"
}
//7
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++
        userScorePara.innerText = userScore
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        // msg.style.backgroundColor = "green"
    }else{
        compScore++
        compScorePara.innerText = compScore
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`
        // msg.style.backgroundColor = "red"
    }
}
//4
const playGame = (userChoice) =>{
    console.log("userChoice = " , userChoice)
    const compChoice = genCompChoice()
    console.log("compChoice = " , compChoice)
    if(userChoice === compChoice){
        drawGame()
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false:true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false:true;
        }else{
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

//3
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})