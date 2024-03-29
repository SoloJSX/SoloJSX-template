import solojsx from 'solojsx';
export default class Main {
    static init() {
        const onClick = (text: string) => alert(text);
        const element = (
            <div>
                <h1>Vite + TypeScript + SoloJSX</h1>
                <p>Minimal example</p>
                <br />
                <div style="cursor: pointer" onclick={() => onClick("Hello world")}>Click me</div>
                <br />
                <img src="/vite.svg" alt="" />
            </div >);
        document.body.append(element);
    }
}