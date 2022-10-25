/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class myOptions extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * The name to say "Hello" to.
     */
    name: string;
    colorName: string;
    HairColor: Map<string, string>;
    /**
     * The number of times the button has been clicked.
     */
    count: number;
    purple: string;
    render(): import("lit-html").TemplateResult<1>;
    private _onClick;
    _MakeChangeButtons(hairColors: Map<string, string>): import("lit-html").TemplateResult<1> | undefined;
    /**
     * Formats a greeting
     * @param colorName The name of the color
     * @param colorhex The hex of the color
     */
    _ChangeHairColor(colorName: string): string;
    /**
     * Formats a greeting
     * @param name The name to say "Hello" to
     */
    sayHello(name: string): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-options': myOptions;
    }
}
//# sourceMappingURL=my-options.d.ts.map