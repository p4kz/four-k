
// ---------------------- menu start  ------------------------

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

// ---------------------- canvas ------------------------

let screen = document.querySelector('canvas')
let pen = screen.getContext('2d')


// head square
pen.fillStyle = 'darkgreen'
pen.fillRect(0, 0, 350, 300)

// eyes left square
pen.fillStyle = '#000'
pen.fillRect(60, 60, 90, 90)

// eyes right square
pen.fillStyle = '#000'
pen.fillRect(220, 60, 90, 90)

// nose rect
pen.fillStyle = '#000'
pen.fillRect(150, 150, 70, 100)

// mouth left rect
pen.fillStyle = '#000'
pen.fillRect(110, 190, 40, 100)

// mouth right rect
pen.fillStyle = '#000'
pen.fillRect(220, 190, 40, 100)


// ---------------------- code ------------------------

const wordData = [
  'gato', 'gatogatooo', 'gata', 'gota'
]

let secretWord = wordData[Math.floor(Math.random() * wordData.length)]
secretWord = secretWord.toUpperCase()
console.log(secretWord)

// Mostra

let difficultyPlaying = 5
let list = []

function writeWordScreen() {
  const wordResultBox = document.querySelector('.word-result-box')
  wordResultBox.innerHTML = ""

  for (let i = 0; i < secretWord.length; i++) {
    if (list[i] == undefined) {
      list[i] = '&nbsp;'
      wordResultBox.innerHTML = wordResultBox.innerHTML + `<p class="word-result">${list[i]}</p>`
    } else {
      wordResultBox.innerHTML = wordResultBox.innerHTML + `<p class="word-result">${list[i]}</p>`
    }
  }
}

function pressKey(key) {
  document.querySelector(`.key${key}`).disabled = true

  if(difficultyPlaying > 0) {
    disableKey(`.key${key}`)
    isValidLetter(key)
    writeWordScreen()
  } 
}

writeWordScreen()

function disableKey(key) {
  document.querySelector(key).style.borderColor = '#8257e5'
  document.querySelector(key).style.color = '#8257e5'
}

const boxWarning = document.querySelector('.warning-box')
const boxWarningText = document.querySelector('.warning-box p')

function isValidLetter(key) {
  let index = secretWord.indexOf(key)

  if (index < 0) {
    difficultyPlaying--
    moveLava()
    
    if (difficultyPlaying === 0) {
      boxWarningText.innerHTML = `O CREEPER MORREU! <br><br> a palavra era ${secretWord}`
      show(boxWarning, 'initial')
    }  
  } else {
    for (let i = 0; i < secretWord.length; i++) {
      if (secretWord[i] == key) {
        list[i] = key
      }
    }
  }

  let isWinner = true
  
  for (let i = 0; i < secretWord.length; i++ ) {
    if(secretWord[i] != list[i]) {
      isWinner = false
    }
  }

  if (isWinner == true) {
    boxWarningText.innerHTML = `VOCE SALVOU O CREEPER! <br><br> e mesmo assim ele explodiu <br><br> CREEPER's -_-`
    show(boxWarning, 'initial')
    difficultyPlaying = 0
  }
}

const boxLava = document.querySelector('.color-lava-box') 

function moveLava() {
  //fazer for
  if (difficultyPlaying === 5) boxLava.style.top = '-1080px'
  if (difficultyPlaying === 4) boxLava.style.top = '-1020px'
  if (difficultyPlaying === 3) boxLava.style.top = '-940px'
  if (difficultyPlaying === 2) boxLava.style.top = '-860px'
  if (difficultyPlaying === 1) boxLava.style.top = '-780px'
  if (difficultyPlaying === 0) boxLava.style.top = '-700px'
}

function restart() {
  //resolver o reload para tela de start
  location.reload()
}