import newProject from './newProject';
import newToDo from './newTodo';
import projectView from './projectView';
import createToDo from './createToDo';
import createNewProject from './CreateNewProject';
import allToDo from './allToDo';

let cardArray = [];
if(localStorage.getItem('cardArray') === null){
  localStorage.setItem('cardArray', JSON.stringify([]));
}else{
   cardArray = JSON.parse(localStorage.getItem('cardArray'));
}


let innerArray = [];
cardArray = JSON.parse(localStorage.getItem('cardArray'));
const appendage = document.querySelector('.toDos');
const doList = document.createElement('div');
doList.setAttribute('class', 'toDoList');
for(let j = 0; j < cardArray.length; j++){
  for(let i = 0; i < cardArray[j].length; i++){
    
    localStorage.setItem('innerArray', JSON.stringify(cardArray[j][i]));

    try {
      innerArray = JSON.parse(cardArray[j][i]);
    }
    catch(err) {
      i = cardArray[j].length -1;
      innerArray = JSON.parse(cardArray[j]);
    }

    console.log('This is i: ' + i);
    doList.innerHTML += innerArray;

    console.log('Print all todos is running.');
  }
}


console.log('CHECK CHECK');
// if(appendage.firstChild == null){
  
//   let go = true;
  
// }else{
//   removeAllChildNodes(appendage);
// }

appendage.appendChild(doList);
// localStorage.setItem("cardArray[parseInt(elem.target.id)]", JSON.stringify(cardArray[parseInt(this.parentElement.id)]));
// localStorage.setItem("cardArray", JSON.stringify(cardArray));

projectView('Project: All ToDos');


const projectSide = document.querySelector('.projects');
const projView = document.querySelector('.toDos');

  const getVal = (elem) => {
  const val = elem.target.value;
  document.getElementById("result").value = val;
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

const makePrj = document.querySelector('#button1');
makePrj.addEventListener('click', createNewProject);

const toDoButton = document.querySelector('.butt');
toDoButton.addEventListener('click', function(e){
  createToDo(e);
});

const allToDos = document.querySelector('.all');
allToDos.addEventListener('click', allToDo);
