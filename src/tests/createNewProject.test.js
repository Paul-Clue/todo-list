import htmlNodes from '../htmlNodes';
import createNewProject from '../createNewProject';

test('Create a new project', () => {
  document.body.innerHTML = htmlNodes;
  const projectName = document.querySelector('#projectName');
  projectName.value = 'new one';

  createNewProject();
  const cardd = document.querySelector('.card3');
  expect(cardd.innerHTML).toBe(`Project: <span class="text-primary"> ${projectName.value} </span>`);
});
