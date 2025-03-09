import { FaRegCircleCheck } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";

export type TodoProps = {
  value: string;
  isDone: boolean;
};

type TodoEvents = {
  check: () => void;
  del: () => void;
};

const TodoOutput = ({ value, isDone, check, del }: TodoProps & TodoEvents) => {
  return (
    <div className="flex items-center justify-between p-4 mb-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
      <FaRegCircleCheck
        className={`text-2xl cursor-pointer ${
          isDone ? "text-green-500" : "text-gray-300"
        }`}
        onClick={check}
      />
      <span
        className={`ml-4 text-lg ${
          isDone ? "line-through text-gray-400" : "text-gray-700"
        }`}
      >
        {value}
      </span>
      <IoCloseCircleOutline
        className="text-2xl text-red-500 cursor-pointer hover:text-red-600"
        onClick={del}
      />
    </div>
  );
};

export default TodoOutput;
