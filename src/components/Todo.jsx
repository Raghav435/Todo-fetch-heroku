
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import updatedData from "./PutReq";

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    getTodos()
  }, [])

  const getTodos = async()=>{
    try{
        let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        data = await data.json();
        console.log(data);
        setTodos(data);

    }catch(err){
        console.log(err);
    }

  }

  // const handleAdd = (text) => {
  //   setTodos([
  //     ...todos,
  //     {
  //       id: todos.length + Date.now(),
  //       title: text,
  //       status: false
  //     }
  //   ]);
  // };
  // console.log(todos)

  // const handleToggle = (id) => {
  //   // write logic later
  //   const updatedData = todos.map((item) =>
  //     item.id === id
  //       ? {
  //           ...item,
  //           status: !item.status
  //         }
  //       : item
  //   );
  //   setTodos(updatedData);
  // };

  // const handleDelete = (id) => {
  //   const updatedData = todos.filter((item) => item.id !== id);
  //   setTodos(updatedData);
  // };
  return (
    <div>
      <div>
        <updatedData
        put={Put}
        />
      </div>
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
  );
}
export default Todo;
