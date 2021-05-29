import removeAllChildNodes from './removeAllChildNodes';
import projectView from './projectView';

let cardArray = [];
if(localStorage.getItem('cardArray') === null){
  localStorage.setItem('cardArray', JSON.stringify([]));
}else{
    cardArray = JSON.parse(localStorage.getItem('cardArray'));
}

  
const allToDo = function() {

  const appendage = document.querySelector('.toDos');
  const doList = document.createElement('div');
  doList.setAttribute('class', 'toDoList');

  let innerArray = [];
  cardArray = JSON.parse(localStorage.getItem('cardArray'));

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

      doList.innerHTML += innerArray;

    }
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

  let changeId = document.querySelector('#idButt');
    const switchId = function(elem) {
      changeId.value = elem.target.id;
    }

  if(doList.firstChild == null){
    return;
  }else{
    let doListChildren = doList.children;
    for(let i = 0; i < doListChildren.length; i++){
      doListChildren[i].addEventListener('click', switchId);
    }
    
  }
}

export default allToDo;