import { style } from "./style.js";

export const getStartMenuEvents = (e) => {

  if(e === 'start-game') {
    style.display('[data-mode-box]', 'block');
    style.animation('[data-mode-event]', '1');
    style.disabled( '[data-button="start-game"]' , true);
  }

  if(e === 'add-new-word') {
    style.display('[data-menu-word]', 'block');
    style.animation('[data-menu-word]', '1');
    style.disabled('[data-button="add-new-word"]', true);
  }

  if(e === 'close-event-start-game') {
    style.display('[data-mode-box]', 'none');
    style.animation('[data-mode-event]', '0');
    style.disabled('[data-button="start-game"]' , false);
  }

  if (e === 'info') {
    style.display('[data-menu-info]', 'inherit');
    style.disabled('[data-button="info"]', true);
    style.animation('[data-menu-info="list"]', '1') 
  }

  if (e === 'exit') {
    style.opacity('[data-menu-word]', '1');
    style.display('[data-menu-word]', 'none');
    style.disabled('[data-button="add-new-word"]', false);
    style.disabled('[data-button="info"]', false);
    setTimeout(() => style.display('[data-menu-info]', 'none'), 300);  
    style.animation('[data-menu-info="list"]', '0');
  }

  if (e === 'close-event-info') {
    style.display('[data-menu-info]', 'none');
    style.disabled('[data-button="info"]', false);
    style.animation('[data-menu-info="list"]', '0');
  }

  if(e === 'save-new-word') {
    const successInput = document.querySelector('[data-resp="success"]');
    const invalidInput = document.querySelector('[data-resp="invalid"]');
    const userWordInput = document.querySelector('[data-text="user-word"]');
    
    const pattern = /[^a-zA-Z]/g;
    let isValidWord = false;
    
    let userWordValue = userWordInput.value;
    successInput.innerHTML = '';
    invalidInput.innerHTML = '';

    if (pattern.test(userWordValue) === false) isValidWord = true;

    if (userWordValue != '' 
      && isValidWord === true 
      && userWordValue.length > 3
      && userWordValue.length <= 8) {
        wordData.push(userWordValue);
        successInput.innerHTML = 'Palavra adicionada';
        userWordValue = '';
        setTimeout(() => {successInput.innerHTML = ''}, 4000);
    } else {
      invalidInput.innerHTML = 'Palavra invalida';
      setTimeout(() => {invalidInput.innerHTML = ''}, 4000);
    }

  }

}