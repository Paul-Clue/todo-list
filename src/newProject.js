const newProject = () => {
  const card = document.createElement('div');
  card.setAttribute('class', 'card');
  card.setAttribute('style', 'margin-top: 5px;');

  const card2 = document.createElement('div');
  card2.setAttribute('class', 'card-header text-center fw-bold');
  const projectName = document.querySelector('#projectName');
  card2.innerText = 'Project:' + ' '+ ' ' + projectName.value;

  const card3 = document.createElement('div');
  card3.setAttribute('class', 'card-body d-flex justify-content-center');
  
  const cardButton = document.createElement('a');
  cardButton.setAttribute('class', 'btn btn-primary');
  cardButton.setAttribute('href', '#');
  cardButton.innerText = 'Edit Project';

  card3.appendChild(cardButton);
  card2.appendChild(card3);
  card.appendChild(card2);

  return card;
};

export default newProject;


{/* <div class="card">
          <div class="card-header text-center fw-bold">
            Project: &nbsp; All To-Dos
          </div>
          <div class="card-body d-flex justify-content-center">
            <a href="#" class="btn btn-primary">All To-dos From All Arojects</a>
          </div>
        </div> */}