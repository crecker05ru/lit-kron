import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { cardStyles } from './card-styles';
import {styleMap} from 'lit/directives/style-map.js';
import './blue-atom-svg'
import './u-atom-svg'
import './arrow-up-svg'
@customElement('lesson-card')
export class LessonCard extends LitElement {
@property({type: Number})
colums = 8
@property({type: Number})
price = 5
@property({type: Number})
lessonsCount = 4
@property({type: Number})
lessonsTime = 50
@property({type: Number})
rating = 4


static override  styles = [cardStyles,css`
:host {
    display:block;
    /* width: calc(100% / 18 * 8 ); */
}
`]
override render(){
    const columsWidth = {
        width: ((window.innerWidth /16 * this.colums)) + 'px'
      };
    return html`
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
    `
}

}
declare global {
    interface HTMLElementTagNameMap {
        "lesson-card": LessonCard
    }
}