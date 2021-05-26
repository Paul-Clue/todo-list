import newProject from './newProject';
import createToDoView from './createToDoView';

const projectSide = document.querySelector('.projects');

let cardArray = [];
if(localStorage.getItem('cardArray') === null){
  localStorage.setItem('cardArray', JSON.stringify([]));
}else{
    cardArray = JSON.parse(localStorage.getItem('cardArray'));
}

const createNewProject = () => {
  const projectName = document.querySelector('#projectName');
  if(projectName.value == ''){
    alert('Please Enter a Project Title');
    return;
  }else{
    projectSide.appendChild(newProject().card);
  }

  let cardArray2 = [];

  cardArray = JSON.parse(localStorage.getItem('cardArray'));
  cardArray.push(cardArray2);
  console.log('Before: ' + cardArray);

  localStorage.setItem("cardArray", JSON.stringify(cardArray));
  console.log('After: ' + cardArray);

  const projectList = document.querySelectorAll('.card3');

  const addEvent = function(item) {
    item.addEventListener('click', createToDoView)
  }
  projectList.forEach(addEvent);
}

export default createNewProject;