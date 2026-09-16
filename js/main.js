/* Main Entry Point */
import { initNav } from './modules/nav.js';
import { initBeforeAfter } from './modules/beforeAfter.js';
import { initFormValidation } from './modules/form.js';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initBeforeAfter();
  initFormValidation();
});
