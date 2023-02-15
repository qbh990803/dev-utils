const toString = Object.prototype.toString

export const isServer = typeof window === 'undefined'

export const isClient = !isServer

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}

export function isString(val: unknown): val is string {
  return is(val, 'String')
}

export function isNumber(val: unknown): val is number {
  return is(val, 'Number')
}

export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean')
}

export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined'
}

export function isUnDef<T = unknown>(val?: T): val is T {
  return !isDef(val)
}

export function isNull(val: unknown): val is null {
  return val === null
}

export function isObject(val: any): val is Record<any, any> {
  return is(val, 'Object')
}

export function isArray(val: any): val is Array<any> {
  return Array.isArray(val)
}

export function isFunction(val: unknown): val is Function {
  return typeof val === 'function'
}

export function isDate(val: unknown): val is Date {
  return is(val, 'Date')
}

export function isRegExp(val: unknown): val is RegExp {
  return is(val, 'RegExp')
}

export function isEmpty<T = unknown>(val: T): val is T {
  if (isArray(val) || isString(val)) {
    return val.length === 0
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0
  }

  return false
}

export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isNull(val) || isUnDef(val)
}

export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return isObject(val) && is(val, 'Promise') && isObject(val.then) && isObject(val.catch)
}

export function isWindow(val: any): val is Window {
  return typeof window !== 'undefined' && is(val, 'Window')
}

export function isElement(val: unknown): val is Element {
  return val instanceof HTMLElement
}

export function isMap(val: unknown): val is Map<any, any> {
  return is(val, 'Map')
}

export function isUrl(path: string): boolean {
  const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/

  return reg.test(path)
}
