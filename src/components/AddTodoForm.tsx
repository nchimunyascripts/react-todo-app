import { useState } from "react";
import Button from "./Button";
import { useTodoContext } from "./lib/hooks";

const AddTodoForm = () => {
  const { handleAddTodo } = useTodoContext();
  const [todoText, setTodoText] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleAddTodo(todoText);
        setTodoText("");
      }}
    >
      <h2 className="font-medium text-[#231d15]">Add to todo</h2>
      <input
        type="text"
        className="h-[45px] block border border-black/[12%] rounded-[5px] my-[9px]
      w-full px-[16px]"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <Button>Add to list</Button>
    </form>
  );
};

export default AddTodoForm;
