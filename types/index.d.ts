declare module "einer-type" {
  export function isArray(x: any): boolean;
  export function isObject(x: any): boolean;
  export function isString(x: any): boolean;
  export function isNumber(x: any): boolean;
  export function isBoolean(x: any): boolean;
  export function isFunction(x: any): boolean;
  export function has(obj: object, attr: string): boolean;
}