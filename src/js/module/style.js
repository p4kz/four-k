
const display = (tag, state) => {
  document.querySelector(tag).style.display = state;
} 

const opacity = (tag, state) => {
  document.querySelector(tag).style.opacity = state;
}

const disabled = (tag, boolean) => {
  if (boolean === true) {
    document.querySelector(tag).setAttribute('disabled', boolean);
  }

  if (boolean === false) {
    document.querySelector(tag).disabled = boolean;
  }
}

const animation = (tag, value) => {
  setTimeout(() => {
    opacity(tag, value)
  }, 200)
}

export const style = {
  display,
  opacity,
  disabled,
  animation
}