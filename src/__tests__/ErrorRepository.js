import ErrorRepository from '../ErrorRepository';

test('Testing ErrorRepository class translate() function', () => {
  const newErrorRepository = new ErrorRepository();
  const expected = 'https://http.cat/405';
  const recieved = newErrorRepository.translate('405');
  expect(expected).toBe(recieved);
});

test('Testing ErrorRepository class translate() function with error', () => {
  const newErrorRepository = new ErrorRepository();
  const expected = 'Unknown error';
  const recieved = newErrorRepository.translate('1');
  expect(expected).toBe(recieved);
});
