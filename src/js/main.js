const wordData = [
  'gato', 'cachorro', 'capivara'
]

const keyboard = document.querySelector('.keyboard-box')
const secretWord = document.querySelector('.secret-word')
const image = document.querySelector('.image')
const response = document.querySelector('.response')
const infoResponse = document.querySelector('.info-response')
const infoControl = document.querySelector('.info-control')

let answer = ''
let maxAttempts = 6
let attempts = 0
let guessed = []
let wordStatus = null

function randomWord() {
  answer = wordData[Math.floor(Math.random() * wordData.length)]
  answer = answer.toUpperCase() 
  console.log(answer)
}

function generateButtons() {
  const keys = 'WERTYUIOPASDFGHJKLZXCVBNM'.split('').map(letter => `
  <button
    class="btn-keyboard"
    id="${letter}"
    onClick="handleGuess('${letter}')"
  >
    ${letter}
  </button>
  `).join('')
  
  keyboard.innerHTML = keys
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null
  document.querySelector(`#${chosenLetter}`).setAttribute('disabled', true)

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord() 
    youWon()
  } else if (answer.indexOf(chosenLetter) === -1) {
    attempts++
    updateAttempts()
    youLost()
    updadeImage()
  }
}

function updadeImage() {
  image.src = `./src/img/try${attempts}.svg`
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (
    guessed.indexOf(letter) >= 0 ? letter : ' _ '
  )).join('')

  secretWord.innerHTML = wordStatus
}

function updateAttempts() {
  document.querySelector('.attempts').innerHTML = attempts
}

function youWon() {
  if(wordStatus === answer) {
    keyboard.innerHTML = `<p class="response">Você venceu<p>`
    show(infoControl, 'none')
  }
}

function youLost() {
  if(attempts === maxAttempts) {
    show(infoResponse, '1')
    secretWord.innerHTML = `${answer}`
    keyboard.innerHTML = `<p class="response">Você perdeu<p>`
    show(infoControl, 'none')
  }
}

function reset() {
  attempts = 0
  guessed = []
  image.src = "./src/img/try0.svg"
  response.innerHTML = '' 

  show(infoControl, 'initial')
  show(infoResponse, '0')
  randomWord()
  guessedWord()
  updateAttempts()
  generateButtons()
}

function surrender() {
  window.location.reload()
}

document.querySelector('.max-attempts').innerHTML = maxAttempts