const editToDo = (elem) => {
  const idValue = document.querySelector('#idButt');// hidden field
  const titleValue = document.querySelector('#title2');
  const dateValue = document.querySelector('#date2');
  const descriptionValue = document.querySelector('#description2');
  const priorityValue = document.querySelector('#result2');

  let cardArray = JSON.parse(localStorage.getItem('cardArray'));

  const title = document.getElementsByClassName('todoCard');
  const convert = document.createElement('div');
  const projectList = document.querySelector('.butt');
  const buttonValue = document.querySelector('#idButt');

  
  for (let i = 0; i < title.length; i++) {
    const go = title[i].children;
    const go2 = go[0].children;
    if (title[i].id == idValue.value) {
      if (titleValue.value == '') {
        titleValue.value = '';
      } else {
        go2[0].innerText = titleValue.value;
      }

      if (dateValue.value == '') {
        dateValue.value == '';
      } else {
        go2[1].innerText = dateValue.value;
      }

      if (descriptionValue.value == '') {
        descriptionValue.value == '';
      } else {
        go2[3].innerText = descriptionValue.value;
      }

      if (priorityValue.value == '') {
        priorityValue.value == '';
      } else if (priorityValue.value == 1) {
        title[i].style.backgroundColor = 'red';
      } else if (priorityValue.value == 2) {
        title[i].style.backgroundColor = 'yellow';
      } else if (priorityValue.value == 3) {
        title[i].style.backgroundColor = 'lightblue';
      } else {
        title[i].style.backgroundColor = 'lightcyan';
      }

      const title2 = title[i].outerHTML;
      const json = JSON.stringify(title2);
      for(let j = 0; j < cardArray.length; j+=1){
        if(Array.isArray(cardArray[j])){

          for(let p = 0; p < cardArray[j].length; p +=1){
            convert.innerHTML = JSON.parse(cardArray[j][p]);

            if(convert.firstChild.id == title[i].id){
              cardArray[j][p] = json;
            }
          }
        }else{
          convert.innerHTML = JSON.parse(cardArray[j]);
          if(convert.firstChild.id == title[i].id){
            cardArray[j] = json;
          }
        }
      }

      localStorage.setItem('cardArray', JSON.stringify(cardArray));

    }
  }
};

export default editToDo;