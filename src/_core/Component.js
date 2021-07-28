export class Component {
    #el;
    #props = {};
    #state = {};

    constructor(el, props) {
        this.#el = el;
        this.#props = props;

        this.render();
    }

    getProps() {
        return this.#props;
    }

    getState() {
        return this.#state;
    }

    stateInit() {
        return {};
    }

    setup() {}

    onMounted() {}

    render() {
        this.#state = this.stateInit();

        this.setup();
        if (this.#el) this.#el.innerHTML = this.template();
        this.onMounted()
    }

    setState(newState) {
        this.#state = {
            ...this.#state,
            ...newState
        };

        this.render();
    }

    template() {
        return ``;
    }

    use(plugin) {
        new plugin();
    }

    h(component, props) {
        const target = new component(null, props);

        return target.template();
    }
}