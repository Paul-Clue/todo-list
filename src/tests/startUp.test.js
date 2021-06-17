import htmlNodes from '../htmlNodes';
import startUp from '../startUp';

test('Create div to hold nodes ', () => {
  document.body.innerHTML = htmlNodes;
  startUp();
  const pView = document.querySelector('.projList');
  expect(pView).not.toBeNull();
});