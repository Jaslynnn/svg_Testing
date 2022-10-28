/* eslint-disable prefer-const */
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
import { changeHairColor } from './my-element';
/*Summary of the Code

Basic idea of the fill color thing for the separated file/ whatever Im trying to do above
Questions on line 113

- Make an array for each item and its colors
HairColor = new Map([
    ['Black', '#000000'],
    ['Grey', '#808080'],
    ['Brown', '#964B00']

EyeColor = new Map([
    ['Black', '#000000'],
    ['Grey', '#808080'],
    ['Brown', '#964B00']
...

When the code runs,
1  function _MakeChangeButtons creates the buttons based on the colorNames(key eg black)
2  function _ChangeHairColor is activated when buttons get clicked, it gets the colorName from the function and
- pulls out the hex code from the hair color map(value eg #000000)(Not done)
- selects the SVG classes to be changed(Not done)
- changes the SVG classes properties to the hex code provided(Not done)


What things to be changed:

Changes the color of the
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
export var HairColor;
(function (HairColor) {
    HairColor[HairColor["Black"] = 0] = "Black";
    HairColor[HairColor["Grey"] = 1] = "Grey";
    HairColor[HairColor["Brown"] = 2] = "Brown";
})(HairColor || (HairColor = {}));
let myOptions = class myOptions extends LitElement {
    constructor() {
        super(...arguments);
        //properties with the map of color and hex codes
        this.name = 'World';
        this.colorName = 'null';
        //Consider using something like this to prevent any chance of errors occuring when the program gets more complex because of a typo when naming a color
        this.hairColorViaEnum = new Map([
            [HairColor.Black, '#000000'],
            [HairColor.Grey, '#808080'],
            [HairColor.Brown, '#964B00']
        ]);
    }
    render() {
        return html `
    <div> HairColor</div>
        <h1>${this._MakeChangeButtons(this.hairColorViaEnum)}</h1>
    `;
    }
    /**
     * Formats a greeting sample code
     * @param name The name to say "Hello" to
     */
    sayHello(name) {
        return `Hello, ${name}`;
    }
    /*
    Questions
    Im not sure what to declare(?) -See above actually not very sure what that : means  <--- everything after the : is the Type or the Type to be returned
    1. _MakeChangeButtons(hairColors: Map<string, string>) : Map<string, string>{ Does not work
    2. @click does not work when I do not declare the thing above
      */
    _MakeChangeButtons(hairColors) {
        let toReturn = [];
        for (let color of hairColors.keys()) {
            toReturn.push(html `  
      <button @click="${() => changeHairColor(color, hairColors)}">
         ${HairColor[color]}
      </button>`);
        }
        return toReturn;
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
myOptions = __decorate([
    customElement('my-options')
], myOptions);
export { myOptions };
//# sourceMappingURL=my-options.js.map