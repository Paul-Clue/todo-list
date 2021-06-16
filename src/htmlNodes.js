const htmlNodes = `<div class="confirmDelete">
<h1 class="confirmText">Delete?</h1>
<button class="btn btn-info deleteButton">Yes</button>
<button class="btn btn-info deleteButton2">No</button>
</div>

</div>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Edit ToDo</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <input type="hidden" id="idButt">
    <form action="#" method="post" class="todo-form">
      <input type="text" name="title2" id="title2" placeholder="Title" ><br>
      <input type="text" name="description2" id="description2" placeholder="what Needs To Be Done"><br>
      <input type="date" name="date2" id="date2" placeholder="Due Date"><br>
      <input type="button" class="editButt" value="Edit">
    </form>
    <span class="priority">
      <label for="priority" class="labe">Priority</label>
      <input type="radio" name="priority" class="rad labe" id="one1" value="1" >
      <label for="1" class="labe" style="margin-left: 0;">1</label>

      <input type="radio" name="priority" class="rad labe" id="two2" value="2">
      <label for="2" class="labe" style="margin-left: 0;">2</label>

      <input type="radio" name="priority" class="rad labe" id="three3" value="3">
      <label for="3" class="labe" style="margin-left: 0;">3</label>

      <input type="radio" name="priority" class="rad labe" id="four4" value="4">
      <label for="4" class="labe" style="margin-left: 0;">4</label>
      <input type="hidden" id="result2">
    </span>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  </div>
</div>
</div>
</div>

<div id="content " style="height: 100%;">
<header>
  <h1>ToDo List</h1>
</header>
<main style="height: 100%;">
  <!-- Project Side -->
  <section id="left-section" style="height: 100%;">
    <form action="#" method="post" id="project-todo-form">
      <input type="text" name="projectName" id="projectName" placeholder="Project...">
      <input type="button" value="Create Project" id="button1">
    </form>
    <div class="card card2 all">
      <div class="card-header text-center fw-bold ">
        Project: &nbsp; <span class="text-primary">All ToDos</span>
      </div>
    </div>
    <div class="projects"></div>
  </section>

  <!-- To-Do Side -->
  <section id="right-section">
      <h3 class="projectTitle">Project: &nbsp; All ToDos</h3>
    <form action="#" method="post" class="todo-form todo-form-form">
      <input type="text" name="title" id="title" placeholder="Title" ><br>
      <input type="text" name="description" id="description" placeholder="what Needs To Be Done"><br>
      <input type="date" name="date" id="date" placeholder="Due Date"><br>
      <input type="button" class="butt" value="Add ToDo">
    </form>
    <span class="priority">
      <label for="priority" class="labe">Priority</label>
      <input type="radio" name="priority" class="rad labe" id="one" value="1" >
      <label for="1" class="labe" style="margin-left: 0;">1</label>

      <input type="radio" name="priority" class="rad labe" id="two" value="2">
      <label for="2" class="labe" style="margin-left: 0;">2</label>

      <input type="radio" name="priority" class="rad labe" id="three" value="3">
      <label for="3" class="labe" style="margin-left: 0;">3</label>

      <input type="radio" name="priority" class="rad labe" id="four" value="4">
      <label for="4" class="labe" style="margin-left: 0;">4</label>
      <input type="hidden" id="result">
    </span><br>
    
    <section class="toDos" id="5">
      <div class="toDoList"></div>
    </section>
  </section>
  
</main>
<footer>

</footer>
</div>`;

export default htmlNodes;