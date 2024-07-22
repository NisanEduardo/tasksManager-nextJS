"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSort } from "@fortawesome/free-solid-svg-icons";
import { TasksHeading } from "@/app/Molecules/TasksHeading";

import { TaskProps } from "../../store/tasksStore";
import { TasksFooter } from "@/app/Molecules/TasksFooter";
import { TasksItem } from "../task-item/TaskItem";
import { useCallback, useEffect, useState } from "react";

import { useTaskStore } from "../../store/tasksStore";

import { useLocalStorage } from "../../custom-hooks/useLocalStorage";
import { DialogCompletedTaskModal } from "@/app/Molecules/DialogCompletedTaskModal";
import { Pagination } from "@/app/Molecules/Pagination";

export const ListTasks = () => {
  const ITEMS_PER_PAGE = 10;

  const { task, tasksStoraged, showModal, setTasksStoraged, setShowModal } =
    useTaskStore();
  const [currPage, setCurrPage] = useState(1);

  const { hasLocalStorageTasks } = useLocalStorage();

  useEffect(() => {
    if (!hasLocalStorageTasks) return;

    setTasksStoraged(hasLocalStorageTasks());
  }, []);

  useEffect(() => {}, [tasksStoraged]);

  // const tasksToShowInterval = {
  //   start: (currPage - 1) * ITEMS_PER_PAGE,
  //   ITEMS_PER_PAGE,
  // };

  // const tasksPerPageList = hasLocalStorageTasks().splice(
  //   tasksToShowInterval.start,
  //   tasksToShowInterval.ITEMS_PER_PAGE
  // );

  // useEffect(() => {
  //   localStorage.setItem("tasksDB", JSON.stringify(tasksStoraged));
  //   setShowModal(false);
  // }, [tasksStoraged]);

  // function handleChangePage(page: number) {
  //   setCurrPage(page);
  // }

  const handleSortTasks = useCallback(() => {
    const sortedTasksStoraged = tasksStoraged.sort(
      (a: TaskProps, b: TaskProps) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return -1;
        }
      }
    );

    setTasksStoraged(sortedTasksStoraged);
  }, [tasksStoraged]);

  return (
    <div className="relative">
      <button
        type="button"
        className="text-center w-full hover:opacity-70 transition flex gap-5 items-center justify-center"
        onClick={() => {
          handleSortTasks();
        }}
      >
        <TasksHeading text="Tarefas a fazer" />
        <FontAwesomeIcon
          icon={faSort}
          className="flex justify-center items-center"
        />
      </button>

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
              tasksStoraged.map((task: TaskProps, index: number) => (
                <TasksItem key={`${task.name}-${index}`} task={task} />
              ))}
          </tbody>
        </table>
      </div>
      {/* 
      {!hasLocalStorageTasks ? null : (
        // <Pagination
        //   totalItems={tasksStoraged.length}
        //   itemsPerPage={ITEMS_PER_PAGE}
        //   currPage={currPage}
        //   // changePage={handleChangePage}
        // />
      )} */}

      <TasksFooter />
    </div>
  );
};
