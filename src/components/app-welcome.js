import WebComponent from '../core/webcomponent.js'
import "/web_modules/@polymer/paper-button/paper-button.js"
import './app-input.js'
import './app-greeter.js'

const template = () => `
<app-input hint="Your name, please">
    <p>What is your name?</p>
</app-input>

<app-greeter></app-greeter>

<paper-button raised>Reset</paper-button>
`;

customElements.define(
    "app-welcome",
    class extends WebComponent {
        render() {
            this.shadow.innerHTML = template()
            this.input = this.shadow.querySelector("app-input")
            this.greeter = this.shadow.querySelector("app-greeter")
            this.reset = this.shadow.querySelector("paper-button")

            this.input.addEventListener('change', () => {
                this.greeter.name = this.input.value;
                this.greeter.render()
            })

            this.reset.onclick = () => {
                this.input.reset()
                this.greeter.reset()
            }
        }
    }
)