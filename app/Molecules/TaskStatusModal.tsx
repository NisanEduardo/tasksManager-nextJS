import { useTaskStore } from "../store/tasksStore";
interface ITaskStatusModal {
  showModal: boolean;
}

export const TaskStatusModal = ({ showModal }: ITaskStatusModal) => {
  const { taskName } = useTaskStore();

  return (
    <div
      className={`${showModal ? "flex" : "hidden"}`}
      id="successModal"
      data-testid="feedbackModal"
    >
      <header>Status da tarefa criada!</header>
      <h2>{taskName}</h2>
      <p>Tarefa adicionada com sucesso!</p>
    </div>
  );
};
