import { html, css } from 'lit'
import { BaseElement } from './base.js'

class SlideCard extends BaseElement {
  static properties = {
    title: { type: String },
  }

  static styles = [
    ...BaseElement.styles,
    css`
      :host {
        display: block;
      }
    `,
  ]

  render() {
    return html`
      <div part="card">
        ${this.title ? html`<div part="title">${this.title}</div>` : ''}
        <slot></slot>
      </div>
    `
  }
}

customElements.define('slide-card', SlideCard)
