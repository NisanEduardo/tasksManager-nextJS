import { ActionButtom } from "../Atoms/ActionButton/ActionButtom";

import { useTaskStore } from "../store/tasksStore";

export const TasksFooter = () => {
  const { setClearTasks } = useTaskStore();

  return (
    <footer className="p-5 text-center flex gap-2 justify-center">
      <ActionButtom
        classes="hover:bg-red-600 bg-red-500 border-red-600"
        fn={setClearTasks}
        text="Limpar lista de tarefas"
      />
      <button>
        <a
          href="/list"
          className=" flex-1 min-w-20 flex justify-center items-center gap-2 text-white font-normal py-2 px-5 rounded-md border border-gray-800 bg-gray-700 hover:bg-gray-600 transition-all"
        >
          Show Tasks
        </a>
      </button>
    </footer>
  );
};
