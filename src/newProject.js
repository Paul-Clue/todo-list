const newProject = () => {
  let cardArray = JSON.parse(localStorage.getItem('cardArray'));
  const card = document.createElement('div');
  card.setAttribute('class', 'card card2');
  card.setAttribute('style', 'margin-top: 5px;');

  const card2 = document.createElement('div');
  card2.setAttribute('class', 'card3 card-header text-center fw-bold');
  const projectName = document.querySelector('#projectName');
  card2.innerHTML = `${'Project:' + ' ' + ' ' + "<span class='text-primary'>"}${projectName.value}`; +'</span>';

  card.appendChild(card2);

  if (localStorage.getItem('cardArray') === null) {
    localStorage.setItem('cardArray', JSON.stringify(cardArray));
  } else {
    cardArray = JSON.parse(localStorage.getItem('cardArray'));
  }

  card.setAttribute('id', cardArray.length);

  return { card, cardArray };
};

export default newProject;
