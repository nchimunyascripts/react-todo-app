import React, { createContext, useEffect, useState } from "react";
import { Todo } from "../components/lib/types";

type TodosContextProviderProps = {
  children: React.ReactNode;
};

type TTodContext = {
  todos: Todo[];
  handleAddTodo: (todoText: string) => void;
  handleDeleteTodo: (id: number) => void;
  handleToggleTodo: (id: number) => void;
  totalNumberOfTodo: number;
  numberOfCompletedTodo: number;
};

export const TodosContext = createContext<TTodContext | null>(null);
const getInitialTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    return [];
  }
};
export default function TodosContextProvider({
  children,
}: TodosContextProviderProps) {
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);
  const totalNumberOfTodo = todos.length;
  const numberOfCompletedTodo = todos.filter((todo) => todo.isCompleted).length;
  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3) {
      alert("Login to add more todos");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          title: todoText,
          isCompleted: false,
        },
      ]);
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodosContext.Provider
      value={{
        todos,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
        totalNumberOfTodo,
        numberOfCompletedTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
