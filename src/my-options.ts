/* eslint-disable prefer-const */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { HairColor } from './hair-color';
import { hairColorViaEnum } from './hair-color-via-enum';

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

@customElement('my-options')
export class MyOptions extends LitElement {
  static override styles = css`
  :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
      margin: 16px;
    }

  `;

//properties with the map of color and hex codes
  @property()
  colorName = 'null'

  override render() {
    return html `
    <div> HairColor</div>
        <h1>${this._makeChangeButtons()}</h1>
    `;
  }
  
  /**
   * Formats a greeting sample code
   * @param name The name to say "Hello" to
   */
  sayHello(name: string): string {
    return `Hello, ${name}`;
  }

  _onHairColorButtonClicked(color: HairColor) {
    window.console.log("dispatiching", hairColorViaEnum.get(color));
    document.dispatchEvent(new CustomEvent("HAIR_COLOR_SELECTED", {
      detail: {
        color: hairColorViaEnum.get(color)
      }
    }));
  }

  _makeChangeButtons() {
    let toReturn = [];

    for (let color of hairColorViaEnum.keys()) {
      toReturn.push(html`  
      <button @click="${() => this._onHairColorButtonClicked(color)}">
         ${HairColor[color]}
      </button>`);
    }

    return toReturn;
  }  
}

declare global {
  interface HTMLElementTagNameMap {
    'my-options': MyOptions;
  }
}