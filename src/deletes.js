

const deletes = (elem) => {
  // console.log('RANN');
  const idValue = document.querySelector('#idButt');// hidden field
  // const titleValue = document.querySelector('#title2');
  // const dateValue = document.querySelector('#date2');
  // const descriptionValue = document.querySelector('#description2');
  // const priorityValue = document.querySelector('#result2');

  let cardArray = JSON.parse(localStorage.getItem('cardArray'));

  const title = document.getElementsByClassName('todoCard');
  const convert = document.createElement('div');
  // const projectList = document.querySelector('.butt');
  // const buttonValue = document.querySelector('#idButt');

  
  for (let i = 0; i < title.length; i++) {
    // console.log('RANN');
    const go = title[i].children;
    const go2 = go[0].children;
    console.log('title ' + title[i].id);
    console.log('dvall '+ idValue.value);
    if (title[i].id == idValue.value) {
      
        title[i].style.display = 'none';
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
          // console.log(cardArray);
          console.log('RANN');
          
          convert.innerHTML = JSON.parse(cardArray[j]);
          // console.log(convert.firstChild.id);
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
    console.log('Crash');
    console.log(title.length);
    const hide = document.querySelector('.confirmDelete');
    hide.style.display = 'none';
    // localStorage.setItem("cardArray", JSON.stringify(cardArray[parseInt(title[i].id)]));

    // console.log('this is length:' + cardArray.length);
  }
};

export default deletes;