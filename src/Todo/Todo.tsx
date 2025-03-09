import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoOutput from "./components/TodoOutput";
import { todoStore } from "./Stores/store";
import TodoUser from "./components/TodoUset";

const Todo = () => {
  const { todolist, addTodo, checkTodo, delTodo } = todoStore();
  const [inputValue, setInputValue] = useState<string>("");

  const clearInput = () => {
    if (inputValue) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto mt-10">
      {/* Todo User Section */}
      <TodoUser />

      {/* Input Section */}
      <div className="w-full p-4 mt-4 bg-gray-100 rounded-lg shadow-md">
        <TodoInput
          value={inputValue}
          setValue={setInputValue}
          addList={clearInput}
        />
      </div>

      {/* Todo List */}
      <div className="w-full mt-6 space-y-4 overflow-y-auto max-h-[350px]">
        {todolist.map((todo, index) => (
          <TodoOutput
            key={index}
            {...todo}
            check={() => checkTodo(index)}
            del={() => delTodo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
