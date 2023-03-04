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

  // let userId = document.getElementById("numberInput").value
  // const filterTodos = () => {
  //   console.log(userId)
  //   let filteredByUserId = arrayOfTodos.filter((todo) => {
  //     // return todo
  //     if (todo.userId === userId && todo.completed) {
  //       return todo
  //     }
  //   })
  //   console.log('filteredByUserId:', filteredByUserId)
  // }

  // let userId = document.getElementById("numberInput").value
  const filterTodos = () => {
    let userToDos = arrayOfTodos.filter(num => num.userId == document.getElementById('numberInput').value)
    console.log(userToDos)
    const ol = document.getElementById("todo-list");
    ol.innerHTML = ""
    for (let index = 0; index < userToDos.length; index++) {
      const todo = userToDos[index];
      const li = document.createElement("li");
      const title = document.createTextNode(todo.title);
      li.appendChild(title);
      ol.appendChild(li);
      }
  }

  const showComplete = () => {
    const ol = document.getElementById("todo-list");
    ol.innerHTML = ""
    let completedToDos = arrayOfTodos.filter(num => num.completed === true)
    for (let index = 0; index < completedToDos.length; index++) {
      const todo = completedToDos[index];
      const li = document.createElement("li");
      const title = document.createTextNode(todo.title);
      li.style.color = "#430A78";
      li.appendChild(title);
      ol.appendChild(li);
      }
  }

  const showIncomplete = () => {
    const ol = document.getElementById("todo-list");
    ol.innerHTML = ""
    let completedToDos = arrayOfTodos.filter(num => num.completed === false)
    for (let index = 0; index < completedToDos.length; index++) {
      const todo = completedToDos[index];
      const li = document.createElement("li");
      const title = document.createTextNode(todo.title);
      li.style.color = "#E61717";
      li.appendChild(title);
      ol.appendChild(li);
      }
  }