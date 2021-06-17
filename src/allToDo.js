import removeAllChildNodes from './removeAllChildNodes';
import projectView from './projectView';

let cardArray = [];
if (localStorage.getItem('cardArray') === null) {
  localStorage.setItem('cardArray', JSON.stringify([]));
} else {
  cardArray = JSON.parse(localStorage.getItem('cardArray'));
}

const allToDo = function (e) {
  const appendage = document.querySelector('.toDos');
  const doList = document.createElement('div');
  doList.setAttribute('class', 'toDoList');

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

  projectView(e.innerText);

  const changeId = document.querySelector('#idButt');
  const changeId2 = document.querySelector('.deleteButton');
  const switchId = function (elem) {
    changeId.value = elem.target.id;
    changeId2.setAttribute('id', elem.target.id);
  };

  const popUp = () => {
    const modal = document.querySelector('.confirmDelete');
    modal.style.display = 'block';
  };

  if (doList.firstChild != null) {
    const doListChildren = doList.children;
    for (let i = 0; i < doListChildren.length; i += 1) {
      doListChildren[i].addEventListener('click', switchId);
      doListChildren[i].children[0].children[2].children[1].addEventListener('click', popUp);
    }
  }
};

export default allToDo;