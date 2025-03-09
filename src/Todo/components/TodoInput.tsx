import { CiSquarePlus } from "react-icons/ci";

type TodoInputProps = {
  value: string;
  setValue: (value: string) => void;
  addList: (v: string) => void;
};

const TodoInput = ({ value, setValue, addList }: TodoInputProps) => {
  return (
    <div className="flex items-center w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-2 text-lg border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <CiSquarePlus
        className="text-6xl text-gray-600 cursor-pointer ml-3 p-2 hover:text-blue-600 transition-all transform hover:scale-115"
        onClick={() => {
          addList(value);
        }}
      />
    </div>
  );
};

export default TodoInput;
