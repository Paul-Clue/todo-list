import htmlNodes from '../htmlNodes';
import createToDoView from '../createToDoView';

test('Create a to-do', () => {

  document.body.innerHTML = htmlNodes;
  const appendage = document.querySelector('.toDos');
  createToDo();
  expect( appendage.firstChild).not.toBeNull();
});