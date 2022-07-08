import { useEffect } from "react";

const { useState } = require("react");

function Todo() {
  const [todos, setTodo] = useState([]);
  const [page, setPage] = useState(1);

  const getTodos = async (p = 1) => {
    try {
      let data = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${p}&_page=10`
      );
      data = await data.json();
      // console.log(data);
      setTodo(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos(page);
  },);

  return (
    <div>
      <h1>Todos</h1>
      <div style={{ margin: "1rem" }}>
        <button  style={{ margin: "0.5rem" }} onClick={() => setPage((page) => page - 1)}>PREV</button>
        <span>{page}</span>
        <button  style={{ margin: "0.5rem" }} onClick={() => setPage((page) => page + 1)}>NEXT</button>
      </div>
      <div>
        {todos.map((todo) => (
          <div
            style={{
              display: "flex",
              gap: "1rem",
              margin: "1rem",
              color: "tomato"
            }}
          >
            <div>{todo.id}</div>
            <div>{todo.title}</div>
            <div>{todo.status ? "Done" : "Not Done"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Todo;