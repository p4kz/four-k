window.onload = function() {
  setMode()
}

function setMode() {
  let mode = localStorage.getItem('mode')
  if(!mode) mode = 'light'
  document.body.classList.add(mode)
}

export const toggleMode = () => {
  let element = document.body
  let btn = document.querySelector('[data-dark-mode]')
  let mode = localStorage.getItem('mode')
  
  if(!mode) mode = 'dark'
  
  if(mode == 'dark') {
    localStorage.setItem('mode', 'light')
    element.classList.remove('dark')
    element.classList.add('light')
    btn.innerHTML = '<img src="../src/assets/icon/moon-light.svg" alt="Imagem lua">' 
  } else {
    localStorage.setItem('mode', 'dark')
    element.classList.remove('light')
    element.classList.add('dark')
    btn.innerHTML = '<img src="../src/assets/icon/sun-dim-light.svg" alt="Imagem sol">'
  }    
}