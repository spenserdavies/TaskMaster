import List from "../Models/List.js";
import _store from "../store.js";
class ListService {
addList(rawList){
  let list = new List(rawList);
  _store.State.lists.push(list);
  _store.saveState();
}
addTask(task, listId){
  let list = _store.State.lists.find(l => l.id == listId)
  list.tasks.push(task);
  _store.saveState();
}
removeList(listId){
  _store.State.lists = _store.State.lists.filter(l => l.id != listId)
  _store.saveState();
}
removeTask(listId, index){
  let list = _store.State.lists.find(l => l.id == listId)
  list.tasks.splice(index, 1)
  _store.saveState();
}
}
const SERVICE = new ListService();
export default SERVICE;
