import { LitElement } from 'lit';
import './blue-atom-svg';
import './u-atom-svg';
import './arrow-up-svg';
export declare class LessonCard extends LitElement {
    colums: number;
    price: number;
    lessonsCount: number;
    lessonsTime: number;
    rating: number;
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "lesson-card": LessonCard;
    }
}
//# sourceMappingURL=lesson-card.d.ts.map