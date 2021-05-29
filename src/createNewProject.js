import newProject from './newProject';
import createToDoView from './createToDoView';

const projectSide = document.querySelector('.projects');

let cardArray = [];
if(localStorage.getItem('cardArray') === null){
  localStorage.setItem('cardArray', JSON.stringify([]));
}else{
    cardArray = JSON.parse(localStorage.getItem('cardArray'));
}

let projArray = [];
if(localStorage.getItem('projArray') === null){
  localStorage.setItem('projArray', JSON.stringify([]));
}else{
    projArray = JSON.parse(localStorage.getItem('projArray'));
}

const createNewProject = () => {
  const projectName = document.querySelector('#projectName');
  if(projectName.value == ''){
    alert('Please Enter a Project Title');
    return;
  }else{
    projArray = JSON.parse(localStorage.getItem('projArray'));
    let proj = newProject().card
    proj = proj.outerHTML;
    let json = JSON.stringify(proj);
    projArray.push(json);
    localStorage.setItem('projArray', JSON.stringify(projArray));
    projectSide.appendChild(newProject().card);
  }

  let cardArray2 = [];

  cardArray = JSON.parse(localStorage.getItem('cardArray'));
  cardArray.push(cardArray2);

  localStorage.setItem("cardArray", JSON.stringify(cardArray));

  const projectList = document.querySelectorAll('.card3');

  const addEvent = function(item) {
    item.addEventListener('click', createToDoView)
  }
  projectList.forEach(addEvent);
}

export default createNewProject;