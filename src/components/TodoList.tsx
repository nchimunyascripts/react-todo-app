import DeleteButton from "./DeleteButton";
import { useTodoContext } from "./lib/hooks";

const TodoList = () => {
  const { todos, handleToggleTodo, handleDeleteTodo } = useTodoContext();
  return (
    <ul>
      {todos.length === 0 && (
        <li className="h-full flex justify-center items-center font-semibold">
          Start by adding a todo
        </li>
      )}
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-8 h-[50px] 
          text-[14px] cursor-pointer border-b border-black/[8%]"
          onClick={() => {
            handleToggleTodo(todo.id);
          }}
        >
          <span
            className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}
          >
            {todo.title}
          </span>{" "}
          <DeleteButton id={todo.id} handleDeleteTodo={handleDeleteTodo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
