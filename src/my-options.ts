/* eslint-disable prefer-const */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

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

enum HairColor {
  Black, Grey, Brown
}

@customElement('my-options')
export class myOptions extends LitElement {
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
  name = 'World';
  colorName = 'null'
  // https://google.github.io/styleguide/tsguide.html consider using lowercase 'h'
  HairColor = new Map([
    ['Black', '#000000'],
    ['Grey', '#808080'],
    ['Brown', '#964B00']
  ]);

  //Consider using something like this to prevent any chance of errors occuring when the program gets more complex because of a typo when namaing a color
  hairColorViaEnum = new Map([
    [HairColor.Black, '#000000'],
    [HairColor.Grey, '#808080'],
    [HairColor.Brown, '#964B00']
  ]);


  override render() {
    return html `
    <div> HairColor</div>
        <h1>${this._MakeChangeButtons(this.HairColor)}</h1>
    `;
  }
  
  /**
   * Formats a greeting sample code
   * @param name The name to say "Hello" to
   */
  sayHello(name: string): string {
    return `Hello, ${name}`;
  }

/*
Questions
Im not sure what to declare(?) -See above actually not very sure what that : means  <--- everything after the : is the Type or the Type to be returned
1. _MakeChangeButtons(hairColors: Map<string, string>) : Map<string, string>{ Does not work
2. @click does not work when I do not declare the thing above
  */
  _MakeChangeButtons(hairColors: Map<string, string>) {
    let toReturn = [];

    for (let color of hairColors.keys()) {
      toReturn.push(html`  
      <button @click="${() => this._ChangeHairColor(color)}">
         ${color}
      </button>`);
    }

    return toReturn;
  }
  
  /**
   * Formats a greeting
   * @param colorName The name of the color
   * @param colorhex The hex of the color
   */
  
  _ChangeHairColor(colorName: string ): string {
    console.log(colorName)
    /*- pulls out the hex code from the hair color map(value eg #000000)(Not done)
- selects the SVG classes to be changed(Not done)
- changes the SVG classes properties to the hex code provided(Not done)
    */
    return `
   
      `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'my-options': myOptions;
  }
}