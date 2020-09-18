import { LitElement, css, html, customElement } from 'lit-element';
import * as XLSX from 'xlsx';
const { read, writeFile } = XLSX;


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
        <h2>Generate XLSX From Template - under construction</h2>
        <button @click=${this.generateXlsx}>Generate XLSX</button>
      </div>
    `;
  }

  async generateXlsx() {
    fetch(`${window.location.origin}/assets/templates/costings.xlsx`)
      .then(async (response) => {
        var data = new Uint8Array(await response.arrayBuffer());
        var workbook = read(data, { type: "array" });
        writeFile(workbook, 'letsGooooo.xlsx');
      })
      .catch((reason) => {
        console.log("Error: ", reason);
      });
  }
}