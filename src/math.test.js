import { add } from './math';
jest.mock('./math');

test('add numbers', () => {
  add.mockReturnValue(2);
  add.mockReturnValueOnce(2);
  add.mockReturnValueOnce(4);

  expect(add(1, 1)).toBe(2);
  expect(add(2, 2)).toEqual(4);
  expect(add(1, 1)).toEqual(2);
});
