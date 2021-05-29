const editToDo = (elem) => {
  const idValue = document.querySelector('#idButt');// hidden field
  const titleValue = document.querySelector('#title2');
  const dateValue = document.querySelector('#date2');
  const descriptionValue = document.querySelector('#description2');
  const priorityValue = document.querySelector('#result2');

  let cardArray = JSON.parse(localStorage.getItem('cardArray'));

  const title = document.getElementsByClassName('todoCard');
  
  for(let i = 0; i < title.length; i++){
   
    let go = title[i].children;
      let go2 = go[0].children;
    if(title[i].id == idValue.value){
      if(titleValue.value == ''){
        titleValue.value = '';
      }else{
        go2[0].innerText = titleValue.value;

      }

      if(dateValue.value == ''){
        dateValue.value == ''
      }else{
        go2[1].innerText = dateValue.value;
      }

      if(descriptionValue.value == ''){
        descriptionValue.value == ''
      }else{
        go2[3].innerText = descriptionValue.value;
      }

      if(priorityValue.value == ''){
        priorityValue.value == ''
      }else if(priorityValue.value == 1){
        title[i].style.backgroundColor = "red";
      }else if(priorityValue.value == 2){
        title[i].style.backgroundColor = "yellow";
      }else if(priorityValue.value == 3){
        title[i].style.backgroundColor = "lightblue";
      }else{
        title[i].style.backgroundColor = "lightcyan";
      }

        const checkTitle = document.querySelector('.projectTitle');
        console.log(title[i]);
        const title2 = title[i].outerHTML;
        let json = JSON.stringify(title2);

        cardArray = JSON.parse(localStorage.getItem('cardArray'));

        if(checkTitle.innerHTML == 'Project: &nbsp; All ToDos'){
          
          let get = (cardArray.splice(title[i].id, 1,json));

          localStorage.setItem("cardArray", JSON.stringify(cardArray));
          cardArray = JSON.parse(localStorage.getItem('cardArray'));
          console.log(get);
          console.log(cardArray[i]);
          console.log(title[i].id);
          console.log('length' + cardArray.length);
        }else{

          cardArray[title[i].id-1].splice(title[i].id, json)
        }
    }
    // console.log('Crash');
      // localStorage.setItem("cardArray", JSON.stringify(cardArray[parseInt(title[i].id)]));
      
      // console.log('this is length:' + cardArray.length);
  }
}

export default editToDo;