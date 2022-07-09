//  ROCK PAPER SCISSORS

//  ************* STEP 1 **************
const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices')
// let  resultCount = document.querySelector('.count') 
const choices = ['rock', 'paper', 'scissors']
// let count = 1
// choicesDisplay.appendChild(resultCount)

//  ******* STEP 4 ************
const handleClick = (e)=>{
    // const userChoice = e.target.innerHTML
    // const computerChoice = choices[Math.floor(Math.random()*choices.length)]
    // getResults(userChoice, computerChoice)

    // !!!!!!! OR we can write it as !!!!!!1

    getResults(e.target.innerHTML, choices[Math.floor(Math.random()*choices.length)])
    
}

// ************STEP 2 *************** 
choices.forEach(choice =>{
    const button = document.createElement('button')
    button.innerHTML  = choice 
    button.addEventListener('click', handleClick)
    choicesDisplay.appendChild(button)
})
//  ******************* STEP 3 ************* 
const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , YOU WIN!'
    //   resultCount.innerHTML = count++
      break
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , YOU LOSE!'
    //   resultCount.innerHTML = count--

      break
    case 'scissorsscissors':
    case 'rockrock':
    case 'paperpaper':
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , ITS A DRAW!'
      break
  }
}



















































// const resultDisplay = document.querySelector('#result')
// const choicesDisplay = document.querySelector('#choices')
// const choices = ['rock', 'paper', 'scissors']

// const handleClick = (e) => {
//   getResults(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])
// }
// choices.forEach(choice => {
//   const button = document.createElement('button')
//   button.innerHTML = choice
//   button.addEventListener('click', handleClick)
//   choicesDisplay.appendChild(button)
// })

// const getResults = (userChoice, computerChoice) => {
//   switch (userChoice + computerChoice) {
//     case 'scissorspaper':
//     case 'rockscissors':
//     case 'paperrock':
//       resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , YOU WIN!'
//       break
//     case 'paperscissors':
//     case 'scissorsrock':
//     case 'rockpaper':
//       resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , YOU LOSE!'
//       break
//     case 'scissorsscissors':
//     case 'rockrock':
//     case 'paperpaper':
//       resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , ITS A DRAW!'
//       break
//   }
// }
