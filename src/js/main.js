import { toggleMode } from "./module/darkmode.js"
import { style } from "./module/style.js";

// Darkmode -
const buttonDarkMode = document.querySelector('[data-dark-mode]');

buttonDarkMode.addEventListener('click', () => toggleMode());

// Start -
const buttonStartGame = document.querySelector('[data-button-start]');

// Open menu
buttonStartGame.addEventListener('click', () => {
  style.display('[data-mode-box]', 'block');
  style.animation('[data-mode-event]', '1');
  style.disabled('[data-button-start]' , true);
});

// Event to close menu 
document.querySelector('[data-start-event]').addEventListener('dblclick', () => {
  style.display('[data-mode-box]', 'none');
  style.animation('[data-mode-event]', '0');
  style.disabled('[data-button-start]' , false);
});

// Select game mode
const gameModeSelect = document.querySelector('[data-mode-event]');

gameModeSelect.addEventListener('click', (e) => {
  if (e.target.dataset.mode == "random") {
    console.log("random mode ok");
  }

  if (e.target.dataset.mode == "normal") {
    console.log("normal mode ok");
  }

  if (e.target.dataset.mode == "hard") {
    console.log("hard mode ok");
  }
});