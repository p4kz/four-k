import { toggleMode } from "./module/darkmode.js"

const buttonDarkMode = document.querySelector('[data-dark-mode]');

buttonDarkMode.addEventListener('click', () => toggleMode());
