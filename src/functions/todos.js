import { Todos } from "../models/Todos";

export const getTodos = () => {
  return (
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.json())
      //.then((todos) => console.log(todos));
      .then((todos) =>
        todos.map(
          (todo) => new Todos(todo.userId, todo.id, todo.title, todo.completed)
        )
      )
  );
};

/* fetch(`https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=5`) */
