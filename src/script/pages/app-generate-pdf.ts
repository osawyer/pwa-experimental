import { LitElement, css, html, customElement } from 'lit-element';
import { jsPDF } from 'jspdf';


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
        <button @click=${this.generatePdf}>Generate PDF</button>
        <h2>Generate PDF From HTML - under construction</h2>
        <button @click=${this.generatePdfFromHtml}>Generate PDF From HTML</button>
      </div>
    `;
  }

  generatePdf() {
    // Default export is a4 paper, portrait, using millimeters for units
    const doc = new jsPDF();
    doc.text("This isn't just any PDF mate. This is a JavaScript generated PDF.", 10, 10);
    doc.setFontSize(32);
    doc.text("BRUH", 10, 30);
    doc.setFontSize(12);
    doc.text("ok", 10, 40);
    doc.setFontSize(10);
    doc.text("we'll make the font a lil bit smol", 40, 40);
    var p1 = "Then come in with the lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget volutpat mi, sit amet sagittis justo. Pellentesque suscipit ut diam eu pharetra. Vestibulum faucibus sagittis egestas. Nullam a purus augue. Integer a placerat mi, aliquam hendrerit enim. Proin ultricies aliquam imperdiet. Etiam ultrices molestie nisl lobortis mollis. Donec accumsan arcu at metus fermentum, ut scelerisque mi molestie. Nullam eget placerat risus. Cras placerat purus vel massa vestibulum, pharetra aliquet nisi porttitor. Phasellus et rhoncus ante. Morbi et sem eros. Vestibulum consequat turpis et enim dictum consectetur. Nunc gravida leo dignissim, euismod nunc nec, volutpat diam. Aliquam dignissim erat quis sapien cursus, a bibendum justo elementum. In pellentesque mauris dapibus diam tempor, semper porttitor elit consectetur. Nunc tempus imperdiet elit nec viverra. Praesent consectetur mattis hendrerit. Nunc varius consectetur semper. Cras placerat convallis elit ac eleifend. Nam et euismod erat. Sed pretium mauris ut lorem ultrices rutrum. Aliquam quis ornare dui. Mauris vitae sagittis lacus, eget bibendum magna. Donec tincidunt dui vitae tellus laoreet finibus. Maecenas in nisi rhoncus dolor tincidunt varius ac quis enim. Donec at congue mi. Duis faucibus, sem hendrerit pellentesque consequat, nulla lectus pharetra est, id euismod est leo ut nisl.";
    var p2 = "Aenean ut ullamcorper lacus. Ut molestie ante quis vulputate condimentum. Duis egestas ligula eu felis pretium, in mollis odio dictum. Quisque tristique efficitur nulla, sit amet lacinia orci varius ut. Donec ac neque ut tellus gravida rutrum nec interdum neque. Nam sed augue lacinia, aliquam nunc sed, lobortis arcu. Nullam consectetur scelerisque vestibulum. Cras dictum in arcu nec lobortis. Donec ac neque ligula. Duis sed urna in nisl semper bibendum quis eu enim. Donec dapibus tempus elit. Nullam cursus mauris eu lorem gravida, in rutrum quam laoreet."
    var lines1 = doc.splitTextToSize(p1, (210 - 10 - 10));
    var lines2 = doc.splitTextToSize(p2, (210 - 10 - 10));
    doc.text(lines1, 10, 50);
    doc.text(lines2, 10, lines1.length * 4.1 + 55);
    var img1 = new Image();
    img1.src = 'assets/icons/icon_512.png';
    doc.addImage(img1, 'png', 150, 20, 20, 20);
    var img2 = new Image();
    img2.src = 'assets/img/ratho.png';
    doc.addImage(img2, 'png', 10, 150, 50, 122);
    var img3 = new Image();
    img3.src = 'assets/img/RathNBoneMan.png';
    doc.addImage(img3, 'png', 100, 150, 75, 100);
    doc.text('Images courtesy of artist Matt S', 80, 280);
    doc.save("woah.pdf");
  }

  generatePdfFromHtml() {
    const doc = new jsPDF();
    doc.html(document.body, {
      callback: function (doc) {
        doc.save("html-generated.pdf");
      },
      x: 10,
      y: 10
    });
  }
}