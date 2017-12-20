/***Defining Variables***/
var newTaskValue = document.getElementById("new-task");
var addBtn = document.getElementsByTagName("button")[0];
var inCompleteTasks = document.getElementById("incomplete-tasks");
var completedTasks = document.getElementById("completed-tasks");

var todo = function(value){
  var listSample = document.createElement("li");
  var inpcheck = document.createElement("input");
  var label = document.createElement("label");
  var editInput = document.createElement("input"); 
  var editButton = document.createElement("button");
  var deleteButton = document.createElement("button");
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

var addnewTask = function(){
   if(newTaskValue.value == 0){
    alert("write smth");
    return;
  }
  var listSample = todo(newTaskValue.value);
  inCompleteTasks.appendChild(listSample);
  newTaskValue.value = "";
  func(listSample,taskCompleted);
};

addBtn.onclick = addnewTask;

var deleteTask = function(){
  var listSample = this.parentNode;
  var listSampleParent = listSample.parentNode;
  listSampleParent.removeChild(listSample);
}
var editTask = function(){
  var listSample = this.parentNode;
  listSample.classList.toggle('editMode');
  var label = listSample.querySelector("label");
  var input = listSample.querySelector("input[type=text]");
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
var func = function(taskItem,ckecklist){
  var deleteItem = taskItem.querySelector("button.delete");
  deleteItem.onclick = deleteTask;
  var ckeckList = taskItem.querySelector("input[type=checkbox]");
  ckeckList.onchange = ckecklist;
  var editButton = taskItem.querySelector("button.edit");
  editButton.onclick = editTask;
}

var taskCompleted = function(){
  var listSample = this.parentNode;
  completedTasks.appendChild(listSample);
  func(listSample,taskInCompleted);
};
var taskInCompleted = function(){
  var listSample = this.parentNode;
  inCompleteTasks.appendChild(listSample);
  func(listSample,taskCompleted);
};
for(i = 0; i < inCompleteTasks.children.length; i++){
  func(inCompleteTasks.children[i],taskCompleted);
}
for(i = 0; i < completedTasks.children.length; i++){
  func(completedTasks.children[i],taskInCompleted);
}
