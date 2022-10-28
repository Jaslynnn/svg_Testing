/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {HairColor} from './my-options';



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
@customElement('my-element')
export class MyElement extends LitElement {
  static override styles = css`
  :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
      margin: 16px;
    }
    .guy{
      width: 30vw;
    }


  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;
  purple = "#9F2B68"

 //Consider using something like this to prevent any chance of errors occuring when the program gets more complex because of a typo when naming a color
  hairColorViaEnum = new Map([
    [HairColor.Black, '#000000'],
    [HairColor.Grey, '#808080'],
    [HairColor.Brown, '#964B00']
  ]);

  override render() {
    return html`
  
    <?xml version="1.0" encoding="UTF-8"?>
<svg class="guy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 907.68 996.09">
  <g class="body">
    <path class="skin2" d="M898.52,996.03c-2.22-.12-.1-20.83-1.7-50.53-.7-13.04-7.02-73.73-19.27-106.43-17.74-47.32-50.72-86.42-129.44-99.58-32.18-5.38-139.26-39.38-152.37-53.93-16.28-18.07-33.28-30.72-38.57-53.78-9.56-41.6-2.97-80.47-2.97-80.47l-98.18-1.7v-.08s-2.16,.04-2.16,.04l-2.17-.04v.08s-98.18,1.7-98.18,1.7c0,0,6.59,38.87-2.97,80.47-5.3,23.06-22.3,35.72-38.57,53.78-13.11,14.55-120.19,48.55-152.37,53.92-78.73,13.15-111.71,52.25-129.45,99.57-12.26,32.71-18.57,93.39-19.28,106.44-1.6,29.7,.51,50.42-1.7,50.54l445.41-1.4h0s443.96,1.4,443.96,1.4Zm-444.66-229.96l-.02,6.48-.02-6.48,.02-2.09,.02,2.08Z" fill="#fbc6bc"/>
    <g class="neckShadow">
      <g class="faceShadow4" opacity=".5">
        <path d="M529.94,719.86c4.95-1.29,9.9-2.59,14.85-3.87,12.61-3.27,25.24-6.5,37.88-9.67,1.12,.91,.93,2.79-.02,3.89-.94,1.1-2.38,1.62-3.76,2.06-23.19,7.52-42.7,13.86-68.62,21.97-5.81,1.82-12.68,4.92-17.07,9.16-3.01,2.9-6.12,5.77-10.13,4.58-3.8-1.13-6.54-9.87-5-12.36,1.46-2.37,4.03-3.22,6.62-4.23,0,0,30.56-7.7,45.24-11.54Z" fill="#eba59c"/>
      </g>
      <g class="faceShadow4" data-name="faceShadow4" opacity=".5">
        <path d="M518.32,616.45c-.81,17.79-14.34,76.9-29.55,95.74-1.12,1.39-8.7,10.07-9.89,8.74-1.43-1.61-1.55-20.4-.94-22.06,7.02-6.5,40.63-87.88,40.38-82.42Z" fill="#eba59c"/>
      </g>
      <g class="faceShadow4" data-name="faceShadow4" opacity=".5">
        <path d="M377.75,719.86c-4.95-1.29-9.9-2.59-14.85-3.87-12.61-3.27-25.24-6.5-37.88-9.67-1.12,.91-.93,2.79,.02,3.89,.94,1.1,2.38,1.62,3.76,2.06,23.19,7.52,42.7,13.86,68.62,21.97,5.81,1.82,12.68,4.92,17.07,9.16,3.01,2.9,6.12,5.77,10.13,4.58,3.8-1.13,6.54-9.87,5-12.36-1.46-2.37-4.03-3.22-6.62-4.23,0,0-30.56-7.7-45.24-11.54Z" fill="#eba59c"/>
      </g>
      <g class="faceShadow4" data-name="faceShadow4" opacity=".5">
        <path d="M389.37,616.45c.81,17.79,14.34,76.9,29.55,95.74,1.12,1.39,8.7,10.07,9.89,8.74,1.43-1.61,1.55-20.4,.94-22.06-7.02-6.5-40.63-87.88-40.38-82.42Z" fill="#eba59c"/>
      </g>
      <path class="faceShadow5" d="M549.46,559.48l-193.59-6.02c-1.79-.83,25.86,59.07,65.42,98.7,30.46,30.52,99.55,68.94,127.55,74.87,24.39,5.17,80.45,7.95,86.4-12.83,2.39-8.35-35.48-17.84-52.09-41.87-37.55-30.76-27.74-76.12-33.7-112.85Z" fill="#3e1332" opacity=".1"/>
    </g>
    <path class="skin1" d="M299.15,503.01c1.64,3.19,14.44,33.11,53.84,71.6,23.99,23.44,41.18,43.08,81.59,49.4,14.09,2.2,43.96,1.69,54.95-3.61,63.78-30.78,83.47-66.91,106.56-92.96,38.02-42.9,45.75-232.82,48.29-249.76,2.33-15.52,3.94-158.27-79.77-197.16-85.54-39.74-203.07-26.71-256.35,24.91-53.28,51.62-43.45,204.69-41.85,241.63,1.6,37.06,27.02,155.68,32.75,155.96Z" fill="#fcd1cc"/>
    <g class="faceShadows">
      <path class="faceShadow0" d="M299.29,429.88c11.49,9.96,14.94,.78,14.17-7.29-.55-5.74,5.25-19.68,14.35-21.38,9.45-1.76,39.52-6.38,25.88-18.67-14.66-13.21-41.22-11.29-51.95-3.61-8.88,6.36-12.44,42.28-2.45,50.94Z" fill="#fff" opacity=".15"/>
      <g class="faceShadow3">
        <path class="EyebrowDimple" d="M387.92,255.21c.14,.94,14.41-3.63,20.88,.82,9.66,6.65,13.37,14.85,13.37,14.85,.26,.3-7.53-7.4-15.25-10.38-7.12-2.75-19.04-5.4-19-5.29Z" fill="#f8afa4" opacity=".5"/>
        <g class="Dimple" opacity=".5">
          <path d="M331.26,478.13c7.23,10.58,11.1,24.63,15.9,40.83-2.31,1.88-12.16-15.36-13.83-20.16-1.04-2.98-3.58-10.83-3.04-13.61,.69-3.57,.98-7.06,.98-7.06Z" fill="#eba59c"/>
        </g>
        <g class="CheekHollow" opacity=".5">
          <path d="M572.29,457.64c-4.23,3.23-18.49,23.98-19.15,25.6-.41,1.01-1.47,14.56-4.16,30.39-1.89,11.11-5.55,22.08-6.66,30.6,3.57-2.58,9.83-19.74,10.98-23.99,4.04-14.85,2.94-22.74,9.38-35.02,5.35-10.19,11-27.09,9.61-27.57Z" fill="#eba59c"/>
        </g>
      </g>
    </g>
    <g class="Nose">
      <path class="shadow2" d="M575.83,300.83c-12.82-2.07-79.6-5.28-91.22,13.83-10.57,17.38-12.42,48.51-12.7,54.32-.4,8.11,2.12,33.13,2.54,36.21,.87,6.31,6.02,23.73,3.61,34.55-2.06,9.24-21.53,9.72-21.6,10.12,.56,.44,.17,2.79,1.03,2.75,1.75-.07,6.51-.51,10.56-.87,16.88-1.5,21.13-13.71,17.89-23.75-1.94-6.03-6.11-20.06-7.28-27.2-.88-5.31,1.21-49.28,11.54-63.54,8.99-12.42,22.14-23.79,46.2-23.47,24.04,.33,20.53,.38,20.53,.52l18.92-13.47Z" fill="#eba59c" opacity=".5"/>
      <path class="shadow3" d="M478.18,394.09s8.05,25.73,10.29,32.61c2.83,8.71,4.28,14.12-1.81,19.11-5.98,4.9-27.33,8.4-28.31,6.37,4.52,.58,28.71-.28,26.71-18.06-.31-2.73-5.05-18.87-5.94-26.85-.83-7.38-.88-11.69-.94-13.18Z" fill="#f8ada7"/>
      <path class="shadow3" data-name="shadow3" d="M432.08,419.21s-2.82,7.48-6.36,12.43c-3.13,4.36-2.01,12.69,4.21,16.49,5.32,3.24,12.21,4.1,12.9,3.89-.13,.36-10.3-7.18-10.28-13.23,.01-4.86,2.06-18.51-.47-19.57Z" fill="#f8ada7"/>
      <path class="shadow3" data-name="shadow3" d="M448.23,447.44s10.05,2.75,8.6,4.44c-1.45,1.69-11.2-1.17-12.71-1.99-3.01-1.61,2.63-3.5,4.11-2.45Z" fill="#f8ada7"/>
      <path class="shadow1" d="M476.55,441.93c-.47,1.46-5.09,5.11-10.84,6.58-5.96,1.52-11.34-2.37-11.53-5.78-.19-3.41,4.67-6.36,10.84-6.58,6.18-.22,12.56,2.54,11.53,5.78Z" fill="#fff" opacity=".3"/>
    </g>
  </g>
  <g class="mouth">
    <path class="mouthbase" d="M391.5,480.86c8.61-5.73,119.74-.73,124.38,4.27,5.34,5.75-13.31,34.94-35.48,39.63-60.93,12.9-109.8-30-88.91-43.9Z" fill="#d05963"/>
    <path class="teeth" d="M406.25,478.68s-1.17,14.11,.36,15.48c2.44,2.19,75.91,.72,90.78,.14,1.5-.06,2.66-1.16,2.73-2.54l.49-10.03-14.21-1.52c-23.65-1.24-47.4-2.34-71.38-1.92l-8.76,.4Z" fill="#fff"/>
    <path class="tongue" d="M418.77,518.63s5.7-4.4,31.77-4.4,41.03,5.44,41.03,5.44c-.63,3.59-25.83,7.67-38.18,6.99-14.32-.78-35.55-6.58-34.62-8.03Z" fill="#c4313e"/>
  </g>
  <g class="shirt">
    <path class="shirtColor" d="M906,938.74c0-15.18-44.94-155.95-51.69-166.07-1.21-1.82-68.44-27.83-81.72-32.72-14.92-5.49-27.29-9.07-49.19-16.25-4.38-1.44-13.18-5.22-17.76-6.66-5.09-1.6-11.43-2.8-16.65-4.44-2.79-.88-7.05-3.42-9.75-4.26-2.11-.66-5.46-.51-7.49-1.15-4.51-1.41-14.27-6.56-18.63-7.91-5.28-1.63-16.09-2.65-21.02-4.16-12.68-3.89-21.79-6.75-28.1-8.77,.56-3.51-3.67-4.6-8.53-7.61-5.98-3.69-10.52-8.94-14.21-2.96-.15,.25-15.49,24.95-34.2,44.36-19.07,19.8-52.83,31.9-93.21,33.22-40.38-1.32-74.14-13.42-93.21-33.22-18.7-19.41-34.04-44.11-34.2-44.36-3.69-5.97-8.24-.73-14.21,2.96-4.87,3.01-9.09,4.1-8.53,7.61-6.31,2.02-15.42,4.88-28.1,8.77-4.93,1.51-15.74,2.53-21.02,4.16-4.36,1.35-14.11,6.5-18.63,7.91-2.04,.64-5.38,.48-7.49,1.15-2.7,.84-6.96,3.39-9.75,4.26-5.22,1.64-11.56,2.84-16.65,4.44-4.59,1.44-13.38,5.22-17.76,6.66-21.9,7.18-34.27,10.76-49.19,16.25-13.29,4.89-80.51,30.9-81.72,32.72-6.75,10.12-51.69,150.89-51.69,166.07S0,996.09,0,996.09l9.16-.06,139.1-.88H759.42l139.1,.88,9.16,.06s-1.69-42.16-1.69-57.35Z" fill="#769976"/>
    <g class="collars">
      <g class="collar" data-name="collar">
        <g class="collarShadow" opacity=".4">
          <path d="M453.93,753.36c40.41-1.31,74.04-13.41,93.12-33.22,18.7-19.41,34.04-44.11,34.2-44.36,3.69-5.97,8.24-.73,14.21,2.96,5.98,3.69,11.11,4.43,7.42,10.41-.68,1.1-16.95,27.28-37.51,48.63-23.98,24.89-63.44,39.45-111.1,40.99-.14,0-.28,0-.42,0" fill="#010101" opacity=".3"/>
        </g>
        <g>
          <g class="lightStripes" opacity=".1">
            <path d="M455.47,778.89l-1.27-24.97c.94-.05,1.89-.1,2.83-.16l1.6,24.95c-1.05,.07-2.11,.13-3.16,.18Zm6.32-.4l-1.92-24.93c.94-.07,1.89-.15,2.83-.24l2.24,24.9c-1.05,.09-2.11,.18-3.16,.26Zm6.31-.57l-2.56-24.87c.94-.1,1.88-.2,2.82-.31l2.89,24.83c-1.05,.12-2.1,.24-3.15,.35Zm6.29-.73l-3.22-24.79c.94-.12,1.87-.25,2.81-.38l3.55,24.75c-1.04,.15-2.09,.29-3.14,.43Zm6.28-.9l-3.89-24.7c.93-.15,1.86-.3,2.79-.46l4.24,24.64c-1.04,.18-2.09,.35-3.13,.52Zm6.26-1.08l-4.59-24.58c.92-.17,1.85-.35,2.77-.54l4.94,24.51c-1.04,.21-2.08,.41-3.12,.61Zm6.23-1.26l-5.3-24.43c.91-.2,1.82-.4,2.73-.62l5.68,24.35c-1.03,.24-2.07,.47-3.11,.7Zm6.21-1.45l-6.06-24.25c.91-.23,1.81-.46,2.71-.7l6.43,24.16c-1.02,.27-2.05,.54-3.09,.8Zm6.17-1.64l-6.83-24.05c.89-.25,1.78-.51,2.67-.78l7.23,23.93c-1.02,.31-2.04,.61-3.07,.9Zm6.13-1.85l-7.64-23.8c.88-.28,1.76-.57,2.63-.87l8.07,23.66c-1.02,.35-2.04,.69-3.07,1.02Zm6.11-2.09l-8.51-23.51c.87-.31,1.73-.64,2.59-.96l8.96,23.34c-1.01,.39-2.02,.76-3.04,1.13Zm6.06-2.33l-9.42-23.16c.85-.35,1.69-.7,2.53-1.06l9.89,22.96c-.99,.43-2,.85-3,1.26Zm6-2.59l-10.39-22.74c.83-.38,1.65-.77,2.47-1.16l10.89,22.51c-.98,.47-1.97,.94-2.96,1.39Zm5.91-2.86l-11.41-22.25c.8-.41,1.6-.83,2.39-1.26l11.94,21.96c-.96,.52-1.94,1.04-2.92,1.54Zm5.81-3.16l-12.49-21.65c.78-.45,1.54-.9,2.3-1.37l13.05,21.33c-.94,.58-1.89,1.14-2.85,1.7Zm5.68-3.48l-13.62-20.96c.74-.48,1.47-.97,2.19-1.47l14.22,20.56c-.92,.64-1.85,1.26-2.79,1.87Zm5.53-3.83l-14.82-20.14c.7-.52,1.39-1.04,2.07-1.58l15.45,19.66c-.89,.7-1.79,1.38-2.7,2.05Zm5.34-4.2l-16.07-19.15c.66-.55,1.31-1.12,1.95-1.69l16.7,18.6c-.85,.76-1.71,1.51-2.58,2.24Zm5.1-4.58l-17.34-18.01c.61-.59,1.21-1.19,1.8-1.8l17.99,17.36c-.8,.83-1.61,1.64-2.45,2.44Zm4.71-4.85l-18.41-16.92c.64-.69,1.27-1.39,1.89-2.09l18.65,16.65c-.71,.79-1.42,1.58-2.14,2.36Zm4.23-4.73l-18.87-16.4c.62-.71,1.24-1.43,1.85-2.15l19.08,16.16c-.68,.8-1.36,1.6-2.06,2.4Zm4.08-4.81l-19.26-15.94c.61-.74,1.21-1.47,1.81-2.21l19.45,15.71c-.66,.81-1.32,1.63-1.99,2.44Zm3.95-4.89l-19.61-15.5c.6-.76,1.19-1.51,1.77-2.27l19.77,15.3c-.63,.82-1.27,1.64-1.93,2.46Zm3.83-4.94l-19.92-15.11c.59-.78,1.17-1.55,1.73-2.31l20.05,14.93c-.61,.82-1.24,1.65-1.87,2.49Zm3.72-5l-20.19-14.75c.58-.79,1.14-1.57,1.69-2.34l20.32,14.57c-.59,.83-1.2,1.67-1.83,2.52Zm3.62-5.05l-20.43-14.41c.57-.81,1.12-1.6,1.65-2.37l20.56,14.22c-.57,.83-1.17,1.69-1.79,2.56Zm3.54-5.12l-20.68-14.05c.57-.83,1.11-1.64,1.62-2.41l20.79,13.88c-.55,.82-1.13,1.68-1.74,2.58Zm3.46-5.18l-20.92-13.69c.57-.87,1.1-1.69,1.57-2.43l21.04,13.5c-.51,.8-1.08,1.67-1.7,2.62Zm3.38-5.26l-21.18-13.28c.91-1.45,1.41-2.28,1.45-2.34l21.45,12.83s-.6,1-1.72,2.79Z" fill="#f3f3f3"/>
          </g>
          <g class="darkStripes" opacity=".1">
            <path d="M455.47,778.89l-1.27-24.97c.94-.05,1.89-.1,2.83-.16l1.6,24.95c-1.05,.07-2.11,.13-3.16,.18Zm6.32-.4l-1.92-24.93c.94-.07,1.89-.15,2.83-.24l2.24,24.9c-1.05,.09-2.11,.18-3.16,.26Zm6.31-.57l-2.56-24.87c.94-.1,1.88-.2,2.82-.31l2.89,24.83c-1.05,.12-2.1,.24-3.15,.35Zm6.29-.73l-3.22-24.79c.94-.12,1.87-.25,2.81-.38l3.55,24.75c-1.04,.15-2.09,.29-3.14,.43Zm6.28-.9l-3.89-24.7c.93-.15,1.86-.3,2.79-.46l4.24,24.64c-1.04,.18-2.09,.35-3.13,.52Zm6.26-1.08l-4.59-24.58c.92-.17,1.85-.35,2.77-.54l4.94,24.51c-1.04,.21-2.08,.41-3.12,.61Zm6.23-1.26l-5.3-24.43c.91-.2,1.82-.4,2.73-.62l5.68,24.35c-1.03,.24-2.07,.47-3.11,.7Zm6.21-1.45l-6.06-24.25c.91-.23,1.81-.46,2.71-.7l6.43,24.16c-1.02,.27-2.05,.54-3.09,.8Zm6.17-1.64l-6.83-24.05c.89-.25,1.78-.51,2.67-.78l7.23,23.93c-1.02,.31-2.04,.61-3.07,.9Zm6.13-1.85l-7.64-23.8c.88-.28,1.76-.57,2.63-.87l8.07,23.66c-1.02,.35-2.04,.69-3.07,1.02Zm6.11-2.09l-8.51-23.51c.87-.31,1.73-.64,2.59-.96l8.96,23.34c-1.01,.39-2.02,.76-3.04,1.13Zm6.06-2.33l-9.42-23.16c.85-.35,1.69-.7,2.53-1.06l9.89,22.96c-.99,.43-2,.85-3,1.26Zm6-2.59l-10.39-22.74c.83-.38,1.65-.77,2.47-1.16l10.89,22.51c-.98,.47-1.97,.94-2.96,1.39Zm5.91-2.86l-11.41-22.25c.8-.41,1.6-.83,2.39-1.26l11.94,21.96c-.96,.52-1.94,1.04-2.92,1.54Zm5.81-3.16l-12.49-21.65c.78-.45,1.54-.9,2.3-1.37l13.05,21.33c-.94,.58-1.89,1.14-2.85,1.7Zm5.68-3.48l-13.62-20.96c.74-.48,1.47-.97,2.19-1.47l14.22,20.56c-.92,.64-1.85,1.26-2.79,1.87Zm5.53-3.83l-14.82-20.14c.7-.52,1.39-1.04,2.07-1.58l15.45,19.66c-.89,.7-1.79,1.38-2.7,2.05Zm5.34-4.2l-16.07-19.15c.66-.55,1.31-1.12,1.95-1.69l16.7,18.6c-.85,.76-1.71,1.51-2.58,2.24Zm5.1-4.58l-17.34-18.01c.61-.59,1.21-1.19,1.8-1.8l17.99,17.36c-.8,.83-1.61,1.64-2.45,2.44Zm4.71-4.85l-18.41-16.92c.64-.69,1.27-1.39,1.89-2.09l18.65,16.65c-.71,.79-1.42,1.58-2.14,2.36Zm4.23-4.73l-18.87-16.4c.62-.71,1.24-1.43,1.85-2.15l19.08,16.16c-.68,.8-1.36,1.6-2.06,2.4Zm4.08-4.81l-19.26-15.94c.61-.74,1.21-1.47,1.81-2.21l19.45,15.71c-.66,.81-1.32,1.63-1.99,2.44Zm3.95-4.89l-19.61-15.5c.6-.76,1.19-1.51,1.77-2.27l19.77,15.3c-.63,.82-1.27,1.64-1.93,2.46Zm3.83-4.94l-19.92-15.11c.59-.78,1.17-1.55,1.73-2.31l20.05,14.93c-.61,.82-1.24,1.65-1.87,2.49Zm3.72-5l-20.19-14.75c.58-.79,1.14-1.57,1.69-2.34l20.32,14.57c-.59,.83-1.2,1.67-1.83,2.52Zm3.62-5.05l-20.43-14.41c.57-.81,1.12-1.6,1.65-2.37l20.56,14.22c-.57,.83-1.17,1.69-1.79,2.56Zm3.54-5.12l-20.68-14.05c.57-.83,1.11-1.64,1.62-2.41l20.79,13.88c-.55,.82-1.13,1.68-1.74,2.58Zm3.46-5.18l-20.92-13.69c.57-.87,1.1-1.69,1.57-2.43l21.04,13.5c-.51,.8-1.08,1.67-1.7,2.62Zm3.38-5.26l-21.18-13.28c.91-1.45,1.41-2.28,1.45-2.34l21.45,12.83s-.6,1-1.72,2.79Z" fill="#010101"/>
          </g>
        </g>
      </g>
      <g class="collar" data-name="collar">
        <g class="collarShadow" opacity=".4">
          <path d="M453.75,753.36c-40.41-1.31-74.04-13.41-93.12-33.22-18.7-19.41-34.04-44.11-34.2-44.36-3.69-5.97-8.24-.73-14.21,2.96-5.98,3.69-11.11,4.43-7.42,10.41,.68,1.1,16.95,27.28,37.51,48.63,23.98,24.89,63.44,39.45,111.1,40.99,.14,0,.28,0,.42,0" fill="#010101" opacity=".3"/>
        </g>
        <g class="lightStripes" opacity=".1">
          <path d="M453.27,778.94c-1.4-.07-2.8-.14-4.2-.23l1.59-24.95c1.26,.08,2.52,.15,3.77,.21l-1.17,24.97Zm-8.41-.54c-1.4-.11-2.81-.24-4.21-.38l2.46-24.88c1.26,.12,2.51,.24,3.77,.34l-2.01,24.92Zm-8.4-.83c-1.4-.16-2.8-.34-4.2-.53l3.33-24.78c1.25,.17,2.5,.32,3.75,.47l-2.88,24.83Zm-8.38-1.13c-1.4-.21-2.79-.44-4.18-.68l4.23-24.64c1.24,.21,2.48,.41,3.72,.6l-3.77,24.71Zm-8.34-1.44c-1.39-.27-2.78-.55-4.16-.84l5.18-24.46c1.22,.26,2.45,.51,3.67,.74l-4.7,24.55Zm-8.31-1.76c-1.38-.32-2.76-.66-4.13-1.01l6.17-24.23c1.2,.31,2.42,.6,3.63,.89l-5.67,24.35Zm-8.25-2.1c-1.37-.38-2.74-.78-4.1-1.19l7.23-23.93c1.18,.36,2.37,.7,3.57,1.03l-6.7,24.09Zm-8.19-2.48c-1.37-.45-2.73-.91-4.07-1.39l8.36-23.56c1.16,.41,2.32,.81,3.5,1.19l-7.78,23.76Zm-8.13-2.89c-1.35-.52-2.69-1.05-4.02-1.6l9.58-23.09c1.13,.47,2.26,.92,3.41,1.36l-8.96,23.34Zm-8.02-3.33c-1.33-.6-2.65-1.21-3.96-1.84l10.88-22.51c1.09,.52,2.18,1.04,3.29,1.53l-10.22,22.82Zm-7.88-3.82c-1.31-.69-2.62-1.4-3.87-2.11l12.31-21.76c1.04,.59,2.09,1.16,3.15,1.72l-11.59,22.15Zm-7.69-4.35c-1.27-.78-2.54-1.59-3.76-2.4l13.83-20.83c.97,.64,1.97,1.28,2.98,1.9l-13.05,21.32Zm-7.45-4.95c-1.22-.88-2.44-1.79-3.61-2.71l15.44-19.66c.9,.71,1.84,1.41,2.79,2.1l-14.62,20.28Zm-7.11-5.59c-1.16-1-2.31-2.02-3.4-3.06l17.13-18.21c.82,.77,1.68,1.54,2.55,2.29l-16.28,18.98Zm-6.68-6.29c-.33-.35-.66-.69-.99-1.04-.66-.71-1.32-1.42-1.98-2.14l18.48-16.83c.58,.64,1.16,1.27,1.75,1.9,.24,.26,.49,.52,.73,.77l-18,17.35Zm-5.79-6.35c-.93-1.06-1.84-2.12-2.75-3.19l19.08-16.16c.81,.96,1.64,1.92,2.47,2.87l-18.8,16.48Zm-5.44-6.42c-.89-1.09-1.77-2.17-2.63-3.25l19.56-15.57c.79,.99,1.59,1.98,2.4,2.97l-19.33,15.85Zm-5.21-6.54c-.86-1.11-1.7-2.22-2.53-3.31l19.96-15.05c.76,1.01,1.54,2.03,2.33,3.06l-19.77,15.3Zm-5.01-6.64c-.84-1.14-1.65-2.26-2.44-3.36l20.32-14.57c.73,1.02,1.49,2.06,2.27,3.12l-20.15,14.8Zm-4.83-6.74c-.82-1.18-1.61-2.32-2.36-3.41l20.64-14.11c.7,1.02,1.43,2.08,2.2,3.17l-20.48,14.34Zm-4.68-6.85c-.83-1.24-1.59-2.4-2.28-3.46l20.95-13.64c.64,.99,1.35,2.07,2.13,3.23l-20.8,13.87Zm-4.53-6.97c-1.48-2.33-2.28-3.68-2.28-3.68l21.45-12.83s0,0,0,0h0c.06,.1,.74,1.24,1.95,3.15l-21.13,13.36Z" fill="#f3f3f3"/>
        </g>
        <g class="darkStripes" opacity=".1">
          <path d="M453.27,778.94c-1.4-.07-2.8-.14-4.2-.23l1.59-24.95c1.26,.08,2.52,.15,3.77,.21l-1.17,24.97Zm-8.41-.54c-1.4-.11-2.81-.24-4.21-.38l2.46-24.88c1.26,.12,2.51,.24,3.77,.34l-2.01,24.92Zm-8.4-.83c-1.4-.16-2.8-.34-4.2-.53l3.33-24.78c1.25,.17,2.5,.32,3.75,.47l-2.88,24.83Zm-8.38-1.13c-1.4-.21-2.79-.44-4.18-.68l4.23-24.64c1.24,.21,2.48,.41,3.72,.6l-3.77,24.71Zm-8.34-1.44c-1.39-.27-2.78-.55-4.16-.84l5.18-24.46c1.22,.26,2.45,.51,3.67,.74l-4.7,24.55Zm-8.31-1.76c-1.38-.32-2.76-.66-4.13-1.01l6.17-24.23c1.2,.31,2.42,.6,3.63,.89l-5.67,24.35Zm-8.25-2.1c-1.37-.38-2.74-.78-4.1-1.19l7.23-23.93c1.18,.36,2.37,.7,3.57,1.03l-6.7,24.09Zm-8.19-2.48c-1.37-.45-2.73-.91-4.07-1.39l8.36-23.56c1.16,.41,2.32,.81,3.5,1.19l-7.78,23.76Zm-8.13-2.89c-1.35-.52-2.69-1.05-4.02-1.6l9.58-23.09c1.13,.47,2.26,.92,3.41,1.36l-8.96,23.34Zm-8.02-3.33c-1.33-.6-2.65-1.21-3.96-1.84l10.88-22.51c1.09,.52,2.18,1.04,3.29,1.53l-10.22,22.82Zm-7.88-3.82c-1.31-.69-2.62-1.4-3.87-2.11l12.31-21.76c1.04,.59,2.09,1.16,3.15,1.72l-11.59,22.15Zm-7.69-4.35c-1.27-.78-2.54-1.59-3.76-2.4l13.83-20.83c.97,.64,1.97,1.28,2.98,1.9l-13.05,21.32Zm-7.45-4.95c-1.22-.88-2.44-1.79-3.61-2.71l15.44-19.66c.9,.71,1.84,1.41,2.79,2.1l-14.62,20.28Zm-7.11-5.59c-1.16-1-2.31-2.02-3.4-3.06l17.13-18.21c.82,.77,1.68,1.54,2.55,2.29l-16.28,18.98Zm-6.68-6.29c-.33-.35-.66-.69-.99-1.04-.66-.71-1.32-1.42-1.98-2.14l18.48-16.83c.58,.64,1.16,1.27,1.75,1.9,.24,.26,.49,.52,.73,.77l-18,17.35Zm-5.79-6.35c-.93-1.06-1.84-2.12-2.75-3.19l19.08-16.16c.81,.96,1.64,1.92,2.47,2.87l-18.8,16.48Zm-5.44-6.42c-.89-1.09-1.77-2.17-2.63-3.25l19.56-15.57c.79,.99,1.59,1.98,2.4,2.97l-19.33,15.85Zm-5.21-6.54c-.86-1.11-1.7-2.22-2.53-3.31l19.96-15.05c.76,1.01,1.54,2.03,2.33,3.06l-19.77,15.3Zm-5.01-6.64c-.84-1.14-1.65-2.26-2.44-3.36l20.32-14.57c.73,1.02,1.49,2.06,2.27,3.12l-20.15,14.8Zm-4.83-6.74c-.82-1.18-1.61-2.32-2.36-3.41l20.64-14.11c.7,1.02,1.43,2.08,2.2,3.17l-20.48,14.34Zm-4.68-6.85c-.83-1.24-1.59-2.4-2.28-3.46l20.95-13.64c.64,.99,1.35,2.07,2.13,3.23l-20.8,13.87Zm-4.53-6.97c-1.48-2.33-2.28-3.68-2.28-3.68l21.45-12.83s0,0,0,0h0c.06,.1,.74,1.24,1.95,3.15l-21.13,13.36Z" fill="#010101"/>
        </g>
      </g>
    </g>
    <g class="sleevesShadows">
      <path class="sleeveShadow" d="M907.68,996.09s-1.69-42.16-1.69-57.35-44.94-155.95-51.69-166.07c-1.21-1.82-70.17-28.54-83.46-33.43,0,0-10,110.49-11.66,142.64-1.63,31.65-2.78,113.27-2.78,113.27l142.1,.88,9.16,.06Z" fill="#3e1332" opacity=".1"/>
      <path class="sleeveShadow" data-name="sleeveShadow" d="M0,996.09s1.69-42.16,1.69-57.35,44.94-155.95,51.69-166.07c1.21-1.82,70.17-28.54,83.46-33.43,0,0,10,110.49,11.66,142.64,1.63,31.65,2.78,113.27,2.78,113.27l-142.1,.88-9.16,.06Z" fill="#3e1332" opacity=".1"/>
    </g>
    <g class="shirtShadows">
      <g class="shirtShadow" opacity=".1">
        <path d="M615.59,741.68c8.54,47.21,23.24,82.9,40.29,122.7,1.15,2.69,3.04,5.49,1,7.63-4.96,5.22-10.49-3.67-17.05-.47,24.36,23.8,46.12,49.46,60.28,79.93-5.38-34.58-22.94-66.18-34.4-99.39-9.26-26.84-14.57-54.86-24.66-81.42-5.61-14.78-14.28-30.47-29.82-35.45" fill="#3e1332"/>
      </g>
      <g class="shirtShadow" data-name="shirtShadow" opacity=".1">
        <path d="M698.35,748.11c10.04,32.48,7.26,70.06,21.45,100.95-7.61-24.63-2.27-51.49-7.27-76.78-1.87-9.46-5.8-19.39-14.18-24.16" fill="#3e1332"/>
      </g>
      <g class="shirtShadow" data-name="shirtShadow" opacity=".1">
        <path d="M763.07,986.37c3.09-19.66,8.42-38.96,15.85-57.42-7.21,6.8-12.64,15.48-15.61,24.93-.39,1.23-.84,2.62-2,3.19-2.28,1.13-4.56-1.7-5.28-4.14-9.43-32.3-.85-68.18-3.27-102.13-.23-3.22,.27-6.98-2.24-9.01-2.86,10.32-7.18,17.59-10.55,37.39-1.45,8.5-1.8,20.82-1.53,29.43,.25,8.04,1.05,21.52,2.64,29.4,3.2,15.83,6.24,26.3,6.87,42.43,0,0,.35,6.27,5.9,8.35,5.55,2.08,9.22-2.44,9.22-2.44Z" fill="#3e1332"/>
      </g>
      <g class="shirtShadow" data-name="shirtShadow" opacity=".1">
        <path d="M799.96,876.58c-8.3-27.02-1.92-56.32-4.38-84.54-.63-7.24-1.57-15.47,3.12-20.92,2.85,3.55,3.01,8.56,3.03,13.16,.09,18.46,.18,36.92,.27,55.39,.01,3.01,.11,6.28,1.93,8.64s6.05,2.87,7.41,.2c5.52,1.51,2.98,13.13,8.64,13.89,2.54,.34,4.52-2.1,5.96-4.28,4.49-6.8,8.98-13.6,13.47-20.4-7.15,19.92-15.04,39.56-23.66,58.86-.89,2-1.86,4.08-3.55,5.43-1.7,1.35-4.35,1.69-5.89,.16-.96-.95-1.28-2.38-1.54-3.72-1.81-9.14-3.13-18.38-3.95-27.67" fill="#3e1332"/>
      </g>
      <g class="shirtShadow" data-name="shirtShadow" opacity=".1">
        <path d="M815.66,973.55c11.31-24.08,30.49-42.25,52.89-56.6,1.17,1.57,.09,3.78-1.04,5.39-14.38,20.5-36.14,34.86-48.33,56.73-.31-1.04-3.14-3-3.45-4.04l-.08-1.49Z" fill="#3e1332"/>
      </g>
      <g class="shirtShadow" data-name="shirtShadow" opacity=".1">
        <path d="M292.09,741.68c-8.54,47.21-23.24,82.9-40.29,122.7-1.15,2.69-3.04,5.49-1,7.63,4.96,5.22,10.49-3.67,17.05-.47-24.36,23.8-46.12,49.46-60.28,79.93,5.38-34.58,22.94-66.18,34.4-99.39,9.26-26.84,14.57-54.86,24.66-81.42,5.61-14.78,14.28-30.47,29.82-35.45" fill="#3e1332"/>
      </g>
      <g class="shirtShadow" data-name="shirtShadow" opacity=".1">
        <path d="M209.3,748.12c-10.04,32.48-7.26,70.06-21.45,100.95,7.61-24.63,2.27-51.49,7.27-76.78,1.87-9.46,5.8-19.39,14.18-24.16" fill="#3e1332"/>
      </g>
      <g class="shirtShadow" data-name="shirtShadow" opacity=".1">
        <path d="M144.62,986.37c-3.09-19.66-8.42-38.96-15.85-57.42,7.21,6.8,12.64,15.48,15.61,24.93,.39,1.23,.84,2.62,2,3.19,2.28,1.13,4.56-1.7,5.28-4.14,9.43-32.3,.85-68.18,3.27-102.13,.23-3.22-.27-6.98,2.24-9.01,2.86,10.32,7.18,17.59,10.55,37.39,1.45,8.5,1.8,20.82,1.53,29.43-.25,8.04-1.05,21.52-2.64,29.4-3.2,15.83-6.24,26.3-6.87,42.43,0,0-.35,6.27-5.9,8.35-5.55,2.08-9.22-2.44-9.22-2.44Z" fill="#3e1332"/>
      </g>
      <g class="shirtShadow" data-name="shirtShadow" opacity=".1">
        <path d="M107.72,876.58c8.3-27.02,1.92-56.32,4.38-84.54,.63-7.24,1.57-15.47-3.12-20.92-2.85,3.55-3.01,8.56-3.03,13.16-.09,18.46-.18,36.92-.27,55.39-.01,3.01-.11,6.28-1.93,8.64s-6.05,2.87-7.41,.2c-5.52,1.51-2.98,13.13-8.64,13.89-2.54,.34-4.52-2.1-5.96-4.28-4.49-6.8-8.98-13.6-13.47-20.4,7.15,19.92,15.04,39.56,23.66,58.86,.89,2,1.86,4.08,3.55,5.43,1.7,1.35,4.35,1.69,5.89,.16,.96-.95,1.28-2.38,1.54-3.72,1.81-9.14,3.13-18.38,3.95-27.67" fill="#3e1332"/>
      </g>
      <g class="shirtShadow" data-name="shirtShadow" opacity=".1">
        <path d="M92.02,973.55c-11.31-24.08-30.49-42.25-52.89-56.6-1.17,1.57-.09,3.78,1.04,5.39,14.38,20.5,36.14,34.86,48.33,56.73,.31-1.04,3.14-3,3.45-4.04l.08-1.49Z" fill="#3e1332"/>
      </g>
    </g>
    <g class="shirtHighlights">
      <g class="shirtHighlight" opacity=".05">
        <path d="M654.73,725.81c7.78,29.63,11.92,65.83,29.51,93.96-5.8-23.69-4.58-49.23-13.96-72.31-3.76-9.25-7.28-21.71-15.54-21.65" fill="#fff"/>
      </g>
      <g class="shirtHighlight" data-name="shirtHighlight" opacity=".05">
        <path d="M252.95,725.8c-7.78,29.63-11.92,65.83-29.51,93.96,5.8-23.69,4.58-49.23,13.96-72.31,3.76-9.25,7.28-21.71,15.54-21.65" fill="#fff"/>
      </g>
    </g>
  </g>
  <g class="ears">
    <g class="leftEar">
      <path class="earBase" d="M270.42,332.26c1.78-2.69-10.35-31.84-37.98-14.69-16.08,9.97-22.52,42.23-11.16,61.89,13.18,22.81,17.5,32.81,29.1,41.76,16.04,12.37,34.41,6.1,31.48,2.08-1.86-2.55-11.44-91.04-11.44-91.04Z" fill="#f8aca3"/>
      <g class="earShadow" opacity=".8">
        <path d="M262.23,404.95c.36-4.31-2.99-7.27-4.95-11.12-3.03-5.94-3.63-12.84-3.36-19.5,.27-6.66,1.36-13.28,1.47-19.95,.06-3.78-.2-7.61-1.42-11.18-.92-2.67-2.35-5.14-3.88-7.52-.87-1.37-1.8-2.73-3.02-3.79-2.9-2.52-7.44-2.94-10.76-.99-3.03,1.78-4.79,5.1-5.94,8.42-3.54,10.15-2.72,21.35-.32,31.84,.61,2.66,1.05,5.51,3.09,7.32l1.51,.83c-1.07-2.34-1.44-6.2-1.46-8.77-.08-7.33,.68-14.68,2.24-21.84,.41-1.88,.89-3.78,1.86-5.45s2.5-3.09,4.37-3.53c2.74-.64,5.65,1.05,7.04,3.49,1.39,2.44,1.47,5.44,.87,8.19-3.85,.63-7.25,3.24-9.16,6.64-1.91,3.4-1.89,7.64-1.16,11.47,.98-6.59,3.96-10.05,8.73-11.18,.61-.15,1.27-.32,1.84-.05,.81,.39,1.05,1.4,1.13,2.29,.19,2.17-.08,4.35-.47,6.49-.53,2.97-1.29,5.9-2.26,8.75-.92,2.72-2.04,5.39-2.47,8.23-.42,2.84-.67,7.07,1.11,9.32,2.18,2.74,6.81,2.77,8.19,5.99,1.04,2.43,.47,5.78,2.65,7.26,1.37,.93,3.48,.47,4.33-.95l.2-.68Z" fill="#eb9493"/>
      </g>
      <g class="earInside" opacity=".8">
        <path d="M263.61,390.83c-1.85-2.38-5.01-4.07-6.56-6.66-1.68-2.82-2.05-9.57-1.46-12.8,.59-3.23,1.05-12.13,.79-15.4-.13-1.58-1.73-17.09-3.76-22.03-.77-1.86-1.98-3.76-3.75-5-3.77-2.65-6.84-2.52-11.16-.94-12.57,4.61-13.3,31.35-10.61,40.95,2.34,8.36,8.19,19.77,13.92,26.92,4.11,5.13,6.4,7.76,3.44,1.51-4.08-7.14-12.23-20.42-14.07-28.43-1.83-8.01-.62-26.59,3.99-33.39,1.85-2.73,4.59-5.18,7.88-5.38,3.24-.2,4.94,2.67,6.77,5.35,2.33,3.42,5.27,17.73,5.2,17.62-.89-1.41-2.73-1.87-4.56-2.14-2.57-.38-6.7,.88-8.89,3.09-1.65,1.66-4.29,8.15-3.62,12.68-.35,2.05,1.35,7.14,2.72,4.89-2.04-5.26-.89-11.15,2.87-15.7,2.04-2.47,7.74-3.17,9.47,.19,.96,1.87,1.07,3.51,1.06,5.33-.03,4.85-.12,16.83-2.07,21.33-.68,1.57-2.88,3.17-3.64,5.1-.67,1.68-.08,4.65,1.56,5.41,.85,.4,3.46,1.08,4.32,1.46,1.66,.71,3.62,5.17,3.69,6.97,.12,2.78,2.03,5.15,4.7,4.17,.58-.21,1.14-.46,1.58-.89,2.29-2.21,2.12-11.69,.17-14.2Z" fill="#f37b7b"/>
      </g>
    </g>
    <g class="rightEar">
      <path class="earBase" data-name="earBase" d="M639.34,332.33c-1.78-2.69,10.35-31.84,37.98-14.69,16.08,9.97,22.52,42.23,11.16,61.89-13.18,22.81-17.5,32.81-29.1,41.76-16.04,12.37-34.41,6.1-31.48,2.08,1.86-2.55,11.44-91.04,11.44-91.04Z" fill="#f8aca3"/>
      <g class="earShadow" data-name="earShadow" opacity=".8">
        <path d="M647.52,405.01c-.36-4.31,2.99-7.27,4.95-11.12,3.03-5.94,3.63-12.84,3.36-19.5-.27-6.66-1.36-13.28-1.47-19.95-.06-3.78,.2-7.61,1.42-11.18,.92-2.67,2.35-5.14,3.88-7.52,.87-1.37,1.8-2.73,3.02-3.79,2.9-2.52,7.44-2.94,10.76-.99,3.03,1.78,4.79,5.1,5.94,8.42,3.54,10.15,2.72,21.35,.32,31.84-.61,2.66-1.05,5.51-3.09,7.32l-1.51,.83c1.07-2.34,1.44-6.2,1.46-8.77,.08-7.33-.68-14.68-2.24-21.84-.41-1.88-.89-3.78-1.86-5.45s-2.5-3.09-4.37-3.53c-2.74-.64-5.65,1.05-7.04,3.49-1.39,2.44-1.47,5.44-.87,8.19,3.85,.63,7.25,3.24,9.16,6.64,1.91,3.4,1.89,7.64,1.16,11.47-.98-6.59-3.96-10.05-8.73-11.18-.61-.15-1.27-.32-1.84-.05-.81,.39-1.05,1.4-1.13,2.29-.19,2.17,.08,4.35,.47,6.49,.53,2.97,1.29,5.9,2.26,8.75,.92,2.72,2.04,5.39,2.47,8.23s.67,7.07-1.11,9.32c-2.18,2.74-6.81,2.77-8.19,5.99-1.04,2.43-.47,5.78-2.65,7.26-1.37,.93-3.48,.47-4.33-.95l-.2-.68Z" fill="#eb9493"/>
      </g>
      <g class="earInside" data-name="earInside" opacity=".8">
        <path d="M646.15,390.9c1.85-2.38,5.01-4.07,6.56-6.66,1.68-2.82,2.05-9.57,1.46-12.8-.59-3.23-1.05-12.13-.79-15.4,.13-1.58,1.73-17.09,3.76-22.03,.77-1.86,1.98-3.76,3.75-5,3.77-2.65,6.84-2.52,11.16-.94,12.57,4.61,13.3,31.35,10.61,40.95-2.34,8.36-8.19,19.77-13.92,26.92-4.11,5.13-6.4,7.76-3.44,1.51,4.08-7.14,12.23-20.42,14.07-28.43,1.83-8.01,.62-26.59-3.99-33.39-1.85-2.73-4.59-5.18-7.88-5.38-3.24-.2-4.94,2.67-6.77,5.35-2.33,3.42-5.27,17.73-5.2,17.62,.89-1.41,2.73-1.87,4.56-2.14,2.57-.38,6.7,.88,8.89,3.09,1.65,1.66,4.29,8.15,3.62,12.68,.35,2.05-1.35,7.14-2.72,4.89,2.04-5.26,.89-11.15-2.87-15.7-2.04-2.47-7.74-3.17-9.47,.19-.96,1.87-1.07,3.51-1.06,5.33,.03,4.85,.12,16.83,2.07,21.33,.68,1.57,2.88,3.17,3.64,5.1,.67,1.68,.08,4.65-1.56,5.41-.85,.4-3.46,1.08-4.32,1.46-1.66,.71-3.62,5.17-3.69,6.97-.12,2.78-2.03,5.15-4.7,4.17-.58-.21-1.14-.46-1.58-.89-2.29-2.21-2.12-11.69-.17-14.2Z" fill="#f37b7b"/>
      </g>
    </g>
  </g>
  <g class="hairs">
    <path class="hairshadow" d="M334.4,186.65c-14.53,7.28-74.77,168.05-69.52,175.25,3.21,4.4-23.31-90.33-19.98-127.79,3.33-37.46,24.02-59.79,77.3-102.25,53.28-42.46,133.46-31.14,210.63-42.46,97.68-14.33,137.86,262.62,73.39,421.53-.59,1.45,16.54-106.5-12.07-130.29-5.5-4.57-47.08,2.02-49.95-2.5-3.14-4.94,51.19-12.97,46.62-15.4-24.83-13.19-73.4,14.2-99.49-6.24-5.93-4.65-.67-14.54,1.67-20.81,6.67-17.89,80.88-48.44,83.67-52.03,33.18-42.81-195.79-120.28-242.27-96.99Z" fill="#eba59c" opacity=".5"/>
    <path class="hair" data-name="hair" d="M268.63,357.6c-.18,1.08,20.95-141.68,50.22-165.12,42.05-33.68,149.55-17.9,151.66-18.45,2.78-.73,109.62,1.77,131.69,17.62,36.25,26.03,33.81,163.83,36.49,165.12,3.6,2.28,21.04-68.35,24.56-91.02,3.37-21.71,19.12-159.07-26.64-208.13C605.03,23.75,552.01,7.31,465.66,.72c-66.47-5.07-103.62,18.14-130.43,21.92-40.6,5.73-65.63,36.06-77.43,64.1-27.97,66.51-25.07,150.78-16.66,177.88,7.6,24.5,18.6,95.27,27.48,92.97Z" fill="#3e1332"/>
  </g>
  <g class="eyes">
    <g class="rightEye">
      <path class="eyeWhite" d="M526.26,366.79c-15.51,.16-25.96-2.67-29.97-4.89-2.02-1.11-.02-6.46,.52-10.3,1.83-13.07,10.27-32.15,33.1-31.94,18.45,.17,36.34,8.17,37.67,21.53,1.51,15.19-17,25.35-41.31,25.6Z" fill="#fff"/>
      <path class="eyeball" d="M549.05,343.79c-.84,15.48-7.66,22.68-21.85,23-9.76,.22-19.67-9.28-19.7-22.99-.03-12.87,8.39-21.27,18.19-22.76,13.8-2.09,24.17,7.89,23.36,22.75Z" fill="#3e1332"/>
      <path class="eyeLash" d="M498.47,348.06c-.83,4.08-2.51,13.73-2.55,13.68-1.17-1.32-.77-9.38,.12-13.58,1.03-4.82,3.43-19.33,16-25.45,13.62-6.63,30.37-4.42,38.32-.84,10.29,4.63,22.62,19.65,22.3,20.36-.21,.47-4.4-.23-5.1-1.04-2.19-2.53-12.16-15.4-25.74-18.14-5.1-1.03-20.18-3.62-31.08,4.2-5.81,4.16-10.8,13.54-12.28,20.81Z" fill="#3e1332"/>
      <path class="eyeReflection" d="M541.93,330.38c1.59,2.71,1.64,6.06-.11,7.74-2.15,2.06-8.45,.48-10.16-2.91-1.41-2.8-1.16-6.69,.87-8.05,2.48-1.66,7.79,.48,9.4,3.23Z" fill="#fff" opacity=".1"/>
      <path class="iris" d="M535,344.36c-.44,2.97-2.56,6.91-5.59,7.56-4.32,.93-8.84-4.93-8.2-8.95,.6-3.73,3.2-6.29,6.24-6.66,5.11-.62,8.16,3.95,7.55,8.05Z" fill="#010101" opacity=".35"/>
    </g>
    <g class="leftEye">
      <path class="eyeWhite" data-name="eyeWhite" d="M377.12,366.79c15.51,.16,25.96-2.67,29.97-4.89,2.02-1.11,.02-6.46-.52-10.3-1.83-13.07-10.27-32.15-33.1-31.94-18.45,.17-36.34,8.17-37.67,21.53-1.51,15.19,17,25.35,41.31,25.6Z" fill="#fff"/>
      <path class="eyeball" data-name="eyeball" d="M354.33,343.79c.84,15.48,7.66,22.68,21.85,23,9.76,.22,19.67-9.28,19.7-22.99,.03-12.87-8.39-21.27-18.19-22.76-13.8-2.09-24.17,7.89-23.36,22.75Z" fill="#3e1332"/>
      <path class="eyeLash" data-name="eyeLash" d="M404.9,348.05c.83,4.08,2.51,13.73,2.55,13.68,1.17-1.32,.77-9.38-.12-13.58-1.03-4.82-3.43-19.33-16-25.45-13.62-6.63-30.37-4.42-38.32-.84-10.29,4.63-22.62,19.65-22.3,20.36,.21,.47,4.4-.23,5.1-1.04,2.19-2.53,12.16-15.4,25.74-18.14,5.1-1.03,20.18-3.62,31.08,4.2,5.81,4.16,10.8,13.54,12.28,20.81Z" fill="#3e1332"/>
      <path class="eyeReflection" data-name="eyeReflection" d="M389.09,330.38c1.59,2.71,1.64,6.06-.11,7.74-2.15,2.06-8.45,.48-10.16-2.91-1.41-2.8-1.16-6.69,.87-8.05,2.48-1.66,7.79,.48,9.4,3.23Z" fill="#fff" opacity=".1"/>
      <path class="iris" data-name="iris" d="M382.14,344.36c-.44,2.97-2.56,6.91-5.59,7.56-4.32,.93-8.84-4.93-8.2-8.95,.6-3.73,3.2-6.29,6.24-6.66,5.11-.62,8.16,3.95,7.55,8.05Z" fill="#010101" opacity=".35"/>
    </g>
  </g>
  <g class="eyebrows">
    <path class="eyebrow" d="M484.74,294.72c.59-2.78,.97-6.76,3.51-8.16,4.69-2.58,17.93-4.86,38.46-7.08,15.35-1.67,28.24-.33,39.23,1.09,12.57,1.62,22.35,10.43,25.43,14.55,.45,.61-15.66-1.62-28.56-.54-3.19,.27-40.72,1.58-56.91,4.72-10.45,2.03-18.92,3.37-20.68,.18-.62-1.12-.74-3.49-.47-4.75Z" fill="#3e1332"/>
    <path class="eyebrow" data-name="eyebrow" d="M418.64,294.75c-.59-2.78-.97-6.76-3.51-8.16-4.69-2.58-17.93-4.86-38.46-7.08-15.35-1.67-28.24-.33-39.23,1.09-12.57,1.62-22.35,10.43-25.43,14.55-.45,.61,15.66-1.62,28.56-.54,3.19,.27,40.72,1.58,56.91,4.72,10.45,2.03,18.92,3.37,20.68,.18,.62-1.12,.74-3.49,.47-4.75Z" fill="#3e1332"/>
  </g>
  <g class="beardMustache">
    <path class="beard" d="M628.34,423.18s-26.6,46.43-42.07,72.01c-20.55,33.99-33.31,42.39-37.83,50.76-22.62,41.88-73.06,57.74-93.75,57.7-20.99-.2-70.81-16.13-93.26-57.69-4.52-8.37-17.28-16.76-37.83-50.76-15.47-25.59-42.07-72.01-42.07-72.01-8.74,4.82,29.09,125.46,52.99,151.1,58.92,63.22,81.07,72.31,119.74,72.63,0,0,0,0,0,0,.07,0,.13,0,.2,0,.38,0,.77,0,1.15,0,0,0,0-.01,0-.02,38.67-.32,60.81-9.4,119.74-72.63,23.9-25.65,61.73-146.28,52.99-151.1Z" fill="#3e1332"/>
    <path class="mustache" d="M532.2,470.35c-11.23-9.44-17.37-10.42-32.23-13.92-11.96-2.81-35.8,.46-46.08,1.27-10.28-.81-34.12-4.09-46.08-1.27-14.86,3.49-21,4.47-32.23,13.92-4.3,3.62-13.56,23.22-11.93,25.25,1.95,2.45,19.34-14.58,28.8-17.76,18.12-6.1,45.94-8.05,61.44-7.88,15.51-.17,43.32,1.78,61.44,7.88,9.46,3.18,26.85,20.21,28.8,17.76,1.62-2.04-7.63-21.63-11.93-25.25Z" fill="#3e1332"/>
  </g>
</svg>





    <div> This is the guy that can be customised</div>
     <!-- <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
      -->

${this.changingHairColor("#000000")}
      
    `;


  }



  private _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
  }

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  sayHello(name: string): string {
    return `Hello, ${name}`;
  }

//Testing if where the function is affects the SVG elements gotten by the code, apparently no still 0
  changingHairColor(hexCode: string){
    const hairs = Array.from (document.getElementsByClassName('hair') as HTMLCollectionOf<SVGElement>
    );
    console.log(hairs)
   
    hairs.forEach(hair => {
      hair.style.fill = hexCode;
      
    });
  
   
}
}
/*
Questions
1. my array isnt getting the getElementsByClassName items as I thought it would. 
  I was wondering if its because of the sequence of the function(eg: the function is written before the SVG so it is unable to read the classes in the SVG) so I tried to move it around but it just does not seem to work,
  does it have something to do with how the class is rendered in the html of the web component <my-element>and not the index.html document document? 

2. Does it need to be on the same script as the svg or any other script is possible?

3. When do I export functions?





*/ 
export function changeHairColor(colorName: number, hairColorsList: Map<number, string>) {
  console.log(colorName)
  let hexCode : string = hairColorsList.get(colorName) as string;
  console.log(hexCode);

  const hairs = Array.from (document.getElementsByClassName('hair') as HTMLCollectionOf<SVGElement>
  );
  console.log(hairs)
 
  hairs.forEach(hair => {
    hair.style.fill = hexCode;
    
  });

  
  


  /*- pulls out the hex code from the hair color map(value eg #000000)(done)
- selects the SVG classes to be changed(Not done)
- changes the SVG classes properties to the hex code provided(Not done)
  */
  return `
 
    `;
}
declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
