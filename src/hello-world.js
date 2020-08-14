import { LitElement, html } from 'lit-element';

class HelloWorld extends LitElement {
    render() {
        return html`
            <p>Hello World !!!</p>
        `;
    }
}

customElements.define('hello-world', HelloWorld);