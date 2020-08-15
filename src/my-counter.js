import { LitElement, html } from 'lit-element';

class MyCounter extends LitElement {

    static get properties() {
        return {
            counter: { type: Number }
        };
    }

    constructor() {
        super(); // Constructor de la clase padre
        this.counter = 0;
    }

    render() {
        return html`
            <style>
                div {
                    border: 1px solid red;
                }
            </style>
            
            <div>Llevas ${this.counter} clics !!</div>
            <div>
                <button @click="${this.increment}">+1</button>
                <button @click="${this.decrement}">-1</button>
            </div>
        `;
    }

    increment() {
        this.counter++;
    }

    decrement() {
        this.counter--;
    }
}

customElements.define('my-counter', MyCounter);