let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
  // get OL by ID
  // loop through arrayOfTodos
    // create a list element
    // create a text node and make it equal to the title
    // append textnode into list item
    // append the list item into OL
  const ol = document.getElementById("todo-list");
  for (let index = 0; index < arrayOfTodos.length; index++) {
    const todo = arrayOfTodos[index];
    const li = document.createElement("li");
    const title = document.createTextNode(todo.title);
    li.appendChild(title);
    ol.appendChild(li);
    }
}