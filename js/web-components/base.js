import { LitElement, unsafeCSS } from 'lit'
import tailwindCSS from '../../css/tailwind.css?inline'

export class BaseElement extends LitElement {
  static styles = [unsafeCSS(tailwindCSS)]
}
