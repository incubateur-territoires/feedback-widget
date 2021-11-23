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
      color: #ffffff !important;
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

    @media (max-width: 800px) {
      feedback-widget {
        width: 56px;
        height: 56px;
      }

      feedback-widget a {
        background-image: url(https://incubateur-territoires.github.io/feedback-widget/images/mobile.svg);
        background-repeat: no-repeat;
        background-position: center;
        text-indent: -5000%;
        display: block;
        padding: 16px;
        border-radius: 8px;
      }
    }
    `
  }
}


customElements.define('feedback-widget', FeedbackWidget)
