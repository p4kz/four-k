import { style } from "./style.js";

const exitMenuWord = () => {
  style.opacity('[data-menu-word]', '0');
  style.display('[data-menu-word]', 'none');
  style.disabled('[data-button="add-new-word"]', false);
  style.disabled('[data-button="info"]', false);

  setTimeout(() => {
    style.display('[data-menu-info]', 'none');
  }, 300)

  style.animation('[data-menu-info="list"]', '0');
}

const newGameConfig = () => {
  style.display('[data-start]', 'none');
  style.display('[data-game]', 'block');
  style.animation('[data-game="event"]', '1');

  // Game -<<<<<<<<< Lembrar rework
  exitMenuWord();
  randomWord();
  generateButtons();
  guessedWord();
  style.display('[data-mode-event]', 'none');
}

export const getGameMode = (e) => {

  if (e === 'random-mode') {
    maxAttempts = Math.floor((Math.random() * 5) + 1);
    document.querySelector('[data-attempts]').innerHTML = maxAttempts;
    newGameConfig()
  }

  if (e === 'normal-mode') {
    newGameConfig()
  }

  if (e === 'hard-mode') {
    maxAttempts = 3;
    document.querySelector('[data-attempts]').innerHTML = maxAttempts;
    newGameConfig()
  }

}