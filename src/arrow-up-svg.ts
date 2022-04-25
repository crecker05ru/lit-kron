import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
@customElement('arrow-up-svg')
export class ArrowUpSVG extends LitElement{
override render(){
    return html`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289Z" fill="#4378FE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7C6 6.44772 6.44772 6 7 6H17C17.5523 6 18 6.44772 18 7V17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17V8H7C6.44772 8 6 7.55228 6 7Z" fill="#4378FE"/>
</svg>
    `
}
}
declare global {
    interface HTMLElementTagNameMap {
        "arrow-up-svg": ArrowUpSVG
    }
}