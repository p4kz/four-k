import { toggleMode } from "./module/darkmode.js"
import { getGameMode } from "./module/getGameMode.js";
import { getStartMenuEvents } from "./module/getStartMenuEvents.js";

// Darkmode -
const buttonDarkMode = document.querySelector('[data-dark-mode]');

buttonDarkMode.addEventListener('click', () => toggleMode());

// mudar o nome <-----------------------
const startButtonsEvents = document.querySelector('[data-start]');

startButtonsEvents.addEventListener('click', (e) => {
  const scanButton = e.target.dataset.button; 

  if (scanButton === 'start-game') getStartMenuEvents(scanButton);
  if (scanButton === 'add-new-word') getStartMenuEvents(scanButton);
  if (scanButton === 'close-event-start-game') getStartMenuEvents(scanButton);
  if (scanButton === 'info') getStartMenuEvents(scanButton);
  if (scanButton === 'exit') getStartMenuEvents(scanButton);
  if (scanButton === 'close-event-info') getStartMenuEvents(scanButton);
  if (scanButton === 'save-new-word') getStartMenuEvents(scanButton);

})

startButtonsEvents.addEventListener('click', (e) => {
  const scanButton = e.target.dataset.button; 

  if (scanButton === 'random-mode') getGameMode(scanButton);
  if (scanButton === 'normal-mode') getGameMode(scanButton);
  if (scanButton === 'hard-mode') getGameMode(scanButton);
})