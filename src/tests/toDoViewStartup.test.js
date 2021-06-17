import htmlNodes from '../htmlNodes';

test('Create div to hold nodes ', () => {
  document.body.innerHTML = htmlNodes;
  jest.mock('../ToDoViewStartup');

  const pView = document.querySelector('.toDoList');
  expect(pView).not.toBeNull();
});