import newToDo from './newTodo';
import removeAllChildNodes from './removeAllChildNodes';

let cardArray = JSON.parse(localStorage.getItem('cardArray'));
console.log(cardArray);
if(localStorage.getItem('toDodArray') === null){
  localStorage.setItem('ToDoArray', JSON.stringify([]));
}else{
  toDoArray = JSON.parse(localStorage.getItem('toDoArray'));
}

// if(localStorage.getItem('cardArray') === null){
//   localStorage.setItem('cardArray', JSON.stringify([]));
//    cardArray = JSON.parse(localStorage.getItem('cardArray'));
// }else{
//    cardArray = JSON.parse(localStorage.getItem('cardArray'));
// }
const projectSide = document.querySelector('.projects');



const createToDo = (elem) => {
  // console.log(cardArray);
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
    todo = todo.outerHTML;

    let json = JSON.stringify(todo);

    cardArray = JSON.parse(localStorage.getItem('cardArray'));

    cardArray[parseInt(elem.target.id)].push(json);

    localStorage.setItem("cardArray", JSON.stringify(cardArray[parseInt(elem.target.id)]));
    localStorage.setItem("cardArray", JSON.stringify(cardArray));
    
    const appendage = document.querySelector('.toDos');
    const doList = document.createElement('div');
    doList.setAttribute('class', 'toDoList');


    for(let i = 0; i < cardArray[parseInt(elem.target.id)].length; i++){

      doList.innerHTML += JSON.parse(cardArray[parseInt(elem.target.id)][i]);

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
  }
}

export default createToDo;