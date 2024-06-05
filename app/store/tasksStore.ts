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
  setTasksStoraged: (task: TaskProps) => void;
  setClearTasks: () => void;
};

function isLocalTasksStoraged() {
  const storedData = localStorage.getItem("tasksDB");
  if (storedData) {
    try {
      const parsedData = JSON.parse(storedData);

      return parsedData
    } catch (error) {
      console.error(error);
    }

    return []
  }
}

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
  tasksStoraged: isLocalTasksStoraged(),
  setTasksStoraged: (task: TaskProps) =>
    set(
      (state) => {
        // const isDuplicateName = state.tasksStoraged.find((indexTask: TaskProps) => indexTask.name === task.name)

        // if (isDuplicateName !== undefined) {
        //   alert('Esta tarefa já foi criada')
        //   return { tasksStoraged: state.tasksStoraged }
        // }

        return { tasksStoraged: [...state.tasksStoraged, task] }
      }
    ),
  setClearTasks: () =>
    set(() => ({
      tasksStoraged: [],
    })),
}));
