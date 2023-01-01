/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
import { HairColor } from './hair-color';
export declare class MyOptions extends LitElement {
    static styles: import("lit").CSSResult;
    colorName: string;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * Formats a greeting sample code
     * @param name The name to say "Hello" to
     */
    sayHello(name: string): string;
    _onHairColorButtonClicked(color: HairColor): void;
    _makeChangeButtons(): import("lit-html").TemplateResult<1>[];
    _makeRemoveButtons(): import("lit-html").TemplateResult<1>[];
    _onRemoveButtonClicked(itemName: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-options': MyOptions;
    }
}
//# sourceMappingURL=my-options.d.ts.map