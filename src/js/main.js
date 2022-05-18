const wordData = [
  'gato','gata2', 'gota22'
]

const boxStart = document.querySelector('#start-box')
const boxGame = document.querySelector('#game-box')
const boxLava = document.querySelector('.color-lava-box') 

function show(tag, onOff) { 
  if (onOff === 'none' || onOff === 'initial') {
    tag.style.display = onOff
  }

  if (onOff === '0' || onOff === '1') {
    tag.style.opacity = onOff
  }
}

function randomWord() {
  secretWord = wordData[Math.floor(Math.random() * wordData.length)]
  secretWord = secretWord.toUpperCase()
  console.log(secretWord)
  return secretWord
}

