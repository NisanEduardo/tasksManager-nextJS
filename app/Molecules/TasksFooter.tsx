import { ActionButtom } from "../Atoms/ActionButton/ActionButtom";

import { useTaskStore } from "../store/tasksStore";

export const TasksFooter = () => {
  const { setClearTasks } = useTaskStore();

  return (
    <footer className="p-5 text-center">
      <ActionButtom
        classes="hover:bg-red-600 bg-red-500 border-red-600"
        fn={setClearTasks}
        text="Limpar lista de tarefas"
      />
    </footer>
  );
};
