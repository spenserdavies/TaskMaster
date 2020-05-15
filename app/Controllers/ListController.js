import _listService from "../Services/ListService.js";
import _store from "../store.js";

function _drawLists() {
  let lists = _store.State.lists
  let template = ""
  lists.forEach(l => template += l.Template)
  document.getElementById("lists").innerHTML = template;
}
export default class ListController {
  constructor() {
    _drawLists();
  }
  addList(event){
    event.preventDefault();
    let rawList = {
      name: event.target.name.value,
      color: event.target.color.value,
    }
    console.log(rawList.color)
    _listService.addList(rawList);
    event.target.reset();
    _drawLists();
  }
  addTask(event, listId){
    event.preventDefault();
    let task = event.target.task.value;
    _listService.addTask(task, listId);
    event.target.reset();
    _drawLists();
  }
  removeList(listId){
    let c = confirm("Delete This List?")
    if(c == true){
    _listService.removeList(listId);
    } else {
      return;
    }
    _drawLists();
  }
  removeTask(listId, index) {
    let c = confirm("Delete this Task?")
    if (c == true){
    _listService.removeTask(listId, index);
    } else {
      return;
    }
    _drawLists();
  }
}
