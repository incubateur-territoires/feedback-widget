class FeedbackWidget extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      ${this.html}
      <style scope>${this.style}</style>
    `
  }

  get html() {
    return `
    <section>
      Donner mon avis
    </section>
    `
  }

  get style() {
    return `
    feedback-widget {
      display: inline-block;
      position: fixed;
      right: -6rem;
      bottom: 10rem;
      background-color: yellow;
      color: red;
      padding: 1rem;
      font-size: 2rem;
      transform: rotate(-90deg);
    }
    `
  }
}

customElements.define('feedback-widget', FeedbackWidget)
