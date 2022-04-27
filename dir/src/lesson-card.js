var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { cardStyles } from './card-styles';
import { styleMap } from 'lit/directives/style-map.js';
import './blue-atom-svg';
import './u-atom-svg';
import './arrow-up-svg';
let LessonCard = class LessonCard extends LitElement {
    constructor() {
        super(...arguments);
        this.colums = 8;
        this.price = 5;
        this.lessonsCount = 4;
        this.lessonsTime = 50;
        this.rating = 4;
    }
    render() {
        const columsWidth = {
            width: ((window.innerWidth / 16 * this.colums)) + 'px'
        };
        return html `
    <div class="wrapper" style=${styleMap(columsWidth)}>
   
    
    <div class="features-wrapper">
        <div class="features">
                <div >Иностранные языки</div>
                <div>Оффлайн</div>
                <div>От 7 до 12 лет</div>
                <div>Начальный</div>
                <div> <span class="rating-star">&#9733;</span> ${this.rating}</div>
            </div>
        <div class="arrow-up-svg"><arrow-up-svg ></arrow-up-svg></div>
    </div>
        <h3 class="card-article"><slot></slot></h3>
        <div class="card-footer">
        <div class="card-lesson-describe">
            <div class="lesson-property">Цена:</div>
            <div class="lesson-value">${this.price}<span>&#8381;</span>, за 1 занятие</div>
            <div class="lesson-property">Колво-занятий:</div>
            <div class="lesson-value">${this.lessonsCount} занятий по ${this.lessonsTime} минут</div>
        </div>
        <div class="svg-container">
            <u-atom-svg></u-atom-svg>
            <blue-atom-svg></blue-atom-svg>
        </div>
        </div>
       
       
    </div>
    `;
    }
};
LessonCard.styles = [cardStyles, css `
:host {
    display:block;
    /* width: calc(100% / 18 * 8 ); */
}
`];
__decorate([
    property({ type: Number })
], LessonCard.prototype, "colums", void 0);
__decorate([
    property({ type: Number })
], LessonCard.prototype, "price", void 0);
__decorate([
    property({ type: Number })
], LessonCard.prototype, "lessonsCount", void 0);
__decorate([
    property({ type: Number })
], LessonCard.prototype, "lessonsTime", void 0);
__decorate([
    property({ type: Number })
], LessonCard.prototype, "rating", void 0);
LessonCard = __decorate([
    customElement('lesson-card')
], LessonCard);
export { LessonCard };
//# sourceMappingURL=lesson-card.js.map