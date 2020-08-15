import { LitElement, html } from 'lit-element';

class HelloWorld extends LitElement {

    static get properties() {
        return {
            who: { type: String }
        };
    }

    render() {
        return html`
            <p>Hello <b>${this.who}</b> !!!</p>
        `;
    }
}

customElements.define('hello-world', HelloWorld);