import { colorCode } from './resistor';

export const decodedValue = ([colorOne, colorTwo]) => {
  return colorCode(colorOne) * 10 + colorCode(colorTwo);
};
