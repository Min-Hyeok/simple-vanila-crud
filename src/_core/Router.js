export class Router {
    #el;
    #path = {};

    constructor({ el, path }) {
        this.#el = el;
        this.#path = path;

        this.init();
    }

    init() {
        window.addEventListener('popstate', (e) => this.routing(e));

        const popStateEvent = new PopStateEvent('popstate');
        dispatchEvent(popStateEvent);
    }

    routing() {
        const path = location.hash.replace(/#/, '');
        let selectedRoute = null;

        for (const key of Object.keys(this.#path)) {
            if (key.includes(path)) {
                selectedRoute = this.#path[key];

                break;
            }
        }

        if (!selectedRoute) selectedRoute = this.#path['/404'];

        new selectedRoute(this.#el);
    }


}