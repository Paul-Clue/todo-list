import { screen } from '@testing-library/jest-dom';
import htmlNodes from '../htmlNodes';
import createNewProject from '../createNewProject';
import createToDoView from '../createToDoView';

// require('jest-localstorage-mock');
// import { screen } from '@testing-library/jest-dom';
// jest.mock("./localStorage");


/**
 * @jest-environment jsdom
 */

  
test('Create a new project', () => {

  document.body.innerHTML = htmlNodes;
  const projectName = document.querySelector('#projectName');
  projectName.value = 'new one';
  
  createNewProject();
  const cardd = document.querySelector(".card3");
  expect( cardd.innerHTML).toBe(`Project: <span class=\"text-primary\"> ${projectName.value} </span>`);
});
