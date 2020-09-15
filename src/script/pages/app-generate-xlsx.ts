import { LitElement, css, html, customElement } from 'lit-element';


@customElement('app-generate-xlsx')
export class AppGenerateXlsx extends LitElement {

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
        <h2>Generate XLSX</h2>
        <button>Generate XLSX</button>
      </div>
    `;
  }
}