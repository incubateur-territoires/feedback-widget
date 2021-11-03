class WebComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      ${this.html}
      <style>${this.style}</style>
    `
  }
}


class FeedbackWidget extends WebComponent {
  get html() {
    return `
    <section>
      <a title="Trouver une assistance et donner mon avis" target="blank" href="https://r0puhdz45xz.typeform.com/to/eogbFq6j">
        Que cherchez-vous ?
      </a>
    </section>
    `
  }

  get style() {
    return `
    feedback-widget {
      display: inline-block;
      position: fixed;
      right: 56px;
      bottom: 48px;
    }

    feedback-widget a {
      display: block;
      text-decoration: none;
      color: #ffffff;
      border: 0;
      cursor: pointer;
      background: #000091;
      border-radius: 5px;
      color: white;
      padding: 4px 16px;
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      font-family: Marianne, Arianne, Verdana;
      font-style: normal;
      font-weight: bold;
    }
    `
  }
}


customElements.define('feedback-widget', FeedbackWidget)
