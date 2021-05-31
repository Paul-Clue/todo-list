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

      
      // const checkTitle = document.querySelector('.projectTitle');
      // console.log(title[i]);
      const title2 = title[i].outerHTML;
      const json = JSON.stringify(title2);
      for(let j = 0; j < cardArray.length; j+=1){
        if(Array.isArray(cardArray[j])){
          // console.log(title[i]);
          // console.log(cardArray);
          // cardArray[j].forEach(function(item, i) { if (item.id == title[i].id) cardArray[i] = json; });
          for(let p = 0; p < cardArray[j].length; p +=1){
            convert.innerHTML = JSON.parse(cardArray[j][p]);
            // console.log(convert.firstChild.id);
            // console.log(title[i].id);
            if(convert.firstChild.id == title[i].id){
              // convert.innerHTML = JSON.parse(cardArray[j][p]);
              // let jet  = JSON.parse(cardArray[j][p]);
              // console.log(convert.firstChild.id);
              // console.log('title ' + title[i].id);
              // console.log(cardArray[j][p])
              console.log('CHECK CHECK');
              cardArray[j][p] = json;
            }
          }
        }else{
          console.log(cardArray);
          console.log('RANN');
          convert.innerHTML = JSON.parse(cardArray[j]);
          if(convert.firstChild.id == title[i].id){
            cardArray[j] = json;
          }
        }
      }

      localStorage.setItem('cardArray', JSON.stringify(cardArray));

      // cardArray = JSON.parse(localStorage.getItem('cardArray'));

      // if (checkTitle.innerHTML == 'Project: &nbsp; All ToDos') {
      //   let get = (cardArray.splice(title[i].id, 1, json));

      //   localStorage.setItem('cardArray', JSON.stringify(cardArray));
      //   // cardArray = JSON.parse(localStorage.getItem('cardArray'));
      // } else {
      //   if(Array.isArray(cardArray)){

      //   }
      //   // console.log(parseInt(title[i].id));
      //   // console.log(Array.isArray(cardArray[parseInt(title[i].id)]));
      //   // console.log(title[i].id);
      //   // console.log(cardArray);
      //   // console.log(parseInt(title[i].id) - 1);
      //   console.log( buttonValue.value);
      //   cardArray[projectList.id].splice(buttonValue.value, 1, json);
      //   localStorage.setItem('cardArray', JSON.stringify(cardArray));
      // }
    }
    // console.log('Crash');
    // localStorage.setItem("cardArray", JSON.stringify(cardArray[parseInt(title[i].id)]));

    // console.log('this is length:' + cardArray.length);
  }
};

export default editToDo;