const editToDo = (elem) => {
  const idValue = document.querySelector('#idButt');// hidden field
  const titleValue = document.querySelector('#title2');
  const dateValue = document.querySelector('#date2');
  const descriptionValue = document.querySelector('#description2');
  const priorityValue = document.querySelector('#result2');

  const title = document.getElementsByClassName('todoCard');
  for(let i = 0; i < title.length; i++){
    let go = title[i].children;
      let go2 = go[0].children;
    if(title[i].id == idValue.value){
      if(titleValue.value == ''){
        titleValue.value = '';
      }else{
        console.log('ONE');
        go2[0].innerText = titleValue.value;
        console.log('TWO');
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

    }
  }

}

export default editToDo;