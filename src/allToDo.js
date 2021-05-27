import removeAllChildNodes from './removeAllChildNodes';
import projectView from './projectView';

let cardArray = [];
if(localStorage.getItem('cardArray') === null){
  localStorage.setItem('cardArray', JSON.stringify([]));
}else{
    cardArray = JSON.parse(localStorage.getItem('cardArray'));
}

  
const allToDo = function() {
  const butId = document.querySelector('.butt');
  butId.setAttribute('id', this.parentElement.id);

  const appendage = document.querySelector('.toDos');


  const doList = document.createElement('div');
  doList.setAttribute('class', 'toDoList');

  let innerArray = [];
  cardArray = JSON.parse(localStorage.getItem('cardArray'));

  for(let j = 0; j < cardArray.length; j++){
    // console.log('cardArray Length: ' + cardArray.length);
    // console.log('subArray: ' + cardArray[j]);
    // console.log('subArray Length: ' + cardArray[j].length);
    // console.log('This is j: ' + j);

    for(let i = 0; i < cardArray[j].length; i++){
      
      localStorage.setItem('innerArray', JSON.stringify(cardArray[j][i]));
      // console.log(cardArray);
      // console.log(typeof cardArray[j]);
      // if(cardArray[j][i] == 'Unexpected end of JSON input'){
      //   innerArray = JSON.parse(cardArray[j]);
      // }else{
      //    innerArray = JSON.parse(cardArray[j][i])
      // }

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
      // console.log(this.parentElement.id);
      // console.log(parseInt(this.parentElement.id));
      // console.log('check');
    }
  }

  console.log('CHECK CHECK');

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

export default allToDo;