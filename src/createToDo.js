import newToDo from './newTodo';
import removeAllChildNodes from './removeAllChildNodes';

let idArray = [];
if (localStorage.getItem('idArray') === null) {
  localStorage.setItem('idArray', JSON.stringify([]));
} else {
  idArray = JSON.parse(localStorage.getItem('idArray'));
}

let cardArray = JSON.parse(localStorage.getItem('cardArray'));

const createToDo = (elem) => {
  const checkTitle = document.querySelector('.projectTitle');
  const title = document.querySelector('#title');
  if (title.value === '') {
    alert('Please Enter a ToDo Title');
  } else {
    let todo = newToDo();
    const priority = document.querySelector('#result');
    if (priority.value === '') {
      alert('Please Select a Priority ');
      return;
    } if (priority.value === 1) {
      todo.style.backgroundColor = 'red';
    } else if (priority.value === 2) {
      todo.style.backgroundColor = 'yellow';
    } else if (priority.value === 3) {
      todo.style.backgroundColor = 'lightblue';
    } else {
      todo.style.backgroundColor = 'lightcyan';
    }

    todo.setAttribute('id', 0);
    for (let i = 0; i < idArray.length; i += 1) {
      if (idArray[i] === todo.id) {
        const num = parseInt(idArray[i], 10);
        todo.setAttribute('id', (num + 1));
      }
    }
    const changeId = document.querySelector('#idButt');
    const changeId2 = document.querySelector('.deleteButton');
    const switchId = function (elem) {
      changeId.value = elem.target.id;
      changeId2.setAttribute('id', elem.target.id);
    };

    idArray.push(todo.id);
    todo.children[0].children[2].firstChild.setAttribute('id', todo.id);
    todo.children[0].children[2].firstChild.addEventListener('click', switchId);

    todo.children[0].children[2].children[1].setAttribute('id', todo.id);

    localStorage.setItem('idArray', JSON.stringify(idArray));

    todo = todo.outerHTML;
    const json = JSON.stringify(todo);
    cardArray = JSON.parse(localStorage.getItem('cardArray'));

    if (checkTitle.innerHTML === 'Project: &nbsp; All ToDos') {
      cardArray.push(json);
    } else {
      cardArray[parseInt(elem.target.id, 10)].push(json);
    }

    localStorage.setItem('cardArray', JSON.stringify(cardArray));

    const appendage = document.querySelector('.toDos');
    const doList = document.createElement('div');
    doList.setAttribute('class', 'toDoList');

    let innerArray = [];
    cardArray = JSON.parse(localStorage.getItem('cardArray'));
    if (checkTitle.innerHTML === 'Project: &nbsp; All ToDos') {
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
    } else {
      for (let i = 0; i < cardArray[parseInt(elem.target.id, 10)].length; i += 1) {
        doList.innerHTML += JSON.parse(cardArray[parseInt(elem.target.id, 10)][i]);
      }
    }

    if (appendage.firstChild == null) {
      appendage.appendChild(doList);
    } else {
      removeAllChildNodes(appendage);
      appendage.appendChild(doList);
    }

    localStorage.setItem('cardArray[parseInt(elem.target.id)]', JSON.stringify(cardArray[parseInt(elem.target.id, 10)]));
    localStorage.setItem('cardArray', JSON.stringify(cardArray));

    const popUp = () => {
      const modal = document.querySelector('.confirmDelete');
      modal.style.display = 'block';
    };

    cardArray = JSON.parse(localStorage.getItem('cardArray'));
    if (doList.firstChild == null) {
      doList.firstChild = null;
    } else {
      const doListChildren = doList.children;
      for (let i = 0; i < doListChildren.length; i += 1) {
        doListChildren[i].addEventListener('click', switchId);
        doListChildren[i].children[0].children[2].children[1].addEventListener('click', popUp);
      }
    }
  }
};

export default createToDo;