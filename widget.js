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
      <button title="Trouver une assistance et donner mon avis">
        Que cherchez-vous ?
      </button>
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

    feedback-widget button {
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
