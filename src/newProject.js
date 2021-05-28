const newProject = () => {
  let cardArray = JSON.parse(localStorage.getItem('cardArray'));
  const card = document.createElement('div');
  card.setAttribute('class', 'card card2');
  card.setAttribute('style', 'margin-top: 5px;');

  const card2 = document.createElement('div');
  card2.setAttribute('class', 'card3 card-header text-center fw-bold');
  const projectName = document.querySelector('#projectName');
  card2.innerHTML = 'Project:' + ' '+ ' ' + "<span class='text-primary'>" + projectName.value; + "</span>"

  // const card3 = document.createElement('div');
  // card3.setAttribute('class', 'card-body d-flex justify-content-center');
  // <input type="button" class="butt" value="Add ToDo">
  // const cardButton = document.createElement('input');
  // cardButton.setAttribute('class', 'btn btn-primary butt');
  // cardButton.setAttribute('type', 'button');
  // cardButton.setAttribute('value', 'Add ToDo');

  // card3.appendChild(cardButton);
  // card2.appendChild(card3);
  card.appendChild(card2);
  // card.appendChild(cardButton);

  if(localStorage.getItem('cardArray') === null){
    localStorage.setItem('cardArray', JSON.stringify(cardArray));
  }else{
    cardArray = JSON.parse(localStorage.getItem('cardArray'));
  }

  card.setAttribute('id', cardArray.length);

  return {card, cardArray};
};

export default newProject;

