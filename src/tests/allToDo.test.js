import allToDo from '../allToDo';
import htmlNodes from '../htmlNodes';

test('Display all to-dos', () => {
  document.body.innerHTML = htmlNodes;
  const index = document.querySelector('.toDoList');
  allToDo(index);
  const doList = document.querySelector('.toDoList');
  expect(doList).not.toBeNull();
});