import newProject from './newProject';
import newToDo from './newTodo';
import projectView from './projectView';

let cardArray = [];
if(localStorage.getItem('toDodArray') === null){
  localStorage.setItem('ToDoArray', JSON.stringify([]));
}else{
  toDoArray = JSON.parse(localStorage.getItem('toDoArray'));
}

if(localStorage.getItem('cardArray') === null){
  localStorage.setItem('cardArray', JSON.stringify([]));
   cardArray = JSON.parse(localStorage.getItem('cardArray'));
}else{
   cardArray = JSON.parse(localStorage.getItem('cardArray'));
}

const projectSide = document.querySelector('.projects');
const projView = document.querySelector('.toDos');

const createNewProject = () => {
    const projectName = document.querySelector('#projectName');
    if(projectName.value == ''){
      alert('Please Enter a Project Title');
      return;
    }else{
      projectSide.appendChild(newProject().card);

      
      // cardArray.push(newProject().card);
    }

      let cardArray2 = `A${newProject().card.id}`;
      // console.log(cardArray2);
      cardArray2 = [];

      // console.log(cardArray2);

      // console.log(cardArray);
      // if(priority.value == ''){
      //   alert('Please Enter a ToDo Title');
      //   return;
      // }else if(priority.value == 1){
      //   const color = document.querySelector('');
      // }    //  const cardArray3 =  localStorage.setItem('cardArray2', JSON.stringify([]));
      localStorage.setItem('cardArray2', JSON.stringify([]));
      cardArray2 = JSON.parse(localStorage.getItem('cardArray2'));
      cardArray.push(cardArray2);
      
      localStorage.setItem("cardArray", JSON.stringify(cardArray));

      const projectList = document.querySelectorAll('.card3');
      // console.log(projectList);
        const addEvent = function(item) {
        item.addEventListener('click', createToDoView)

      }
      projectList.forEach(addEvent);
      
  }

 const getVal = (elem) => {
  const val = elem.target.value;
  document.getElementById("result").value = val;
  }

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
      // let data = { todo };

      let json = JSON.stringify(todo);

      
      const appendage = document.querySelector('.toDos');
      const toDoList = document.querySelector('.toDoList');


      for(let i = 0; i < cardArray[elem.target.id].length; i++){
        localStorage.setItem('innerArray', JSON.stringify(cardArray[elem.target.id][i]));
  
        let innerArray = JSON.parse(cardArray[elem.target.id][i])
        console.log(JSON.parse(cardArray[elem.target.id][i]));
        
        doList.innerHTML += JSON.parse(cardArray[elem.target.id][i]);
        console.log(cardArray[elem.target.id].length);
      }


      toDoList.innerHTML += JSON.parse(cardArray[parseInt(elem.target.id)].push(json));
      if(appendage.firstChild == null){
        appendage.appendChild(toDoList);
      }else{
        removeAllChildNodes(appendage);
        appendage.appendChild(toDoList);
      }
  
      

      localStorage.setItem("cardArray[parseInt(elem.target.id)]", JSON.stringify(cardArray[parseInt(elem.target.id)]));
      localStorage.setItem("cardArray", JSON.stringify(cardArray));

      let innerArray = JSON.parse(localStorage.getItem('cardArray[parseInt(elem.target.id)]'));
      // console.log(innerArray);
      // console.log(cardArray);

      // let innerArray = cardArray[parseInt(elem.target.id)];
      // innerArray = innerArray.outerHTML;
      // let data2 = { arr: innerArray};
      // let json2 = JSON.stringify(data2);

        // console.log(todo);
        // console.log(cardArray);

        cardArray = JSON.parse(localStorage.getItem('cardArray'));
    }
  }


  const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
// const container = document.querySelector('#container');
// removeAllChildNodes(container);

  const createToDoView = function() {
    const butId = document.querySelector('.butt');
    butId.setAttribute('id', this.parentElement.id);

    const appendage = document.querySelector('.toDos');
    // console.log(appendage);

    const doList = document.createElement('div');
    doList.setAttribute('class', 'toDoList');

    // const log = function(item) {
    //   console.log(item);
    // }
    // cardArray.forEach(log);

    for(let i = 0; i < cardArray[this.parentElement.id].length; i++){
      localStorage.setItem('innerArray', JSON.stringify(cardArray[this.parentElement.id][i]));

      let innerArray = JSON.parse(cardArray[this.parentElement.id][i])
      console.log(JSON.parse(cardArray[this.parentElement.id][i]));
      
      doList.innerHTML += JSON.parse(cardArray[this.parentElement.id][i]);
      console.log(cardArray[this.parentElement.id].length);
    }

    if(appendage.firstChild == null){
      return;
    }else{
      removeAllChildNodes(appendage);
    }

    appendage.appendChild(doList);

    projectView(this.innerText);
  }


const rad1 = document.querySelector('#one');
const rad2 = document.querySelector('#two');
const rad3 = document.querySelector('#three');
const rad4 = document.querySelector('#four');

rad1.addEventListener('click', getVal);
rad2.addEventListener('click', getVal);
rad3.addEventListener('click', getVal);
rad4.addEventListener('click', getVal);


const makePrj = document.querySelector('#button1');
makePrj.addEventListener('click', createNewProject);

const toDoButton = document.querySelector('.butt');
toDoButton.addEventListener('click', createToDo);


