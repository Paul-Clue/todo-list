const newProject = () => {
  let cardArray = [];
  const card = document.createElement('div');
  card.setAttribute('class', 'card card2');
  card.setAttribute('style', 'margin-top: 5px;');

  const card2 = document.createElement('div');
  card2.setAttribute('class', 'card3 card-header text-center fw-bold');
  const projectName = document.querySelector('#projectName');
  card2.innerHTML = 'Project:' + ' '+ ' ' + "<span class='text-primary'>" + projectName.value; + "</span>"

  // const card3 = document.createElement('div');
  // card3.setAttribute('class', 'card-body d-flex justify-content-center');
  
  // const cardButton = document.createElement('a');
  // cardButton.setAttribute('class', 'btn btn-primary');
  // cardButton.setAttribute('href', '#');
  // cardButton.textContent = 'Edit Project';

  // card3.appendChild(cardButton);
  // card2.appendChild(card3);
  card.appendChild(card2);
  // card.appendChild(cardButton);

  if(localStorage.getItem('cardArray') === null){
    localStorage.setItem('cardArray', JSON.stringify([]));
  }else{
    cardArray = JSON.parse(localStorage.getItem('cardArray'));
  }

  card.setAttribute('id', cardArray.length);

  return {card, cardArray};
};

export default newProject;

