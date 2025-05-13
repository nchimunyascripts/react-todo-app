type DeleteButtonProps = {
  id: number;
  handleDeleteTodo: (id: number) => void;
};

const DeleteButton = ({ id, handleDeleteTodo }: DeleteButtonProps) => {
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        handleDeleteTodo(id);
      }}
    >
      ❌
    </button>
  );
};

export default DeleteButton;
