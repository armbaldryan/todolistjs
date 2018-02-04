/***Defining Variables***/
const newTaskValue = document.getElementById("new-task");
const addBtn = document.getElementsByTagName("button")[0];
const inCompleteTasks = document.getElementById("incomplete-tasks");
const completedTasks = document.getElementById("completed-tasks");

let todo = (value) => {
  let listSample = document.createElement("li");
  let inpcheck = document.createElement("input");
  let label = document.createElement("label");
  let editInput = document.createElement("input"); 
  let editButton = document.createElement("button");
  let deleteButton = document.createElement("button");
  inpcheck.type = "checkbox";
  editInput.type = "text";
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  label.innerText = value;

  listSample.appendChild(inpcheck);
  listSample.appendChild(label);
  listSample.appendChild(editInput);
  listSample.appendChild(editButton);
  listSample.appendChild(editButton);
  listSample.appendChild(deleteButton);
  return listSample;
}

let addnewTask = () => {
   if(newTaskValue.value == 0){
    alert("write smth");
    return;
  }
  let listSample = todo(newTaskValue.value);
  inCompleteTasks.appendChild(listSample);
  newTaskValue.value = "";
  func(listSample,taskCompleted);
};

addBtn.onclick = addnewTask;

let deleteTask = function(){
  let listSample = this.parentNode;
  let listSampleParent = listSample.parentNode;
  listSampleParent.removeChild(listSample);
}
let editTask = function(){
  let listSample = this.parentNode;
  listSample.classList.toggle('editMode');
  let label = listSample.querySelector("label");
  let input = listSample.querySelector("input[type=text]");
   if(input.value == 0){
  alert("write smth");
  return;
}
  if(listSample.classList.contains('editMode')){
    input.value = label.innerText;
  }
  else{
    label.innerText = input.value;
  }

}
let func = function(taskItem,ckecklist){
  let deleteItem = taskItem.querySelector("button.delete");
  deleteItem.onclick = deleteTask;
  let ckeckList = taskItem.querySelector("input[type=checkbox]");
  ckeckList.onchange = ckecklist;
  let editButton = taskItem.querySelector("button.edit");
  editButton.onclick = editTask;
}

let taskCompleted = function(){
  let listSample = this.parentNode;
  completedTasks.appendChild(listSample);
  func(listSample,taskInCompleted);
};
let taskInCompleted = function(){
  let listSample = this.parentNode;
  inCompleteTasks.appendChild(listSample);
  func(listSample,taskCompleted);
};
for(i = 0; i < inCompleteTasks.children.length; i++){
  func(inCompleteTasks.children[i],taskCompleted);
}
for(i = 0; i < completedTasks.children.length; i++){
  func(completedTasks.children[i],taskInCompleted);
}
