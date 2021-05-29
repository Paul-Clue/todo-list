import removeAllChildNodes from './removeAllChildNodes';
import projectView from './projectView';

let cardArray = [];
if(localStorage.getItem('cardArray') === null){
  localStorage.setItem('cardArray', JSON.stringify([]));
}else{
    cardArray = JSON.parse(localStorage.getItem('cardArray'));
}

const ToDoViewStartup = function() {
  const butId = document.querySelector('.butt');
  butId.setAttribute('id', this.id);

  const appendage = document.querySelector('.toDos');

  const doList = document.createElement('div');
  doList.setAttribute('class', 'toDoList');

  let changeId = document.querySelector('#idButt');
    const switchId = function(elem) {
      changeId.value = elem.target.id;
    }

  let innerArray = [];
  cardArray = JSON.parse(localStorage.getItem('cardArray'));
 
  for(let i = 0; i < cardArray[this.id].length; i++){
    
    localStorage.setItem('innerArray', JSON.stringify(cardArray[this.id][i]));
    
     innerArray = JSON.parse(cardArray[this.id][i])
    
    doList.innerHTML += innerArray;
  }

  if(appendage.firstChild == null){
    return;
  }else{
    removeAllChildNodes(appendage);
  }

  appendage.appendChild(doList);

  localStorage.setItem("cardArray[parseInt(elem.target.id)]", JSON.stringify(cardArray[parseInt(this.id)]));
  localStorage.setItem("cardArray", JSON.stringify(cardArray));

  projectView(this.innerText);
  if(doList.firstChild == null){
    return;
  }else{
    let doListChildren = doList.children;
    for(let i = 0; i < doListChildren.length; i++){
      doListChildren[i].addEventListener('click', switchId);
    }
    
  }
}

export default ToDoViewStartup;