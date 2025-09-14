import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';

const appDiv = document.querySelector<HTMLDivElement>('#app');

if (!appDiv) throw new Error("Couldn't find app div");

appDiv.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;
const counterBtn = appDiv.querySelector<HTMLButtonElement>('#counter');

if (!counterBtn) throw new Error("Couldn't find counter button");

setupCounter(counterBtn);
