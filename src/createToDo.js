import newToDo from './newTodo';
import removeAllChildNodes from './removeAllChildNodes';

let idArray = [];
if(localStorage.getItem('idArray') === null){
  localStorage.setItem('idArray', JSON.stringify([]));
}else{
   idArray = JSON.parse(localStorage.getItem('idArray'));
}

let cardArray = JSON.parse(localStorage.getItem('cardArray'));

const projectSide = document.querySelector('.projects');



const createToDo = (elem) => {
  const checkTitle = document.querySelector('.projectTitle');
  const title = document.querySelector('#title');
  if(title.value == ''){
    alert('Please Enter a ToDo Title');
    return;
  }else{
    let todo = newToDo();
    const priority = document.querySelector('#result');
    if(priority.value == ''){
      alert('Please Select a Priority ');
      return;
    }else if(priority.value == 1){
      todo.style.backgroundColor = "red";
    }else if(priority.value == 2){
      todo.style.backgroundColor = "yellow";
    }else if(priority.value == 3){
      todo.style.backgroundColor = "lightblue";
    }else{
      todo.style.backgroundColor = "lightcyan";
    }

    todo.setAttribute('id', 0);
    for(let i = 0; i < idArray.length; i++){
      if(idArray[i] == todo.id){
        let num = parseInt(idArray[i]);
        todo.setAttribute('id', (num + 1));
      }
    }
    let changeId = document.querySelector('#idButt');
    const switchId = function(elem) {
      changeId.value = elem.target.id;
    }

    idArray.push(todo.id);
    todo.children[0].children[2].firstChild.setAttribute('id', todo.id);
    todo.children[0].children[2].firstChild.addEventListener('click', switchId);

    localStorage.setItem('idArray', JSON.stringify(idArray));

    todo = todo.outerHTML;
    let json = JSON.stringify(todo);
    cardArray = JSON.parse(localStorage.getItem('cardArray'));

    if(checkTitle.innerHTML == 'Project: &nbsp; All ToDos'){

      cardArray.push(json);
    }else{

      cardArray[parseInt(elem.target.id)].push(json);
    }

    // localStorage.setItem("cardArray", JSON.stringify(cardArray[parseInt(elem.target.id)]));
    localStorage.setItem("cardArray", JSON.stringify(cardArray));
    
    const appendage = document.querySelector('.toDos');
    const doList = document.createElement('div');
    doList.setAttribute('class', 'toDoList');


    let innerArray =[];
    cardArray = JSON.parse(localStorage.getItem('cardArray'));
    if(checkTitle.innerHTML == 'Project: &nbsp; All ToDos'){

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

    }else{
      for(let i = 0; i < cardArray[parseInt(elem.target.id)].length; i++){
        doList.innerHTML += JSON.parse(cardArray[parseInt(elem.target.id)][i]);
       }
    }
    

    if(appendage.firstChild == null){
      appendage.appendChild(doList);
    }else{
      removeAllChildNodes(appendage);
      appendage.appendChild(doList);
    }

    localStorage.setItem("cardArray[parseInt(elem.target.id)]", JSON.stringify(cardArray[parseInt(elem.target.id)]));
    localStorage.setItem("cardArray", JSON.stringify(cardArray));

     cardArray = JSON.parse(localStorage.getItem('cardArray'));
     if(doList.firstChild == null){
      return;
    }else{
      let doListChildren = doList.children;
      for(let i = 0; i < doListChildren.length; i++){
        doListChildren[i].addEventListener('click', switchId);
      }
      
    }

  }
}

export default createToDo;