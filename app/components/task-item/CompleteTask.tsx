import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useState } from "react";

import { TaskProps } from "../../store/tasksStore";

type CompleteTaskProps = {
  task: TaskProps;
  classes: string;
};

export const CompleteTask = ({ task, classes }: CompleteTaskProps) => {
  const [showModal, setShowModal] = useState(false);
  const [tasksDB, setTasksDB] = useState(localStorage["tasks"]);

  function handleOpenModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleCompleteTask() {
    console.log(tasksDB);
  }

  return (
    <span className={`${classes} text-center`}>
      <button className="handleOpenModalAction" onClick={handleOpenModal}>
        <FontAwesomeIcon icon={faClipboardCheck} />
      </button>
      <section
        className={`${
          showModal === true ? "flex" : "hidden"
        } modalCompleteTask items-center justify-center fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)]`}
      >
        <div className="bg-white rounded-lg">
          <header>
            <h3>Concluir Tarefa</h3>
          </header>
          <div>
            <p>Deseja realmente concluir a tarefa?</p>
            <h4>{task.name}</h4>
          </div>
          <footer>
            <div>
              <button
                onClick={() => handleCompleteTask()}
                data-testid="completeTaskYes"
              >
                Sim
              </button>
              <button onClick={handleCloseModal} data-testid="completeTaskNo">
                Não
              </button>
            </div>
          </footer>
          <button onClick={handleCloseModal}>x</button>
        </div>
      </section>
    </span>
  );
};
