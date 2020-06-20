import { decodedValue } from './decode-color';

describe('Decoded Color Values', () => {
  test('Black and White', () => {
    expect(decodedValue(['black', 'white'])).toEqual(9);
  });
});
