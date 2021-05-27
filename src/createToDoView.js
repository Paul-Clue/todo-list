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

  let innerArray = [];
  cardArray = JSON.parse(localStorage.getItem('cardArray'));
  for(let i = 0; i < cardArray[this.parentElement.id].length; i++){
    localStorage.setItem('innerArray', JSON.stringify(cardArray[this.parentElement.id][i]));
    
     innerArray = JSON.parse(cardArray[this.parentElement.id][i])
     
    doList.innerHTML += innerArray;
    console.log('check');
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
}

export default createToDoView;