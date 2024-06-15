import { create } from "zustand";

export type TaskProps = {
  id: Date;
  name: string;
  completed: boolean;
};

type States = {
  showModal: boolean
  taskName: string;
  task: TaskProps | null;
  tasksStoraged: TaskProps[] | never[] | any;
};

type Actions = {
  setShowModal: (statement: boolean) => void
  setTaskName: (name: string) => void;
  setTask: (task: TaskProps) => void;
  setTasksStoraged: (tasks: Array<TaskProps>) => void;
  setClearTasks: () => void;
};

export const useTaskStore = create<States & Actions>((set) => ({
  showModal: false,
  setShowModal: (statement: boolean) => set(() => ({ showModal: statement })),
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
  tasksStoraged: [],
  setTasksStoraged: (tasks: TaskProps[]) => set(() => ({ tasksStoraged: tasks })),
  setClearTasks: () =>
    set(() => ({
      tasksStoraged: [],
    })),
}));
