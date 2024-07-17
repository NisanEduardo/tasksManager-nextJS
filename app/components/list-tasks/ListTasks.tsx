"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { TasksHeading } from "@/app/Molecules/TasksHeading";

import { TaskProps } from "../../store/tasksStore";
import { TasksFooter } from "@/app/Molecules/TasksFooter";
import { TasksItem } from "../task-item/TaskItem";
import { useEffect, useState } from "react";

import { useTaskStore } from "../../store/tasksStore";

import { useLocalStorage } from "../../custom-hooks/useLocalStorage";
import { DialogCompletedTaskModal } from "@/app/Molecules/DialogCompletedTaskModal";
import { Pagination } from "@/app/Molecules/Pagination";

export const ListTasks = () => {
  const ITENS_PER_PAGE = 2;

  const [currPage, setCurrPage] = useState(1);

  const { hasLocalStorageTasks } = useLocalStorage();

  const { task, tasksStoraged, showModal, setTasksStoraged, setShowModal } =
    useTaskStore();

  const tasksToShowInterval = {
    start: (currPage - 1) * ITENS_PER_PAGE,
    ITENS_PER_PAGE,
  };

  if (!hasLocalStorageTasks()) return;

  const tasksPerPageList = hasLocalStorageTasks().splice(
    tasksToShowInterval.start,
    tasksToShowInterval.ITENS_PER_PAGE
  );

  useEffect(() => {
    if (!hasLocalStorageTasks) return;

    setTasksStoraged(hasLocalStorageTasks());
  }, []);

  useEffect(() => {
    localStorage.setItem("tasksDB", JSON.stringify(tasksStoraged));
    setShowModal(false);
  }, [tasksStoraged]);

  function handleChangePage(page: number) {
    setCurrPage(page);
  }

  return (
    <div className="relative">
      <TasksHeading text="Tarefas a fazer" />

      {task && showModal ? <DialogCompletedTaskModal currTask={task} /> : null}

      <div className="py-8">
        <table className="w-full min-w-[600px] mt-10 rounded-lg">
          <thead className="border-gray-200 border-b">
            <tr className="">
              <th className="text-white text-xl text-left pb-5">Tarefa</th>
              <th className="min-w-[300px] pb-5">
                <a
                  href="/create"
                  className="flex justify-center items-center gap-2 text-white font-normal py-2 px-5 rounded-md border border-green-800 bg-green-700 hover:bg-green-600 transition-all"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  Create Task
                </a>
              </th>
            </tr>
          </thead>
          <tbody className="">
            {tasksStoraged &&
              tasksPerPageList.map((task: TaskProps, index: number) => (
                <TasksItem key={`${task.name}-${index}`} task={task} />
              ))}
          </tbody>
        </table>
      </div>

      {!hasLocalStorageTasks ? null : (
        <Pagination
          totalItems={tasksStoraged.length}
          itemsPerPage={ITENS_PER_PAGE}
          currPage={currPage}
          changePage={handleChangePage}
        />
      )}

      <TasksFooter />
    </div>
  );
};
