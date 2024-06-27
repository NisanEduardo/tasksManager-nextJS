"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionButtom } from "../Atoms/ActionButton/ActionButtom";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { TaskProps } from "../store/tasksStore";

import { useTaskStore } from "../store/tasksStore";
import { useCallback, useEffect } from "react";

interface DialogCompletedTaskModalProps {
  currTask: TaskProps;
}

export const DialogCompletedTaskModal = ({
  currTask,
}: DialogCompletedTaskModalProps) => {
  const { tasksStoraged, setTasksStoraged, setShowModal } = useTaskStore();

  const handleCompleteTask = useCallback(
    (currTask: TaskProps) => {
      if (!tasksStoraged) return;
      const updatedTask = tasksStoraged.map((item: TaskProps) =>
        item.id === currTask.id ? { ...currTask, completed: true } : item
      );
      setTasksStoraged(updatedTask);
    },
    [tasksStoraged]
  );

  return (
    <div
      data-testid="DialogCompletedTaskModalTest"
      className="bg-[rgba(0,0,0,0.7)] fixed flex z-10 w-[100vw] h-[100vh] top-0 left-0 justify-center items-center"
    >
      <article className="relative bg-gray-100 text-gray-600 rounded-lg pb-8 pt-11 px-5 min-w-[450px]">
        <ActionButtom
          classes="absolute border-0 text-gray-600 text-xl top-2 right-0 text-[18px] "
          text="x"
          fn={() => setShowModal(false)}
        >
          <FontAwesomeIcon icon={faClose} color="rgb(75,85,99)" />
        </ActionButtom>

        <header className="border-b border-b-gray-400 mb-5 text-center">
          <h2 className="font-bold text-2xl pb-2">Concluir tarefa?</h2>
        </header>

        <div className="text-center">
          <p>Deseja realmente concluir a tarefa?</p>
          <h4 className="text-green-700 text-xl font-semibold">
            {currTask.name}
          </h4>
        </div>

        <footer className="mt-5">
          <div className="flex justify-center gap-3">
            <ActionButtom
              classes="min-w-20 flex justify-center items-center gap-2 text-white font-normal py-2 px-5 rounded-md border border-green-700 bg-green-700 hover:bg-green-600 transition-all"
              text="Sim"
              fn={() => {
                handleCompleteTask(currTask);
              }}
            />

            <ActionButtom
              classes="min-w-20 flex justify-center items-center gap-2 text-gray-600 font-normal py-2 px-5 rounded-md border border-gray-300 bg-gray-300 hover:bg-gray-400 transition-all"
              text="Não"
              fn={() => setShowModal(false)}
            />
          </div>
        </footer>
      </article>
    </div>
  );
};
