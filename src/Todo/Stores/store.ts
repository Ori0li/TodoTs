import { create } from "zustand";

type Todo = {
  value: string;
  isDone: boolean;
};

type Store = {
  userName: string;
  setUserName: (name: string) => void;
  todolist: Todo[];
  setTodolist: (newList: Todo[]) => void;
  addTodo: (text: string) => void;
  checkTodo: (i: number) => void;
  delTodo: (i: number) => void;
};

const todoStore = create<Store>((set) => ({
  userName: "",
  setUserName: (name: string) => set({ userName: name }),

  todolist: [],
  setTodolist: (newList: Todo[]) => set({ todolist: newList }),

  addTodo: (text: string) => {
    set((state) => {
      const newTodo = { value: text, isDone: false };
      const newArr = [...state.todolist, newTodo];
      localStorage.setItem(state.userName, JSON.stringify(newArr));
      return { todolist: newArr };
    });
  },

  checkTodo: (i: number) => {
    set((state) => {
      const newArr = [...state.todolist];
      newArr[i].isDone = !newArr[i].isDone;
      localStorage.setItem(state.userName, JSON.stringify(newArr));
      return { todolist: newArr };
    });
  },

  delTodo: (i: number) => {
    set((state) => {
      const newArr = state.todolist.filter((_, index) => index !== i);
      localStorage.setItem(state.userName, JSON.stringify(newArr));
      return { todolist: newArr };
    });
  },
}));

export { todoStore };
