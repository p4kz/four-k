
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
