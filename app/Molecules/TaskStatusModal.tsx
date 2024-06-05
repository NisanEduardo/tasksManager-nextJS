import { ActionButtom } from "../Atoms/ActionButton/ActionButtom";
import { useTaskStore } from "../store/tasksStore";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export const TaskStatusModal = () => {
  const { task, showModal, setShowModal } = useTaskStore();

  function handleClose() {
    setShowModal(false);
  }

  return (
    <div
      className={`${
        showModal ? "flex" : "hidden"
      } bg-[rgba(0,0,0,0.7)] absolute z-10 w-[100%] h-[100%] top-0 justify-center items-center`}
      id="successModal"
      data-testid="feedbackModal"
    >
      <article className="relative bg-gray-100 text-gray-600 rounded-lg pb-8 pt-11 px-5 min-w-[450px]">
        <ActionButtom
          classes="absolute border-0 text-gray-600 text-xl top-2 right-0 text-[18px] "
          text="x"
          fn={handleClose}
        >
          <FontAwesomeIcon icon={faClose} color="rgb(75,85,99)" />
        </ActionButtom>

        <header className="border-b border-b-gray-400 mb-5 text-center">
          <h2 className="font-bold text-2xl pb-2">Status da tarefa criada!</h2>
        </header>
        <footer className="text-center">
          <h3 className="text-lg text-center mb-5">{task?.name}</h3>
          <p className="font-semibold text-xl text-green-700">
            Tarefa adicionada com sucesso!
          </p>
        </footer>
      </article>
    </div>
  );
};
