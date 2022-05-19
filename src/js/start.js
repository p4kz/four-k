const startBox = document.querySelector('#start-box')
const gameBox = document.querySelector('#game-box')
const addWordBox = document.querySelector('.menu-addword-box')

function show(tag, onOff) { 
  if (onOff === 'none' || onOff === 'initial') {
    tag.style.display = onOff
  }

  if (onOff === '0' || onOff === '1') {
    tag.style.opacity = onOff
  }
}

function startGame() {
  show(startBox, 'none')
  show(gameBox, 'initial')

  randomWord()
  generateButtons()
  guessedWord()
}

function addWord() {
  show(addWordBox, '1')
  document.querySelector('.btn-addword').setAttribute('disabled', true)
}

function exitAddWord() {
  show(addWordBox, '0')
  document.querySelector('.btn-addword').disabled = false
}