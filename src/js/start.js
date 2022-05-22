const startBox = document.querySelector('#start-box')
const gameBox = document.querySelector('#game-box')
const gameBoxDiv = document.querySelector('.game-box-event')
const addWordBox = document.querySelector('.menu-addword-box')
const textUserData = document.querySelector('.text-user')
const addWordInfoBox = document.querySelector('.addword-info-box')
const success = document.querySelector('.success')
const cancel = document.querySelector('.cancel')
const modeBox = document.querySelector('.dificult') 
const modeBoxButton = document.querySelector('.dificult div') 
const maxAttemptsSpan = document.querySelector('.max-attempts')
const btnStart = document.querySelector('.btn-start-event')

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

function eventAnimation(tag, opacity) {
  setTimeout(() => {
    show(tag, opacity)
  }, 200) 
}

function startGame() {
  show(modeBox, 'initial')
  eventAnimation(modeBoxButton, '1')
  disabled('.btn-start', true)
}

btnStart.addEventListener('dblclick', () => {
  show(modeBox, 'none')
  show(modeBoxButton, '0')
  disabled('.btn-start', false)
})

function getHardMode() {
  show(startBox, 'none')
  show(gameBox, 'initial')
  eventAnimation(gameBoxDiv, '1')

  maxAttempts = userHardMode

  exitAddWord()
  randomWord()
  generateButtons()
  guessedWord()
  show(modeBox, 'none')

  maxAttemptsSpan.innerHTML = maxAttempts
}

function getNormalMode() {
  show(startBox, 'none')
  show(gameBox, 'initial')
  eventAnimation(gameBoxDiv, '1')

  exitAddWord()
  randomWord()
  generateButtons()
  guessedWord()
  show(modeBox, 'none')

  maxAttemptsSpan.innerHTML = maxAttempts
}

function getRandomMode() {
  show(startBox, 'none')
  show(gameBox, 'initial')
  eventAnimation(gameBoxDiv, '1')

  maxAttempts = userRandomMode

  exitAddWord()
  randomWord()
  generateButtons()
  guessedWord()
  show(modeBox, 'none')

  maxAttemptsSpan.innerHTML = maxAttempts
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

function addNewWord() {
  let invalid = (
    '0123456789ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêë`^~;:?>'+
    `<,ìíîïðñòóôõöøùúûüýþÿŕ(?@!#$%&()?.ç*[]?=@!#$%&*$/.'"-_=¨¨$%@!|`
  )

  let isValidText = false
  let textUser = textUserData.value
  cancel.innerHTML = ''
  success.innerHTML = ''

  for (let x = 0; x < textUser.length; x++) {
    for (let i = 0; i < invalid.length; i++) {
      if (textUser[x] === invalid[i]) {
        isValidText = true
      }
    }
  }
  
  if (textUser != '' && isValidText === false && textUser.length > 3 && textUser.length <= 8) {
    wordData.push(textUser)
    success.innerHTML = 'Palavra adicionada'
    textUserData.value = ''
    
    setTimeout(() => {
      success.innerHTML = ''
    }, 4000)
  } else {
    cancel.innerHTML = 'Palavra invalida'

    setTimeout(() => {
      cancel.innerHTML = ''
    }, 4000)
  }
}
