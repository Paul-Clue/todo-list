import newProject from './newProject';
import newToDo from './newTodo';
import projectView from './projectView';
import createToDo from './createToDo';
import createNewProject from './CreateNewProject';
import startUp from './startUp';
import editToDo from './editToDo';
import allToDo from './allToDo';

let projArray = [];
if(localStorage.getItem('projArray') === null){
  localStorage.setItem('projArray', JSON.stringify([]));
}else{
    projArray = JSON.parse(localStorage.getItem('projArray'));
}

startUp();

const projectSide = document.querySelector('.projects');
// const projView = document.querySelector('.toDos');

  const getVal = (elem) => {
  const val = elem.target.value;
  document.getElementById("result").value = val;
  }

  const getVal2 = (elem) => {
    const val = elem.target.value;
    document.getElementById("result2").value = val;
    }

  const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const rad1 = document.querySelector('#one');
const rad2 = document.querySelector('#two');
const rad3 = document.querySelector('#three');
const rad4 = document.querySelector('#four');

rad1.addEventListener('click', getVal);
rad2.addEventListener('click', getVal);
rad3.addEventListener('click', getVal);
rad4.addEventListener('click', getVal);

const rad11 = document.querySelector('#one1');
const rad22 = document.querySelector('#two2');
const rad33 = document.querySelector('#three3');
const rad44 = document.querySelector('#four4');

rad11.addEventListener('click', getVal2);
rad22.addEventListener('click', getVal2);
rad33.addEventListener('click', getVal2);
rad44.addEventListener('click', getVal2);

const makePrj = document.querySelector('#button1');
makePrj.addEventListener('click', createNewProject);

const toDoButton = document.querySelector('.butt');
toDoButton.addEventListener('click', function(e){
  createToDo(e);
});

const allToDos = document.querySelector('.all');
allToDos.addEventListener('click', allToDo);

const change = document.querySelector('.editButt');
change.addEventListener('click', editToDo);
