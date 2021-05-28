import newProject from './newProject';
import newToDo from './newTodo';
import projectView from './projectView';
import createToDo from './createToDo';
import createNewProject from './CreateNewProject';
import allToDo from './allToDo';
import editToDo from './editToDo';

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

    let changeId = document.querySelector('#idButt');
    const switchId = function(elem) {
      changeId.value = elem.target.id;
      console.log(changeId.value);
    }

    const putEvent = function(){
      if(doList.firstChild == null){
        return;
      }else{
        let doListChildren = doList.children;
        for(let i = 0; i < doListChildren.length; i++){
          doListChildren[i].addEventListener('click', switchId);
        }
        
      }
    }

    putEvent();

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

// projectView('Project: &nbsp; All ToDos');


const projectSide = document.querySelector('.projects');
const projView = document.querySelector('.toDos');

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
