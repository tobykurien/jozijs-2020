import WebComponent from "../core/webcomponent.js"
import "/web_modules/@polymer/paper-input/paper-input.js"

const template = (obj) => `
<slot></slot>
<paper-input label="${obj.getAttribute('hint')}"></paper-input>`

customElements.define(
    "app-input",
    class extends WebComponent {
        render() {
            this.shadow.innerHTML = template(this)
        }

        get name() {
            return this.shadow.querySelector("paper-input").value
        }
    }
)