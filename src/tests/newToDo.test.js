import htmlNodes from '../htmlNodes';

test('Create card div', () => {
  document.body.innerHTML = htmlNodes;
  jest.mock('../newTodo');

  const toDo = document.querySelector('.card');
  expect(toDo).not.toBeNull();
});