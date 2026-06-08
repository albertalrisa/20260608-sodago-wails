import { html, css } from 'lit'
import { BaseElement } from './base.js'

class SlideLayout extends BaseElement {
  static styles = [
    ...BaseElement.styles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        gap: 12px;
      }
    `,
  ]

  render() {
    return html`
      <slot name="title" class="font-title text-lg font-bold text-left shrink-0"></slot>
      <slot name="body" class="h-full"></slot>
    `
  }
}

customElements.define('slide-layout', SlideLayout)
