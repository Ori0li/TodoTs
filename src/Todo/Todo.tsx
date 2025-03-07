import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoOutput, { TodoProps } from "./components/TodoOutput";

const Todo = () => {
  const [todolist, setTodolist] = useState<TodoProps[]>([]);

  const addTodo = (v: string) => {
    setTodolist((prev) => {
      const newTodoArr = [...prev];
      newTodoArr.push({ value: v, isDone: false });
      return newTodoArr;
    });
  };

  const checkTodo = (i: number) => {
    setTodolist((prev) => {
      const newTodoArr = [...prev];
      newTodoArr[i].isDone = !newTodoArr[i].isDone;
      return newTodoArr;
    });
  };

  const delTodo = (i: number) => {
    setTodolist((prev) => {
      const newTodoArr = [...prev].filter((x, y) => y != i);
      return newTodoArr;
    });
  };

  return (
    <div className="w-96">
      <TodoInput addList={addTodo} />
      {todolist.map((v, i) => (
        <TodoOutput {...v} check={() => checkTodo(i)} del={() => delTodo(i)} />
      ))}
    </div>
  );
};

export default Todo;
