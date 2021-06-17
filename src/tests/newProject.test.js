import htmlNodes from '../htmlNodes';

test('Create a div called card', () => {
  document.body.innerHTML = htmlNodes;
  jest.mock('../newProject');

  const doList = document.querySelector('.card');
  expect(doList).not.toBeNull();
});