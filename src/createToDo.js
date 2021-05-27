import newToDo from './newTodo';
import removeAllChildNodes from './removeAllChildNodes';

let cardArray = JSON.parse(localStorage.getItem('cardArray'));

const projectSide = document.querySelector('.projects');



const createToDo = (elem) => {

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

    const checkTitle = document.querySelector('.projectTitle');
    // console.log(checkTitle.innerHTML);
    if(checkTitle.innerHTML == 'Project: &nbsp; All ToDos'){

      cardArray.push(json);
    }else{

      cardArray[parseInt(elem.target.id)].push(json);
    }

    localStorage.setItem("cardArray", JSON.stringify(cardArray[parseInt(elem.target.id)]));
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
    
          console.log('This is i: ' + i);
          doList.innerHTML += innerArray;
    
          console.log('Print all todos is running.');
    
        }
      }





      // for(let j = 0; j < cardArray.length; j++){

    
      //   for(let i = 0; i < cardArray[j].length; i++){
      //     localStorage.setItem('innerArray', JSON.stringify(cardArray[j]));
      //     // console.log('This is at JJ: ' + cardArray[j]);
      //     try {
      //       innerArray = JSON.parse('innerArray');
            
      //     }
      //     catch(err) {
            
      //       i = cardArray[j].length -1;
      //      innerArray = JSON.parse(localStorage.getItem('innerArray'));
      //     //  innerArray = JSON.parse(localStorage.getItem(cardArray[j]));
      //       // console.log(innerArray);
      //     }
      //     doList.innerHTML += innerArray;

      //     // console.log('Print all todos is running.');

      //   }
      // }
    }else{
      for(let i = 0; i < cardArray[parseInt(elem.target.id)].length; i++){
        // console.log('This is the ELSE');
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
  }
}

export default createToDo;