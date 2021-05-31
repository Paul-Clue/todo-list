import removeAllChildNodes from './removeAllChildNodes';
import ToDoViewStartup from './toDoViewStartup';

let cardArray = [];
if (localStorage.getItem('cardArray') === null) {
  localStorage.setItem('cardArray', JSON.stringify([]));
} else {
  cardArray = JSON.parse(localStorage.getItem('cardArray'));
}

let projArray = [];
if (localStorage.getItem('projArray') === null) {
  localStorage.setItem('projArray', JSON.stringify([]));
} else {
  projArray = JSON.parse(localStorage.getItem('projArray'));
}

const startUp = function () {
  const projectSide = document.querySelector('.projects');
  const appendage = document.querySelector('.toDos');
  const doList = document.createElement('div');
  doList.setAttribute('class', 'toDoList');

  const projList = document.createElement('div');
  projList.setAttribute('class', 'projList');

  let innerArray = [];
  cardArray = JSON.parse(localStorage.getItem('cardArray'));

  for (let j = 0; j < cardArray.length; j += 1) {
    for (let i = 0; i < cardArray[j].length; i += 1) {
      localStorage.setItem('innerArray', JSON.stringify(cardArray[j][i]));

      try {
        innerArray = JSON.parse(cardArray[j][i]);
      } catch (err) {
        i = cardArray[j].length - 1;
        innerArray = JSON.parse(cardArray[j]);
      }

      doList.innerHTML += innerArray;
    }
  }

  if (appendage.firstChild == null) {
    return;
  }
  removeAllChildNodes(appendage);

  appendage.appendChild(doList);

  const changeId = document.querySelector('#idButt');
  const changeId2 = document.querySelector('.deleteButton');
  const switchId = function (elem) {
    changeId.value = elem.target.id;
    changeId2.setAttribute('id', elem.target.id);
  };

  projArray = JSON.parse(localStorage.getItem('projArray'));

  let projj = '';

  for (let i = 0; i < projArray.length; i += 1) {
    projj = JSON.parse(projArray[i]);
    projList.innerHTML += projj;
  }

  const projListKids = projList.children;

  for (let i = 0; i < projListKids.length; i += 1) {
    projListKids[i].addEventListener('click', ToDoViewStartup);
  }

  projectSide.appendChild(projList);
  const popUp = () => {
    const modal = document.querySelector('.confirmDelete');
    modal.style.display = 'block';
  };

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

export default startUp;