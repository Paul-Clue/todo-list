import removeAllChildNodes from './removeAllChildNodes';
import projectView from './projectView';

let cardArray = [];
if (localStorage.getItem('cardArray') === null) {
  localStorage.setItem('cardArray', JSON.stringify([]));
} else {
  cardArray = JSON.parse(localStorage.getItem('cardArray'));
}

const ToDoViewStartup = () => {
  const butId = document.querySelector('.butt');
  butId.setAttribute('id', this.id);

  const appendage = document.querySelector('.toDos');

  const doList = document.createElement('div');
  doList.setAttribute('class', 'toDoList');

  const changeId = document.querySelector('#idButt');
  const changeId2 = document.querySelector('.deleteButton');
  const switchId = (elem) => {
    changeId.value = elem.target.id;
    changeId2.setAttribute('id', elem.target.id);
  };

  let innerArray = [];
  cardArray = JSON.parse(localStorage.getItem('cardArray'));

  if (Array.isArray(cardArray[this.id])) {
    for (let i = 0; i < cardArray[this.id].length; i += 1) {
      innerArray += JSON.parse(cardArray[this.id][i]);
    }
  } else {
    innerArray = JSON.parse(cardArray[this.id]);
  }

  doList.innerHTML += innerArray;

  if (appendage.firstChild == null) {
    return;
  }
  removeAllChildNodes(appendage);

  appendage.appendChild(doList);

  localStorage.setItem('cardArray[parseInt(elem.target.id)]', JSON.stringify(cardArray[parseInt(this.id, 10)]));
  localStorage.setItem('cardArray', JSON.stringify(cardArray));

  const popUp = () => {
    const modal = document.querySelector('.confirmDelete');
    modal.style.display = 'block';
  };

  projectView(this.innerText);
  if (doList.firstChild == null) {
    doList.firstChild = null;
  } else {
    const doListChildren = doList.children;
    for (let i = 0; i < doListChildren.length; i += 1) {
      doListChildren[i].addEventListener('click', switchId);
      doListChildren[i].children[0].children[2].children[1].addEventListener('click', popUp);
    }
  }
};

export default ToDoViewStartup;