import { toggleMode } from "./module/darkmode.js";
import { getGameMode } from "./module/getGameMode.js";
import { getStartMenuEvents } from "./module/getStartMenuEvents.js";

const dataApp = document.querySelector('[data-app]'); 

dataApp.addEventListener('click', (e) => {
  const scannerButton = e.target.dataset.button; 

  if (scannerButton === 'dark-mode' || scannerButton === 'image-fix') toggleMode();
  if (scannerButton === 'start-game') getStartMenuEvents(scannerButton);
  if (scannerButton === 'random-mode') getGameMode(scannerButton);
  if (scannerButton === 'normal-mode') getGameMode(scannerButton);
  if (scannerButton === 'hard-mode') getGameMode(scannerButton);
  if (scannerButton === 'add-new-word') getStartMenuEvents(scannerButton);
  if (scannerButton === 'close-event-start-game') getStartMenuEvents(scannerButton);
  if (scannerButton === 'info') getStartMenuEvents(scannerButton);
  if (scannerButton === 'exit') getStartMenuEvents(scannerButton);
  if (scannerButton === 'close-event-info') getStartMenuEvents(scannerButton);
  if (scannerButton === 'save-new-word') getStartMenuEvents(scannerButton);
})
