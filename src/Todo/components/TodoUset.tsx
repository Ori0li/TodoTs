import { useEffect } from "react";
import { todoStore } from "../Stores/store";

const TodoUser = () => {
  const { userName, setUserName, setTodolist } = todoStore();

  useEffect(() => {
    const whoRU = prompt("이름을 입력");
    if (whoRU) {
      const storedUserName = localStorage.getItem("userName");
      if (storedUserName && storedUserName === whoRU) {
        setUserName(whoRU);
        const dataList = JSON.parse(localStorage.getItem(whoRU) || "[]");
        setTodolist(dataList);
      } else {
        setUserName(whoRU);
        localStorage.setItem("userName", whoRU);
      }
    }
  }, [setUserName, setTodolist]);

  return (
    <div className="w-full p-4 mt-4 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-center">{userName}'s TodoLIST</h2>
    </div>
  );
};

export default TodoUser;
