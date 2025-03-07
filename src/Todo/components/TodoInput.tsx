import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";

type TodoInputProps = {
  addList: (v: string) => void;
};

const TodoInput = ({ addList }: TodoInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="flex justify-between">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <CiSquarePlus
        className="text-2xl"
        onClick={() => {
          addList(inputValue);
        }}
      />
    </div>
  );
};

export default TodoInput;
