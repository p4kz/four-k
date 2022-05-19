const startBox = document.querySelector('#start-box')
const gameBox = document.querySelector('#game-box')
const addWordBox = document.querySelector('.menu-addword-box')
const textUser = document.querySelector('.text-user').value
const addWordInfoBox = document.querySelector('.addword-info-box')

function show(tag, onOff) { 
  if (onOff === 'none' || onOff === 'initial') {
    tag.style.display = onOff
  }

  if (onOff === '0' || onOff === '1') {
    tag.style.opacity = onOff
  }
}

function disabled(tag, onOff) {
  if (onOff === true) {
    document.querySelector(tag).setAttribute('disabled', onOff)
  }

  if (onOff === false) {
    document.querySelector(tag).disabled = onOff
  }
}

function startGame() {
  show(startBox, 'none')
  show(gameBox, 'initial')

  exitAddWord()
  randomWord()
  generateButtons()
  guessedWord()
}

function addWord() {
  show(addWordBox, '1')
  disabled('.btn-addword', true)
}

function exitAddWord() {
  show(addWordBox, '0')
  disabled('.btn-addword', false)
  disabled('.btn-info-input', false)
  setTimeout(() => show(addWordInfoBox, 'none'), 300)  
}

function infoAddWord() {
  addWordInfoBox.style.display = 'inherit'
  disabled('.btn-info-input', true)
}

addWordInfoBox.addEventListener('dblclick', () => {
  show(addWordInfoBox, 'none')
  disabled('.btn-info-input', false)
})