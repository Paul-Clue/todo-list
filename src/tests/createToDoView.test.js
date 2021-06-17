import htmlNodes from '../htmlNodes';

test('Create a div for all toDos', () => {
  document.body.innerHTML = htmlNodes;

  jest.mock('../createToDoView');
  const doList = document.querySelector('.toDoList');
  expect(doList).not.toBeNull();
});