export default class WebComponent extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: "open" })
        this.init()
    }

    /**
     * Called when your component is attached to the DOM
     */
    connectedCallback() {
        this.render()
    }

    /**
     * Init your state
     */
    init() { }

    /**
     * Render component
     */
    render() { }

    reset() {
        this.init()
        this.render()
    }
} 