"use client";

import { useEffect } from "react";

import { TasksFooter } from "@/app/Molecules/TasksFooter";
import { DialogCompletedTaskModal } from "@/app/Molecules/DialogCompletedTaskModal";
import { Pagination } from "@/app/Molecules/Pagination";
import { TasksTable } from "./TasksTable";

import { useTaskStore } from "../../store/tasksStore";
import { ListTasksHeader } from "./ListTasksHeader";

export const ListTasks = () => {
  const {
    task,
    taskName,
    tasksStoraged,
    showModal,
    currTasks,
    currPage,
    setShowModal,
    setCurrTasks,
    setCurrPage,
  } = useTaskStore();

  useEffect(() => {
    localStorage.setItem("tasksDB", JSON.stringify(tasksStoraged));
    setShowModal(false);
  }, [tasksStoraged]);

  // useEffect(() => {
  //   const searchResult = () => {
  //     if (taskName !== "") {
  //       return tasksStoraged.filter(
  //         (task: TaskProps) => task.name.toLowerCase().indexOf(taskName) >= 0
  //       );
  //     }
  //   };

  //   setCurrTasks(searchResult());
  // }, [taskName]);

  return (
    <div className="relative">
      <ListTasksHeader />

      {task && showModal ? <DialogCompletedTaskModal currTask={task} /> : null}

      <div className="py-8">
        <TasksTable />
      </div>

      {!tasksStoraged ? null : <Pagination />}
      <TasksFooter />
    </div>
  );
};
