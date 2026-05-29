import {describe, expect, test} from 'vitest';

function compileCode(code) {
  if (code === '') {
    throw new Error('Cannot compile empty string')
  }
  return code
}

test('compiling an empty string throws', () => {
  // Check that it throws at all
  expect( () => compileCode('') ).toThrow()

  expect(() => compileCode('')).toThrow('Cannot compile empty string')

  expect(() => compileCode('')).toThrow(/empty string/)

  expect(() => compileCode('value')).not.toThrow(/empty string/)

});