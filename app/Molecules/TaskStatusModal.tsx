import { useTaskStore } from "../store/tasksStore";

export const TaskStatusModal = () => {
  const { taskName } = useTaskStore();

  return (
    <div id="successModal">
      <header>Status da tarefa criada!</header>
      <h2>{taskName}</h2>
      <p>Tarefa adicionada com sucesso!</p>
    </div>
  );
};
