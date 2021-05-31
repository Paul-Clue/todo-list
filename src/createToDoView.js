import removeAllChildNodes from './removeAllChildNodes';
import projectView from './projectView';

let cardArray = [];
if (localStorage.getItem('cardArray') === null) {
  localStorage.setItem('cardArray', JSON.stringify([]));
} else {
  cardArray = JSON.parse(localStorage.getItem('cardArray'));
}

const createToDoView = function () {
  const butId = document.querySelector('.butt');
  butId.setAttribute('id', this.parentElement.id);

  const appendage = document.querySelector('.toDos');

  const doList = document.createElement('div');
  doList.setAttribute('class', 'toDoList');

  const changeId = document.querySelector('#idButt');
  const changeId2 = document.querySelector('.deleteButton');
  const switchId = function (elem) {
    changeId.value = elem.target.id;
    changeId2.setAttribute('id', elem.target.id);
  };

  let innerArray = [];

  cardArray = JSON.parse(localStorage.getItem('cardArray'));
  for (let i = 0; i < cardArray[this.parentElement.id].length; i++) {
    innerArray = JSON.parse(cardArray[this.parentElement.id][i]);

    doList.innerHTML += innerArray;
  }

  if (appendage.firstChild == null) {
    return;
  }
  removeAllChildNodes(appendage);

  appendage.appendChild(doList);

  const popUp = () => {
    const modal = document.querySelector('.confirmDelete');
    modal.style.display = 'block';
  };

  localStorage.setItem('cardArray[parseInt(elem.target.id)]', JSON.stringify(cardArray[parseInt(this.parentElement.id)]));
  localStorage.setItem('cardArray', JSON.stringify(cardArray));

  projectView(this.innerText);
  if (doList.firstChild == null) {

  } else {
    const doListChildren = doList.children;
    for (let i = 0; i < doListChildren.length; i++) {
      doListChildren[i].addEventListener('click', switchId);
      doListChildren[i].children[0].children[2].children[1].addEventListener('click', popUp);
    }
  }
};

export default createToDoView;