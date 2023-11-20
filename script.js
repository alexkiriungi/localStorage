const ul = document.querySelector('ul');
const input = document.getElementById('item');
// Teneray expression to check if the item in the input is available
// if not return an empty array for itemsArray
let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];

// we loop through the items in array
//Adding a task by creating an element li
// we then append the child to the empty ul element
itemsArray.forEach(addTask);
function addTask(text){
  const li = document.createElement('li')
  li.textContent = text;
  ul.appendChild(li);
}

// a function that adds the input value to the itemsArray
// we then set item to the localstorage and we stringify to json
// we call the function addTask to add the input value
// then the input value becomes an empty string
function add(){
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  addTask(input.value);
  input.value = '';
}

// function that clears all data from the local storage
// the ul innerHtml should be an empty string
// and the items Array should then be empty
function del(){
  localStorage.clear();
  ul.innerHTML = '';
  itemsArray = [];
}