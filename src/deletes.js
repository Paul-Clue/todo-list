const deletes = () => {
  const idValue = document.querySelector('#idButt');// hidden field
  const cardArray = JSON.parse(localStorage.getItem('cardArray'));
  const title = document.getElementsByClassName('todoCard');
  const convert = document.createElement('div');

  for (let i = 0; i < title.length; i += 1) {
    if (title[i].id === idValue.value) {
      title[i].style.display = 'none';
      const title2 = title[i].outerHTML;
      const json = JSON.stringify(title2);
      for (let j = 0; j < cardArray.length; j += 1) {
        if (Array.isArray(cardArray[j])) {
          for (let p = 0; p < cardArray[j].length; p += 1) {
            convert.innerHTML = JSON.parse(cardArray[j][p]);

            if (convert.firstChild.id === title[i].id) {
              cardArray[j][p] = json;
            }
          }
        } else {
          convert.innerHTML = JSON.parse(cardArray[j]);

          if (convert.firstChild.id === title[i].id) {
            cardArray[j] = json;
          }
        }
      }

      localStorage.setItem('cardArray', JSON.stringify(cardArray));
    }
    cardArray[1] = 5;
    localStorage.setItem('cardArray', JSON.stringify(cardArray));
  }
  const hide = document.querySelector('.confirmDelete');
  hide.style.display = 'none';
};

export default deletes;