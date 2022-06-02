import React, { useState, useEffect } from "react";
import TodosList from "../todos-list/TodosList";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  const [todos, setTodos] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  let limit = 5;
  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setPageCount(Math.ceil(total / limit));
      setTodos(data);
    };

    getTodos();
  }, []);

  const fetchTodos = async (currentPage) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);
    let currentPage = data.selected + 1;
    const todosFormServer = await fetchTodos(currentPage);
    setTodos(todosFormServer);
  };

  return (
    <>
      <TodosList key={todos.id} todos={todos} />
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        renderOnZeroPageCount={null}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
};

export default Pagination;
