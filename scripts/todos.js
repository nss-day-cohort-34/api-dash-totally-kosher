htmlLocation = document.getElementById("todoItems");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(todos => todos.json())
  .then(parsedTodos => {
    parsedTodos.forEach((currentTodo, index) => {
      if (index < 30) {
        // console.log(currentTodo);
        const htmlRep = todoHTML(currentTodo);
        console.log(htmlRep);
        printToDOM(htmlRep);
      }
    });
  });

const printToDOM = htmlRep => {
  htmlLocation.innerHTML += htmlRep;
};

//create html component
const todoHTML = whatever => {
  if (whatever.completed === true) {
    return `
    <div class="todo__item">
            <input type="checkbox" id="${whatever.id}" name="${
      whatever.id
    }" checked>
            <label for="${whatever.id}">${whatever.title}</label>
            </div>
        `;
  } else {
    return `
    <div class="todo__item">
            <input type="checkbox" id="${whatever.id}" name="${whatever.id}">
            <label for="${whatever.id}">${whatever.title}</label>
        </div>
        `;
  }
};
