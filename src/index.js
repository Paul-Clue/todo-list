import newProject from './newProject';

const projectSide = document.querySelector('.projects');

const createNewProject = () => {
  projectSide.appendChild(newProject());
}

const makePrj = document.querySelector('#button1');
makePrj.addEventListener('click', createNewProject);