import removeAllChildNodes from './removeAllChildNodes';
import projectView from './projectView';

let cardArray = [];
if(localStorage.getItem('cardArray') === null){
  localStorage.setItem('cardArray', JSON.stringify([]));
}else{
    cardArray = JSON.parse(localStorage.getItem('cardArray'));
}

  
const createToDoView = function() {
  const butId = document.querySelector('.butt');
  butId.setAttribute('id', this.parentElement.id);

  const appendage = document.querySelector('.toDos');


  const doList = document.createElement('div');
  doList.setAttribute('class', 'toDoList');

  let changeId = document.querySelector('#idButt');
    const switchId = function(elem) {
      changeId.value = elem.target.id;
    }

  let innerArray = [];
  cardArray = JSON.parse(localStorage.getItem('cardArray'));
  for(let i = 0; i < cardArray[this.parentElement.id].length; i++){
    // console.log('todo view:' + this.parentElement.id);
    localStorage.setItem('innerArray', JSON.stringify(cardArray[this.parentElement.id][i]));
    
     innerArray = JSON.parse(cardArray[this.parentElement.id][i])
    
    doList.innerHTML += innerArray;
  }


  if(appendage.firstChild == null){
    return;
  }else{
    removeAllChildNodes(appendage);
  }

  appendage.appendChild(doList);
  
  
  localStorage.setItem("cardArray[parseInt(elem.target.id)]", JSON.stringify(cardArray[parseInt(this.parentElement.id)]));
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

export default createToDoView;