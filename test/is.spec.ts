import { isString, isNumber, isBoolean, isNull } from '../src/core/is'

describe('isString', () => {
  test('should return true if data is a string', () => {
    expect(isString('a')).toBeTruthy()
  })

  test('should return true if data is a string object', () => {
    expect(isString(new String('111'))).toBeTruthy()
  })

  test('should return false if data is a number', () => {
    expect(isString(1)).toBeFalsy()
  })

  test('should return false if data is a boolean', () => {
    expect(isString(false)).toBeFalsy()
  })

  test('should return false if data is a undefined', () => {
    expect(isString(undefined)).toBeFalsy()
  })

  test('should return false if data is a null', () => {
    expect(isString(null)).toBeFalsy()
  })

  test('should return false if data is a symbol', () => {
    expect(isString(Symbol('a'))).toBeFalsy()
  })

  test('should return false if data is a object', () => {
    expect(isString({ a: 1 })).toBeFalsy()
  })

  test('should return false if data is a function', () => {
    expect(isNull(() => {})).toBeFalsy()
  })

  test('should return false if data is a date', () => {
    expect(isString(new Date())).toBeFalsy()
  })

  test('should return false if data is a regexp', () => {
    expect(isString(new RegExp(/a$/))).toBeFalsy()
  })
})

describe('isNumber', () => {
  test('should return true if data is a number', () => {
    expect(isNumber(1)).toBeTruthy()
  })

  test('should return true if data is a number object', () => {
    expect(isNumber(new Number(1))).toBeTruthy()
  })

  test('should return false if data is a string', () => {
    expect(isNumber('1')).toBeFalsy()
  })

  test('should return false if data is a boolean', () => {
    expect(isNumber(false)).toBeFalsy()
  })

  test('should return false if data is a undefined', () => {
    expect(isNumber(undefined)).toBeFalsy()
  })

  test('should return false if data is a null', () => {
    expect(isNumber(null)).toBeFalsy()
  })

  test('should return false if data is a symbol', () => {
    expect(isNumber(Symbol('a'))).toBeFalsy()
  })

  test('should return false if data is a object', () => {
    expect(isNumber({ a: 1 })).toBeFalsy()
  })

  test('should return false if data is a function', () => {
    expect(isNull(() => {})).toBeFalsy()
  })

  test('should return false if data is a date', () => {
    expect(isNumber(new Date())).toBeFalsy()
  })

  test('should return false if data is a regexp', () => {
    expect(isNumber(new RegExp(/a$/))).toBeFalsy()
  })
})

describe('isBoolean', () => {
  test('should return true if data is a boolean', () => {
    expect(isBoolean(false)).toBeTruthy()
  })

  test('should return true if data is a boolean object', () => {
    expect(isBoolean(new Boolean(true))).toBeTruthy()
  })

  test('should return false if data is a string', () => {
    expect(isBoolean('1')).toBeFalsy()
  })

  test('should return false if data is a number', () => {
    expect(isBoolean(0)).toBeFalsy()
  })

  test('should return false if data is a undefined', () => {
    expect(isBoolean(undefined)).toBeFalsy()
  })

  test('should return false if data is a null', () => {
    expect(isBoolean(null)).toBeFalsy()
  })

  test('should return false if data is a symbol', () => {
    expect(isBoolean(Symbol('a'))).toBeFalsy()
  })

  test('should return false if data is a object', () => {
    expect(isBoolean({ a: 1 })).toBeFalsy()
  })

  test('should return false if data is a function', () => {
    expect(isNull(() => {})).toBeFalsy()
  })

  test('should return false if data is a date', () => {
    expect(isBoolean(new Date())).toBeFalsy()
  })

  test('should return false if data is a regexp', () => {
    expect(isBoolean(new RegExp(/a$/))).toBeFalsy()
  })
})

describe('isNull', () => {
  test('should return true if data is a null', () => {
    expect(isNull(null)).toBeTruthy()
  })

  test('should return false if data is a string', () => {
    expect(isNull('a')).toBeFalsy()
  })

  test('should return false if data is a number', () => {
    expect(isNull(0)).toBeFalsy()
  })

  test('should return false if data is a boolean', () => {
    expect(isNull(false)).toBeFalsy()
  })

  test('should return false if data is a undefined', () => {
    expect(isNull(undefined)).toBeFalsy()
  })

  test('should return false if data is a symbol', () => {
    expect(isNull(Symbol('a'))).toBeFalsy()
  })

  test('should return false if data is a object', () => {
    expect(isNull({ a: 1 })).toBeFalsy()
  })

  test('should return false if data is a function', () => {
    expect(isNull(() => {})).toBeFalsy()
  })

  test('should return false if data is a date', () => {
    expect(isNull(new Date())).toBeFalsy()
  })

  test('should return false if data is a regexp', () => {
    expect(isNull(new RegExp(/a$/))).toBeFalsy()
  })
})
