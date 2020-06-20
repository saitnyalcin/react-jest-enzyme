export const toRna = input => {
  let returnArray = '';

  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case 'C':
        returnArray += 'G';
        break;
      case 'G':
        returnArray += 'C';
        break;
      case 'T':
        returnArray += 'A';
        break;
      case 'A':
        returnArray += 'U';
        break;
    }
  }
  return returnArray;
};
