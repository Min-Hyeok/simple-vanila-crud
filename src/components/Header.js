import { Component } from "Core/Component";

export class Header extends Component {
    stateInit() {
        return {}
    }
    template() {
        const { menu } = this.getProps();

        return `
            <header class="b-header">
                <div class="b-header__logo"><a href="/#/">로고</a></div>
                <ul class="b-header__list">
                    ${menu.map(({ title, path }) => `
                        <li class="b-header__item">
                            <a href="${path}">${title}</a>
                        </li>
                    `).join('')}
                </ul>
            </header>
        `;
    }
}