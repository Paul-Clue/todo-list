import htmlNodes from '../htmlNodes';

test('Create a to-do', () => {
  document.body.innerHTML = htmlNodes;

  jest.mock('../createToDo');
  const doList = document.querySelector('.toDoList');
  expect(doList).not.toBeNull();
});