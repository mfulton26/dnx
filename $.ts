// deno-lint-ignore no-empty-interface
export interface DnxSymbolConstructor extends SymbolConstructor {}
// @ts-ignore-error
export default (class DnxSymbol extends Symbol {}) as DnxSymbolConstructor;
