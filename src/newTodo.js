import editToDo from './editToDo';

const newToDo = () => {
  const card = document.createElement('div');
  card.setAttribute('class', 'card todoCard');
  card.setAttribute('style', 'margin-top: 3px;');

  const card2 = document.createElement('div');
  card2.setAttribute('class', 'card-header text-start fw-bold card-tit-change');
  card2.setAttribute('style', 'width: 100%;');
  const title = document.querySelector('.todo-form-form');
  const card2Div = document.createElement('div');
  card2Div.innerText = `${title.title.value}________ `;
  card2.appendChild(card2Div);

  const card22 = document.createElement('span');
  card22.setAttribute('class', 'text-end fw-bold card-dat-change');
  const dueDate = document.querySelector('.todo-form-form');
  card22.innerText = `Due Date: ${dueDate.date.value}`;

  const card222 = document.createElement('span');
  card222.setAttribute('class', 'text-end fw-bold card-dat-change');
  const description = document.querySelector('.todo-form-form');
  card222.innerText = `Description: ${description.description.value}`;

  const card3 = document.createElement('div');
  card3.setAttribute('class', 'card-body d-flex justify-content-end');

  const cardButton = document.createElement('button');
  cardButton.setAttribute('class', 'btn btn-secondary');
  cardButton.setAttribute('data-bs-toggle', 'modal');
  cardButton.setAttribute('data-bs-target', '#exampleModal');
  cardButton.innerText = 'Edit To-Do';

  const cardButton2 = document.createElement('button');
  cardButton2.setAttribute('class', 'btn btn-warning');
  cardButton2.setAttribute('data-bs-toggle', 'modal');
  cardButton2.innerText = 'Delete ToDo';

  card3.appendChild(cardButton);
  card3.appendChild(cardButton2);
  card2.appendChild(card22);
  card2.appendChild(card3);
  card2.appendChild(card222);
  card.appendChild(card2);

  return card;
};

export default newToDo;
