test('spying using the original implementation', () => {
  const cake = {
    name: n => `Cake name is ${n}`
  };

  const spy = jest.spyOn(cake, 'name');
  expect(cake.name('Vanilla')).toBe('Cake name is Vanilla');
  expect(spy).toHaveBeenCalledWith('Vanilla');
});

test('mock implementation of a function', () => {
  const mock = jest.fn().mockImplementation(() => 'Ontario');
  expect(mock('London')).toBe('Ontario');
  expect(mock).toHaveBeenCalledWith('London');
});

test('expect a promise to resolve', async () => {
  const user = {
    getFullName: jest.fn(() => Promise.resolve('Steven Bamala'))
  };

  await expect(user.getFullName('Steven Bamala')).resolves.toBe(
    'Steven Bamala'
  );
});

test('expect a promise to reject', async () => {
  const user = {
    getFullName: jest.fn(() =>
      Promise.reject(new Error('Something went wrong'))
    )
  };

  await expect(user.getFullName('Steven Bamala')).rejects.toThrow(
    'Something went wrong'
  );
});
