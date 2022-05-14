const boxStart = document.querySelector('#start-box')
const boxGame = document.querySelector('#game-box')
const menuAddWord = document.querySelector('.addword-menu')

function show(tag, onOff) { 
  if (onOff === 'none' || onOff === 'initial') {
    tag.style.display = onOff
  }

  if (onOff === '0' || onOff === '1') {
    tag.style.opacity = onOff
  }
}

function startGame() {
  show(boxStart, 'none')
  show(boxGame, 'initial')
}

function addWord() {
  show(menuAddWord, '1')
}

function addNewWord() {

  setTimeout(() => {
    show(menuAddWord, '0')
  }, 4000)
}

function exitGame() {
  show(boxStart, 'initial')
  show(boxGame, 'none')
}
