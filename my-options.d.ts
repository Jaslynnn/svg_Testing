/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
declare enum HairColor {
    Black = 0,
    Grey = 1,
    Brown = 2
}
export declare class myOptions extends LitElement {
    static styles: import("lit").CSSResult;
    name: string;
    colorName: string;
    HairColor: Map<string, string>;
    hairColorViaEnum: Map<HairColor, string>;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * Formats a greeting sample code
     * @param name The name to say "Hello" to
     */
    sayHello(name: string): string;
    _MakeChangeButtons(hairColors: Map<string, string>): import("lit-html").TemplateResult<1>[];
    /**
     * Formats a greeting
     * @param colorName The name of the color
     * @param colorhex The hex of the color
     */
    _ChangeHairColor(colorName: string): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-options': myOptions;
    }
}
export {};
//# sourceMappingURL=my-options.d.ts.map