import htmlNodes from '../htmlNodes';

test('Create a div called toDoList', () => {
  document.body.innerHTML = htmlNodes;
  jest.mock('../createToDo');
  jest.mock('../editToDo');
  const doList = document.querySelector('.toDoList');
  expect(doList).not.toBeNull();
});