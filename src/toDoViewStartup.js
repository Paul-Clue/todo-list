import removeAllChildNodes from './removeAllChildNodes';
import projectView from './projectView';

let cardArray = [];
if (localStorage.getItem('cardArray') === null) {
  localStorage.setItem('cardArray', JSON.stringify([]));
} else {
  cardArray = JSON.parse(localStorage.getItem('cardArray'));
}
const projectList = document.querySelector('.butt');

const ToDoViewStartup = function () {
  
  const butId = document.querySelector('.butt');
  butId.setAttribute('id', this.id);

  // console.log('BUTTON ID: ' + projectList.id);
  // console.log('BUTTON ID: ' + projectList);
  // console.log(cardArray);
  // console.log(this.id);
  // console.log(cardArray[this.id].length);
 

  const appendage = document.querySelector('.toDos');

  const doList = document.createElement('div');
  doList.setAttribute('class', 'toDoList');

  const changeId = document.querySelector('#idButt');
  const switchId = function (elem) {
    changeId.value = elem.target.id;
  };

  let innerArray = [];
  cardArray = JSON.parse(localStorage.getItem('cardArray'));

  if(Array.isArray(cardArray[this.id])){
   for (let i = 0; i < cardArray[this.id].length; i++) {
    innerArray += JSON.parse(cardArray[this.id][i]);
   }
  }else{
    // console.log(cardArray[this.id]);
    // console.log(this.id);
    // console.log(cardArray.length);
    // console.log(cardArray);
      innerArray = JSON.parse(cardArray[this.id]);
      // console.log('OUTER');
      // console.log(cardArray[this.id].length);
      
    }
    // console.log(cardArray[this.id]);
    // console.log('this id: ' + cardArray[this.id]);
    // console.log(innerArray);
    // innerArray = JSON.parse(localStorage.getItem(cardArray[this.id][i]));
    
    doList.innerHTML += innerArray;

  if (appendage.firstChild == null) {
    return;
  }
  removeAllChildNodes(appendage);

  appendage.appendChild(doList);

  localStorage.setItem('cardArray[parseInt(elem.target.id)]', JSON.stringify(cardArray[parseInt(this.id)]));
  localStorage.setItem('cardArray', JSON.stringify(cardArray));

  projectView(this.innerText);
  if (doList.firstChild == null) {

  } else {
    const doListChildren = doList.children;
    for (let i = 0; i < doListChildren.length; i += 1) {
      doListChildren[i].addEventListener('click', switchId);
    }
  }
};

export default ToDoViewStartup;