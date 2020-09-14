import { LitElement, css, html, customElement } from 'lit-element';


@customElement('app-generate-pdf')
export class AppGeneratePdf extends LitElement {

  static get styles() {
    return css`
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <h2>Generate PDF</h2>
        <button>Generate PDF</button>
      </div>
    `;
    super.render();
  }
}