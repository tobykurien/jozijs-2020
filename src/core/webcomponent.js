export default class WebComponent extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: "open" })
        this.init()
    }

    /**
     * Called when your component is attached to the DOM.
     * By default, this calls the render() method, You should 
     * not normally need to override this.
     */
    connectedCallback() {
        this.render()
    }

    /**
     * Initialize and reset your state. The default reset() method
     * uses this to reset the state and re-render your component.
     */
    init() { }

    /**
     * Render the component. You can create a DOM tree and attach 
     * it to the `shadow` property, or set the HTML string into 
     * the `shadow.innerHTML` property.
     */
    render() { }

    /**
     * Reset the component. By default, calls `init()` and `render()`.
     */
    reset() {
        this.init()
        this.render()
    }

    /**
     * Update the component's UI with the current state. Call this 
     * method after making state changes. By default, it calls the 
     * `render()` method, but you can override this to do more efficient
     * updates, since `render()` will tear down and re-create the component DOM
     */
    update() {
        this.render()
    }
} 