import React, { useEffect, useState } from "react";
import { getTodos } from "../../functions/todos";
import Pagination from "../pagination/Pagination";
import TodosList from "../todos-list/TodosList";

const TodosTable = () => {
  return (
    <div className="col-md-8">
      <Pagination />
    </div>
  );
};

export default TodosTable;
