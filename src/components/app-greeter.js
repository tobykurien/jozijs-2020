import WebComponent from './core/webcomponent.js'

const template = (obj) => obj.name ? `
<p>Hi ${obj.name}! Nice to meet you!</p>
` : ''

customElements.define(
    "app-greeter",
    class extends WebComponent {
        init() {
            this.name = undefined
        }

        render() {
            this.shadow.innerHTML = template(this)
        }
    }
)