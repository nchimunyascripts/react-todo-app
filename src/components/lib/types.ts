export type Todo = {
  id: number;
  title: string;
  isCompleted: boolean;
};

export interface Count {
  totalNumberOfTodo: number;
  numberOfCompletedTodo: number;
}
