import React, { useEffect, useState } from "react";
import { getTodos } from "../../functions/todos";
import TodosList from "../todos-list/TodosList";

const TodosTable = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((todos) => {
      setTodos(todos);
    });
  }, []);

  return (
    <div className="col-md-8">
      <TodosList todos={todos} />
    </div>
  );
};

export default TodosTable;
