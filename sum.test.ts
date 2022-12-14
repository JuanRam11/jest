import { sum, mult } from './sum';
import { expect, test } from '@jest/globals';
import checkNull from './checkNull';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('mults 5 * 2 to equal 10', () => {
  expect(mult(5, 2)).toBe(10);
});

test('object assignment', () => {
  const data: any = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test('test null variable', () => {
  const n = null;
  expect(checkNull(n)).toBeNull();
  expect(checkNull(n)).toBeDefined();
  expect(checkNull(n)).not.toBeUndefined();
  expect(checkNull(n)).not.toBeTruthy();
  expect(checkNull(n)).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
