import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import { TaskProps } from "../../store/tasksStore";
import { ActionButtom } from "@/app/Atoms/ActionButton/ActionButtom";

import { useTaskStore } from "../../store/tasksStore";

type CompleteTaskProps = {
  task: TaskProps;
  classes: string;
};

export const CompleteTask = ({ task, classes }: CompleteTaskProps) => {
  const [showModal, setShowModal] = useState(false);

  const { setTask, tasksStoraged, setTasksStoraged } = useTaskStore();

  function handleOpenModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleCompleteTask(currentTask: TaskProps) {
    tasksStoraged.map((task: TaskProps) => {
      if (task.id === currentTask.id)
        setTask({
          ...task,
          completed: true,
        });
    });
  }

  useEffect(() => {
    setTasksStoraged(task);
  }, [task]);

  useEffect(() => {
    localStorage.setItem("tasksDB", JSON.stringify(tasksStoraged));
  }, [tasksStoraged]);

  return (
    <span className={`${classes} text-center`}>
      <button className="handleOpenModalAction" onClick={handleOpenModal}>
        <FontAwesomeIcon icon={faClipboardCheck} color="rgba(21,128,61,1)" />
      </button>
      <section
        className={`${
          showModal === true ? "flex" : "hidden"
        } modalCompleteTask items-center justify-center fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)]`}
      >
        <div className="bg-white rounded-lg text-gray-500 relative px-5 py-10 min-w-[500px]">
          <header className="mb-5 border-b border-b-gray-300">
            <h2 className="font-bold text-2xl pb-2">Concluir tarefa</h2>
          </header>
          <div>
            <p>Deseja realmente concluir a tarefa?</p>
            <h4 className="text-green-700 text-xl font-semibold">
              {task.name}
            </h4>
          </div>
          <footer className="mt-5">
            <div className="flex justify-center gap-3">
              <ActionButtom
                classes="min-w-20 flex justify-center items-center gap-2 text-white font-normal py-2 px-5 rounded-md border border-green-700 bg-green-700 hover:bg-green-600 transition-all"
                text="Sim"
                fn={() => handleCompleteTask(task)}
              />

              <ActionButtom
                classes="min-w-20 flex justify-center items-center gap-2 text-gray-600 font-normal py-2 px-5 rounded-md border border-gray-300 bg-gray-300 hover:bg-gray-400 transition-all"
                text="Não"
                fn={() => handleCloseModal()}
              />
            </div>
          </footer>
          <ActionButtom
            classes="absolute right-0 text-gray-800 border-0 top-0"
            text="x"
            fn={() => handleCloseModal()}
          >
            <FontAwesomeIcon icon={faClose} color="rgb(75,85,99)" />
          </ActionButtom>
        </div>
      </section>
    </span>
  );
};
