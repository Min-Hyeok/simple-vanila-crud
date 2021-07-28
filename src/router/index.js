import { Router } from "Core/Router";
import { Register } from "@/views/register";
import { Home } from "@/views/Home";
import { NotFound } from "@/views/NotFound";

class Route {
    constructor() {
        new Router({
            el: document.querySelector('#content'),
            path: {
                '/': Home,
                '/404': NotFound,
                '/register': Register,
            }
        });
    }
}

export default Route;