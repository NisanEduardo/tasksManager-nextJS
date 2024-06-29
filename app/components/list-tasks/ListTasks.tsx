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

export const ListTasks = () => {
  const { hasLocalStorageTasks } = useLocalStorage();

  // console.log("tasks", hasLocalStorageTasks);

  const { task, tasksStoraged, showModal, setTasksStoraged, setShowModal } =
    useTaskStore();

  useEffect(() => {
    setTasksStoraged(hasLocalStorageTasks());
  }, []);

  useEffect(() => {
    localStorage.setItem("tasksDB", JSON.stringify(tasksStoraged));
    setShowModal(false);
  }, [tasksStoraged]);

  return (
    <div className="relative">
      <TasksHeading text="Tarefas a fazer" />

      {task && showModal ? <DialogCompletedTaskModal currTask={task} /> : null}

      <div className="py-8">
        <table className="w-full min-w-[500px] mt-10 rounded-lg">
          <thead className="border-gray-200 border-b">
            <tr className="">
              <th className="text-white text-xl text-left pb-5">Tarefa</th>
              <th className="min-w-[200px] pb-5">
                <a
                  href="/create"
                  className="min-w-20 flex justify-center items-center gap-2 text-white font-normal py-2 px-5 rounded-md border border-green-800 bg-green-700 hover:bg-green-600 transition-all"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  Nova Tarefa
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

      <TasksFooter />
    </div>
  );
};
