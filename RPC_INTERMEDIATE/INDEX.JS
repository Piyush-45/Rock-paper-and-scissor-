//  creating elemnets using js

const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('p')
        // for fun
const myMessage = document.createElement('h1')

// selecting our div
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay, myMessage)


// creating rcp array
const choices = ['rock', 'paper','scissors']

//  generating user choice
let userChoice 
let computerChoice

const handleClick = (e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = `you choose: ${userChoice}`
    generateComputerChoice()
    getResult()
}
// generating computer choice
const generateComputerChoice = ()=>{
    const randomChoice = choices[Math.floor(Math.random()* choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = 'computer choice : ' + computerChoice
  
}

// loop for choosing rcp
for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices[i] // you can delete this id you want to use e.target.HTML in the handleClick
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
    // computerChoice()
  }
 


  
const getResult = () => {
    switch (userChoice + computerChoice) {
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
        resultDisplay.innerHTML = "YOU WIN!"
        myMessage.innerHTML = "bhoot hi badhiya guru"
        break
      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
        resultDisplay.innerHTML = "YOU LOSE!"
        break
      case 'paperpaper':
      case 'scissorsscissors':
      case 'rockrock':
      resultDisplay.innerHTML = "ITS A DRAW!"
      break
    }
  }