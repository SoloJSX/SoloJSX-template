import solojsx from 'solojsx';
import { setupCounter } from './counter.ts';
import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';

const e =
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
            <img src={typescriptLogo} class="logo vanilla" alt="TypeScript logo" />
        </a>
        <h1>Vite + TypeScript + SoloJSX</h1>
        <div class="card">
            <button id="counter" type="button"></button>
        </div>
        <p class="read-the-docs">
            Click on the Vite and TypeScript logos to learn more
        </p>
    </div>;

document.querySelector<HTMLDivElement>('#app')!.append(e);
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)