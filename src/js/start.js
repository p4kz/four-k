const menuAddWord = document.querySelector('.addword-menu')
const addWordTextUser = document.querySelector('.addword-text')
const addWordWarning = document.querySelector('.addword-warning')
const addWordList = document.querySelector('.addword-list')
const btnAddWordInfo = document.querySelector('.btn-addword-info')

function show(tag, onOff) { 
  if (onOff === 'none' || onOff === 'initial') {
    tag.style.display = onOff
  }

  if (onOff === '0' || onOff === '1') {
    tag.style.opacity = onOff
  }
}

function startGame() {
  randWord()
  writeWordScreen()
  addWordExit()
  show(boxStart, 'none')
  show(boxGame, 'initial')
}

function addWord() {
  show(menuAddWord, '1')
}

function addNewWord() {
  let invalid = '0123456789ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêë`^~;:?><,ìíîïðñòóôõöøùúûüýþÿŕ(?@!#$%&()?.*[]?=@!#$%&*$/.-_=¨¨$%@!|'
  let textUser =  addWordTextUser.value
  let isValidText = false

  for (let x = 0; x < textUser.length; x++) {
    for (let i = 0; i < invalid.length; i++) {
      if (textUser[x] === invalid[i]) {
        isValidText = true
      }
    }
  }
  
  if (textUser != '' && isValidText === false && textUser.length >= 3 && textUser.length <= 12) {
    wordData.push(textUser)
    randWord()
    writeWordScreen()
    addWordWarning.innerHTML = '<span style="color:#04d361;">sua palavra foi colocada na lista</span>'

    setTimeout(() => {
      addWordWarning.innerHTML = ''
    }, 4000)
  } else {
    addWordWarning.innerHTML = '<span style="color:#eb3223;">palavra invalida</span>'

    setTimeout(() => {
      addWordWarning.innerHTML = ''
    }, 4000)
  }
}

function exitGame() {
  show(boxStart, 'initial')
  show(boxGame, 'none')
}

function addWordExit() {
  setTimeout(() => {
    show(menuAddWord, '0')
    show(addWordList, 'none')
  }, 500)
}

let timer
btnAddWordInfo.addEventListener('click', e => {
  if (e.detail === 1) {
    timer = setTimeout(() => {
      show(addWordList, 'initial')
    }, 200)
  }
})

btnAddWordInfo.addEventListener('dblclick', e => {
  clearTimeout(timer)
  show(addWordList, 'none')
})