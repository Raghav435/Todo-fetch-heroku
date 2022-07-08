import TodoItem from "./TodoItem";
function TodoList({ data, handleToggle, handleDelete }) {
  return (
    <div>
      {data.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          userId={item.userId}
          title={item.title}
          competed={item.completed}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
export default TodoList;