const projectView = function (ti) {
  const title = document.querySelector('#right-section');

  const title2 = document.createElement('h3');
  title2.setAttribute('class', 'projectTitle');
  title2.innerText = ti;

  const sp2 = document.querySelector('.projectTitle');
  title.replaceChild(title2, sp2);
};

export default projectView;