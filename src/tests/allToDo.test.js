import allToDo from '../allToDo.js'
import htmlNodes from '../htmlNodes';
import { screen } from '@testing-library/jest-dom';

test('Display all to-dos', () => {

  document.body.innerHTML = htmlNodes;
  const index = document.querySelector('.toDoList');
  const appendage = document.querySelector('.toDos');
  allToDo(index);
  expect( appendage.firstChild).not.toBeNull();
});