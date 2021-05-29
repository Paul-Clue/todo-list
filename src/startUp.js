import removeAllChildNodes from './removeAllChildNodes';
import projectView from './projectView';
import ToDoViewStartup from './ToDoViewStartup';

let cardArray = [];
if(localStorage.getItem('cardArray') === null){
  localStorage.setItem('cardArray', JSON.stringify([]));
}else{
    cardArray = JSON.parse(localStorage.getItem('cardArray'));
}

let projArray = [];
if(localStorage.getItem('projArray') === null){
  localStorage.setItem('projArray', JSON.stringify([]));
}else{
    projArray = JSON.parse(localStorage.getItem('projArray'));
}

  
const startUp = function() {
  const projectSide = document.querySelector('.projects');
  const appendage = document.querySelector('.toDos');
  const doList = document.createElement('div');
  doList.setAttribute('class', 'toDoList');

  const projList = document.createElement('div');
  projList.setAttribute('class', 'projList');


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

  let changeId = document.querySelector('#idButt');
    const switchId = function(elem) {
      changeId.value = elem.target.id;
    }

    
    projArray = JSON.parse(localStorage.getItem('projArray'));
    
    let projj = '';

  for(let i = 0; i < projArray.length; i++){
    console.log(projArray.length);
     projj = JSON.parse(projArray[i]);
    projList.innerHTML += projj;
  }

  let projListKids = projList.children;

  for(let i = 0; i < projListKids.length; i++){
    projListKids[i].addEventListener('click', ToDoViewStartup);
  }

  console.log(projListKids);
  console.log(projList);
  projectSide.appendChild(projList);
  console.log('something');
  console.log(projArray[0]);
  if(doList.firstChild == null){
    return;
  }else{
    let doListChildren = doList.children;
    for(let i = 0; i < doListChildren.length; i++){
      doListChildren[i].addEventListener('click', switchId);
    }
    
  }

  
}

export default startUp;