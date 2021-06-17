import htmlNodes from '../htmlNodes';

test('Create projectTitle div ', () => {
  document.body.innerHTML = htmlNodes;
  jest.mock('../projectView');

  const pView = document.querySelector('.projectTitle');
  expect(pView).not.toBeNull();
});