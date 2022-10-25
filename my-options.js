/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/*Changes the color of the guys
hair/eyebrow,
eyes,
mustache/beard,
shirt

colors include

Hair/eyebrow/beard/mustache
black, grey, brown, blond

eyes
black, grey, brown, green, blue

shirt
green, orange, pink, purple, red, white, yellow



remove
hair
mustache/beard




*/
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let myOptions = class myOptions extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The name to say "Hello" to.
         */
        this.name = 'World';
        this.colorName = 'null';
        this.HairColor = new Map([
            ['Black', '#000000'],
            ['Grey', '#808080'],
            ['Brown', '#964B00']
        ]);
        /**
         * The number of times the button has been clicked.
         */
        this.count = 0;
        this.purple = "#9F2B68";
    }
    render() {
        return html `

  <div> HairColor</div>
      <h1>${this._MakeChangeButtons(this.HairColor)}</h1>
      <!--<button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>-->
     

      
    `;
    }
    _onClick() {
        this.count++;
        this.dispatchEvent(new CustomEvent('count-changed'));
    }
    _MakeChangeButtons(hairColors) {
        for (let color of hairColors) {
            return html `  
      <button @click="${this._ChangeHairColor(color[0])}">
         ${color[0]}
      </button>
      
     
    

    `;
        }
        return;
    }
    /**
     * Formats a greeting
     * @param colorName The name of the color
     * @param colorhex The hex of the color
     */
    _ChangeHairColor(colorName) {
        console.log(colorName);
        return `
   
    
  
      `;
    }
    /**
     * Formats a greeting
     * @param name The name to say "Hello" to
     */
    sayHello(name) {
        return `Hello, ${name}`;
    }
};
myOptions.styles = css `
  :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
      margin: 16px;
    }

  `;
__decorate([
    property()
], myOptions.prototype, "name", void 0);
__decorate([
    property({
        type: Number
    })
], myOptions.prototype, "count", void 0);
myOptions = __decorate([
    customElement('my-options')
], myOptions);
export { myOptions };
//# sourceMappingURL=my-options.js.map