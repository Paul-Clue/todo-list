import htmlNodes from '../htmlNodes';
import removeAllChildNodes from '../removeAllChildNodes';

test('Create remove child nodes ', () => {
  document.body.innerHTML = htmlNodes;
  const pView = document.querySelector('.card2');
  removeAllChildNodes(pView);
  expect(pView.firstChild).toBeNull();
});