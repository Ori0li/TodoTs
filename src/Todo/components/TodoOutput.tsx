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
    <div className="flex justify-between">
      <FaRegCircleCheck
        className={isDone ? "text-green-300" : "text-gray-200"}
        onClick={check}
      />
      <span className={isDone ? "line-through text-gray-200 " : ""}>
        {value}
      </span>
      <IoCloseCircleOutline onClick={del} />
    </div>
  );
};

export default TodoOutput;
