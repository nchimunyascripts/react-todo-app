import { useTodoContext } from "./lib/hooks";

const Counter = () => {
  const { numberOfCompletedTodo, totalNumberOfTodo } = useTodoContext();
  return (
    <p>
      <b>{numberOfCompletedTodo}</b> / {totalNumberOfTodo} todo completed
    </p>
  );
};

export default Counter;
