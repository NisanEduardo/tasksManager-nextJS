import { useTasks } from "../custom-hooks/useTasks";
import { ActionButtom } from "../Atoms/ActionButton/ActionButtom";
import { useTaskStore } from "../store/tasksStore";

export const CreateTaskForm = () => {
  const { createTask } = useTasks();
  const { taskName, setShowModal, setTaskName } = useTaskStore();

  function handleTaskInput(event: React.FormEvent<HTMLInputElement>) {
    let inputValue = event.currentTarget.value;
    setTaskName(inputValue);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    createTask(taskName);
    setShowModal(true);
  }

  return (
    <form
      action=""
      className="flex justify-between gap-1"
      onSubmit={handleSubmit}
      data-testid="createTaskForm"
      name="createTaskForm"
    >
      <input
        className="border text-gray-500 b-gray-400 rounded-lg p-2 min-w-[500px] place"
        type="text"
        name="tarefa"
        id="tarefa"
        minLength={5}
        maxLength={100}
        placeholder="Digite o nome da tarefa"
        value={taskName}
        onChange={handleTaskInput}
        required
      />
      <ActionButtom
        type="submit"
        classes="bg-green-600 border-green-700 hover:bg-green-700"
        text="Cadastrar"
      />
    </form>
  );
};
