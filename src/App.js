import { Component } from "@/_core/Component";
import { Header } from "@/components/Header";
import menu from '@/api/menu';

export class App extends Component {
    template() {
        return `
            ${this.h(Header, { menu })}
            <div id="content"></div>
        `;
    }
}
