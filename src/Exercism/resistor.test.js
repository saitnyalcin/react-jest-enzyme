import { colorCode, COLORS } from './resistor';

describe('Resistor Colors', () => {
  describe('Color codes', () => {
    test('Black', () => {
      expect(colorCode('black')).toEqual(0);
    });
    test('Red', () => {
      expect(colorCode('red')).toEqual(2);
    });
    test('White', () => {
      expect(colorCode('white')).toEqual(9);
    });
  });

  xtest('Alll Colors', () => {
    expect(COLORS).toEqual([
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white'
    ]);
  });
});
