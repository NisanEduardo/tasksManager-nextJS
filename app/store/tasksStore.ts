import { create } from "zustand";

export type TaskProps = {
  id: Date;
  name: string;
  completed: boolean;
};

type States = {
  taskName: string;
  task: TaskProps | null;
  tasksStoraged: TaskProps[] | never[] | any;
};

type Actions = {
  setTaskName: (name: string) => void;
  setTask: (task: TaskProps) => void;
  setTasksStoraged: (task: TaskProps) => void;
  setClearTasks: () => void;
};

export const useTaskStore = create<States & Actions>((set) => ({
  taskName: "",
  setTaskName: (name: string) =>
    set(() => ({
      taskName: name,
    })),
  task: null,
  setTask: (task: TaskProps) =>
    set(() => ({
      task: task,
    })),
  tasksStoraged: JSON.parse(localStorage.getItem("tasksDB") || ""),
  setTasksStoraged: (task: TaskProps) =>
    set((state) => ({
      tasksStoraged: [...state.tasksStoraged, task],
    })),
  setClearTasks: () =>
    set(() => ({
      tasksStoraged: [],
    })),
}));
