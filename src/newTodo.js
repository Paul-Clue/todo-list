
const newToDo = () => {

  // let cardArray = JSON.parse(localStorage.getItem('cardArray'));

  const card = document.createElement('div');
  card.setAttribute('class', 'card');
  card.setAttribute('style', 'margin-top: 3px;');

  const card2 = document.createElement('div');
  card2.setAttribute('class', 'card-header text-start fw-bold');
  card2.setAttribute('style', 'width: 100%;');
  const title = document.querySelector('#todo-form');
  card2.innerText = title.title.value + '________ ' ;

  const card22 = document.createElement('span');
  card22.setAttribute('class', 'text-end fw-bold');
  const dueDate = document.querySelector('#todo-form');
  card22.innerText = 'Due Date: ' + dueDate.date.value;

  const card3 = document.createElement('div');
  card3.setAttribute('class', 'card-body d-flex justify-content-center');
  
  const cardButton = document.createElement('a');
  cardButton.setAttribute('class', 'btn btn-primary');
  cardButton.setAttribute('href', '#');
  cardButton.innerText = 'Edit To-Do';

  card3.appendChild(cardButton);
  card2.appendChild(card22);
  card2.appendChild(card3);
  card.appendChild(card2);

  // cardArray[index].push(card);
  // localStorage.setItem("cardArray", JSON.stringify(cardArray));

  return card;
};

export default newToDo;
