import { generateId } from "../utils.js";










export default class List {
  constructor(data) {

    this.id = data.id || generateId();
    this.name = data.name;

    /**@type {String[]} */
    this.tasks = data.tasks || [];    
    this.color = data.color 
  }
  get Template(){
    return /*html*/ `
    <div class="col-12 col-md-3 my-2 mx-auto mx-md-1">
    <div class="card shadow">
      <div class="card-header ${this.color} text-center d-flex flex-column">
        <i class="fas fa-times text-light pointer align-self-end"
          onclick="app.listController.removeList('${this.id}')"></i>    
        <h2>${this.name}</h2>
      </div>
      <div class="card-body d-flex flex-column">
        <ul class="pl-3">
          ${this.taskTemplate}
        </ul>
        <form onsubmit="app.listController.addTask(event, '${this.id}')">
          <div class="form-group d-flex">
            <input type="text" class="form-control" name="task" id="task" placeholder="Add Task" required>
            <button type="submit" class="btn btn-outline-success"><i class="fas fa-plus "></i></button>
          </div>
        </form>
      </div>
    </div>
  </div>
  `  
  }
  get taskTemplate(){
    let template = ""
    this.tasks.forEach((task, index) => {
      template += /*html*/ `
      <li>
      ${task} 
           <i class="far fa-trash-alt text-danger pointer" onclick="app.listController.removeTask('${this.id}', ${index})"></i>
      </li>
      `
    })
    return template;
  }
}
