
const wordData = [
  'gato', 'cachorro', 'capivara', 'galinha', 'Arroz', 'flores', 'raiz', 'amarelo', 'teclado', 'desafio', 'oracle', 'alura' , 'programaone',  
  'MACACO', 'GIRAFA', 'CAVALO', 'CACHORRO', 'GALINHA', 'TUCANO', 'CROCODILO', 'PAPAGAIO', 'AVESTRUZ', 'RAPOSA', 'TIGRE', 'COBRA', 'GORILA'
]

const image = document.querySelector('[data-image]')
const secretWord = document.querySelector('[data-response]')
const infoResponse = document.querySelector('[data-info-response]')
const infoControl = document.querySelector('[data-control-text]')

const keyboard = document.querySelector('[data-control-keyboard]')
const response = document.querySelector('[data-control-response]')

let userRandomMode = Math.floor((Math.random() * 5) + 1)
let userHardMode = 3
let answer = ''
let maxAttempts = 6
let attempts = 0
let guessed = []
let wordStatus = null

function randomWord() {
  answer = wordData[Math.floor(Math.random() * wordData.length)]
  answer = answer.toUpperCase() 
}

function generateButtons() {
  const keys = `QWERTYUIOPASDFGHJKLZX1CVBNM2`.split('').map(letter => `
  <button
  class="game__control-box--keyboard-button"
  id="${letter}"
  onClick="handleGuess('${letter}')"
  >
  ${letter}
  </button>
  `).join('')
  
  keyboard.innerHTML = keys

  document.getElementById('1').style.opacity = 0
  document.getElementById('2').style.opacity = 0
  document.getElementById('1').setAttribute('disabled', false)
  document.getElementById('2').setAttribute('disabled', false)
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
  image.src = `./src/assets/img/try${attempts}.svg`
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
    keyboard.innerHTML = `<p class="game__control-box--response" data-control-response>Você venceu<p>`
    show(infoControl, 'none')
  }
}

function youLost() {
  if(attempts === maxAttempts) {
    show(infoResponse, '1')
    secretWord.innerHTML = `${answer}`
    keyboard.innerHTML = `<p class="game__control-box--response" data-control-response>Você perdeu<p>`
    show(infoControl, 'none')
  }
}

function reset() {
  attempts = 0
  guessed = []
  image.src = "./src/assets/img/try0.svg"
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