
function TodoItem({ userId ,id, title, completed, handleToggle, handleDelete }) {
    return (
      <div
        style={{
          padding: "1rem",
          border: "1px solid tomato",
          borderRadius: "1rem",
          display: "flex"
        }}
      >
        <div>{userId}</div>
        <div>{title}</div>
        <div>{completed}</div>
        {/* <div>{status ? " Done " : "not Done"} </div> */}
        <button onClick={() => handleToggle(id)}>TOGGLE</button>
        <button onClick={() => handleDelete(id)}>DELETE</button>
      </div>
    );
  }
  export default TodoItem;
  